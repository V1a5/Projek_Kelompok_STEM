import Link from "next/link";
import {
  PiHouseFill,
  PiBuildingsFill,
  PiWarningCircleFill,
} from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="logo/uniflow.png" alt="" className="w-10 h-10"/>
          <span className="text-2xl font-black text-gray-800 tracking-tight">
            Uni<span className="text-teal-600">Flow</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-teal-600 font-bold flex items-center gap-2 transition-colors"
          >
            <PiHouseFill size={20} /> Home
          </Link>
          <Link
            href="/companies"
            className="text-gray-600 hover:text-teal-600 font-bold flex items-center gap-2 transition-colors"
          >
            <PiBuildingsFill size={20} /> Direktori Mitra
          </Link>
        </div>

        <Link
          href="/report"
          className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all active:scale-95 shadow-sm flex items-center gap-2"
        >
          <PiWarningCircleFill size={18} />
          Buat Laporan
        </Link>
      </div>
    </nav>
  );
}
