export default function Portfolio() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Portfolio
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Explore our latest 3D printing projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Custom Product Prototype",
    description: "Rapid prototyping for a consumer electronics product",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3",
  },
  {
    title: "Architectural Model",
    description:
      "Detailed 3D printed architectural model for client presentation",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3",
  },
  {
    title: "Medical Device Component",
    description: "High-precision medical device prototype",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df7d?ixlib=rb-4.0.3",
  },
  {
    title: "Custom Art Installation",
    description: "3D printed art piece for public display",
    image:
      "https://images.unsplash.com/photo-1557720667-093b45dde7b9?ixlib=rb-4.0.3",
  },
  {
    title: "Industrial Parts",
    description: "Custom manufacturing of replacement parts",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3",
  },
  {
    title: "Design Concept Model",
    description: "Physical model for design validation",
    image:
      "https://images.unsplash.com/photo-1581092160607-7685d38a4d0c?ixlib=rb-4.0.3",
  },
];
