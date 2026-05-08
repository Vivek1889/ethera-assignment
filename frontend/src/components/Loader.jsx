export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <div className="absolute w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
