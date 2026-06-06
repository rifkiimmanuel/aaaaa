import Image from "next/image";
import { Download } from "lucide-react";
import { DM_Sans   } from "next/font/google";

const dmSans   = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
      subtitle: "Jababeka Scholarship",
    },
    {
      icon: "🌎",
      title: "10+",
      subtitle: "Courses Taken",
    },
    {
      icon: "⚡",
      title: "3+",
      subtitle: "Experiences",
    },
  ];

  return (

    <section
      id="overview"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 bg-[#ffffff] scroll-mt-24 overflow-hidden"
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          {/* Small Intro */}
        

          {/* Main Heading */}
          <div className="space-y-5">

          <h1 className={`${dmSans.className} text-6xl font-light text-[#0cb64d]`}>
          Turning Data Into Intelligent Solutions
        </h1>

        <p className={`${dmSans.className} text-[#595d58] leading-9 text-lg text-justify w-full`}>
          Hi! I'm Rifki Immanuel Sinaga, an Informatics graduate specializing in Artificial
          Intelligence. I leverage data, analytics, and machine learning to create
          solutions that improve decision-making, automate processes, and generate business value.
        </p>

        <p className={`${dmSans.className} text-[#595d58] leading-9 text-lg text-justify w-full`}>
          My experience includes Data Analytics, Business Intelligence, 
          AI application development, and dashboard creation through internships,
          academic projects, and real-world implementations.
        </p>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">

{stats.map((item) => (

  <div
    key={item.title}
    className="
    bg-white/80
    backdrop-blur-md
    border border-green-100
    rounded-3xl
    p-6
    flex items-center
    gap-5
    shadow-sm
    hover:bg-green-50/80
    hover:border-[#0cb64d]
    hover:shadow-[0_10px_40px_rgba(12,182,77,0.15)]
    hover:-translate-y-1
    transition-all
    duration-300
    "
  >

    {/* Icon */}
    <div className="text-4xl text-[#0cb64d] flex-shrink-0">
      {item.icon}
    </div>

    {/* Content */}
    <div>

      <h3 className="text-4xl font-bold text-[#16311e] leading-none">
        {item.title}
      </h3>

      <p className="text-[#595d58] uppercase text-xs tracking-[0.2em] mt-2">
        {item.subtitle}
      </p>

    </div>

  </div>

))}

</div>

          {/* Resume Button */}
{/* Resume Button */}
<div className="pt-2">
  <a
    href="resume/Rifki Immanuel Sinaga_CV.pdf"
    download
    className="
      inline-flex
      items-center
      gap-3
      bg-[#0cb64d]
      hover:bg-[#09963f]
      text-white
      px-8
      py-4
      rounded-full
      font-semibold
      shadow-sm
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
    "
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
  <div className="absolute inset-0 bg-[#498f64] blur-[120px] opacity-20 rounded-full" />

  {/* Image Container */}
  <div className="
    relative
    w-[320px] h-[320px]
    md:w-[430px] md:h-[430px]
    rounded-full
    bg-gradient-to-br
    from-[#0cb64d]
    to-[#19d36a]
    p-[6px]
    shadow-[0_0_50px_rgba(12,182,77,0.20)]
  ">

    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">

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