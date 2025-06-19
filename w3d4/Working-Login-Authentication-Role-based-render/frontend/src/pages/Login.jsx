// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import watermark from "../assets/watermark.png";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="relative w-screen h-screen flex items-center justify-center bg-white font-['Roboto'] overflow-hidden">
//       {/* Watermark Background */}
//       <div
//         className="absolute inset-0 w-full h-full pointer-events-none select-none"
//         aria-hidden="true"
//         style={{
//           backgroundImage: `url(${watermark})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "contain",
//           opacity: 0.10,
//           zIndex: 1,
//         }}
//       />

//       {/* Main Content */}
//       <div className="w-[90vw] max-w-md bg-[#FFFFF2] p-8 rounded-2xl shadow-xl border border-[#E5E7EB] relative z-10">
//         <h2 className="text-3xl font-extrabold text-[#1E293B] mb-6 text-center tracking-tight font-['Roboto']">
//           Welcome Back
//         </h2>
//         <form className="flex flex-col gap-6">
//           {/* Username Field */}
//           <div className="bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 flex items-center">
//             <input
//               type="text"
//               id="username"
//               placeholder="Username"
//               className="w-full bg-transparent outline-none text-base text-[#1E293B] placeholder-[#64748B]"
//               autoComplete="username"
//             />
//           </div>
//           {/* Password Field with Eye Toggle */}
//           <div className="bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 relative flex items-center">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               placeholder="Password"
//               className="w-full bg-transparent outline-none text-base text-[#1E293B] placeholder-[#64748B] pr-8"
//               autoComplete="current-password"
//             />
//             <div
//               className="absolute right-3 bottom-3 cursor-pointer text-[#64748B]"
//               onClick={() => setShowPassword((prev) => !prev)}
//               tabIndex={0}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//               role="button"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="text-white py-2 rounded-lg font-semibold transition-all shadow-sm hover:brightness-110"
//             style={{
//               background: "linear-gradient(91.37deg, #003F31 0%, #006C54 45%, #009877 82%, #00C599 100%)",
//             }}
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// src/pages/Login.jsx
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import watermark from "../assets/watermark.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5234/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("role", data.user.role);
      sessionStorage.setItem("username", data.user.username);

      console.log(data);

      // Navigate based on role
      if (data.user.role === "SuperAdmin") {
        navigate("/add-user");
        console.log("Should be allowed as SuperAdmin");
      } else if (data.user.role === "Admin") {
        navigate("/admin-page");
      } else if (data.user.role === "User") {
        navigate("/user-page");
      } else {
        setError("Unknown role. Contact administrator.");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-white font-['Roboto'] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${watermark})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.1,
          zIndex: 1,
        }}
      />
      <div className="w-[90vw] max-w-md bg-[#FFFFF2] p-8 rounded-2xl shadow-xl border border-[#E5E7EB] relative z-10">
        <h2 className="text-3xl font-extrabold text-[#1E293B] mb-6 text-center">Welcome Back</h2>
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="username"
            className="bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 text-base text-[#1E293B] placeholder-[#64748B]"
            value={form.username}
            onChange={handleChange}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              className="bg-white border border-[#CBD5E1] rounded-lg px-4 py-3 pr-10 w-full text-base text-[#1E293B] placeholder-[#64748B]"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#64748B]"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <button
            type="submit"
            className="text-white py-2 rounded-lg font-semibold transition-all shadow-sm hover:brightness-110"
            style={{
              background: "linear-gradient(91.37deg, #003F31 0%, #006C54 45%, #009877 82%, #00C599 100%)",
            }}
          >
            Sign In
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}
