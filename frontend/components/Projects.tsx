export default function Projects() {

  const projects = [
    {
      title: "Book Rent Management System",
      company: "Software Engineering Course",
      year: "2024",

      description:
        "This is a web-based Book Rent Management System as the final project for the Software Engineering course, showcasing advanced technical skills in HTML, CSS, MongoDB, JavaScript, Node.js, and Express.js.",

      tech: [
        "HTML",
        "MongoDB",
        "JavaScript",
        "Node.js",
      ],

      gradient:
        "from-blue-500 to-indigo-600",

      github:
        "https://github.com/rifkiimmanuel/Book-Rent-Management-System",
    },

    {
      title: "Food & Restaurant Reservation System",
      company: "Database System Project",
      year: "2022",

      description:
        "This is a web-based Food and Reservation System for a restaurant as part of the Database System final project.",

      tech: [
        "HTML",
        "PHP",
        "JavaScript",
        "MySQL",
      ],

      gradient:
        "from-pink-500 to-red-500",

      github:
        "https://github.com/rifkiimmanuel/Food-Reservation-System-Using-MySQL-and-PHP",
    },

    {
      title: "ComInfo - Mobile Application for PUFA Computing",
      company: "Mobile Programming Course",
      year: "2024",

      description:
        "ComInfo is designed to help computing students acquire essential information about organizations within President University.",

      tech: [
        "Java",
        "AndroidStudio",
        "SQLite",
      ],

      gradient:
        "from-cyan-500 to-teal-500",

      github:
        "https://github.com/rifkiimmanuel/Cominfo---Mobile-App-For-PUFA-COMPUTING",
    },

    {
      title: "AI-Powered Diet Assistant",
      company: "Artificial Intelligence Course",
      year: "2024",

      description:
        "This web-based application assists users in diet and health management through calorie tracking, food image prediction, and nutrition analysis.",

      tech: [
        "HTML",
        "Javascript",
        "Python",
        "Django",
        "CNN Model",
      ],

      gradient:
        "from-green-500 to-emerald-500",

      github:
        "https://github.com/rifkiimmanuel/AI-Powered-Diet-System-Using-CNN-Linear-Regression-And-XGBoostRegressor",
    },

    {
      title: "CurhatBot: An LSTM-Based Chatbot",
      company: "Natural Language Processing Course",
      year: "2025",

      description:
        "This chatbot was designed using Deep Learning with Long Short Term Memory (LSTM) to provide emotional support conversations.",

      tech: [
        "Python",
        "LSTM",
      ],

      gradient:
        "from-purple-500 to-indigo-500",

      github:
        "https://github.com/rifkiimmanuel/Emotional-Support-Chatbot-RNN-LSTM-",
    },

    {
      title: "Multilingual Recipe Generator",
      company: "Artificial Intelligence Course",
      year: "2024",

      description:
        "This project allows users to verbally list ingredients and receive recipe recommendations in multiple languages.",

      tech: [
        "Python",
      ],

      gradient:
        "from-orange-500 to-red-500",

      github:
        "https://github.com/rifkiimmanuel/Multi-Language-Recipe-Generator",
    },
  ];

  return (

<section
  id="projects"
  className="bg-white px-6 md:px-16 lg:px-24 py-24 scroll-mt-24"
>

      {/* Header */}
      <div className="mb-20">

        <p className="text-[#0cb64d] font-semibold uppercase tracking-[3px] mb-3">
         
        </p>

        <h2 className="text-5xl md:text-6xl font-light text-[#0cb64d]">
          Featured Work
        </h2>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="
bg-white
border
border-[#e5e7eb]
rounded-3xl
overflow-hidden
shadow-sm
hover:-translate-y-2
hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
transition-all
duration-300
"          >

            {/* Top Gradient */}
            <div
              className={`h-[220px] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >

              <div className="text-6xl">
                🚀
              </div>

            </div>

            {/* Content */}
            <div className="p-7">

              {/* Company + Year */}
              <div className="flex items-center justify-between mb-4">

                <p className="text-indigo-400 text-xs uppercase tracking-[2px] font-semibold">
                  {project.company}
                </p>

                <p className="text-[#595d58] text-sm">
                  {project.year}
                </p>

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#111827] mb-4 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#595d58] leading-relaxed mb-6 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-7">

                {project.tech.map((item) => (

                  <span
                    key={item}
                    className="
bg-[#f3f4f6]
border
border-[#e5e7eb]
text-[#374151]
px-3
py-1
rounded-full
text-xs
"
                   >
                    {item}
                  </span>

                ))}

              </div>

              {/* Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
w-full
flex
items-center
justify-center
bg-[#0cb64d]
hover:bg-[#09963f]
text-white
py-3
rounded-2xl
font-medium
transition-all
duration-300
"              >

                View Project

              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}