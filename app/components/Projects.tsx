'use client'

import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../lib/firebase'

export default function Projects() {

  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchProjects()

  }, [])

  const fetchProjects = async () => {

    try {

      const querySnapshot = await getDocs(
        collection(db, 'projects')
      )

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      setProjects(data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }

  if (loading) {
    return (
      <div className="text-center py-32 text-yellow-400 text-2xl">
        Loading Projects...
      </div>
    )
  }

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-black text-white"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-extrabold text-center mb-20 text-yellow-400">
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

        {project.subtitle && (

          <h4 className="text-2xl text-gray-300 mb-6">
            {project.subtitle}
          </h4>

        )}

        {project.description && (

          <p className="text-gray-400 leading-8 text-lg mb-8">
            {project.description}
          </p>

        )}

        {/* FEATURES */}
        {project.features?.length > 0 && (

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

        )}

        {/* TECHNOLOGIES */}
        {project.technologies?.length > 0 && (

          <div className="flex flex-wrap gap-3 mb-8">

            {project.technologies.map((item: string, i: number) => (

              <span
                key={i}
                className="bg-yellow-400/10 text-yellow-400
                px-4 py-2 rounded-full text-sm border border-yellow-400/20"
              >
                {item}
              </span>

            ))}

          </div>

        )}

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">

          {/* PLAY STORE */}
          {project.playstore && (

            <a
              href={project.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black
              px-8 py-4 rounded-2xl font-bold text-lg
              hover:bg-white hover:scale-105
              transition duration-300 shadow-xl shadow-yellow-400/30"
            >
              View Play Store
            </a>

          )}

          {/* GITHUB */}
          {project.github && (

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-yellow-400
              text-yellow-400 px-6 py-4 rounded-2xl
              font-semibold hover:bg-yellow-400
              hover:text-black transition duration-300"
            >
              GitHub
            </a>

          )}

          {/* LIVE DEMO */}
          {project.liveDemo && (

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-yellow-400
              text-yellow-400 px-6 py-4 rounded-2xl
              font-semibold hover:bg-yellow-400
              hover:text-black transition duration-300"
            >
              Live Demo
            </a>

          )}

          {/* DYNAMIC DOWNLOAD BUTTONS */}
          {project.downloads?.map((item: any, index: number) => (

            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-yellow-400
              text-yellow-400 px-6 py-4 rounded-2xl
              font-semibold hover:bg-yellow-400
              hover:text-black transition duration-300"
            >
              {item.title}
            </a>

          ))}

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center">

        <div className="relative">

          {/* GLOW */}
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
            bg-black/70 border border-yellow-400
            text-yellow-400 w-12 h-12 rounded-full
            hover:bg-yellow-400 hover:text-black
            transition duration-300"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 -translate-y-1/2
            bg-black/70 border border-yellow-400
            text-yellow-400 w-12 h-12 rounded-full
            hover:bg-yellow-400 hover:text-black
            transition duration-300"
          >
            ›
          </button>

        </div>

      </div>

    </div>

  )
}
