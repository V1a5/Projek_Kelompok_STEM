"use client";

import { useState } from 'react';
import SearchBar from '@/src/components/list/SearchBar';
import SidebarFilter from '@/src/components/list/SidebarFilter';
import ListCard from '@/src/components/list/ListCard';
import Pagination from '@/src/components/list/Pagination';

// Import JSON data
import companiesData from '@/src/data/companies.json';

export default function CompanyListPage() {
  // --- STATE MANAGEMENT ---
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter state (array of string for multi-select, string for single-select)
  const [selectedServices, setSelectedServices] = useState<string[]>([]); 
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState(''); // Radio button
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // --- SEARCH & FILTER ---
  const filteredCompanies = companiesData.filter((company) => {
    // Search bar filter
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Services filter
    const matchesService = selectedServices.length === 0 || 
      company.services.some(service => selectedServices.includes(service));
      
    // Audiences filter
    const matchesAudience = selectedAudiences.length === 0 || 
      company.audiences.some(audience => selectedAudiences.includes(audience));

    // Price filter
    const matchesPrice = selectedPrice === '' || company.priceCategory === selectedPrice;

    return matchesSearch && matchesService && matchesAudience && matchesPrice;
  });

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, endIndex);

  // If the filter results change the total number of pages, prevent the currentPage from getting "stuck" on a blank page
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Title */}
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Daftar Perusahaan Penyedia Layanan<br />Sanitasi Area Jabodetabek
          </h1>
        </div>

        {/* Search Bar */}
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filter */}
          <SidebarFilter 
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            selectedAudiences={selectedAudiences}
            setSelectedAudiences={setSelectedAudiences}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />

          {/* ListCard Column */}
          <div className="w-full md:w-3/4 flex flex-col gap-6">
            
            {/* Show message if result is empty */}
            {paginatedCompanies.length === 0 ? (
              <div className="bg-white p-8 text-center rounded-xl border border-gray-200">
                <p className="text-gray-500">Tidak ada perusahaan yang sesuai dengan pencarian atau filter Anda.</p>
              </div>
            ) : (
              // Mapping filtered and paginated result
              paginatedCompanies.map((company) => (
                <ListCard 
                  key={company.id} 
                  company={{
                    ...company,
                    // Format array to string
                    audiences: company.audiences.join(' · '),
                    price: company.priceDisplay,
                    tags: company.services
                  }} 
                />
              ))
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}