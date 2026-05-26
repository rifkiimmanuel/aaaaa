import Image from "next/image";
import { Download } from "lucide-react";

export default function Overview() {

  const stats = [
    {
      icon: "🎓",
      title: "3.89",
      subtitle: "GPA / 4.00",
    },
    {
      icon: "🏆",
      title: "Rank 3",
      subtitle: "Jababeka Scholar",
    },
    {
      icon: "🌎",
      title: "11+",
      subtitle: "Courses Taken",
    },
    {
      icon: "⚡",
      title: "3+",
      subtitle: "Internship Experiences",
    },
  ];

  return (

    <section
      id="overview"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 bg-[#020817] scroll-mt-24 overflow-hidden"
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          {/* Small Intro */}
        

          {/* Main Heading */}
          <div className="space-y-5">

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              I&apos;m Rifki Immanuel Sinaga
            </h1>

            <p className="text-gray-400 leading-9 text-lg text-justify w-full">
  Fresh graduate majoring in Informatics at President University
  with a concentration in Artificial Intelligence and hands-on
  experience in Data Analytics, Business Intelligence,
  AI-powered applications, and automation systems.
</p>

<p className="text-gray-400 leading-9 text-lg text-justify w-full">
  Experienced in developing dashboards using Metabase,
  Power BI, and Google BigQuery while collaborating
  with cross-functional teams to transform data into
  actionable business insights.
</p>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="bg-gradient-to-br from-[#09152f] to-[#071225] border border-indigo-900/40 rounded-3xl p-6 flex items-center gap-5 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all duration-300"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 uppercase text-sm tracking-wide">
                    {item.subtitle}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Resume Button */}
          <div className="pt-2">

            <a
              href="resume/Rifki Immanuel Sinaga_CV.pdf"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >

              Download Resume

              <Download size={20} />

            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-indigo-500 blur-[120px] opacity-30 rounded-full" />

            {/* Image Container */}
            <div className="relative w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-[6px] shadow-[0_0_60px_rgba(99,102,241,0.35)]">

              <div className="relative w-full h-full rounded-full overflow-hidden bg-black">

                <Image
                  src="/rifkiimmanuel.jpg"
                  alt="Rifki Profile"
                  fill
                  className="object-cover rounded-full"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}