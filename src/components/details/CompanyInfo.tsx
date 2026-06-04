interface CompanyInfoProps {
  name: string;
  priceRange: string;
  description: string;
  services: string;
  areas: string;
}

export default function CompanyInfo({ name, priceRange, description, services, areas }: CompanyInfoProps) {
  return (
    <div className="w-full md:w-1/2 flex flex-col pt-4">
      {/* Header Info */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-2xl text-gray-700 font-medium mb-8">{priceRange}</p>
      
      <hr className="border-t border-dashed border-gray-300 mb-8" />
      
      {/* Description */}
      <div className="mb-10">
        <h3 className="font-bold text-gray-800 mb-3 text-lg">Deskripsi:</h3>
        <p className="text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Detailed Specs */}
      <div className="flex flex-col gap-5 mb-12">
        <div className="flex items-start">
          <span className="w-32 text-gray-400 font-medium">Layanan:</span>
          <span className="flex-1 font-semibold text-gray-700">{services}</span>
        </div>
        <div className="flex items-start">
          <span className="w-32 text-gray-400 font-medium">Area:</span>
          <span className="flex-1 font-semibold text-gray-700">{areas}</span>
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <button className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-accent/20 transition-all active:scale-95">
          Kontak Kami
        </button>
      </div>
    </div>
  );
}