import Link from 'next/link';

interface Company {
  id: string;
  name: string;
  logo?: string;
  tags: string[];
  audiences: string;
  price: string;
}

export default function ListCard({ company }: { company: Company }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 transition-all hover:shadow-md">
      {/* Logo Area */}
      <div className="w-full md:w-1/3 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-6 shadow-inner">
        <img src={company.logo || "/paljaya-logo.png"} alt={company.name} className="max-h-20 object-contain" />
      </div>
      
      {/* Info Area */}
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-medium text-gray-800 mb-4">{company.name}</h2>
          <div className="flex flex-wrap gap-2 mb-3">
            {company.tags.map((tag, idx) => (
              <span key={idx} className="bg-accent text-white text-xs px-3 py-1 rounded-md font-medium">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-400">{company.audiences}</p>
        </div>
        
        <div className="flex justify-between items-end mt-6">
          <Link href={`/companies/${company.id}`} className="font-semibold text-gray-700 hover:text-accent transition-colors">
            Lihat selengkapnya
          </Link>
          <div className="text-right">
            <p className="text-xs md:text-sm text-gray-800 font-medium mb-1">Mulai dari</p>
            <p className="text-lg font-semibold text-gray-900">{company.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}