import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Printer, Download } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CertificateLayout from "../components/CertificateLayout";
import certificates from "../data/certificates";

export default function Certificate() {
  const { certificateNo } = useParams();
  const certificateRef = useRef();

  const certificate = certificates.find(
    (item) => item.certificateNo === certificateNo
  );

  if (!certificate) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-xl shadow-xl p-10 text-center">
            <h1 className="text-4xl font-bold text-red-600">
              Certificate Not Found
            </h1>
            <p className="mt-3 text-gray-500">Invalid Certificate Number</p>
            <Link
              to="/verify"
              className="inline-block mt-8 bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Verify Again
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    try {
      const element = certificateRef.current;
      if (!element) {
        console.error("Certificate element not found");
        return;
      }

      // --- 1. Preload all images with CORS ---
      const images = element.querySelectorAll("img");
      await Promise.all(
        Array.from(images).map((img) => {
          return new Promise((resolve) => {
            // If already loaded with valid dimensions, resolve immediately
            if (img.complete && img.naturalWidth > 0) {
              resolve();
              return;
            }

            const src = img.src;
            if (src && !src.startsWith("data:")) {
              // Set CORS attribute and force reload
              img.crossOrigin = "anonymous";
              img.src = "";
              img.src = src;
            }

            img.onload = () => resolve();
            img.onerror = () => {
              console.warn("Image failed to load:", src);
              resolve(); // continue anyway
            };

            // Safety timeout
            setTimeout(resolve, 5000);
          });
        })
      );

      // --- 2. Render with html2canvas ---
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        imageTimeout: 15000,
        onclone: (clonedDoc) => {
          // Ensure all images in the cloned document have CORS
          const clonedImages = clonedDoc.querySelectorAll("img");
          clonedImages.forEach((img) => {
            if (img.src && !img.src.startsWith("data:")) {
              img.crossOrigin = "anonymous";
            }
          });
        },
      });

      // --- 3. Generate PDF ---
      const image = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(image, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${certificate.certificateNo}.pdf`);
    } catch (error) {
      console.error("PDF generation error:", error);
      alert(
        "Failed to generate PDF. Please use the Print button instead, or check that the student photo URL is accessible."
      );
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-slate-100 py-10 print:bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* Buttons */}
          <div className="flex justify-end gap-4 mb-8 print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
            >
              <Printer size={18} />
              Print
            </button>
            {/* <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              <Download size={18} />
              Download PDF
            </button> */} 
          </div>

          <div ref={certificateRef}>
            <CertificateLayout certificate={certificate} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}