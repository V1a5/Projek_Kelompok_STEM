import { PiCaretLeftBold } from 'react-icons/pi';
import Link from 'next/link';
import ImageGallery from '@/src/components/details/ImageGallery';
import CompanyInfo from '@/src/components/details/CompanyInfo';
import companiesData from '@/src/data/companies.json';

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const company = companiesData.find(c => c.id === id);
  
  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-600 mb-4">
            Perusahaan tidak ditemukan
          </h1>
          <Link href="/companies" className="text-accent hover:underline">
            Kembali ke daftar perusahaan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      
      {/* Back to company list */}
      <div className="max-w-6xl w-full mb-6">
        <Link 
          href="/companies" 
          className="inline-flex items-center text-gray-500 hover:text-accent font-medium transition-colors"
        >
          <PiCaretLeftBold/>
          Kembali ke Daftar Perusahaan
        </Link>
      </div>

      <div className="max-w-6xl w-full bg-white md:bg-transparent md:shadow-none p-8 md:p-0 rounded-3xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <ImageGallery 
            logo={company.logo} 
            thumbnails={company.thumbnails} 
          />

          <CompanyInfo 
            name={company.name}
            priceRange={company.priceRange}
            description={company.description}
            services={company.services.join(', ')}
            areas={company.audiences.join(', ')}
          />
          
        </div>
      </div>
    </div>
  );
}