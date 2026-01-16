import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent dark:from-gray-950/90 dark:via-gray-950/60 dark:to-transparent z-10"></div>
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://ab2bbkrtuubturud.public.blob.vercel-storage.com/product_images/1768553010862-6qjtg4v-IMG_20260116_140740.jpg"
            // src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?auto=format&fit=crop&w=2070&q=80"
            alt="3D Printing and Architecture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              3D Printing for Modern Architecture
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Revolutionary 3D printing solutions for architectural models,
              prototypes, and functional components with precision and
              innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="https://estimator.div-arch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Start Your Project
              </Link>
              <a
                href="/products"
                className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm font-medium"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced 3D printing solutions for architectural excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Estimator Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Print Your Custom STL Files
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Have your own 3D models? Get instant pricing for your STL files
                using our advanced price estimator.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-orange-600 dark:text-orange-500 mr-3"
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
                  <span className="text-gray-700 dark:text-gray-300">
                    Upload your STL files
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-orange-600 dark:text-orange-500 mr-3"
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
                  <span className="text-gray-700 dark:text-gray-300">
                    Get instant price estimates
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-orange-600 dark:text-orange-500 mr-3"
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
                  <span className="text-gray-700 dark:text-gray-300">
                    Choose from multiple materials
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://estimator.div-arch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Calculate Price
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://k8rxgtoiutiza1zk.public.blob.vercel-storage.com/divarch-studio/custom3d.jpg"
                  alt="3D Printing Custom Files"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-500 mb-1">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Instant Pricing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Div-Arch Studio?
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mt-1">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://k8rxgtoiutiza1zk.public.blob.vercel-storage.com/divarch-studio/whyshouldchoose.jpg"
                  alt="3D Printing Process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-500 mb-1">
                  3+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Choose Your 3D Printing Path
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you have your own design or need one of our products,
              we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Print Your Design</h3>
              <p className="text-gray-300 mb-6">
                Have your own STL files? Get instant pricing and bring your
                design to life with our professional 3D printing service.
              </p>
              <a
                href="https://estimator.alphasquare.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Calculate Price
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="flex flex-col bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="bg-orange-600/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Browse Our Products</h3>
              <p className="text-gray-300 mb-6">
                Explore our collection of ready-to-print 3D models designed for
                quality and functionality.
              </p>
              <Link
                to="/products"
                className="inline-flex w-fit items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                View Products
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "3D Model Printing",
    description:
      "High-precision architectural model printing with detailed finishing and premium materials.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 3v4a1 1 0 001 1h4M5 8v12a1 1 0 001 1h12a1 1 0 001-1V8M5 8l7-5 7 5M10 21v-5a1 1 0 011-1h2a1 1 0 011 1v5"
        />
      </svg>
    ),
  },
  {
    title: "Rapid Prototyping",
    description:
      "Quick turnaround prototypes for architectural components and design validation.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-600"
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
    ),
  },
  {
    title: "Custom Components",
    description:
      "Specialized 3D printing for unique architectural elements and custom fixtures.",
    icon: (
      <svg
        className="w-6 h-6 text-orange-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Advanced Technology",
    description:
      "State-of-the-art 3D printers and materials for exceptional quality and precision.",
    icon: (
      <svg
        className="w-5 h-5 text-orange-600 dark:text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Rapid Turnaround",
    description:
      "Quick production times and efficient processes to meet your project deadlines.",
    icon: (
      <svg
        className="w-5 h-5 text-orange-600 dark:text-orange-500"
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
    ),
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored 3D printing services for unique architectural requirements and specifications.",
    icon: (
      <svg
        className="w-5 h-5 text-orange-600 dark:text-orange-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];
