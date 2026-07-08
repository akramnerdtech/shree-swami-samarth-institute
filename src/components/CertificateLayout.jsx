import { QRCodeCanvas } from "qrcode.react";
import { CheckCircle, Award, Star, Shield } from "lucide-react";

export default function CertificateLayout({ certificate }) {
  const verifyUrl = `${window.location.origin}/verify/${certificate.certificateNo}`;

  return (
    <div
      id="certificate"
      className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2px] bg-white shadow-2xl"
    >
      {/* Main Certificate Container */}
      <div className="relative h-full w-full p-4 sm:p-6">
        {/* Outer Decorative Border - Gold */}
        <div className="absolute inset-2 sm:inset-4 rounded-[2px] border-4 border-yellow-600/60 pointer-events-none" />

        {/* Inner Decorative Border */}
        <div className="absolute inset-4 sm:inset-8 rounded-[2px] border border-yellow-500/30 pointer-events-none" />

        {/* Corner Ornaments - Hidden on very small screens */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-6 h-6 sm:w-10 sm:h-10 border-t-4 border-l-4 border-yellow-600/80 pointer-events-none hidden xs:block" />
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-6 h-6 sm:w-10 sm:h-10 border-t-4 border-r-4 border-yellow-600/80 pointer-events-none hidden xs:block" />
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-6 h-6 sm:w-10 sm:h-10 border-b-4 border-l-4 border-yellow-600/80 pointer-events-none hidden xs:block" />
        <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-6 h-6 sm:w-10 sm:h-10 border-b-4 border-r-4 border-yellow-600/80 pointer-events-none hidden xs:block" />

        {/* Content */}
        <div className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col">
          {/* Top Section - Institute Name & Logo Area */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between border-b-2 border-yellow-600/40 pb-3 sm:pb-4 gap-3 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 text-white">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.35em] text-yellow-700 font-semibold">
                  Shree Swami Samarth
                </p>
                <h1 className="text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.08em] sm:tracking-[0.15em] text-slate-800 leading-tight">
                  Naturopathy Institute
                </h1>
              </div>
            </div>
            <div className="text-center sm:text-right flex-shrink-0">
              <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500">
                Certificate No
              </p>
              <p className="text-xs sm:text-sm font-mono font-semibold text-slate-700">
                {certificate.certificateNo}
              </p>
            </div>
          </div>

          {/* Middle Section - Certificate Body with Photo */}
          <div className="flex-1 flex flex-col-reverse md:flex-row gap-4 sm:gap-6 py-3 sm:py-4">
            {/* Left: Certificate Details */}
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              {/* Decorative Line */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 justify-center md:justify-start">
                <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-yellow-600/60" />
                <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-600 text-yellow-600" />
                <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-yellow-600/60" />
              </div>

              <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-yellow-700">
                Certificate of Completion
              </p>

              <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm text-slate-600 tracking-[0.1em] sm:tracking-[0.15em]">
                This is to certify that
              </p>

              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-widest text-slate-900 leading-tight">
                {certificate.studentName}
              </h2>

              <div className="mt-1 sm:mt-2 h-[2px] sm:h-[3px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent mx-auto md:mx-0" />

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600 tracking-[0.1em] sm:tracking-[0.15em]">
                has successfully completed the course of
              </p>

              <h3 className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 leading-tight">
                {certificate.course}
              </h3>

              <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 sm:gap-x-4 text-xs sm:text-sm text-slate-600">
                <span>
                  <span className="font-semibold text-slate-700">Duration:</span>{" "}
                  {certificate.duration}
                </span>
                <span className="text-yellow-600/40 hidden xs:inline">|</span>
                <span>
                  <span className="font-semibold text-slate-700">Start:</span>{" "}
                  {certificate.startDate}
                </span>
                <span className="text-yellow-600/40 hidden xs:inline">|</span>
                <span>
                  <span className="font-semibold text-slate-700">End:</span>{" "}
                  {certificate.endDate}
                </span>
                <span className="text-yellow-600/40 hidden xs:inline">|</span>
                <span>
                  <span className="font-semibold text-slate-700">Issued:</span>{" "}
                  {certificate.issueDate}
                </span>
              </div>

              {/* Status Badge */}
              <div className="mt-3 sm:mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 sm:px-4 sm:py-1.5 border border-green-200 self-center md:self-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                <span className="text-xs sm:text-sm font-semibold text-green-700">
                  {certificate.status}
                </span>
              </div>
            </div>

            {/* Right: Student Photo */}
            <div className="md:w-48 lg:w-64 flex-shrink-0 flex items-center justify-center">
              <div className="overflow-hidden rounded-xl border-2 border-yellow-600/30 shadow-lg">
                <img
                  src={certificate.photo}
                  alt={certificate.studentName}
                  className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section - Signatures + QR Code */}
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-4 border-t-2 border-yellow-600/40 pt-3 sm:pt-4">
            {/* Left: Signatures */}
            <div className="sm:col-span-6 flex items-center justify-around gap-2 sm:gap-0">
              <div className="text-center">
                <div className="h-8 sm:h-10 md:h-12 flex items-end justify-center">
                  <span className="text-xs sm:text-sm italic text-slate-700 font-serif">
                    Director
                  </span>
                </div>
                <div className="mt-0.5 sm:mt-1 w-20 sm:w-24 md:w-32 border-t-2 border-slate-300 pt-0.5 sm:pt-1">
                  <p className="text-[8px] sm:text-[10px] font-semibold text-slate-700">
                    Director Signature
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="h-8 sm:h-10 md:h-12 flex items-end justify-center">
                  <span className="text-xs sm:text-sm italic text-slate-700 font-serif">
                    Principal
                  </span>
                </div>
                <div className="mt-0.5 sm:mt-1 w-20 sm:w-24 md:w-32 border-t-2 border-slate-300 pt-0.5 sm:pt-1">
                  <p className="text-[8px] sm:text-[10px] font-semibold text-slate-700">
                    Principal Signature
                  </p>
                </div>
              </div>
            </div>

            {/* Right: QR Code + Institute Seal */}
            <div className="sm:col-span-6 flex items-center justify-center sm:justify-end gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
              <div className="flex flex-col items-center">
                <div className="rounded-lg border-2 border-yellow-600/30 bg-white p-1.5 sm:p-2 shadow-sm">
                  <QRCodeCanvas value={verifyUrl} size={56} />
                </div>
                <p className="mt-0.5 sm:mt-1 text-[7px] sm:text-[9px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500">
                  Scan to Verify
                </p>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-right">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <p className="text-[8px] sm:text-[10px] font-semibold text-slate-700 uppercase tracking-wide">
                    Accredited Institute
                  </p>
                  <p className="text-[7px] sm:text-xs text-slate-500 leading-tight">
                    National Council of Educational Training
                  </p>
                  <p className="text-[7px] sm:text-xs text-slate-500 leading-tight">
                    Institute and Research
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-2 sm:mt-3 text-center">
            <p className="text-[6px] sm:text-[8px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-400">
              This certificate is digitally verified • Official Document
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}