export default function PageLayout({ title, description, children }) {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        {description && <p className="text-lg text-gray-600">{description}</p>}
      </header>
      <div className="prose max-w-none">{children}</div>
    </div>
  );
}
