"use client";

import type { Metadata } from "next";
import { useState, useRef } from "react";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);
    setStatus("Sending...");

    const formData = new FormData(form.current);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from_name: formData.get("from_name"),
          reply_to: formData.get("reply_to"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("Message sent successfully! We'll get back to you soon.");
        form.current.reset();
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold dark:text-white">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Have questions or feedback? Fill out the form below or reach us at{" "}
          <span className="ml-1 font-medium dark:text-gray-300">
            support@div-arch.com
          </span>
          .
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium dark:text-gray-300">
              Name
            </label>
            <input
              name="from_name"
              required
              className="mt-1 block w-full rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-300">
              Email
            </label>
            <input
              name="reply_to"
              type="email"
              required
              className="mt-1 block w-full rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 block w-full rounded-md border dark:border-gray-600 dark:bg-gray-800 dark:text-white px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-4 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <span
                className={`ml-3 text-sm ${
                  status.includes("successfully")
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {status}
              </span>
            )}
          </div>
        </form>

        <aside className="p-6 bg-gray-50 dark:bg-gray-800 rounded-md border dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">
            Other ways to reach us
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong className="dark:text-white">Email:</strong>{" "}
              <a
                href="mailto:privacy@div-arch.in"
                className="font-medium underline hover:text-orange-600 dark:hover:text-orange-400"
              >
                privacy@div-arch.in
              </a>
            </li>
            {WHATSAPP_NUMBER && (
              <li>
                <strong className="dark:text-white">Phone:</strong>{" "}
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="font-medium underline hover:text-orange-600 dark:hover:text-orange-400"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </li>
            )}
            <li>
              <strong className="dark:text-white">Office:</strong> Akluj,
              Solapur, India
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-1 dark:text-white">
              Business hours
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mon–Fri, 9:00 AM — 6:00 PM (IST)
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
