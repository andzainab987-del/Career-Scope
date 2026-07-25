"use client";

import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    { value: "12", label: "Career Fields" },
    { value: "45+", label: "High-Demand Roles" },
    { value: "PKR + USD", label: "Salary Benchmarks" },
    { value: "AI", label: "Powered Guidance" },
  ];

  return (
    <section className="py-20 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-8 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
