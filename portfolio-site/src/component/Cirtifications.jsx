import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  Award,
  Calendar,
  Building2,
  Eye,
  Lock,
  UploadCloud,
  Link as LinkIcon,
  ShieldCheck,
  Loader2,
  Sparkles,
} from "lucide-react";

const API_BASE_URL = "http://localhost:3000/api/certificates";

const FRONTEND_PASSWORD = "shivam123";
const BACKEND_UPLOAD_PASSWORD = "shivam123";

const Cirtifications = () => {
  const [activeTab, setActiveTab] = useState("view");
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    issueDate: "",
    credentialId: "",
    verificationLink: "",
    certificateImage: null,
  });

  const fetchCertificates = async () => {
    try {
      setFetchError("");
      const res = await fetch(API_BASE_URL);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch certificates");
      }

      setCertificates(data.certificates || []);
    } catch (error) {
      setFetchError("Failed to fetch certificates. Backend check karo.");
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === FRONTEND_PASSWORD) {
      setIsUnlocked(true);
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password. Access denied.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSaveCertificate = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.organization || !formData.issueDate) {
      alert("Title, organization and issue date required hai.");
      return;
    }

    if (!formData.certificateImage) {
      alert("Certificate image select karo.");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();
      data.append("title", formData.title);
      data.append("organization", formData.organization);
      data.append("issueDate", formData.issueDate);
      data.append("credentialId", formData.credentialId);
      data.append("verificationLink", formData.verificationLink);
      data.append("certificateImage", formData.certificateImage);

      const res = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        headers: {
          "x-auth-password": BACKEND_UPLOAD_PASSWORD,
        },
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || result.message || "Upload failed");
      }

      await fetchCertificates();
      setFormData({
        title: "",
        organization: "",
        issueDate: "",
        credentialId: "",
        verificationLink: "",
        certificateImage: null,
      });

      setActiveTab("view");
      alert("Certificate uploaded successfully.");
    } catch (error) {
      console.log("Frontend upload error:", error);
      alert(error.message || "Failed to fetch/upload");
    } finally {
      setActiveTab("view");
    }
  };

  const openCertificateInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
     className="certifications-container relative min-h-screen overflow-hidden bg-[#0B1120] px-4 py-16 text-white sm:px-6 lg:px-20">
      {/* Dynamic Glow Background Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 -top-28 h-[450px] w-[450px] rounded-full blur-[140px]" />
        <div className="absolute right-[-120px] top-1/4 h-[480px] w-[480px] rounded-full  blur-[160px]" />
        <div className="absolute bottom-[-160px] left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full  blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          {/* Realistic 3D-Like Metallic Gold Logo */}
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-amber-400/40 bg-gradient-to-b from-amber-300/20 via-purple-900/40 to-black/80 shadow-[0_0_40px_rgba(245,158,11,0.25),inset_0_2px_10px_rgba(255,255,255,0.2)] backdrop-blur-xl transition-transform duration-500 hover:scale-110">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-3 shadow-inner">
              <Award className="h-10 w-10 text-slate-950 stroke-[2.5]" />
            </div>
          </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-blue-600/10 px-4 py-3 text-lg font-semibold text-cyan-100 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:shadow-[0_0_35px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-103 active:scale-97 duration-300 cursor-pointer">
              <Sparkles className="h-4 w-4 text-cyan-300 animate-pulse" />
              Verified Portfolio Credentials
            </div>

           <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Certifications
              </span>
              <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(34,211,238,0.7)]"></div>
            </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            My verified certificates and professional achievements with secure admin upload access.
          </p>
        </div>

        {/* Tab Switcher */}
         <div className="mx-auto mb-12 gap-5 px-3 flex max-w-md rounded-2xl border border-cyan-400/20 bg-[#08131F]/85 p-1.5 shadow-[0_8px_35px_rgba(34,211,238,0.15)] backdrop-blur-xl">
           <button
              onClick={() => setActiveTab("view")}
              className={`w-1/2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === "view"
                  ? "border border-cyan-400/20 bg-[#12344A] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                  : "text-slate-400 hover:bg-white/5 hover:text-cyan-300"
              }`}
            >
              View Certificates
            </button>

            <button
              onClick={() => setActiveTab("add")}
              className={`w-1/2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === "add"
                  ? "border border-cyan-400/20 bg-[#12344A] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                  : "text-slate-400 hover:bg-white/5 hover:text-cyan-300"
              }`}
            >
              Add Certificate
            </button>

        </div>

        {/* Add Certificate Tab */}
        {activeTab === "add" && (
          <div 
          className="mx-auto max-w-3xl rounded-3xl p-6 md:p-8"
          >
            {!isUnlocked ? (
              <form onSubmit={handlePasswordSubmit} className="space-y-5">
                <div className="flex items-center gap-3">
                  <div 
                  className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-400 border border-cyan-500/20">
                  {/* className="rounded-2xl bg-purple-500/10 p-3 text-purple-400 border border-purple-500/20"> */}
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 
                  className="text-2xl font-bold text-slate-100 "
                  >Admin Access Required</h3>
                </div>

                <input
                  type="password"
                  placeholder="Enter frontend password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-style hover:scale-102 duration-300"
                  // className="input-style"
                />

                {passwordError && (
                  <p className="text-sm font-medium text-red-400">{passwordError}</p>
                )}

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-sky-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-sm shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:from-cyan-400 hover:via-blue-500 hover:to-violet-600 hover:shadow-xl hover:shadow-cyan-400/40 active:scale-[0.98] focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                  // className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                >
                  <ShieldCheck className="h-5 w-5" />
                  Unlock Panel
                </button>
              </form>
            ) : (
            

              <form
                onSubmit={handleSaveCertificate}
                className="mx-auto rounded-[30px] border border-cyan-400/20 bg-gradient-to-br from-slate-900/95 via-[#101C34]/90 to-[#0B2133]/95 p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-2xl"
              >
                {/* Header */}
                <div>
                  <h3 className="bg-gradient-to-r from-cyan-300 via-white mb-3 to-violet-400 bg-clip-text text-3xl font-black text-transparent">
                    Add New Certificate
                  </h3>

                  <p className="mt-2 text-sm text-slate-400 mb-5">
                    Upload and showcase your verified professional achievements.
                  </p>
                </div>

                {/* Form Grid */}
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Certificate Title"
                    className="input-style"
                  />

                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Issuing Organization"
                    className="input-style"
                  />

                  <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    className="input-style"
                  />

                  <input
                    name="credentialId"
                    value={formData.credentialId}
                    onChange={handleChange}
                    placeholder="Credential ID (Optional)"
                    className="input-style"
                  />

                  <div className="md:col-span-2 mb-2">
                    <input
                      name="verificationLink"
                      value={formData.verificationLink}
                      onChange={handleChange}
                      placeholder="Verification Link"
                      className="input-style"
                    />
                  </div>
                </div>

                {/* Upload Box */}
                <label className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-cyan-400/30 bg-cyan-500/5 px-6 py-10 text-center transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">

                  <div className="mb-5 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <UploadCloud className="h-10 w-10 text-cyan-300" />
                  </div>

                  <h4 className="text-lg font-bold text-white">
                    Upload Certificate
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Drag & Drop or Click to Browse
                  </p>

                  <span className="mt-4 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    {formData.certificateImage
                      ? formData.certificateImage.name
                      : "PNG • JPG • JPEG"}
                  </span>

                  <input
                    type="file"
                    name="certificateImage"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(34,211,238,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></span>

                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <UploadCloud className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
                      Save Certificate
                    </>
                  )}
                </button>
              </form>

            )}
          </div>
        )}


      {activeTab === "view" && (
  <>
    {fetchError && (
      <p className="mb-6 text-center text-red-400">{fetchError}</p>
    )}

    {certificates.length === 0 ? (
      <div className="rounded-[30px] border border-dashed border-cyan-400/25 bg-gradient-to-br from-slate-900/95 via-[#101C34]/90 to-[#0B2133]/95 p-16 text-center shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-2xl">

        <Award className="mx-auto mb-6 h-16 w-16 animate-pulse text-cyan-400" />

        <h3 className="text-3xl font-black text-white">
          No Certificates Yet
        </h3>

        <p className="mt-3 text-slate-400">
          Upload your first certificate and showcase your achievements.
        </p>

      </div>
    ) : (
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert._id}
            className="group relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-gradient-to-br from-slate-900/95 via-[#101C34]/90 to-[#0B2133]/95 p-5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -top-24 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl"></div>
            </div>

            {/* Certificate Image */}
            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="h-52 w-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-500/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-xl">
                <FaCheck className="h-3 w-3 rounded-full bg-white p-[2px] text-cyan-600" />
                Verified
              </div>
            </div>

            {/* Certificate Info */}
            <h3 className="text-xl font-extrabold tracking-tight text-white transition duration-300 group-hover:text-cyan-300">
              {cert.title}
            </h3>

            <p className="mt-3 flex items-center gap-2 text-sm text-slate-300">
              <Building2 className="h-4 w-4 text-cyan-400" />
              {cert.organization}
            </p>

            <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
              <Calendar className="h-4 w-4 text-violet-400" />
              {cert.issueDate}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">

              <button
                onClick={() => openCertificateInNewTab(cert.imageUrl)}
                className="group/button relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-4 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/button:translate-x-full"></span>

                <Eye className="relative h-4 w-4" />

                <span className="relative">
                  View Certificate
                </span>
              </button>

              {cert.verificationLink && (
                <a
                  href={cert.verificationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                >
                  <LinkIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </>
)} </div>


          <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

      .certifications-container {
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: #f8fafc;
      }

      .input-style {
        width: 100%;
        padding: 0.95rem 1.15rem;
        border-radius: 1rem;
        border: 1px solid rgba(99, 102, 241, 0.18);
        background: linear-gradient(
          135deg,
          rgba(15, 23, 42, 0.88),
          rgba(30, 41, 59, 0.72)
        );
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        color: #fff;
        font-size: 0.95rem;
        font-weight: 500;
        outline: none;

        transition:
          border-color 0.3s ease,
          box-shadow 0.3s ease,
          transform 0.25s ease,
          background 0.3s ease;

        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.05),
          0 10px 30px rgba(0,0,0,0.25);
      }

      .input-style::placeholder {
        color: rgba(203, 213, 225, 0.55);
        font-weight: 500;
      }

      .input-style:hover {
        border-color: rgba(56, 189, 248, 0.45);
        transform: translateY(-2px);
        box-shadow:
          inset 0 1px 0 rgba(255,255,255,0.06),
          0 14px 36px rgba(34,211,238,0.12);
      }

      .input-style:focus {
        border-color: #38bdf8;
        background: linear-gradient(
          135deg,
          rgba(15, 23, 42, 0.95),
          rgba(30, 41, 59, 0.82)
        );

        box-shadow:
          0 0 0 3px rgba(56,189,248,0.18),
          0 0 30px rgba(56,189,248,0.18),
          0 0 60px rgba(168,85,247,0.12);

        transform: translateY(-2px);
      }

      .input-style:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      textarea.input-style {
        min-height: 140px;
        resize: vertical;
      }

      .input-style::-webkit-file-upload-button {
        margin-right: 12px;
        padding: 8px 16px;
        border: none;
        border-radius: 10px;
        background: linear-gradient(
          90deg,
          #06b6d4,
          #3b82f6,
          #8b5cf6
        );
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: 0.25s;
      }

      .input-style::-webkit-file-upload-button:hover {
        filter: brightness(1.08);
      }
    `}</style>

    </section>
  );
};

export default Cirtifications;