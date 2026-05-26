"use client";

import { useState } from "react";
import Overview from "@/components/Overview";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";

export default function Home() {
  const [message, setMessage] = useState("");

  // connect to backend - fastapi
  const getBackendData = async () => {
    try {
      const BASE_URL =
        process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(
        `${BASE_URL}/`
      );

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Overview />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
      
      
    </main>
  );


  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1 className="text-4xl font-bold">
        AI Portfolio
      </h1>

      <button
        onClick={getBackendData}
        className="bg-black text-white px-5 py-3 rounded-xl"
      >
        Connect Backend
      </button>

      <p className="text-lg">
        {message}
      </p>
    </main>
  );
}