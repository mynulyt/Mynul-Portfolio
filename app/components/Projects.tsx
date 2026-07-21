'use client'

import { useCallback, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../lib/firebase'

interface DownloadItem {
  title: string
  url: string
}

interface Project {
  id: string
  title?: string
  subtitle?: string
  description?: string
  category?: string
  features?: string[]
  technologies?: string[]
  images?: string[]
  playstore?: string
  github?: string
  liveDemo?: string
  downloads?: DownloadItem[]
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, 'projects')
        )

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[]

        setProjects(data)
      } catch (error) {
        console.error('Failed to load projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className="min-h-[50vh] bg-black flex items-center justify-center px-6">
        <div className="flex items-center gap-3 text-yellow-400">
          <div className="h-5 w-5 rounded-full border-2 border-yellow-400 border-t-transparent animate-spin" />

          <p className="text-lg font-medium">
            Loading Projects...
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            My Recent Work
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-yellow-400" />
        </div>

        {projects.length > 0 ? (
          <div className="space-y-12 lg:space-y-14">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-800 bg-[#111111] px-6 py-20 text-center">
            <p className="text-xl text-gray-400">
              No projects available right now.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const images = Array.isArray(project.images)
    ? project.images.filter(Boolean)
    : []

  const [currentImage, setCurrentImage] = useState(0)

  const nextSlide = useCallback(() => {
    if (images.length <= 1) return

    setCurrentImage((previousImage) =>
      previousImage === images.length - 1
        ? 0
        : previousImage + 1
    )
  }, [images.length])

  const prevSlide = () => {
    if (images.length <= 1) return

    setCurrentImage((previousImage) =>
      previousImage === 0
        ? images.length - 1
        : previousImage - 1
    )
  }

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length, nextSlide])

  useEffect(() => {
    if (currentImage >= images.length) {
      setCurrentImage(0)
    }
  }, [currentImage, images.length])

  const imageSection = (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[310px] xl:max-w-[325px]">
        {/* IMAGE GLOW */}
        <div className="absolute inset-5 rounded-full bg-yellow-400/20 blur-3xl" />

        {images.length > 0 ? (
          <>
            {/* PROJECT IMAGE */}
            <div className="relative overflow-hidden rounded-[28px] border-2 border-yellow-400/80 bg-[#0a0a0a] shadow-2xl shadow-yellow-400/10">
              <img
                src={images[currentImage]}
                alt={`${project.title || 'Project'} screenshot ${
                  currentImage + 1
                }`}
                className="
                  block
                  h-auto
                  max-h-[500px]
                  w-full
                  object-contain
                  transition-all
                  duration-700
                  ease-in-out
                  lg:max-h-[520px]
                "
              />
            </div>

            {/* SLIDER CONTROLS */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous project image"
                  className="
                    absolute
                    left-[-18px]
                    top-1/2
                    z-10
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400
                    bg-black/90
                    text-2xl
                    text-yellow-400
                    backdrop-blur-sm
                    transition
                    duration-300
                    hover:scale-110
                    hover:bg-yellow-400
                    hover:text-black
                    sm:left-[-22px]
                    sm:h-11
                    sm:w-11
                  "
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next project image"
                  className="
                    absolute
                    right-[-18px]
                    top-1/2
                    z-10
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400
                    bg-black/90
                    text-2xl
                    text-yellow-400
                    backdrop-blur-sm
                    transition
                    duration-300
                    hover:scale-110
                    hover:bg-yellow-400
                    hover:text-black
                    sm:right-[-22px]
                    sm:h-11
                    sm:w-11
                  "
                >
                  ›
                </button>

                {/* IMAGE INDICATORS */}
                <div className="mt-5 flex justify-center gap-2">
                  {images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() => setCurrentImage(imageIndex)}
                      aria-label={`Show image ${imageIndex + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentImage === imageIndex
                          ? 'w-7 bg-yellow-400'
                          : 'w-2 bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="relative flex aspect-[9/16] w-full items-center justify-center rounded-[28px] border border-dashed border-gray-700 bg-[#0a0a0a]">
            <p className="text-sm text-gray-500">
              Project image unavailable
            </p>
          </div>
        )}
      </div>
    </div>
  )

  const contentSection = (
    <div className="flex min-w-0 flex-col justify-center">
      {/* PROJECT CATEGORY */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-[2px] w-9 bg-yellow-400" />

        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-yellow-400 sm:text-base">
          {project.category || 'Mobile Application'}
        </p>
      </div>

      {/* PROJECT TITLE */}
      <h3 className="mb-3 break-words text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
        {project.title || 'Untitled Project'}
      </h3>

      {/* PROJECT SUBTITLE */}
      {project.subtitle && (
        <h4 className="mb-5 text-lg font-medium leading-relaxed text-gray-300 sm:text-xl">
          {project.subtitle}
        </h4>
      )}

      {/* PROJECT DESCRIPTION */}
      {project.description && (
        <p className="mb-6 max-w-2xl text-base leading-7 text-gray-400 lg:text-[17px] lg:leading-8">
          {project.description}
        </p>
      )}

      {/* FEATURES */}
      {project.features && project.features.length > 0 && (
        <div className="mb-6">
          <h5 className="mb-4 text-xl font-bold text-yellow-400">
            Key Features
          </h5>

          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {project.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex min-w-0 items-start gap-3 text-gray-300"
              >
                <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-yellow-400" />

                <p className="break-words text-sm leading-6 sm:text-base">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TECHNOLOGIES */}
      {project.technologies &&
        project.technologies.length > 0 && (
          <div className="mb-7">
            <h5 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Technologies
            </h5>

            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map(
                (technology, technologyIndex) => (
                  <span
                    key={technologyIndex}
                    className="
                      rounded-full
                      border
                      border-yellow-400/20
                      bg-yellow-400/10
                      px-3.5
                      py-1.5
                      text-xs
                      font-medium
                      text-yellow-400
                      transition
                      hover:border-yellow-400/50
                      hover:bg-yellow-400/15
                      sm:text-sm
                    "
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        )}

      {/* PROJECT BUTTONS */}
      <div className="flex flex-wrap gap-3">
        {project.playstore && (
          <ProjectButton
            href={project.playstore}
            primary
          >
            View Play Store
          </ProjectButton>
        )}

        {project.github && (
          <ProjectButton href={project.github}>
            GitHub
          </ProjectButton>
        )}

        {project.liveDemo && (
          <ProjectButton href={project.liveDemo}>
            Live Demo
          </ProjectButton>
        )}

        {project.downloads?.map(
          (downloadItem, downloadIndex) => (
            <ProjectButton
              key={downloadIndex}
              href={downloadItem.url}
            >
              {downloadItem.title}
            </ProjectButton>
          )
        )}
      </div>
    </div>
  )

  return (
    <article
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-gray-800
        bg-gradient-to-br
        from-[#151515]
        via-[#101010]
        to-[#0b0b0b]
        p-5
        shadow-2xl
        shadow-black/60
        transition
        duration-500
        hover:-translate-y-1
        hover:border-yellow-400/70
        sm:p-7
        lg:rounded-[34px]
        lg:p-9
      "
    >
      <div
        className="
          grid
          items-center
          gap-10
          lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.75fr)]
          lg:gap-12
          xl:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]
        "
      >
        {/* Mobile-এ image সবসময় উপরে থাকবে।
            Desktop-এ alternate layout থাকবে। */}
        <div
          className={
            index % 2 === 0
              ? 'order-2 lg:order-1'
              : 'order-2 lg:order-2'
          }
        >
          {contentSection}
        </div>

        <div
          className={
            index % 2 === 0
              ? 'order-1 lg:order-2'
              : 'order-1 lg:order-1'
          }
        >
          {imageSection}
        </div>
      </div>
    </article>
  )
}

function ProjectButton({
  href,
  children,
  primary = false,
}: {
  href: string
  children: React.ReactNode
  primary?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? `
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-yellow-400
            px-5
            py-3
            text-sm
            font-bold
            text-black
            shadow-lg
            shadow-yellow-400/15
            transition
            duration-300
            hover:-translate-y-0.5
            hover:bg-white
            sm:px-6
            sm:text-base
          `
          : `
            inline-flex
            items-center
            justify-center
            rounded-xl
            border
            border-yellow-400/80
            px-5
            py-3
            text-sm
            font-semibold
            text-yellow-400
            transition
            duration-300
            hover:-translate-y-0.5
            hover:bg-yellow-400
            hover:text-black
            sm:px-6
            sm:text-base
          `
      }
    >
      {children}
    </a>
  )
}
