export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-600 border-t-transparent mb-4 mx-auto"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
