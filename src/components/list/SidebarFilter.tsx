import React from 'react';

type SidebarFilterProps = {
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAudiences: string[];
  setSelectedAudiences: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPrice: string;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string>>;
};

export default function SidebarFilter({ 
  selectedServices, setSelectedServices, 
  selectedAudiences, setSelectedAudiences, 
  selectedPrice, setSelectedPrice 
}: SidebarFilterProps) {
  
  const servicesList = ['Septic tank', 'Instalasi perpipaan', 'Sedot WC'];
  const audienceList = ['Rumah tangga', 'Industri', 'Komunitas'];
  const priceList = ['Gratis', 'Berbayar', 'Harga terendah'];

  // Toggle checkbox helper function
  const handleCheckboxChange = (item: string, selectedList: string[], setListFunction: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedList.includes(item)) {
      setListFunction(selectedList.filter(i => i !== item));
    } else {
      setListFunction([...selectedList, item]);
    }
  };

  return (
    <div className="w-full md:w-1/4 flex flex-col gap-6">
      {/* Services */}
      <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-sm text-gray-400 mb-3 font-medium">Jenis Layanan</h3>
        <div className="flex flex-col gap-3">
          {servicesList.map((item) => (
            <label key={item} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedServices.includes(item)}
                onChange={() => handleCheckboxChange(item, selectedServices, setSelectedServices)}
                className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" 
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Audiences */}
      <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-sm text-gray-400 mb-3 font-medium">Audiens</h3>
        <div className="flex flex-col gap-3">
          {audienceList.map((item) => (
            <label key={item} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedAudiences.includes(item)}
                onChange={() => handleCheckboxChange(item, selectedAudiences, setSelectedAudiences)}
                className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" 
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-sm text-gray-400 mb-3 font-medium">Harga</h3>
        <div className="flex flex-col gap-3">
          {/* Reset filter */}
          <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
              <input 
                type="radio" 
                name="harga" 
                checked={selectedPrice === ''}
                onChange={() => setSelectedPrice('')}
                className="w-4 h-4 border-gray-300 text-teal-600" 
              />
              Semua Harga
          </label>
          
          {priceList.map((item) => (
            <label key={item} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
              <input 
                type="radio" 
                name="harga"
                checked={selectedPrice === item}
                onChange={() => setSelectedPrice(item)}
                className="w-4 h-4 border-gray-300 text-teal-600 focus:ring-teal-500" 
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}