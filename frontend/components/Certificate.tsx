"use client";

export default function Certificate() {

  const skillCategories = [
    {
      title: "Programming & Data",
      icon: "💻",

      skills: [
        "Python",
        "JavaScript",
        "SQL",
        "NumPy",
        "Pandas",
        "PyTorch",
        "TensorFlow",
      ],
    },

    {
      title: "AI/ML Specializations",
      icon: "🧠",

      skills: [
        "LangChain",
        "RAG",
        "LLM",
        "ChromaDB",
        "Computer Vision",
      ],
    },

    {
      title: "Development & Deployment",
      icon: "🚀",

      skills: [
        "Flask",
        "FastAPI",
        "GCP",
        "Streamlit",
        "HuggingFace",
      ],
    },

    {
      title: "Databases",
      icon: "🗄️",

      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",

      ],
    },
  ];

  const certificates = [
    "SQL (Advanced) HackerRank",
    "SQL (Intermediate) HackerRank",
    "SQL (Basic) HackerRank",
    "ETL in Python & SQL LinkedIn Learning",
    "Data Science MySkill",
    "Belajar Dasar SQL Dicoding",
  ];

  return (
    <section
      id="certificate"
      className="bg-[#020617] px-6 md:px-16 lg:px-24 py-24"
    >

      {/* Header */}
      <div className="mb-20">

        <p className="text-indigo-400 font-semibold uppercase tracking-[3px] mb-3">
          
        </p>

        <h2 className="text-5xl font-bold text-white">
        Certificate & Skills
        </h2>

      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

        {skillCategories.map((category) => (

          <div
            key={category.title}
            className="bg-[#0B1120] border border-indigo-900/30 rounded-3xl p-7 hover:shadow-2xl transition-all duration-300"
          >

            {/* Title */}
            <div className="flex items-center gap-4 mb-6">

              <span className="text-2xl">
                {category.icon}
              </span>

              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>

            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill) => (

                <span
                  key={skill}
                  className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm hover:bg-indigo-500/20 transition-all duration-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* Certificates */}
      <div className="bg-[#0B1120] border border-indigo-900/30 rounded-3xl p-8">

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">

          <span className="text-2xl">
            📜
          </span>

          <h3 className="text-3xl font-bold text-white">
            Certifications & Achievements
          </h3>

        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {certificates.map((cert) => (

            <div
              key={cert}
              className="bg-[#111827] border border-indigo-900/20 rounded-2xl p-5 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex gap-3">

                  <span className="text-yellow-400 mt-1">
                    ●
                  </span>

                  <p className="text-gray-300 leading-relaxed text-sm">
                    {cert}
                  </p>

                </div>

                <span className="text-indigo-400">
                  ↗
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}