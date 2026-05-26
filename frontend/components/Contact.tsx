"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

/* =========================
   LINKEDIN ICON
========================= */
const LinkedinIcon = ({
  size = 26,
}: {
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5C4.98 4.60457 4.08457 5.5 2.98 5.5C1.87543 5.5 0.98 4.60457 0.98 3.5C0.98 2.39543 1.87543 1.5 2.98 1.5C4.08457 1.5 4.98 2.39543 4.98 3.5Z" />
    <path d="M0.98 8H4.98V21H0.98V8Z" />
    <path d="M8.98 8H12.82V9.77H12.87C13.4 8.77 14.69 7.71 16.63 7.71C20.66 7.71 21.4 10.36 21.4 13.8V21H17.4V14.62C17.4 13.1 17.37 11.15 15.29 11.15C13.18 11.15 12.86 12.8 12.86 14.51V21H8.98V8Z" />
  </svg>
);

/* =========================
   GITHUB ICON
========================= */
const GithubIcon = ({
  size = 26,
}: {
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5C0 17.8 3.438 22.3 8.205 23.885C8.805 23.995 9.025 23.625 9.025 23.305C9.025 23.015 9.015 22.045 9.01 20.885C5.672 21.61 4.968 19.275 4.968 19.275C4.422 17.885 3.633 17.515 3.633 17.515C2.545 16.77 3.717 16.785 3.717 16.785C4.922 16.87 5.555 18.02 5.555 18.02C6.625 19.855 8.36 19.325 9.05 19.015C9.16 18.24 9.47 17.715 9.81 17.415C7.145 17.115 4.343 16.08 4.343 11.47C4.343 10.155 4.81 9.08 5.578 8.235C5.455 7.93 5.045 6.71 5.695 5.06C5.695 5.06 6.705 4.735 9 6.29C9.96 6.02 10.98 5.885 12 5.88C13.02 5.885 14.04 6.02 15 6.29C17.295 4.735 18.305 5.06 18.305 5.06C18.955 6.71 18.545 7.93 18.422 8.235C19.19 9.08 19.657 10.155 19.657 11.47C19.657 16.095 16.85 17.11 14.175 17.405C14.605 17.775 14.99 18.5 14.99 19.61C14.99 21.205 14.975 22.865 14.975 23.305C14.975 23.625 15.195 24 15.805 23.885C20.565 22.295 24 17.795 24 12.5C24 5.87 18.63 0.5 12 0.5Z" />
  </svg>
);

export default function Contact() {

  const contacts = [
    {
      icon: <Mail size={26} />,
      label: "EMAIL",
      value: "rifkiimmanuel112@gmail.com",
      href: "mailto:rifkiimmanuel112@gmail.com",
    },

    {
      icon: <Phone size={26} />,
      label: "PHONE",
      value: "+62 812-6465-0702",
      href: "https://wa.me/6281264650702",
    },

    {
      icon: <LinkedinIcon size={26} />,
      label: "LINKEDIN",
      value: "Rifki Immanuel Sinaga",
      href: "https://www.linkedin.com/in/rifkiimmanuel/",
    },

    {
      icon: <GithubIcon size={26} />,
      label: "GITHUB",
      value: "rifkiimmanuel",
      href: "https://github.com/rifkiimmanuel",
    },

    {
      icon: <MapPin size={26} />,
      label: "LOCATION",
      value: "Jakarta, Indonesia",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#020817] px-6 md:px-16 lg:px-24 py-24"
    >

      {/* HEADER */}
      <div className="mb-20">


        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Let&apos;s Connect
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Interested in collaborating or have a project in mind?
          I am always open to discussing new opportunities in
          Data Analytics, Data Engineering, and AI
        </p>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {contacts.map((item, index) => (

            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-gradient-to-r from-[#09152f] to-[#071225] border border-indigo-900/40 rounded-3xl p-6 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-2xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-500 group-hover:scale-105 transition-all duration-300">

                {item.icon}

              </div>

              {/* TEXT */}
              <div>

                <p className="text-xs tracking-[2px] text-gray-500 font-semibold mb-1">
                  {item.label}
                </p>

                <p className="text-white text-lg font-semibold break-all">
                  {item.value}
                </p>

              </div>

            </a>

          ))}

        </div>

        {/* RIGHT */}
        <div className="bg-gradient-to-b from-[#09152f] to-[#071225] border border-indigo-900/40 rounded-3xl p-10 text-center sticky top-28">

          <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
            Ready to work together?
          </h3>

          <p className="text-gray-400 leading-relaxed mb-10 text-lg">
            Send me a message and let us discuss how I can
            contribute to your next project.
          </p>

          {/* BUTTON */}
          <a
            href="mailto:rifkiimmanuel112@gmail.com"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >

            Send Email

            <Send size={20} />

          </a>

        </div>

      </div>

    </section>
  );
}