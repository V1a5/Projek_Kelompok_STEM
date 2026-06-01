import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[var(--color-primary-200)] shadow-md">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Logo
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link 
          href="/company" 
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          Companies
        </Link>
        <Link 
          href="/laporan" 
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          Laporan
        </Link>
      </div>
    </nav>
  );
}
