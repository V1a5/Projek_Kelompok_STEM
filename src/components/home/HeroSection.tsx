"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PiMagnifyingGlassBold, PiWarningCircleFill } from "react-icons/pi";

export default function HeroSection() {
  // Animate variation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.0, 0.0, 0.2, 1] as unknown as any },
    },
  };
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-50 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Sistem Informasi & Pengaduan Sanitasi UNJ
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6"
          >
            Wujudkan Kampus <br />
            <span className="text-teal-600 italic">
              UNJ Bersih & Sehat
            </span>{" "}
            <br />
            Bersama.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md"
          >
            Platform pelaporan isu lingkungan dan sarana sanitasi khusus civitas
            akademika Universitas Negeri Jakarta. Laporkan masalah fasilitas
            kebersihan di fakultas Anda dalam hitungan detik.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/report"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-center shadow-lg shadow-teal-100 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <PiWarningCircleFill size={20} /> Laporkan Isu Sanitasi
            </Link>
            <Link
              href="/companies"
              className="bg-white border-2 border-gray-100 hover:border-teal-600 text-gray-700 px-8 py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2"
            >
              <PiMagnifyingGlassBold size={20} /> Direktori Mitra
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Img */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.0, 0.0, 0.2, 1] }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] bg-gray-100">
            <img
              src="/img/plaza.png"
              alt="Sanitasi Kampus UNJ"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Statistic badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: [0.42, 0.0, 0.58, 1],
            }}
            className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-3xl shadow-xl z-20 hidden md:block"
          >
            <p className="text-3xl font-black text-white text-center">8</p>
            <p className="text-sm font-bold text-yellow-900 opacity-80 uppercase tracking-wider">
              Fakultas Terintegrasi
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
