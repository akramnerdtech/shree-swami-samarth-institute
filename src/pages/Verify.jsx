import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import certificates from "../data/certificates";

export default function Verify() {
  const navigate = useNavigate();

  const [certificateNo, setCertificateNo] = useState("");
  const [error, setError] = useState("");

  const handleVerify = () => {
    if (!certificateNo.trim()) {
      setError("Please enter certificate number");
      return;
    }

    const certificate = certificates.find(
      (item) => item.certificateNo === certificateNo.trim()
    );

    if (!certificate) {
      setError("Certificate Not Found");
      return;
    }

    navigate(`/verify/${certificate.certificateNo}`);
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

        <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-10">

          <h1 className="text-4xl font-bold text-center text-blue-800">
            Certificate Verification
          </h1>

          <p className="text-center text-gray-500 mt-3">
            Enter your Certificate Number
          </p>

          <div className="mt-10">

            <input
              type="text"
              placeholder="Certificate Number"
              value={certificateNo}
              onChange={(e) => {
                setCertificateNo(e.target.value);
                setError("");
              }}
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
            />

            {error && (
              <p className="text-red-600 mt-3">
                {error}
              </p>
            )}

            <button
              onClick={handleVerify}
              className="w-full mt-8 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition"
            >
              Verify Certificate
            </button>

          </div>

          <div className="mt-10 bg-blue-50 rounded-xl p-5">

            <h2 className="font-bold mb-4">
              Demo Certificate Numbers
            </h2>

            <ul className="space-y-2 text-gray-700">

              <li>3207042031123003</li>

              <li>3207042031123004</li>

            </ul>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}