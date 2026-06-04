import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative w-full max-w-2xl flex items-center border border-gray-300 rounded-full bg-white overflow-hidden shadow-sm">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari perusahaan sanitasi"
          className="w-full px-6 py-3 border-none focus:ring-0 outline-none text-black text-sm md:text-base bg-transparent"
        />
        <button className="bg-yellow-400 p-3 m-1 rounded-full text-white hover:bg-yellow-500 transition-colors">
          <FaSearch/>
        </button>
      </div>
    </div>
  );
}