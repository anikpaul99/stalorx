import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl font-black">
              S
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black">StalorX</div>
              <div className="text-[10px] sm:text-xs text-purple-300">
                Software Solutions
              </div>
            </div>
          </Link>
          <div className="text-gray-400 text-xs sm:text-sm text-center">
            © 2026 StalorX. Crafted with 💜 in Bangladesh
          </div>
          <div className="flex gap-4 sm:gap-6 text-sm">
            <Link
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
