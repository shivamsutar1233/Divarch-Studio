import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      );

      if (result.text === "OK") {
        setStatus("Message sent successfully! We'll get back to you soon.");
        form.current.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Have questions or feedback? Fill out the form below or reach us at
          <span className="ml-1 font-medium"> support@div-arch.com</span>.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="from_name"
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="reply_to"
              type="email"
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-1 block w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <span
                className={`ml-3 text-sm ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {status}
              </span>
            )}
          </div>
        </form>

        <aside className="p-6 bg-gray-50 rounded-md border">
          <h3 className="text-lg font-semibold mb-2">Other ways to reach us</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>
              <strong>Email:</strong> support@div-arch.in
            </li>
            <li>
              <strong>Phone:</strong> {import.meta.env.VITE_CONTACT_NUMBER}
            </li>
            <li>
              <strong>Office:</strong> Akluj, Solapur, India
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-1">Business hours</h4>
            <p className="text-sm text-gray-600">
              Mon–Fri, 9:00 AM — 6:00 PM (IST)
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
