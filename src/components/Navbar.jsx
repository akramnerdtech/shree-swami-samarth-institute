import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShieldCheck } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#courses", label: "Courses" },
//   { to: "/verify", label: "Certificate Verification" },
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-[#0B3D91] to-[#1f5fd1] text-white shadow-lg shadow-blue-200">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">SSNSI</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Naturopathy Institute</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((item) =>
            item.to.includes("#") ? (
              <a key={item.to} href={item.to} className="text-sm font-medium text-slate-600 transition hover:text-[#0B3D91]">
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? "text-[#0B3D91]" : "text-slate-600 hover:text-[#0B3D91]"}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
          <Link to="/verify" className="rounded-full bg-[#0B3D91] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5">
            Verify Now
          </Link>
        </nav>

        <button className="rounded-full border border-slate-200 p-2 lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((item) =>
              item.to.includes("#") ? (
                <a key={item.to} href={item.to} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600">
                  {item.label}
                </a>
              ) : (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `text-sm font-medium ${isActive ? "text-[#0B3D91]" : "text-slate-600"}`}>
                  {item.label}
                </NavLink>
              )
            )}
            <Link to="/verify" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit rounded-full bg-[#0B3D91] px-4 py-2 text-sm font-semibold text-white">
              Verify Certificate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}