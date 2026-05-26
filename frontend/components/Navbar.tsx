"use client"

import { JSX, useEffect, useState } from "react"

interface NavLink {
  name: string
  href: string
  id: string
}

export default function Navbar(): JSX.Element {

  const [isOpen, setIsOpen] =
    useState<boolean>(false)

  const [activeSection, setActiveSection] =
    useState<string>("overview")

  const navLinks: NavLink[] = [
    {
      name: "Overview",
      href: "#overview",
      id: "overview",
    },
    {
      name: "Experience",
      href: "#experience",
      id: "experience",
    },
    {
      name: "Projects",
      href: "#projects",
      id: "projects",
    },
    {
      name: "Certificate & Skills",
      href: "#certificate",
      id: "certificate",
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
    },
  ]

  useEffect(() => {

    const handleScroll = (): void => {

      const sections: string[] = [
        "overview",
        "experience",
        "projects",
        "certificate",
        "contact",
      ]

      let currentSection: string = "overview"

      sections.forEach((section: string) => {

        const element: HTMLElement | null =
          document.getElementById(section)

        if (element) {

          const sectionTop: number =
            element.offsetTop - 150

          const sectionHeight: number =
            element.offsetHeight

          if (
            window.scrollY >= sectionTop &&
            window.scrollY <
              sectionTop + sectionHeight
          ) {
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    handleScroll()

    return (): void => {
      window.removeEventListener(
        "scroll",
        handleScroll
      )
    }

  }, [])

  return (

    <nav className="fixed top-0 left-0 h-[60px] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-[0px_4px_25px_0px_rgba(0,0,0,0.4)]">

      {/* Logo */}
      <a
        href="#about"
        className="text-white font-bold text-xl tracking-wide"
      >
        PORTFOLIO
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10">

        {navLinks.map((link: NavLink) => (

          <li key={link.name}>

            <a
              href={link.href}
              className={`relative pb-1 text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >

              {link.name}

              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0"
                }`}
              />

            </a>

          </li>

        ))}

      </ul>

      {/* Mobile Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={(): void =>
          setIsOpen(!isOpen)
        }
        className="md:hidden active:scale-90 transition"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 30 30"
          fill="#ffffff"
        >

          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />

        </svg>

      </button>

      {/* Mobile Menu */}
      {isOpen && (

        <div className="absolute top-[60px] left-0 w-full bg-[#0a0a0a] border-t border-white/10 p-6 md:hidden shadow-lg">

          <ul className="flex flex-col gap-5">

            {navLinks.map((link: NavLink) => (

              <li key={link.name}>

                <a
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={(): void =>
                    setIsOpen(false)
                  }
                >

                  {link.name}

                </a>

              </li>

            ))}

          </ul>

        </div>

      )}

    </nav>
  )
}