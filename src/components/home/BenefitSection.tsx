"use client";

import { motion } from "framer-motion";
import { PiWarningCircleFill, PiClockFill, PiLeafFill } from "react-icons/pi";
import BenefitCard from "./BenefitCard"; // Import komponen card-nya

export default function BenefitSection() {
  const benefits = [
    {
      icon: <PiWarningCircleFill size={32} />,
      title: "Aduan Tepat Sasaran",
      description:
        "Sistem form pelaporan memuat spesifikasi gedung, lantai, hingga detail keluhan sarana agar penanganan tidak salah lokasi.",
      colorClass: "bg-teal-50 text-teal-600",
      delay: 0.1,
    },
    {
      icon: <PiClockFill size={32} />,
      title: "Monitoring Real-Time",
      description:
        "Admin sigap menjembatani laporan masuk untuk langsung dikoordinasikan ke kontraktor sanitasi eksternal atau unit sarpras terkait.",
      colorClass: "bg-blue-50 text-blue-600",
      delay: 0.2,
    },
    {
      icon: <PiLeafFill size={32} />,
      title: "Mendukung Green Campus",
      description:
        "Menjaga standar baku mutu lingkungan kampus demi mewujudkan ekosistem belajar-mengajar yang higienis, aman, dan berkelanjutan.",
      colorClass: "bg-green-50 text-green-600",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bagaimana UniFlow Membantu?
          </h2>
          <p className="text-gray-500">
            Mempermudah mahasiswa, dosen, dan staf berkolaborasi aktif menjaga
            kualitas sirkulasi air bersih dan fasilitas pembuangan limbah
            domestik kampus.
          </p>
        </motion.div>

        {/* Render cards using .map() */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              colorClass={benefit.colorClass}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
