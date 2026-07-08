import { Globe2, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071f45] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck size={20} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-xl font-semibold">SSNSI</p>
                <p className="text-sm text-blue-100">Shree Swami Samarth Naturopathy Institute</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-blue-100">
              Premium education, trusted verification, and a commitment to excellence in naturopathy and wellness.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 transition hover:bg-white/10"><Globe2 size={16} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 transition hover:bg-white/10"><Send size={16} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 transition hover:bg-white/10"><Send size={16} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-blue-100">
              <li><a href="/" className="transition hover:text-white">Home</a></li>
              <li><a href="/about" className="transition hover:text-white">About</a></li>
              <li><a href="/verify" className="transition hover:text-white">Verification</a></li>
              <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-blue-100">
              <li className="flex items-center gap-2"><Phone size={16} className="text-[#D4AF37]" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-[#D4AF37]" /> info@ssnsi.edu.in</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-[#D4AF37]" /> Pune, Maharashtra</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Institute</h3>
            <p className="mt-4 text-blue-100">Government registered and ISO aligned, serving learners with trusted certification and modern education standards.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-blue-100">
          <p>© 2026 Shree Swami Samarth Naturopathy Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}