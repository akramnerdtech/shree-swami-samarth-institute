import { motion } from "framer-motion";
import { BadgeCheck, BookOpen, Building2, HeartHandshake, Microscope, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";
import about4 from "../assets/images/about4.jpg";

const values = [
  { title: "Integrity", description: "Transparent education and ethical practice at every step." },
  { title: "Innovation", description: "Modern methods, research-led training, and digital access." },
  { title: "Excellence", description: "High standards in academics, care, and student support." },
  { title: "Transparency", description: "Clearly verified certificates and open communication." },
];

const milestones = [
  { year: "2004", title: "Founded", description: "Established as a trusted centre for natural healing education." },
  { year: "2010", title: "Expanded", description: "Added new programs and stronger clinical training modules." },
  { year: "2018", title: "Digital Growth", description: "Introduced online certificate verification and digital records." },
  { year: "2024", title: "National Presence", description: "Recognized for quality education and professional standards." },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-linear-to-br from-[#f8fbff] via-[#eef5ff] to-[#f1f6ff] text-slate-800">
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(13,61,145,0.16), transparent 50%)' }} />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B3D91]">About the Institute</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                A premium institute shaping confident professionals in natural healing.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-600">
                Shree Swami Samarth Naturopathy Institute is known for its structured education, clinical exposure, and commitment to verifiable excellence in every certificate it issues.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-200">
                  <img src={about1} alt="Spa therapy learning" className="h-72 w-full object-cover" />
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-200">
                    <img src={about2} alt="Naturopathy training" className="h-36 w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-200">
                    <img src={about3} alt="Yoga and wellness" className="h-36 w-full object-cover" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-slate-200">
                  <img src={about4} alt="Herbal therapy" className="h-72 w-full object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-4xl border border-white/70 bg-white/80 p-8 shadow-2xl shadow-blue-100 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Government Registered", <ShieldCheck key="a" className="h-7 w-7 text-[#D4AF37]" />],
                  ["ISO Certified", <BadgeCheck key="b" className="h-7 w-7 text-[#D4AF37]" />],
                  ["Modern Labs", <Microscope key="c" className="h-7 w-7 text-[#D4AF37]" />],
                  ["Placement Support", <Users key="d" className="h-7 w-7 text-[#D4AF37]" />],
                ].map(([title, icon]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D91]/10">{icon}</div>
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-4xl border border-white/70 bg-white p-8 shadow-xl shadow-slate-200">
              <SectionHeading eyebrow="Institute Introduction" title="An education ecosystem grounded in credibility and care" description="We combine academic depth, practical exposure, and transparent certification to build lasting trust." />
              <div className="mt-8 space-y-4 text-slate-600">
                <p><span className="font-semibold text-slate-900">Mission:</span> To provide quality, ethical, and accessible training in naturopathy and wellness.</p>
                <p><span className="font-semibold text-slate-900">Vision:</span> To create a globally respected institute known for excellence and innovation.</p>
                <p><span className="font-semibold text-slate-900">Objectives:</span> To promote professional learning, public health awareness, and trusted certification.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-4xl border border-[#D4AF37]/30 bg-linear-to-br from-[#0B3D91] to-[#1f5fd1] p-8 text-white shadow-xl">
              <div className="flex items-center gap-3"><Building2 className="h-7 w-7 text-[#D4AF37]" /><h3 className="text-2xl font-semibold">Director&apos;s Message</h3></div>
              <p className="mt-6 text-lg leading-8 text-blue-50">
                “Our commitment is to create meaningful learning experiences that empower students and strengthen the credibility of the certifications they earn.”
              </p>
              <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5">
                <p className="font-semibold">Dr. A. Sharma</p>
                <p className="text-sm text-blue-100">Director, SSNSI</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Why Students Trust Us" title="Trusted by learners, employers, and institutions" description="Every part of our institute experience is designed for confidence, professionalism, and long-term growth." />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                [<BookOpen key="1" className="h-7 w-7 text-[#0B3D91]" />, "Teaching Methodology", "Blend of theory, practicals, and guided mentorship."],
                [<Microscope key="2" className="h-7 w-7 text-[#0B3D91]" />, "Facilities", "Modern classrooms, labs, and wellness training spaces."],
                [<HeartHandshake key="3" className="h-7 w-7 text-[#0B3D91]" />, "Placement Assistance", "Career guidance and professional networking opportunities."],
                [<Sparkles key="4" className="h-7 w-7 text-[#0B3D91]" />, "Digital Verification", "Secure QR-based validation for every certificate."],
              ].map(([icon, title, description]) => (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/15">{icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-slate-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200">
            <SectionHeading eyebrow="Our Values" title="The principles that guide every program" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Institute Growth" title="A journey of trust, quality, and expansion" />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {milestones.map((item) => (
                <div key={item.year} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D91] text-lg font-semibold text-white">{item.year}</div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24">
          <div className="mx-auto max-w-7xl rounded-4xl bg-linear-to-r from-[#0B3D91] to-[#144fb0] p-10 text-white shadow-2xl shadow-blue-200">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ready to begin your journey with us?</h2>
                <p className="mt-4 max-w-2xl text-lg text-blue-100">Reach out for program details, admissions, or certificate verification support.</p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
