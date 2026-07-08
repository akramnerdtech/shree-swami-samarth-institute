import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B3D91]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-600">{description}</p>}
    </motion.div>
  );
}
