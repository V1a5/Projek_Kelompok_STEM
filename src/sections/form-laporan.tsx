import Dropzone from "../components/upload-dropzone";

export default function FormLapor() {
  return (
    <div className="flex justify-center bg-[var(--background)] font-sans">
      <main className="flex flex-1 flex-col items-center justify-center py-16">
        <h1 className="text-3xl font-bold text-[var(--foreground)] text-center">Laporkan Kendala Sanitasi & Perpipaan</h1>
      
        {/* Container */}
        <div className="mt-8 w-full bg-white p-8 rounded-lg shadow-lg border border-gray-300">
            <form className="flex flex-col gap-6">

                {/* Phone number */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phoneNum" className="text-sm font-medium text-[var(--color-primary-200)]">Nomor Telepon/WhatsApp</label>
                    <input type="text" id="phoneNum" name="phoneNum" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0812xxxxx" />
                </div>
                
                {/* Location */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="lokasi" className="text-sm font-medium text-[var(--color-primary-200)]">Lokasi Kejadian</label>
                    <input type="text" id="lokasi" name="lokasi" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jl.Sudirman No. 123" />
                </div>

                {/* Jenis Kendala */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="jenis" className="text-sm font-medium text-[var(--color-primary-200)]">Jenis Masalah</label>
                    <select id="jenis" name="jenis" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Pilih jenis masalah</option>
                        <option value="kendala">Kendala Sanitasi</option>
                        <option value="perpipaan">Perpipaan</option>
                    </select>
                </div>
                
                {/* Deskripsi masalah */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="deskripsi" className="text-sm font-medium text-[var(--color-primary-200)]">Deskripsi Masalah</label>
                    <textarea id="deskripsi" name="deskripsi" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jelaskan detail kendala yang dialami..."></textarea>
                </div>

                {/* Upload foto */}
                <Dropzone />

                {/* Button */}
                <button type="submit" className="px-6 py-4 mt-4 bg-black text-white rounded-md hover:opacity-75 transition-colors">Kirim Laporan</button>
            </form>
        </div>
      </main>
    </div>
  );
}
