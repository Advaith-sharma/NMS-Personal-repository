import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const roles = [
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "employee", label: "Employee" },
  { value: "superadmin", label: "Super Admin" },
];

const departments = [
  "Human Resources",
  "Engineering",
  "Sales",
  "Marketing",
  "Finance",
  "IT Support",
];



const handleLogout = () => {
  sessionStorage.clear();
  navigate("/");
};

export default function AddUser() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "",
    department: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(`User "${form.username}" created successfully!`);
  //   setForm({ username: "", password: "", role: "", department: "" });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const token = sessionStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5234/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // In case you add JWT later
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to create user");
      }

      const result = await res.json();
      setMessage(`User "${form.username}" created successfully!`);
      setForm({ username: "", password: "", role: "", department: "" });
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };


  return (
    <div className="min-h-screen bg-[#F6F8FA] flex items-center justify-center font-['Roboto'] px-4">
      <div className="w-full max-w-lg bg-[#FFFFF2] p-8 rounded-2xl shadow-xl border border-[#E5E7EB]">
        <div className="flex flex-col items-center mb-6">
          <img src="/vite.svg" alt="Logo" className="w-10 h-10 mb-2" />
          <h2 className="text-2xl font-bold text-[#125640] tracking-tight font-['Roboto'] text-center">
            Super Admin Panel
          </h2>
        </div>
        <h3 className="text-lg font-semibold text-[#1E293B] mb-4 text-center">
          Create New User
        </h3>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-[#125640] mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              required
              className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2 text-base text-[#1E293B] placeholder-[#64748B] outline-none focus:ring-2 focus:ring-[#00C599]"
              placeholder="Enter username"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#125640] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                required
                className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2 text-base text-[#1E293B] placeholder-[#64748B] outline-none pr-10 focus:ring-2 focus:ring-[#00C599]"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#64748B]"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={0}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // EyeOff SVG
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7 1.21-2.77 3.47-5.01 6.29-6.32m3.04-.62A10.94 10.94 0 0 1 12 5c5 0 9.27 3.11 11 7a10.96 10.96 0 0 1-4.06 5.02M1 1l22 22" />
                  </svg>
                ) : (
                  // Eye SVG
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M2.05 12C3.11 7.05 7.28 3.5 12 3.5c4.72 0 8.89 3.55 9.95 8.5-1.06 4.95-5.23 8.5-9.95 8.5-4.72 0-8.89-3.55-9.95-8.5z" />
                  </svg>
                )}
              </span>
            </div>
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-[#125640] mb-1">
              Role
            </label>
            <select
              name="role"
              id="role"
              required
              className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2 text-base text-[#1E293B] outline-none focus:ring-2 focus:ring-[#00C599]"
              value={form.role}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select role
              </option>
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-[#125640] mb-1">
              Department
            </label>
            <select
              name="department"
              id="department"
              required
              className="w-full bg-white border border-[#CBD5E1] rounded-lg px-4 py-2 text-base text-[#1E293B] outline-none focus:ring-2 focus:ring-[#00C599]"
              value={form.department}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select department
              </option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg font-semibold transition-all shadow-sm hover:brightness-110 mt-2"
            style={{
              background: "linear-gradient(91.37deg, #003F31 0%, #006C54 45%, #009877 82%, #00C599 100%)",
            }}
          >
            Create User
          </button>
        </form>

        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline font-medium"
          >
            Logout
          </button>
        </div>

        {message && (
          <div className="mt-4 text-green-600 font-medium text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
