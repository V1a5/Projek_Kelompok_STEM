interface CompanyInfoProps {
  name: string;
  priceRange: string;
  description: string;
  services: string[];
  audiences: string[];
  website?: string[];
}

export default function CompanyInfo({
  name,
  priceRange,
  description,
  services,
  audiences,
  website,
}: CompanyInfoProps) {
  return (
    <div className="w-full md:w-1/2 flex flex-col pt-4">
      {/* Header Info */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-2xl text-teal-600 font-semibold mb-8">{priceRange}</p>

      <hr className="border-t border-dashed border-gray-300 mb-8" />

      {/* Description */}
      <div className="mb-10">
        <h3 className="font-bold text-gray-800 mb-3 text-lg">Deskripsi:</h3>
        <p className="text-gray-500 leading-relaxed text-justify">
          {description}
        </p>
      </div>

      {/* Detailed Specs */}
      <div className="flex flex-col gap-5 mb-12">
        <div className="flex items-start">
          <span className="w-36 text-gray-400 font-medium">Layanan:</span>
          <span className="flex-1 font-semibold text-gray-700">
            {Array.isArray(services) ? services.join(", ") : services || "-"}
          </span>
        </div>
        <div className="flex items-start">
          <span className="w-36 text-gray-400 font-medium">
            Target Audiens:
          </span>
          <span className="flex-1 font-semibold text-gray-700">
            {Array.isArray(audiences) ? audiences.join(", ") : audiences || "-"}
          </span>
        </div>
      </div>

      {/* Contact Us */}
      <div className="mt-auto">
        {website && website.length > 0 ? (
          <a
            href={website[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-teal-100 w-full md:w-auto text-center"
          >
            Hubungi Kami
          </a>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center bg-gray-300 text-gray-500 px-8 py-4 rounded-2xl font-bold text-sm w-full md:w-auto cursor-not-allowed text-center"
          >
            Website Tidak Tersedia
          </button>
        )}
      </div>
    </div>
  );
}
