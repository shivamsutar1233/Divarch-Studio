export default function Pricing() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Pricing
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Transparent pricing for all your 3D printing needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 ${
              plan.popular
                ? "bg-orange-50 dark:bg-orange-900/30 border-2 border-orange-500 relative"
                : "bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  /project
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? "bg-orange-500 dark:bg-orange-600 text-white hover:bg-orange-600 dark:hover:bg-orange-700"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const plans = [
  {
    name: "Basic",
    description: "Perfect for small projects",
    price: 99,
    popular: false,
    features: [
      "Basic 3D modeling",
      "Standard materials",
      "5-7 day turnaround",
      "1 revision included",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "Ideal for businesses",
    price: 199,
    popular: true,
    features: [
      "Advanced 3D modeling",
      "Premium materials",
      "3-5 day turnaround",
      "3 revisions included",
      "Priority support",
      "Design consultation",
    ],
  },
  {
    name: "Enterprise",
    description: "For large scale projects",
    price: 499,
    popular: false,
    features: [
      "Complex 3D modeling",
      "Custom materials",
      "1-2 day turnaround",
      "Unlimited revisions",
      "24/7 support",
      "Project manager",
      "Full documentation",
    ],
  },
];
