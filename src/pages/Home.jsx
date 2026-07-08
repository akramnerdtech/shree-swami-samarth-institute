import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Brain, CheckCircle2, ChevronDown, CircleCheckBig, HeartPulse, Microscope, ShieldCheck, Sparkles, Users, ScanLine, FileCheck2, PlayCircle, Phone, Mail, MapPin, Clock, MessageCircleMore, Globe2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import hero from "../assets/images/hero.jpg";
import panchkarma from "../assets/images/panchkarma.jpg";
import therapy from "../assets/images/therapy.png";
import Naturopathy from "../assets/images/Naturopathy.jpg";
import yoga from "../assets/images/yoga.jpg";
import Accupressure from "../assets/images/Accupressure.jpg";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import about3 from "../assets/images/about3.jpg";
import about4 from "../assets/images/about4.jpg";

const heroStats = [
  { value: "5000+", label: "Students" },
  { value: "250+", label: "Courses" },
  { value: "100%", label: "Verification" },
  { value: "20+", label: "Years" },
];

const instituteFeatures = [
  {
    title: "AYUSH Aligned Programs",
    description: "Curricula designed to meet national health education standards with professional wellness training.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    title: "Clinical Practice Labs",
    description: "Hands-on facilities for therapy, yoga and naturopathy demonstrations under expert supervision.",
    icon: <Microscope className="h-7 w-7" />,
  },
  {
    title: "Verified Certification",
    description: "Secure QR-enabled credentials backed by a transparent digital verification workflow.",
    icon: <BadgeCheck className="h-7 w-7" />,
  },
];

const campusHighlights = [
  {
    title: "Wellness Studios",
    description: "Dedicated studios for yoga, therapy and guided wellness practice.",
    icon: <HeartPulse className="h-6 w-6" />,
  },
  {
    title: "Digital Verification Lab",
    description: "On-site support for certificate authentication and QR validation.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Student Support Hub",
    description: "Career guidance, counseling and placement assistance for every learner.",
    icon: <Users className="h-6 w-6" />,
  },
];

const programs = [
  { title: "Diploma in Spa Therapy", description: "Rejuvenation and wellness skills designed for modern spa practices.", duration: "6 Months", icon: <Sparkles className="h-7 w-7" />, image: therapy },
  { title: "Diploma in Naturopathy", description: "Foundational and clinical training in natural healing methods.", duration: "12 Months", icon: <HeartPulse className="h-7 w-7" />, image: Naturopathy },
  { title: "Diploma in Yoga Therapy", description: "Integrate movement, breathing, and recovery into professional care.", duration: "9 Months", icon: <Brain className="h-7 w-7" />, image: yoga },
  { title: "Diploma in Acupressure", description: "Medical and therapeutic techniques for body balance and relief.", duration: "8 Months", icon: <Microscope className="h-7 w-7" />, image: Accupressure },
  { title: "Diploma in Panchakarma", description: "Advanced knowledge in cleansing and wellness protocols.", duration: "10 Months", icon: <Brain className="h-7 w-7" />, image: panchkarma },
];

const courses = programs;

