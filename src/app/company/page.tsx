import { NavBar } from "@/src/components/navbar";

export default function Home() {
  return (
    <div className="bg-[var(--background)] font-sans">
      <NavBar />  
      
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[var(--background)] sm:items-start">
        <h1>Company List</h1>
      </main>
    </div>
  );
}