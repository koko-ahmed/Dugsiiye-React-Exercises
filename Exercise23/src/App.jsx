
import { useState } from "react";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Product Manager",
];

const skillsList = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  "UI Design",
  "API Development",
];

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    terms: false,
    notifications: false,
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation
  const validate = (data) => {
    const errors = {};

    if (!/^[A-Za-z ]{2,30}$/.test(data.fullName.trim())) {
      errors.fullName = "Use 2-30 letters and spaces only.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!roles.includes(data.role)) {
      errors.role = "Please select a valid role.";
    }

    if (
      data.experience === "" ||
      !Number.isInteger(Number(data.experience)) ||
      Number(data.experience) < 0 ||
      Number(data.experience) > 50
    ) {
      errors.experience = "Enter a whole number from 0 to 50.";
    }

    if (data.skills.length === 0) {
      errors.skills = "Select at least one skill.";
    }

    if (!data.terms) {
      errors.terms = "You must accept the terms.";
    }

    return errors;
  };

  const errors = validate(formData);

  // Handle text, number, dropdown, and checkbox inputs
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setSubmitted(false);
  };

  // Handle skill checkboxes
  const handleSkillChange = (event) => {
    const { value, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));

    setTouched((prev) => ({
      ...prev,
      skills: true,
    }));

    setSubmitted(false);
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      role: true,
      experience: true,
      skills: true,
      terms: true,
    });

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Demo: no data sent to a server
    console.log("Application:", formData);
    setSubmitted(true);
  };

  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 " +
    "outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-5"
      >
        <h1 className="text-2xl font-bold text-center">
          Developer Application Form
        </h1>

        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium">
            Full Name *
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputStyle}
          />

          {touched.fullName && errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">
            Email Address *
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={inputStyle}
          />

          {touched.email && errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block mb-2 font-medium">
            Role *
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputStyle}
          >
            <option value="">Select a role</option>

            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          {touched.role && errors.role && (
            <p className="text-red-500 text-sm mt-1">
              {errors.role}
            </p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="block mb-2 font-medium">
            Years of Experience *
          </label>

          <input
            type="number"
            name="experience"
            min="0"
            max="50"
            step="1"
            value={formData.experience}
            onChange={handleChange}
            placeholder="0-50"
            className={inputStyle}
          />

          {touched.experience && errors.experience && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience}
            </p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-3 font-medium">
            Technical Skills *
          </label>

          <div className="grid grid-cols-2 gap-3">
            {skillsList.map((skill) => (
              <label
                key={skill}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkillChange}
                  className="w-4 h-4 accent-blue-600"
                />
                {skill}
              </label>
            ))}
          </div>

          {touched.skills && errors.skills && (
            <p className="text-red-500 text-sm mt-2">
              {errors.skills}
            </p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="w-4 h-4 accent-blue-600"
            />
            I agree to the Terms & Conditions *
          </label>

          {touched.terms && errors.terms && (
            <p className="text-red-500 text-sm mt-1">
              {errors.terms}
            </p>
          )}
        </div>

        {/* Notifications */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="w-4 h-4 accent-blue-600"
          />
          Receive application updates
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Submit Application
        </button>

        {submitted && (
          <p className="text-green-600 text-center font-medium">
            Application validated successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default App;