const highlights = [
  {
    title: "Trusted accreditation",
    description: "Government-aligned recognition with premium wellness certification.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
  {
    title: "Clinical experience",
    description: "Hands-on training in wellness therapy, yoga, and naturopathy labs.",
    icon: <Microscope className="h-7 w-7" />,
  },
  {
    title: "Verified digital certificates",
    description: "Every certificate includes a secure QR record for instant validation.",
    icon: <BadgeCheck className="h-7 w-7" />,
  },
];

const whyChooseUs = [
  {
    title: "Career-ready programs",
    description: "Designed for hospitality, wellness clinics, and holistic healthcare careers.",
    icon: <Sparkles className="h-7 w-7" />,
  },
  {
    title: "Expert mentoring",
    description: "Faculty with proven clinical, academic, and wellness leadership experience.",
    icon: <HeartPulse className="h-7 w-7" />,
  },
  {
    title: "Secure verification",
    description: "A modern certificate workflow that builds trust for students and employers.",
    icon: <ShieldCheck className="h-7 w-7" />,
  },
];

const mentors = [
  {
    name: "Dr. Aarti Deshmukh",
    role: "Principal, Naturopathy",
    description: "Leading research and clinical education with a focus on evidence-based healing.",
    image: about1,
  },
  {
    name: "Mr. Rohit Patil",
    role: "Yoga Therapy Lead",
    description: "Certified therapist guiding transformation through movement and breath.",
    image: about2,
  },
  {
    name: "Ms. Sneha Kulkarni",
    role: "Spa & Wellness Mentor",
    description: "Experienced in spa management, therapeutic care and student mentoring.",
    image: about3,
  },
];

const newsEvents = [
  {
    title: "Open House: Wellness Careers",
    category: "Campus Event",
    description: "Discover our programs and meet mentors at the next open day.",
    image: about2,
  },
  {
    title: "Yoga Therapy Workshop",
    category: "Workshop",
    description: "Join a practical session on therapeutic breathing and body alignment.",
    image: about3,
  },
  {
    title: "Verification Webinar",
    category: "Live Webinar",
    description: "Learn how our QR-based certification process enhances trust.",
    image: about4,
  },
];

const testimonials = [
  { name: "Rina Sharma", role: "Graduate", quote: "The institute offered a perfect balance of theory, practical training, and professionalism." },
  { name: "Arjun Verma", role: "Working Professional", quote: "The digital certification and verification process made my career journey much smoother." },
  { name: "Meera Joshi", role: "Student", quote: "The faculty and support system helped me gain confidence and real expertise." },
];

const faqs = [
  { question: "How can I verify a certificate?", answer: "Visit the verification page, enter the certificate number, and you will be directed to the official certificate record." },
  { question: "Are the programs government recognized?", answer: "Yes, the institute operates with government registration and recognized quality standards for its educational programs." },
  { question: "Do you offer online learning support?", answer: "Yes, the institute supports modern learning with structured guidance and digital resources for students." },
  { question: "Can I download my certificate details?", answer: "Yes, verified certificates can be printed or downloaded as PDF directly from the certificate page." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Navbar />
      <main className="bg-linear-to-r from-[#0a4cbd] to-[#1556bf] text-slate-100">
        <section className="relative overflow-hidden bg-linear-to-r from-[#0B3D91] to-[#1556bf] px-6 py-24 sm:py-28 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%)]" />
          <div className="relative mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#F1D49D]">Authentic Wellness Education</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">India’s premium naturopathy institute for verified excellence</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">From campus-based diplomas to digital certification, we design every program for credibility, clinical skill, and career growth.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/verify" className="inline-flex items-center gap-2 rounded-full bg-[#F1D49D] px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:-translate-y-1">Verify Certificate <ArrowRight size={18} /></Link>
                <a href="#programs" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F1D49D] hover:text-[#F1D49D]">Explore Programs <PlayCircle size={18} /></a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="overflow-hidden rounded-4xl border border-white/10 bg-slate-800/80 shadow-2xl shadow-slate-950/40">
                <img src={hero} alt="Institute campus" className="h-130 w-full object-cover object-center" />
                <div className="absolute left-6 bottom-6 right-6 rounded-4xl border border-white/20 bg-slate-950/70 p-6 backdrop-blur-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#F1D49D]">Campus Highlights</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">A serene campus for disciplined learning</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Modern lecture halls, wellness studios and verification labs support every step of your professional journey.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-6 rounded-4xl border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">About the Institute</p>
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Cultivating a legacy of authentic naturopathy education since 2005</h2>
              <p className="text-lg leading-8 text-slate-600">SSSNI is a premier institute for naturopathy, yoga, spa & holistic wellness training in India. Our certificates are recognised across wellness centres, resorts and Ayurvedic clinics globally.</p>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-start gap-3 text-base"><span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#D4AF37]" />Ministry of AYUSH aligned curriculum</p>
                <p className="flex items-start gap-3 text-base"><span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#D4AF37]" />Practical clinical exposure at partner wellness centres</p>
                <p className="flex items-start gap-3 text-base"><span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#D4AF37]" />Blockchain-backed digital verification</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[about1, about2, about3, about4].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-[28px] shadow-2xl shadow-slate-200 bg-white">
                  <img src={image} alt={`About institute image ${index + 1}`} className="h-72 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200 backdrop-blur">
            <SectionHeading eyebrow="Institute Highlights" title="A professional institute with premium standards" description="From registration and recognition to digital verification, every detail is crafted for trust." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {highlights.map((item) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0B3D91]/10 text-[#0B3D91]">{item.icon}</div>
                  <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Why Choose Us" title="Every program is designed for excellence" description="We offer an elevated learning experience with practical depth and institutional credibility." />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#0B3D91]">{item.icon}</div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200">
            <SectionHeading eyebrow="Verification Process" title="A seamless path from certificate to trust" description="The verification journey is simple, secure, and professional for every stakeholder." />
            <div className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-0">
              {[
                ["Receive Certificate", <FileCheck2 className="h-6 w-6" />],
                ["Scan QR Code", <ScanLine className="h-6 w-6" />],
                ["Open Verification Page", <CircleCheckBig className="h-6 w-6" />],
                ["Certificate Verified", <BadgeCheck className="h-6 w-6" />],
              ].map(([label, icon], index) => (
                <div key={label} className="flex flex-col items-center lg:flex-row">
                  <div className="flex min-h-24 min-w-24 flex-col items-center justify-center rounded-3xl border border-[#D4AF37]/30 bg-[#fff9e8] p-4 text-center text-slate-900 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B3D91] text-white">{icon}</div>
                    <p className="mt-3 text-sm font-semibold">{label}</p>
                  </div>
                  {index < 3 && <ArrowRight className="my-3 h-6 w-6 text-[#0B3D91] lg:mx-3 lg:my-0" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Popular Courses" title="Career-focused programs for modern wellness professionals" description="Choose the path that aligns with your ambition and professional growth." />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {courses.map((course) => (
                <motion.div key={course.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={course.image} alt={`${course.title} preview`} className="h-44 w-full object-cover" />
                  <div className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B3D91]/10 text-[#0B3D91]">{course.icon}</div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-900">{course.title}</h3>
                    <p className="mt-3 text-slate-600">{course.description}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <p className="text-sm font-semibold text-[#D4AF37]">Duration: {course.duration}</p>
                      <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B3D91]">Learn More <ArrowRight size={16} /></Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl rounded-4xl bg-linear-to-r from-[#0B3D91] to-[#1556bf] p-10 text-white shadow-2xl shadow-blue-200">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-100">Student Achievements</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Dedicated to measurable success and professional trust.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["5000+", "Students"],
                  ["250+", "Courses"],
                  ["100%", "Verification"],
                  ["20+", "Years"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center">
                    <p className="text-3xl font-bold">{value}</p>
                    <p className="mt-2 text-sm text-blue-100">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Testimonials" title="What learners say about our institute" description="Real experiences from students who trusted our programs and certification journey." />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {Array.from({ length: 5 }).map((_, i) => (<CheckCircle2 key={i} className="h-5 w-5" />))}
                  </div>
                  <p className="mt-5 text-slate-600">“{item.quote}”</p>
                  <div className="mt-6">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200">
            <SectionHeading eyebrow="Frequently Asked Questions" title="Answers to common questions" />
            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50">
                    <button className="flex w-full items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span className="font-semibold text-slate-900">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 text-[#0B3D91] transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && <p className="px-5 pb-5 text-slate-600">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-10 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl rounded-4xl bg-linear-to-r from-[#fff9e8] to-[#f7f2dc] p-10 text-slate-900 shadow-xl shadow-slate-200">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0B3D91]">Ready to Verify?</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ensure your certificate is authentic in seconds.</h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-600">Use our secure verification portal to confirm the legitimacy of your certificate instantly.</p>
              </div>
              <Link to="/verify" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3D91] px-6 py-3 font-semibold text-white transition hover:-translate-y-1">
                Verify Certificate <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

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
                <Clock className="mt-1 h-5 w-5 text-[#D4AF37]" />
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

       
      </main>
      </section>

      </main>
      <Footer />
    </>
  );
}