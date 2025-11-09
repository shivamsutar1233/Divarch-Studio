import PageLayout from "../components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Our commitment to protecting your privacy and personal information"
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Introduction
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 space-y-4">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              At Div-Arch Studio, protecting your privacy is a top priority.
              This policy outlines our practices regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Collection and use of personal information</li>
              <li>Protection of your data</li>
              <li>Your privacy rights and choices</li>
              <li>Our commitment to transparency</li>
            </ul>
          </div>
        </section>

        {/* Information Collection Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Information We Collect
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Name and contact details</li>
                <li>Shipping and billing addresses</li>
                <li>Order history and preferences</li>
                <li>Payment information (securely processed)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Technical Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Website usage patterns</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Usage Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            How We Use Your Data
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Essential Uses
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Processing your orders and payments</li>
                  <li>Delivering products to you</li>
                  <li>Providing customer support</li>
                  <li>Sending order updates and notifications</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Service Improvement
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Analyzing site usage patterns</li>
                  <li>Improving user experience</li>
                  <li>Personalizing your experience</li>
                  <li>Maintaining security</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Note: We will always ask for your consent before using your data
                for any purpose beyond these essential functions.
              </p>
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Data Protection
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Security Measures
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Secure SSL encryption for data transmission</li>
                  <li>Regular security assessments</li>
                  <li>Restricted access to personal information</li>
                  <li>Secure data storage systems</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Data Sharing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We only share your data with trusted partners necessary for
                  our operations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Payment processors for secure transactions</li>
                  <li>Shipping carriers for order delivery</li>
                  <li>Service providers for website functionality</li>
                </ul>
                <div className="bg-orange-50 dark:bg-orange-900/50 border border-orange-100 dark:border-orange-800 rounded-lg p-4 mt-4">
                  <p className="text-sm text-orange-800 dark:text-orange-200 font-medium">
                    We never sell your personal information to third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Your Rights
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Access Rights
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>View your personal data</li>
                    <li>Request data corrections</li>
                    <li>Download your information</li>
                    <li>Delete your account</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Control Rights
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>Opt-out of marketing</li>
                    <li>Restrict data processing</li>
                    <li>Withdraw consent</li>
                    <li>File a complaint</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/50 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  To exercise any of these rights, please contact our Privacy
                  Team at{" "}
                  <a
                    href="mailto:privacy@div-arch.in"
                    className="font-medium underline hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    privacy@div-arch.in
                  </a>{" "}
                  or via WhatsApp at{" "}
                  <a
                    href={`https://wa.me/${
                      import.meta.env.VITE_WHATSAPP_NUMBER
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {import.meta.env.VITE_WHATSAPP_NUMBER}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Updates Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Policy Updates
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We may update this privacy policy from time to time to reflect
                changes in our practices or for legal requirements. We will
                notify you of any material changes through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Email notifications</li>
                <li>Website announcements</li>
                <li>App notifications (if applicable)</li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Last updated: November 8, 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
