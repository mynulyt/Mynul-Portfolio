'use client'

import { useEffect, useState } from 'react'

export default function Projects() {

  const projects = [
    {
      title: 'Poran Global',

      subtitle:
        'Multi Vendor eCommerce Flutter Application',

      description:
        'Poran Global is a modern multi-vendor eCommerce platform built with Flutter. The app provides seamless shopping experience with real-time product management, Firebase integration, secure authentication, scalable architecture, and responsive UI for Android & iOS users.',

      features: [
        'Multi Vendor System',
        'Firebase Authentication',
        'REST API Integration',
        'Real-time Order Management',
        'Clean Architecture',
        'Responsive UI Design',
        'Secure Payment System',
      ],

      technologies: [
        'Flutter',
        'Firebase',
        'REST API',
        'GetX',
        'Provider',
      ],

      playstore:
        'https://play.google.com/store/apps/details?id=com.poranglobalapp.app',

      images: [
        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454022/WhatsApp_Image_2026-05-11_at_4.58.47_AM_gdbvws.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454019/WhatsApp_Image_2026-05-11_at_4.58.48_AM_pcxvhu.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454015/WhatsApp_Image_2026-05-11_at_4.58.48_AM_1_cgamo2.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454014/WhatsApp_Image_2026-05-11_at_4.58.48_AM_2_qxo8rr.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454014/WhatsApp_Image_2026-05-11_at_4.58.49_AM_gsd8qf.jpg',
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-black text-white"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-20">
          Featured Projects
        </h2>

        <div className="space-y-32">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

function ProjectCard({ project }: any) {

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide()

    }, 3000)

    return () => clearInterval(interval)

  }, [currentImage])

  const nextSlide = () => {

    setCurrentImage((prev: number) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )

  }

  const prevSlide = () => {

    setCurrentImage((prev: number) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )

  }

  return (

    <div
      className="grid lg:grid-cols-2 gap-16 items-center
      bg-[#111111] border border-gray-800 rounded-[40px]
      p-8 lg:p-12 hover:border-yellow-400
      transition duration-500 shadow-2xl shadow-black"
    >

      {/* LEFT SIDE */}
      <div>

        <p className="text-yellow-400 text-lg mb-3">
          Mobile Application
        </p>

        <h3 className="text-5xl font-extrabold mb-5">
          {project.title}
        </h3>

        <h4 className="text-2xl text-gray-300 mb-6">
          {project.subtitle}
        </h4>

        <p className="text-gray-400 leading-8 text-lg mb-8">
          {project.description}
        </p>

        {/* FEATURES */}
        <div className="mb-8">

          <h5 className="text-2xl font-bold mb-4 text-yellow-400">
            Features
          </h5>

          <div className="space-y-3">

            {project.features.map((feature: string, i: number) => (

              <div
                key={i}
                className="flex items-center gap-3 text-gray-300"
              >

                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>

                <p>{feature}</p>

              </div>

            ))}

          </div>

        </div>

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-3 mb-10">

          {project.technologies.map((tech: string, i: number) => (

            <span
              key={i}
              className="bg-yellow-400/10 text-yellow-400
              px-4 py-2 rounded-full border border-yellow-400/20"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* BUTTON */}
        <a
          href={project.playstore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-black
          px-8 py-4 rounded-2xl font-bold text-lg
          hover:bg-white hover:scale-105
          transition duration-300 shadow-xl shadow-yellow-400/30"
        >
          View on Play Store
        </a>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>

          {/* IMAGE */}
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="relative w-[320px] lg:w-[360px]
            rounded-[35px] border-4 border-yellow-400
            shadow-2xl shadow-yellow-400/20
            transition-all duration-700"
          />

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-5 -translate-y-1/2
            bg-black/70 backdrop-blur-md border border-yellow-400
            text-yellow-400 w-12 h-12 rounded-full
            flex items-center justify-center
            hover:bg-yellow-400 hover:text-black
            transition duration-300 shadow-lg"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 -translate-y-1/2
            bg-black/70 backdrop-blur-md border border-yellow-400
            text-yellow-400 w-12 h-12 rounded-full
            flex items-center justify-center
            hover:bg-yellow-400 hover:text-black
            transition duration-300 shadow-lg"
          >
            ›
          </button>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-3 mt-6">

            {project.images.map((_: any, index: number) => (

              <div
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
                  currentImage === index
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-gray-600'
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </div>

  )
}
