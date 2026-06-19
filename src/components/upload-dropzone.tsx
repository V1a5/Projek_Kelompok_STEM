"use client";
import { useState } from "react";

interface DropzoneProps {
  onFileChange: (file: File | null) => void; // ✅ new prop
}

export default function Dropzone({ onFileChange }: DropzoneProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  // ✅ single handler used by both input and drag-drop
  const processFile = (file: File) => {
    setFileName(file.name);
    onFileChange(file); // ✅ pass file up to form
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && ["image/png", "image/jpeg", "image/heic"].includes(file.type)) {
      processFile(file);
    }
  };

  const handleClear = () => {
    setPreview(null);
    setFileName(null);
    onFileChange(null); // ✅ clear file in form too
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[var(--color-primary-200)]">Foto Bukti</label>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center gap-4 w-full p-8 border-2 border-dotted border-gray-300 rounded-md bg-gray-50 cursor-pointer hover:border-gray-400 transition-colors"
      >
        {preview ? (
          <div className="flex flex-col items-center gap-3">
            <img src={preview} alt="Preview" className="h-32 w-32 object-cover rounded-md" />
            <p className="text-sm text-gray-600">{fileName}</p>
            <div className="flex gap-2">
              <label className="px-4 py-2 bg-black text-white rounded-md hover:opacity-75 transition-opacity cursor-pointer text-sm font-medium">
                Ubah Foto
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.heic"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {/* ✅ clear button */}
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Hapus
              </button>
            </div>
          </div>
        ) : (
          <>
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700">Drag and drop your file here</p>
              <p className="text-xs text-gray-500">atau klik untuk memilih file</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, atau HEIC (Max 5MB)</p>
            <label className="px-4 py-2 bg-black text-white rounded-md hover:opacity-75 transition-opacity cursor-pointer text-sm font-medium">
              Pilih File
              <input
                type="file"
                accept=".png,.jpg,.jpeg,.heic"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </>
        )}
      </div>
    </div>
  );
}