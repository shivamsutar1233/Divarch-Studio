import Link from "next/link";

export default function Footer() {
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              Company
            </h3>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              Customer Service
            </h3>
            <div className="space-y-2">
              <Link
                href="/shipping-and-delivery"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Shipping &amp; Delivery
              </Link>
              <Link
                href="/cancellation-and-refund"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Cancellation &amp; Refund
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              Legal
            </h3>
            <div className="space-y-2">
              <Link
                href="/terms-and-conditions"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
              Follow Us
            </h3>
            <div className="space-y-2">
              <a
                href="https://www.instagram.com/divarch_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              >
                Instagram
              </a>
              {WHATSAPP_NUMBER && (
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Div-Arch Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
