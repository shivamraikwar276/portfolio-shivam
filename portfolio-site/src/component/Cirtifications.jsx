import { useEffect, useState } from "react";
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
     className="certifications-container relative min-h-screen overflow-hidden bg-[#0A0619] px-4 py-16 text-white sm:px-6 lg:px-20">
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

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 backdrop-blur-xl shadow-[0_0_15px_rgba(168,85,247,0.1)]">
            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse" />
            Verified Portfolio Credentials
          </div>

          <h2 className="bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            My verified certificates and professional achievements with secure admin upload access.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mx-auto mb-12 flex max-w-md rounded-2xl border border-purple-500/15 bg-[#130E26]/80 p-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <button
            onClick={() => setActiveTab("view")}
            className={`w-1/2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
              activeTab === "view"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-[1.02]"
                : "text-slate-400 hover:text-purple-200"
            }`}
          >
            View Certificates
          </button>

          <button
            onClick={() => setActiveTab("add")}
            className={`w-1/2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
              activeTab === "add"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-[1.02]"
                : "text-slate-400 hover:text-purple-200"
            }`}
          >
            Add Certificate
          </button>
        </div>

        {/* Add Certificate Tab */}
        {activeTab === "add" && (
          <div className="mx-auto max-w-3xl rounded-3xl border border-purple-500/20 bg-[#120C28]/90 p-6 shadow-[0_0_50px_rgba(168,85,247,0.1)] backdrop-blur-2xl md:p-8">
            {!isUnlocked ? (
              <form onSubmit={handlePasswordSubmit} className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-purple-500/10 p-3 text-purple-400 border border-purple-500/20">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Admin Access Required</h3>
                </div>

                <input
                  type="password"
                  placeholder="Enter frontend password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-style"
                />

                {passwordError && (
                  <p className="text-sm font-medium text-red-400">{passwordError}</p>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                >
                  <ShieldCheck className="h-5 w-5" />
                  Unlock Panel
                </button>
              </form>
            ) : (
              <form onSubmit={handleSaveCertificate} className="space-y-5">
                <h3 className="text-2xl font-bold text-purple-100">Add New Certificate</h3>

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

                <input
                  name="verificationLink"
                  value={formData.verificationLink}
                  onChange={handleChange}
                  placeholder="Verification Link"
                  className="input-style"
                />

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-purple-500/30 bg-purple-500/5 p-8 text-center transition-all hover:border-purple-500/60 hover:bg-purple-500/10">
                  <UploadCloud className="mb-3 h-10 w-10 text-purple-400" />
                  <span className="font-medium text-slate-300">
                    {formData.certificateImage ? formData.certificateImage.name : "Upload Certificate Image"}
                  </span>
                  <input
                    type="file"
                    name="certificateImage"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-4 font-extrabold text-white shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(168,85,247,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <UploadCloud className="h-5 w-5" />
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
            {fetchError && <p className="mb-6 text-center text-red-400">{fetchError}</p>}

            {certificates.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-purple-500/20 bg-[#120C28]/60 p-12 text-center shadow-lg backdrop-blur-xl">
                <Award className="mx-auto mb-4 h-12 w-12 text-purple-400/50" />
                <h3 className="text-2xl font-bold text-slate-300">No Certificates Found</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Add certificate tab se certificate upload karo.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((cert) => (
                  <div
                    key={cert._id}
                    className="group rounded-3xl border border-purple-500/10 bg-[#110B26]/90 p-5 shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/40 hover:bg-[#150E30]/95 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
                  >
                    <div className="mb-4 overflow-hidden rounded-2xl border border-purple-500/10 bg-[#070412]">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-200 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                      <Building2 className="h-4 w-4 text-purple-400" />
                      {cert.organization}
                    </p>

                    <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      {cert.issueDate}
                    </p>

                    <div className="mt-5 flex gap-3">
                      <button
                        onClick={() => openCertificateInNewTab(cert.imageUrl)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                      >
                        <Eye className="h-4 w-4" />
                        View Certificate
                      </button>

                      {cert.verificationLink && (
                        <a
                          href={cert.verificationLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-3 text-purple-300 transition-all hover:bg-purple-500/20"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Font & Custom styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .certifications-container {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .input-style {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid rgba(168, 85, 247, 0.15);
          background: rgba(17, 11, 38, 0.9);
          padding: 0.9rem 1rem;
          color: white;
          outline: none;
          transition: 0.25s ease;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
        }

        .input-style::placeholder {
          color: rgba(203, 213, 225, 0.4);
        }

        .input-style:focus {
          border-color: #a855f7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2),
            0 0 30px rgba(168, 85, 247, 0.15);
        }
      `}</style>
    </section>
  );
};

export default Cirtifications;