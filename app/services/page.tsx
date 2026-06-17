import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional 3D printing services including custom modeling, rapid prototyping, industrial parts, and architectural models.",
};

const services = [
  {
    icon: "🎨",
    title: "Custom 3D Modeling",
    description:
      "Professional 3D modeling services to bring your ideas to life with precision and creativity.",
  },
  {
    icon: "🖨️",
    title: "Rapid Prototyping",
    description:
      "Quick turnaround prototyping services for product development and testing.",
  },
  {
    icon: "⚙️",
    title: "Industrial Parts",
    description:
      "Manufacturing of industrial parts and components with high accuracy and durability.",
  },
  {
    icon: "🎮",
    title: "Product Design",
    description:
      "End-to-end product design services from concept to final production.",
  },
  {
    icon: "🔧",
    title: "Functional Prototypes",
    description:
      "Creation of working prototypes for testing and validation purposes.",
  },
  {
    icon: "📐",
    title: "Architectural Models",
    description:
      "Detailed architectural models and presentations for your projects.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our 3D Printing Services
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Professional 3D printing solutions for your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700"
          >
            <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl text-orange-600 dark:text-orange-400">
                {service.icon}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
