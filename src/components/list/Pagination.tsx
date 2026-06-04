import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Array of total page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8">
      <nav className="flex gap-1">
        {/* Back */}
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border border-gray-200 bg-white text-sm rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
        >
          <PiCaretLeftBold/>
          Back
        </button>

        {/* Page numbers */}
        {pageNumbers.map(number => (
          <button 
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 border text-sm rounded-md transition-colors ${
              currentPage === number 
                ? 'border-accent bg-accent text-white font-medium' 
                : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        ))}

        {/* Next */}
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border border-gray-200 bg-white text-sm rounded-md text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
        >
          Next
          <PiCaretRightBold/>
        </button>
      </nav>
    </div>
  );
}