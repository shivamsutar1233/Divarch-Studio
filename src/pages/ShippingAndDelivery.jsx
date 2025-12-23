import PageLayout from "../components/PageLayout";

export default function ShippingAndDelivery() {
  return (
    <PageLayout
      title="Shipping & Delivery"
      description="Information about our shipping options, delivery times, and tracking"
    >
      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Processing Time
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-6">
              <p className="text-blue-800 dark:text-blue-100">
                We aim to process and dispatch orders within{" "}
                <strong>1–2 business days</strong>. Delivery times vary based on
                your location and chosen shipping method.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Shipping Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Standard Shipping */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Standard
                </h3>
                <span className="px-3 py-1 text-sm text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 rounded-full">
                  Most Popular
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                5-9 days
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Best for non-urgent deliveries
              </p>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Tracking included
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Cost-effective
                </li>
              </ul>
            </div>

            {/* Expedited Shipping */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Expedited
                </h3>
                <span className="px-3 py-1 text-sm text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  Fast
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                2-4 days
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Faster delivery times
              </p>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Priority handling
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Real-time tracking
                </li>
              </ul>
            </div>

            {/* Overnight Shipping */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Overnight
                </h3>
                <span className="px-3 py-1 text-sm text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  Premium
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Next Day
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Selected areas only
              </p>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Next-day delivery
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Premium service
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Order Tracking
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                After your order is dispatched, you'll receive:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-500 dark:text-blue-400 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">
                    Confirmation email with tracking number
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-500 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">
                    Link to carrier's tracking page
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              International Shipping
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                We ship to select countries worldwide. Please note:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">
                    Additional customs fees may apply
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-yellow-500 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-400">
                    Delivery times may be longer
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800/50 rounded-lg border dark:border-gray-700 p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-blue-500 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Need Help?
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                For shipping inquiries, contact us at{" "}
                <a
                  href="mailto:support@div-arch.in"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  support@div-arch.in
                </a>{" "}
                with your order number.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
