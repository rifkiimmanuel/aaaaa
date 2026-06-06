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
    "Data Science MySkill",
    "ETL in Python & SQL LinkedIn Learning",
    "Belajar Dasar SQL Dicoding",
    "Belajar Dasar Data Science Dicoding",
    "Memulai Pemrograman Dengan Python Dicoding",
    "Belajar Machine Learning Untuk Pemula",
    "Belajar Dasar Visualisasi Data",
  ];

  return (
    <section
  id="certificate"
  className="bg-white px-6 md:px-16 lg:px-24 py-24 scroll-mt-24"
>

      {/* Header */}
      <div className="mb-20">

        <p className="text-indigo-400 font-semibold uppercase tracking-[3px] mb-3">
          
        </p>

        <h2 className="text-5xl md:text-6xl font-light text-[#0cb64d]">
        Certificate & Skills
        </h2>

      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

        {skillCategories.map((category) => (

          <div
            key={category.title}
            className="
            bg-white
            border
            border-[#e5e7eb]
            rounded-3xl
            p-7
            shadow-sm
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            hover:-translate-y-1
            transition-all
            duration-300
            " >

            {/* Title */}
            <div className="flex items-center gap-4 mb-6">

              <span className="text-2xl">
                {category.icon}
              </span>

              <h3 className="text-2xl font-bold text-[#111827]">
                {category.title}
              </h3>

            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">

              {category.skills.map((skill) => (

                <span
                  key={skill}
                  className="
                  bg-[#f3f4f6]
                  border
                  border-[#e5e7eb]
                  text-[#374151]
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  hover:bg-[#e5e7eb]
                  transition-all
                  duration-300
                  " >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* Certificates */}
      <div className="
bg-white
border
border-[#e5e7eb]
rounded-3xl
p-8
shadow-sm
">

        {/* Title */}
        <div className="flex items-center gap-4 mb-8">

          <span className="text-2xl">
            📜
          </span>

          <h3 className="text-3xl font-bold text-[#111827]">
            Certifications & Achievements
          </h3>

        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {certificates.map((cert) => (

            <div
              key={cert}
              className="
              bg-white
              border
              border-[#e5e7eb]
              rounded-2xl
              p-5
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
              " >

              <div className="flex items-start justify-between gap-4">

              <div className="flex items-center gap-3">
  <span className="text-[#0cb64d] text-lg leading-none">
    •
  </span>

  <p className="text-[#595d58] text-sm">
    {cert}
  </p>
</div>

                <span className="text-[#0cb64d]">
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