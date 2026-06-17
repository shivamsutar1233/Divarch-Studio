import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description: "Information about our shipping options, delivery times, and tracking.",
};

const CheckIcon = () => (
  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ShippingAndDeliveryPage() {
  return (
    <PageLayout
      title="Shipping & Delivery"
      description="Information about our shipping options, delivery times, and tracking"
    >
      <div className="space-y-8">
        {/* Processing Time */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Processing Time
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
              <p className="text-blue-800 dark:text-blue-100">
                We aim to process and dispatch orders within{" "}
                <strong>1–2 business days</strong>. Delivery times vary based on
                your location and chosen shipping method.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Shipping Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Standard", badge: "Most Popular", badgeColor: "text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30", time: "5-9 days", desc: "Best for non-urgent deliveries", features: ["Tracking included", "Cost-effective"] },
              { name: "Expedited", badge: "Fast", badgeColor: "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30", time: "2-4 days", desc: "Faster delivery times", features: ["Priority handling", "Real-time tracking"] },
              { name: "Overnight", badge: "Premium", badgeColor: "text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30", time: "Next Day", desc: "Selected areas only", features: ["Next-day delivery", "Premium service"] },
            ].map((option) => (
              <div key={option.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{option.name}</h3>
                  <span className={`px-3 py-1 text-sm rounded-full ${option.badgeColor}`}>{option.badge}</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{option.time}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{option.desc}</p>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  {option.features.map((f) => (
                    <li key={f} className="flex items-center"><CheckIcon />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Order Tracking & International */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Order Tracking</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">After your order is dispatched, you&apos;ll receive:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 dark:text-blue-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">Confirmation email with tracking number</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 dark:text-blue-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">Link to carrier&apos;s tracking page</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">International Shipping</h2>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">We ship to select countries worldwide. Please note:</p>
              <ul className="space-y-3">
                {["Additional customs fees may apply", "Delivery times may be longer"].map((note) => (
                  <li key={note} className="flex items-start">
                    <svg className="h-6 w-6 text-yellow-500 dark:text-yellow-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Help */}
        <section className="bg-gray-50 dark:bg-gray-800/50 rounded-lg border dark:border-gray-700 p-6">
          <div className="flex items-start space-x-4">
            <svg className="h-8 w-8 text-blue-500 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Need Help?</h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                For shipping inquiries, contact us at{" "}
                <a href="mailto:support@div-arch.in" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
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
