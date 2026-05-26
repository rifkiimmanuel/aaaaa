"use client";

import { useState } from "react";
import Overview from "@/components/Overview";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";

export default function Home() {
  const [message, setMessage] = useState("");

  const getBackendData = async () => {
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${BASE_URL}/`);
      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Overview />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />

     
    </main>
  );
}