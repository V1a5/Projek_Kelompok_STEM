import { NavBar } from "@/src/components/navbar";
import FormLapor from "@/src/sections/form-laporan";
import ReportFlow from "@/src/sections/report-flow";

export default function Home() {
  return (
    <div className="bg-(--background)">      
      <div className="flex w-full flex-col items-center justify-center py-16 px-16 bg-[var(--background)]">
        <ReportFlow />
        <FormLapor />
      </div>
    </div>
  );
}
