import { useState } from 'react';


const StudentDashboard = () => {
  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
      color: "bg-pink-500",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      dueDate: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      dueDate: "2024-03-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      dueDate: "2024-03-25",
      status: "in-progress",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  const stats = [
    {
      id: 1,
      label: "Average Grade",
      value: "88%",
      icon: "📊",
      color: "bg-blue-100",
    },
    {
      id: 2,
      label: "Courses",
      value: "3",
      icon: "📚",
      color: "bg-purple-100",
    },
    {
      id: 3,
      label: "Study Hours",
      value: "45h",
      icon: "⏰",
      color: "bg-orange-100",
    },
    {
      id: 4,
      label: "Assignments",
      value: "12",
      icon: "✍️",
      color: "bg-green-100",
    },
  ];

  const statusColors = {
    pending: "bg-red-100 text-red-700",
    completed: "bg-green-100 text-green-700",
    "in-progress": "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Welcome back, Student! 👋
            </h1>

            <p className="mt-1 text-sm text-gray-500 sm:text-base">
              Here's what's happening with your courses today.
            </p>
          </div>

          <div className="ml-3 flex items-center gap-4 sm:gap-6">
            {/* Notification */}
            <button
              type="button"
              aria-label="Notifications"
              className="relative cursor-pointer rounded-full p-2 transition hover:bg-gray-100"
            >
              <span className="text-xl">🔔</span>
              <span className="absolute right-2 top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* Profile */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-purple-500 to-pink-500 font-bold text-white shadow-sm">
              S
            </div>
          </div>
        </header>

        {/* ================= STATS ================= */}
        <section className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${stat.color}`}
              >
                {stat.icon}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-800">
                  {stat.value}
                </h2>
              </div>
            </div>
          ))}
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

          {/* ================= COURSE PROGRESS ================= */}
          <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
            <h2 className="mb-5 text-lg font-bold text-slate-800">
              Course Progress
            </h2>

            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:bg-gray-100"
                >
                  {/* Course Name */}
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-slate-800">
                      {course.name}
                    </h3>

                    <span className="text-sm font-medium text-gray-500">
                      {course.progress}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200"
                    role="progressbar"
                    aria-label={`${course.name} progress`}
                    aria-valuenow={course.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

                  {/* Course Details */}
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-500">
                    <p>Next: {course.nextLesson}</p>
                    <p>{course.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="space-y-6">

            {/* UPCOMING ASSIGNMENTS */}
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-5 text-lg font-bold text-slate-800">
                Upcoming Assignments
              </h2>

              <div className="space-y-5">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="flex items-start justify-between gap-3"
                  >
                    {/* Assignment Information */}
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-slate-800">
                        {assignment.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {assignment.course}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="shrink-0 text-right">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusColors[assignment.status]}`}
                      >
                        {assignment.status === "in-progress"
                          ? "In Progress"
                          : assignment.status}
                      </span>

                      <p className="mt-1 text-xs text-gray-400">
                        Due {assignment.dueDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ================= ANNOUNCEMENTS ================= */}
            <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-5 text-lg font-bold text-slate-800">
                Announcements
              </h2>

              <div className="space-y-5">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h3 className="text-sm font-semibold text-slate-800">
                      {announcement.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {announcement.message}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {announcement.time}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;


