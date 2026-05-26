"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ExperienceType {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
  images: string[];
}

export default function Experience() {
  const experiences: ExperienceType[] = [
    {
      company: "Grab Indonesia",
      location: "Jakarta, Indonesia",
      role: "Strategy & Planning (GrabFood Expansion Project) Intern",
      period: "Nov 2025 — May 2026",

      description: [
        "Engineered SQL queries on Databricks to build automated dashboards for monitoring daily business performance across Tier-4 regions.",

        "Automated merchant photo listing workflows using Python across 100+ cities, improving operational efficiency and content quality.",

        "Conducted ad-hoc analysis and generated business insights for seasonal campaigns using SQL and data analytics techniques.",
      ],

      tech: [
        "Python",
        "Databricks",
        "Google Spreadsheets",
        "SQL",
      ],

      images: [
        "/experience1/grab1.jpg",
        "/experience1/grab3.jpg",
      ],
    },

    {
      company: "XLSMART Indonesia",
      location: "Jakarta, Indonesia",
      role: "Data Analytics Intern - People",
      period: "Jan 2025 — May 2025",

      description: [
        "Deployed a Metabase platform on Google Cloud Run with PostgreSQL integration, enhancing real-time data access for cross-functional stakeholders.",

        "Created 10+ insightful Metabase dashboards using Google BigQuery for KPI monitoring and organizational analytics.",

        "Designed an interactive Power BI dashboard to visualize employee learning trends and improve training effectiveness.",
      ],

      tech: [
        "Python",
        "Google BigQuery",
        "Metabase",
        "Power BI",
      ],

      images: [
        "/experience2/xlat2.jpg",
        "/experience2/xlat3.jpg",
      ],
    },

    {
      company: "PT XL Axiata Indonesia",
      location: "Jakarta, Indonesia",
      role: "HC Digitalization & Resource Management Intern",
      period: "Sept 2024 — Dec 2024",

      description: [
        "Developed automation workflows to streamline internal HR operational processes.",

        "Supported digital transformation initiatives for resource management reporting and tracking.",

        "Collaborated with multiple teams to improve efficiency in HR data management and reporting.",
      ],

      tech: [
        "Python",
        "Microsoft Excel",
        "Google Sheets",
        "Data Analytics",
      ],

      images: [
        "/experience3/xlsmart1.png",
        "/experience2/xlat3.jpg",
      ],
    },
    {
      company: "ID/X Partners X Rakamin Academy",
      location: "Jakarta, Indonesia",
      role: "Project-Based Virtual Intern: Data Science",
      period: "Jun 2024 — Jul 2024",

      description: [
        "Leveraged data science techniques to analyze real-world financial datasets in business case projects, improving analysis efficiency by optimizing data processing workflows",

        "Developed a robust machine learning model for Credit Risk Analysis, achieving an accuracy of 96.5%, while proactively learning new tools and techniques to enhance project outcomes"
      ],

      tech: [
        "Python",
        "Microsoft Excel",
        "Google Sheets",
        "Data Analytics",
      ],

      images: [
        "/experience3/xlsmart1.png",
        "/experience2/xlat3.jpg",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#020617] px-6 md:px-16 lg:px-24 py-24 scroll-mt-24"
    >
      {/* Header */}
      <div className="mb-20">
        <p className="text-indigo-500 font-semibold uppercase tracking-[3px] mb-3">
          
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white">
        Experience
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        
        {/* Vertical Line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-indigo-900/40" />

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
}: {
  exp: ExperienceType;
}) {

  const [currentImage, setCurrentImage] =
    useState<number>(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(
        (prev) =>
          (prev + 1) % exp.images.length
      );

    }, 3000);

    return () => clearInterval(interval);

  }, [exp.images.length]);

  const nextImage = (): void => {

    setCurrentImage(
      (prev) =>
        (prev + 1) % exp.images.length
    );

  };

  const prevImage = (): void => {

    setCurrentImage(
      (prev) =>
        prev === 0
          ? exp.images.length - 1
          : prev - 1
    );

  };

  return (
    <div className="relative pl-16">

      {/* Timeline Dot */}
      <div className="absolute left-0 top-10 flex items-center justify-center">

        {/* Outer Circle */}
        <div className="w-6 h-6 rounded-full bg-[#020617] border-[3px] border-indigo-500 flex items-center justify-center">

          {/* Inner Dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />

        </div>

      </div>

      {/* Card */}
      <div className="bg-[#0B1120] border border-indigo-900/30 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(99,102,241,0.08)] transition-all duration-300">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Header */}
            <div className="space-y-5">

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">

                <div className="space-y-3">

                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {exp.company}
                  </h3>

                  <p className="text-indigo-400 font-semibold text-lg">
                    {exp.role}
                  </p>

                  <p className="text-gray-400 text-sm">
                    📍 {exp.location}
                  </p>

                </div>

                <p className="text-gray-400 text-sm whitespace-nowrap">
                  {exp.period}
                </p>

              </div>

            </div>

            {/* Description */}
            <ul className="space-y-5">

              {exp.description.map(
                (item, index) => (

                  <li
                    key={index}
                    className="flex items-start gap-4 text-gray-300 leading-relaxed text-justify"
                  >

                    <span className="text-indigo-400 mt-[6px] text-xs">
                      ●
                    </span>

                    <span>
                      {item}
                    </span>

                  </li>

                )
              )}

            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-2">

              {exp.tech.map((item) => (

                <span
                  key={item}
                  className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="space-y-5">

            {/* Image Slider */}
            <div className="relative w-full h-[340px] rounded-3xl overflow-hidden group border border-indigo-900/30">

              <Image
                src={exp.images[currentImage]}
                alt={exp.company}
                fill
                className="object-cover transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                ←
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                →
              </button>

            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">

              {exp.images.map(
                (_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentImage(index)
                    }
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-8 bg-indigo-400"
                        : "w-2 bg-gray-600"
                    }`}
                  />

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}