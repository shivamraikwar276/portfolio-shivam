

// // import { useState } from "react";
// // import axios from "axios";
// // import { FaPaperPlane, FaUser, FaEnvelope, FaPen } from "react-icons/fa";

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState("");
// //   const [error, setError] = useState("");

// //   function handleChange(e) {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });   
// //   }

// //   async function handleSubmit(e) {
// //     e.preventDefault();

// //     try {
// //       setLoading(true);
// //       setSuccess("");
// //       setError("");

// //       const res = await axios.post(
// //         `${import.meta.env.VITE_API_URL}/contact/create`,
// //         formData
// //       );

// //       setSuccess(res.data.message || "Message sent successfully");

// //       setFormData({
// //         name: "",
// //         email: "",
// //         subject: "",
// //         message: "",
// //       });
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   return (
// //     <section
// //       id="contact"
// //       className="scroll-mt-20 w-full bg-[#050816] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
// //     >
// //       <div className="max-w-4xl mx-auto">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl sm:text-5xl font-black tracking-wide">
// //             CON<span className="text-cyan-400">TACT</span>
// //           </h2>

// //           <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.45)]"></div>

// //           <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto">
// //             Have a project idea or opportunity? Send me a message.
// //           </p>
// //         </div>

// //         <div
// //           className="
// //             group relative rounded-3xl p-[1.5px]
// //             bg-gradient-to-br from-cyan-400/40 via-purple-500/25 to-blue-500/40
// //             shadow-[0_20px_70px_rgba(34,211,238,0.10)]
// //             transition-all duration-500 transform-gpu
// //             hover:-translate-y-3 hover:scale-[1.01]
// //             hover:shadow-[0_25px_90px_rgba(34,211,238,0.18)]
// //             hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(2deg)_scale(1.01)]
// //           "
// //         >
// //           <div className="absolute -inset-2 bg-cyan-400/5 blur-2xl rounded-3xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>

// //           <form
// //             onSubmit={handleSubmit}
// //             className="
// //               relative overflow-hidden rounded-3xl
// //               bg-[#111827]
// //               p-7 sm:p-10 lg:p-12
// //               border border-white/10
// //             "
// //           >
// //             <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl"></div>
// //             <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

// //             <div className="relative text-center mb-10">
// //               <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl shadow-[0_10px_30px_rgba(34,211,238,0.12)]">
// //                 <FaPaperPlane />
// //               </div>

// //               <h3 className="text-3xl sm:text-4xl font-black text-gray-200 group-hover:text-cyan-300 transition-all duration-300">
// //                 Send Message
// //               </h3>

// //               <p className="text-gray-400 mt-3">
// //                 I will try to reply as soon as possible.
// //               </p>
// //             </div>

// //             <div className="relative space-y-6">
// //               <div className="relative">
// //                 <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   placeholder="Your Name"
// //                   className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
// //                 />
// //               </div>

// //               <div className="relative">
// //                 <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   placeholder="Your Email"
// //                   className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
// //                 />
// //               </div>

// //               <div className="relative">
// //                 <FaPen className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
// //                 <input
// //                   type="text"
// //                   name="subject"
// //                   value={formData.subject}
// //                   onChange={handleChange}
// //                   placeholder="Subject"
// //                   className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
// //                 />
// //               </div>

// //               <textarea
// //                 rows="6"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 placeholder="Your Message"
// //                 className="w-full px-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none resize-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
// //               ></textarea>

// //               {success && (
// //                 <p className="text-green-400 text-center font-semibold">
// //                   {success}
// //                 </p>
// //               )}

// //               {error && (
// //                 <p className="text-red-400 text-center font-semibold">
// //                   {error}
// //                 </p>
// //               )}

// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className="
// //                   w-full flex items-center justify-center gap-3
// //                   px-8 py-4 rounded-full
// //                   bg-cyan-500 text-white text-lg font-bold
// //                   hover:bg-cyan-600
// //                   hover:-translate-y-1
// //                   hover:shadow-[0_10px_30px_rgba(34,211,238,0.22)]
// //                   transition-all duration-300
// //                   disabled:opacity-60 disabled:cursor-not-allowed
// //                 "
// //               >
// //                 {loading ? "Sending..." : "Send Message"}
// //                 <FaPaperPlane />
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;





// import { useState } from "react";
// import axios from "axios";
// import { FaPaperPlane, FaUser, FaEnvelope, FaPen } from "react-icons/fa";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");

//   function handleChange(e) {
//     // Clear alerts on input change
//     if (success) setSuccess("");
//     if (error) setError("");

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     // Quick client-side validation
//     if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
//       setError("Please fill out all fields.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setSuccess("");
//       setError("");

//       // Normalize base API URL to avoid double slashes
//       const baseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/+$/, "");

//       const res = await axios.post(`${baseUrl}/contact/create`, formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (res.data?.success) {
//         setSuccess(res.data.message || "Message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         setError(res.data?.message || "Failed to send message.");
//       }
//     } catch (err) {
//       console.error("Contact Form Submit Error:", err);
//       // Fallback message for network or server errors
//       setError(
//         err.response?.data?.message || 
//         "Unable to connect to the server. Please try again later."
//       );
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <section
//       id="contact"
//       className="scroll-mt-20 w-full bg-[#050816] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
//     >
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-black tracking-wide">
//             CON<span className="text-cyan-400">TACT</span>
//           </h2>

//           <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.45)]"></div>

//           <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto">
//             Have a project idea or opportunity? Send me a message.
//           </p>
//         </div>

//         <div
//           className="
//             group relative rounded-3xl p-[1.5px]
//             bg-gradient-to-br from-cyan-400/40 via-purple-500/25 to-blue-500/40
//             shadow-[0_20px_70px_rgba(34,211,238,0.10)]
//             transition-all duration-500 transform-gpu
//             hover:-translate-y-3 hover:scale-[1.01]
//             hover:shadow-[0_25px_90px_rgba(34,211,238,0.18)]
//             hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(2deg)_scale(1.01)]
//           "
//         >
//           <div className="absolute -inset-2 bg-cyan-400/5 blur-2xl rounded-3xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>

//           <form
//             onSubmit={handleSubmit}
//             className="
//               relative overflow-hidden rounded-3xl
//               bg-[#111827]
//               p-7 sm:p-10 lg:p-12
//               border border-white/10
//             "
//           >
//             <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl"></div>
//             <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

//             <div className="relative text-center mb-10">
//               <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl shadow-[0_10px_30px_rgba(34,211,238,0.12)]">
//                 <FaPaperPlane />
//               </div>

//               <h3 className="text-3xl sm:text-4xl font-black text-gray-200 group-hover:text-cyan-300 transition-all duration-300">
//                 Send Message
//               </h3>

//               <p className="text-gray-400 mt-3">
//                 I will try to reply as soon as possible.
//               </p>
//             </div>

//             <div className="relative space-y-6">
//               <div className="relative">
//                 <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
//                 />
//               </div>

//               <div className="relative">
//                 <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
//                 />
//               </div>

//               <div className="relative">
//                 <FaPen className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
//                 <input
//                   type="text"
//                   name="subject"
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject"
//                   className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
//                 />
//               </div>

//               <textarea
//                 rows="6"
//                 name="message"
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 className="w-full px-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none resize-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
//               ></textarea>

//               {success && (
//                 <p className="text-green-400 text-center font-semibold bg-green-400/10 py-3 rounded-xl border border-green-400/20">
//                   {success}
//                 </p>
//               )}

//               {error && (
//                 <p className="text-red-400 text-center font-semibold bg-red-400/10 py-3 rounded-xl border border-red-400/20">
//                   {error}
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="
//                   w-full flex items-center justify-center gap-3
//                   px-8 py-4 rounded-full
//                   bg-cyan-500 text-white text-lg font-bold
//                   hover:bg-cyan-600
//                   hover:-translate-y-1
//                   hover:shadow-[0_10px_30px_rgba(34,211,238,0.22)]
//                   transition-all duration-300
//                   disabled:opacity-60 disabled:cursor-not-allowed
//                 "
//               >
//                 {loading ? "Sending..." : "Send Message"}
//                 <FaPaperPlane />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;













import { useState } from "react";
import axios from "axios";
import { FaPaperPlane, FaUser, FaEnvelope, FaPen } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    if (success) setSuccess("");
    if (error) setError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // 1. Client-Side Quick Field Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    try {
      setLoading(true);
      setSuccess("");
      setError("");

      // 2. Base URL cleanup & construction
      const envUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const baseUrl = envUrl.replace(/\/+$/, ""); 

      // Send request to API endpoint
      const res = await axios.post(`${baseUrl}/contact/create`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data?.success) {
        setSuccess(res.data.message || "Message sent successfully!");
        
        // Reset Form Fields after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(res.data?.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("❌ Contact Form Submit Error:", err);
      
      // Catch specific backend error message or default to network failure
      const errorMessage =
        err.response?.data?.message ||
        "Unable to connect to the server. Please check your internet connection.";
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full bg-[#050816] text-white px-5 sm:px-8 lg:px-20 py-24 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black tracking-wide">
            CON<span className="text-cyan-400">TACT</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-4 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.45)]"></div>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Have a project idea or opportunity? Send me a message.
          </p>
        </div>

        {/* Outer Glowing Form Wrapper */}
        <div
          className="
            group relative rounded-3xl p-[1.5px]
            bg-gradient-to-br from-cyan-400/40 via-purple-500/25 to-blue-500/40
            shadow-[0_20px_70px_rgba(34,211,238,0.10)]
            transition-all duration-500 transform-gpu
            hover:-translate-y-2 hover:scale-[1.005]
            hover:shadow-[0_25px_90px_rgba(34,211,238,0.18)]
          "
        >
          <div className="absolute -inset-2 bg-cyan-400/5 blur-2xl rounded-3xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>

          <form
            onSubmit={handleSubmit}
            className="
              relative overflow-hidden rounded-3xl
              bg-[#111827]
              p-7 sm:p-10 lg:p-12
              border border-white/10
            "
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative text-center mb-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-2xl shadow-[0_10px_30px_rgba(34,211,238,0.12)]">
                <FaPaperPlane />
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-gray-200 group-hover:text-cyan-300 transition-all duration-300">
                Send Message
              </h3>

              <p className="text-gray-400 mt-3">
                I will try to reply as soon as possible.
              </p>
            </div>

            <div className="relative space-y-6">
              {/* Name Input */}
              <div className="relative">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
                />
              </div>

              {/* Subject Input */}
              <div className="relative">
                <FaPen className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400" />
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
                />
              </div>

              {/* Message Textarea */}
              <textarea
                rows="6"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-2xl bg-[#0B1120]/95 border border-cyan-400/15 text-white outline-none resize-none focus:border-cyan-400/60 focus:bg-cyan-400/5 transition-all"
              ></textarea>

              {/* Success Notification Alert */}
              {success && (
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-center font-semibold text-sm animate-fade-in">
                  ✨ {success}
                </div>
              )}

              {/* Error Notification Alert */}
              {error && (
                <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-center font-semibold text-sm animate-fade-in">
                  ⚠️ {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full flex items-center justify-center gap-3
                  px-8 py-4 rounded-full
                  bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold
                  hover:from-cyan-400 hover:to-blue-500
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)]
                  active:translate-y-0
                  transition-all duration-300
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                {loading ? "Sending Message..." : "Send Message"}
                <FaPaperPlane className={loading ? "animate-pulse" : ""} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;