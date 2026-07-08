import { motion } from "framer-motion";
import { ArrowRight, Clock3, Mail, MapPin, Phone, MessageCircleMore, Globe2, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section id="contact">
      <main className="bg-linear-to-br from-[#f8fbff] via-[#eef5ff] to-[#f1f6ff] px-6 py-20 text-slate-800">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B3D91]">Contact Us</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">Let’s connect with your future institute.</h1>
            <p className="mt-5 text-lg text-slate-600">Our team is available for admissions, course guidance, and certificate verification assistance.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <Phone className="mt-1 h-5 w-5 text-[#D4AF37]" />
                <div><p className="font-semibold text-slate-900">Phone</p><p className="text-slate-600">+91 98765 43210</p></div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <Mail className="mt-1 h-5 w-5 text-[#D4AF37]" />
                <div><p className="font-semibold text-slate-900">Email</p><p className="text-slate-600">info@ssnsi.edu.in</p></div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <MapPin className="mt-1 h-5 w-5 text-[#D4AF37]" />
                <div><p className="font-semibold text-slate-900">Office Address</p><p className="text-slate-600">123 Wellness Avenue, Pune, Maharashtra</p></div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <Clock3 className="mt-1 h-5 w-5 text-[#D4AF37]" />
                <div><p className="font-semibold text-slate-900">Office Hours</p><p className="text-slate-600">Mon – Sat: 9:00 AM to 6:00 PM</p></div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:-translate-y-1">
                <MessageCircleMore size={18} /> WhatsApp
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-[#0B3D91] hover:text-[#0B3D91]">
                <Globe2 size={18} /> Facebook
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-4xl border border-white/70 bg-white/80 p-8 shadow-2xl shadow-slate-200 backdrop-blur">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#0B3D91]" placeholder="Your Name" />
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#0B3D91]" placeholder="Your Email" />
              </div>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#0B3D91]" placeholder="Subject" />
              <textarea className="min-h-40 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#0B3D91]" placeholder="Your message" />
              <button className="inline-flex items-center gap-2 rounded-full bg-[#0B3D91] px-6 py-3 font-semibold text-white transition hover:-translate-y-1">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
          <div className="flex h-72 items-center justify-center text-center text-slate-700" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(13,61,145,0.18), rgba(212,175,55,0.16))' }} >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B3D91]">Google Map</p>
              <h2 className="mt-3 text-3xl font-semibold">Visit our campus in Pune</h2>
              <p className="mt-3 text-slate-600">Map placeholder for the institute location.</p>
            </div>
          </div>
        </div>
      </main>
      </section>
      <Footer />
    </>
  );
}
