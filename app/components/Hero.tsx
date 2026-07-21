'use client'

import { useState } from 'react'

import {
  FaArrowRight,
  FaBars,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa'

const navigationItems = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/mynulyt',
    icon: <FaGithub />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mynul-alam-362231230/?_l=en_US',
    icon: <FaLinkedin />,
  },
  {
    title: 'WhatsApp',
    href: 'https://wa.me/8801860696114',
    icon: <FaWhatsapp />,
  },
  {
    title: 'Email',
    href: 'mailto:alammynul43@gmail.com',
    icon: <FaEnvelope />,
  },
]

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* PREMIUM NAVIGATION BAR */}
      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          px-4
          pt-4
          sm:px-6
          lg:px-8
        "
      >
        <nav
          className="
            relative
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-black/75
            px-5
            py-3.5
            shadow-[0_18px_60px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            sm:px-6
          "
        >
          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-yellow-400
                text-base
                font-black
                text-black
                shadow-lg
                shadow-yellow-400/20
                transition
                duration-300
                group-hover:rotate-6
                group-hover:scale-105
              "
            >
              MA
            </div>

            <div>
              <p className="text-sm font-bold leading-none text-white sm:text-base">
                Mynul Alam
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-yellow-400 sm:text-[11px]">
                Software Engineer
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-gray-300
                  transition
                  duration-300
                  hover:bg-white/5
                  hover:text-yellow-400
                "
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* DESKTOP CONTACT BUTTON */}
          <a
            href="mailto:alammynul43@gmail.com"
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              bg-yellow-400
              px-5
              py-2.5
              text-sm
              font-bold
              text-black
              shadow-lg
              shadow-yellow-400/15
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-yellow-300
              lg:inline-flex
            "
          >
            Let&apos;s Contact

            <FaArrowRight className="text-xs" />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-lg
              text-white
              transition
              hover:border-yellow-400/40
              hover:text-yellow-400
              lg:hidden
            "
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* MOBILE NAVIGATION */}
          {isMenuOpen && (
            <div
              className="
                absolute
                left-0
                right-0
                top-[calc(100%+12px)]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0d0d0d]/95
                p-3
                shadow-2xl
                backdrop-blur-xl
                lg:hidden
              "
            >
              <div className="flex flex-col">
                {navigationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-gray-300
                      transition
                      hover:bg-yellow-400/10
                      hover:text-yellow-400
                    "
                  >
                    {item.title}
                  </a>
                ))}

                <a
                  href="mailto:alammynul43@gmail.com"
                  onClick={closeMenu}
                  className="
                    mt-2
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-yellow-400
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-black
                  "
                >
                  Let&apos;s Contact

                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="
          relative
          flex
          min-h-screen
          items-center
          overflow-hidden
          bg-black
          px-5
          pb-20
          pt-32
          text-white
          sm:px-6
          lg:px-8
          lg:pb-16
          lg:pt-36
        "
      >
        {/* BACKGROUND ELEMENTS */}
        <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-yellow-400/[0.07] blur-[140px]" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-[500px] w-[500px] rounded-full bg-yellow-400/[0.05] blur-[150px]" />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.55fr)]
            lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            {/* AVAILABILITY BADGE */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-yellow-400/20
                bg-yellow-400/[0.07]
                px-4
                py-2
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-70" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-400" />
              </span>

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-300 sm:text-sm">
                Available for new opportunities
              </p>
            </div>

            <p className="mb-3 text-base font-semibold text-yellow-400 sm:text-lg">
              Hello, I&apos;m
            </p>

            <h1
              className="
                text-5xl
                font-black
                leading-[0.98]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                lg:text-7xl
                xl:text-[82px]
              "
            >
              Mynul Alam
            </h1>

            {/* HEADLINE */}
            <h2
              className="
                mt-6
                max-w-5xl
                text-xl
                font-semibold
                leading-relaxed
                text-gray-200
                sm:text-2xl
                lg:text-[27px]
              "
            >
              Software Engineer
              <span className="mx-2 text-yellow-400">|</span>
              Full Stack Mobile App Developer
              <span className="mx-2 text-yellow-400">|</span>
              Flutter
              <span className="mx-2 text-yellow-400">|</span>
              Python
              <span className="mx-2 text-yellow-400">|</span>
              Android &amp; iOS
              <span className="mx-2 text-yellow-400">|</span>
              Machine Learning
              <span className="mx-2 text-yellow-400">|</span>
              Deep Learning
              <span className="mx-2 text-yellow-400">|</span>
              Competitive Programmer
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-4xl
                text-[15px]
                leading-7
                text-gray-400
                sm:text-base
                sm:leading-8
                lg:text-[17px]
              "
            >
              Software Engineer &amp; Full Stack Mobile App Developer
              with 2.5+ years of experience building scalable
              cross-platform Android &amp; iOS applications using
              Flutter and Dart. Skilled in Python, Firebase, REST APIs,
              SQL, Clean Architecture, MVVM, Provider, and GetX.
              Experienced in backend development and AI/ML integration,
              with research focused on Smart Agriculture using Machine
              Learning and Deep Learning. Passionate about creating
              high-performance, user-centric software solutions.
            </p>

            {/* QUICK INFORMATION */}
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
              <a
                href="mailto:alammynul43@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-300
                  transition
                  hover:text-yellow-400
                  sm:text-base
                "
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-yellow-400">
                  <FaEnvelope />
                </span>

                <span className="break-all">
                  alammynul43@gmail.com
                </span>
              </a>

              <a
                href="tel:+8801860696114"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-gray-300
                  transition
                  hover:text-yellow-400
                  sm:text-base
                "
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-yellow-400">
                  <FaPhoneAlt />
                </span>

                +880 1860-696114
              </a>

              <div className="flex items-center gap-3 text-sm text-gray-300 sm:text-base">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-yellow-400">
                  <FaMapMarkerAlt />
                </span>

                Bangladesh
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:alammynul43@gmail.com?subject=Project%20Inquiry%20for%20Mynul%20Alam"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-yellow-400
                  px-7
                  py-3.5
                  text-base
                  font-bold
                  text-black
                  shadow-[0_14px_40px_rgba(250,204,21,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-yellow-300
                  hover:shadow-[0_18px_45px_rgba(250,204,21,0.25)]
                "
              >
                Let&apos;s Work Together

                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://res.cloudinary.com/dfa4buz7j/image/upload/Mynul_Resume_jpmsyp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-yellow-400/70
                  bg-yellow-400/[0.04]
                  px-7
                  py-3.5
                  text-base
                  font-semibold
                  text-yellow-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                <FaDownload className="text-sm" />

                Download Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-9 flex items-center gap-4">
              <p className="hidden text-sm font-medium text-gray-500 sm:block">
                Connect with me
              </p>

              <span className="hidden h-px w-10 bg-gray-800 sm:block" />

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    href={social.href}
                    target={
                      social.href.startsWith('mailto:')
                        ? undefined
                        : '_blank'
                    }
                    rel={
                      social.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={social.title}
                    title={social.title}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-lg
                      text-gray-300
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-yellow-400/60
                      hover:bg-yellow-400
                      hover:text-black
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PROFILE CARD */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div
              className="
                relative
                w-full
                max-w-[340px]
                rounded-[32px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.07]
                to-white/[0.025]
                p-6
                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                backdrop-blur-sm
                sm:p-8
              "
            >
              {/* PROFILE CARD GLOW */}
              <div className="pointer-events-none absolute inset-x-10 top-5 h-28 rounded-full bg-yellow-400/15 blur-[55px]" />

              <div className="relative flex flex-col items-center text-center">
                {/* PROFILE IMAGE */}
                <div className="relative">
                  <div className="absolute inset-0 scale-110 rounded-full bg-yellow-400/25 blur-2xl" />

                  <div
                    className="
                      relative
                      h-[190px]
                      w-[190px]
                      overflow-hidden
                      rounded-full
                      border-[5px]
                      border-[#121212]
                      ring-2
                      ring-yellow-400
                      shadow-[0_20px_60px_rgba(0,0,0,0.65)]
                      sm:h-[210px]
                      sm:w-[210px]
                    "
                  >
                    <img
                      src="https://res.cloudinary.com/dfa4buz7j/image/upload/v1784675003/file_000000007b9481fb87d0bc223b728f91_kyufgd.png"
                      alt="Mynul Alam"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />
                  </div>

                  {/* ONLINE STATUS */}
                  <span
                    className="
                      absolute
                      bottom-4
                      right-3
                      h-5
                      w-5
                      rounded-full
                      border-4
                      border-[#111111]
                      bg-green-500
                    "
                  />
                </div>

                {/* NAME AND EMAIL */}
                <h3 className="mt-7 text-2xl font-black tracking-tight text-white">
                  Mynul Alam
                </h3>

                <p className="mt-1 text-sm font-medium text-yellow-400">
                  Software Engineer
                </p>

                <a
                  href="mailto:alammynul43@gmail.com"
                  className="mt-3 break-all text-sm text-gray-400 transition hover:text-yellow-400"
                >
                  alammynul43@gmail.com
                </a>

                <div className="my-6 h-px w-full bg-white/10" />

                {/* PROFESSIONAL INFORMATION */}
                <div className="grid w-full grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-4">
                    <p className="text-xl font-black text-yellow-400">
                      2.5+
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Years of Experience
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] px-3 py-4">
                    <p className="text-xl font-black text-yellow-400">
                      Flutter
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-400">
                      Mobile Specialist
                    </p>
                  </div>
                </div>

                {/* CONTACT CARD BUTTON */}
                <a
                  href="https://wa.me/8801860696114?text=Hello%20Mynul,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border
                    border-green-500/30
                    bg-green-500/10
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-green-400
                    transition-all
                    duration-300
                    hover:bg-green-500
                    hover:text-white
                  "
                >
                  <FaWhatsapp className="text-lg" />

                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <a
          href="#projects"
          className="
            absolute
            bottom-6
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-xs
            uppercase
            tracking-[0.2em]
            text-gray-600
            transition
            hover:text-yellow-400
            xl:flex
          "
        >
          Scroll

          <span className="h-8 w-px bg-gradient-to-b from-yellow-400 to-transparent" />
        </a>
      </section>
    </>
  )
}
