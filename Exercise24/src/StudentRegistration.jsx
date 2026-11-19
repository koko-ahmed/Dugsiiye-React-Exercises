
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  grade: "",
  subjects: [],
};

const subjects = ["Mathematics", "Science", "English"];

const StudentRegistration = () => {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate all form fields
  const validate = () => {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Student name is required";
    } else if (!/^[A-Za-z ]+$/.test(form.name)) {
      errors.name = "Only letters and spaces are allowed";
    } else if (form.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      errors.email = "Please enter a valid email";
    }

    if (!form.grade) {
      errors.grade = "Please select a grade";
    }

    if (form.subjects.length === 0) {
      errors.subjects = "Select at least one subject";
    }

    return errors;
  };

  const errors = validate();

  // Handle text inputs and dropdown
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle subject checkboxes
  const handleSubjectChange = (subject) => {
    setForm((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((item) => item !== subject)
        : [...prev.subjects, subject],
    }));

    setTouched((prev) => ({
      ...prev,
      subjects: true,
    }));
  };

  // Handle blur validation
  const handleBlur = (e) => {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    console.log("Student Registration:", form);

    alert(
      `Student Registered Successfully!

Name: ${form.name}
Email: ${form.email}
Grade: ${form.grade}
Subjects: ${form.subjects.join(", ")}`
    );

    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      grade: "",
      subjects: [],
    });

    setTouched({});
    setSubmitted(false);
  };

  const showError = (field) =>
    (touched[field] || submitted) && errors[field];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Student Registration
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Fill out the form to register
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Student Name */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Student Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter student name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {showError("name") && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="example@domain.com"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {showError("email") && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Grade Level */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Grade Level
            </label>

            <select
              name="grade"
              value={form.grade}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Grade</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>

            {showError("grade") && (
              <p className="text-red-500 text-sm mt-1">
                {errors.grade}
              </p>
            )}
          </div>

          {/* Subject Interests */}
          <div className="mb-6">
            <label className="block font-semibold mb-3">
              Subject Interests
            </label>

            <div className="space-y-3">
              {subjects.map((subject) => (
                <label
                  key={subject}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={form.subjects.includes(subject)}
                    onChange={() =>
                      handleSubjectChange(subject)
                    }
                    className="w-5 h-5 accent-blue-600"
                  />

                  <span className="text-gray-700">
                    {subject}
                  </span>
                </label>
              ))}
            </div>

            {showError("subjects") && (
              <p className="text-red-500 text-sm mt-2">
                {errors.subjects}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Register Student
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
