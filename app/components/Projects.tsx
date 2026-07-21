'use client'

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import {
  collection,
  getDocs,
} from 'firebase/firestore'

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
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setError('')

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

        setError(
          'Projects could not be loaded. Please try again later.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-black px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="h-11 w-11 animate-spin rounded-full border-[3px] border-yellow-400/20 border-t-yellow-400" />

          <p className="text-base font-medium tracking-wide text-gray-300">
            Loading Projects...
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-black
        px-4
        py-20
        text-white
        sm:px-6
        lg:px-8
        lg:py-24
      "
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-yellow-400/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-180px] h-[450px] w-[450px] rounded-full bg-yellow-400/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-yellow-400" />

            <p className="text-xs font-bold uppercase tracking-[0.32em] text-yellow-400 sm:text-sm">
              Selected Work
            </p>

            <span className="h-px w-10 bg-yellow-400" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A selection of applications and digital products
            designed with performance, usability and modern
            technology in mind.
          </p>
        </div>

        {error && (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 px-6 py-16 text-center">
            <p className="text-lg text-red-300">
              {error}
            </p>
          </div>
        )}

        {!error && projects.length === 0 && (
          <div className="rounded-3xl border border-gray-800 bg-[#101010] px-6 py-20 text-center">
            <p className="text-lg text-gray-400">
              No projects available right now.
            </p>
          </div>
        )}

        {!error && projects.length > 0 && (
          <div className="space-y-14 lg:space-y-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
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
    ? project.images.filter(
        (image): image is string =>
          typeof image === 'string' &&
          image.trim().length > 0
      )
    : []

  const [currentImage, setCurrentImage] = useState(0)
  const [isSliderPaused, setIsSliderPaused] = useState(false)

  const nextSlide = useCallback(() => {
    if (images.length <= 1) return

    setCurrentImage((previousImage) =>
      previousImage === images.length - 1
        ? 0
        : previousImage + 1
    )
  }, [images.length])

  const prevSlide = useCallback(() => {
    if (images.length <= 1) return

    setCurrentImage((previousImage) =>
      previousImage === 0
        ? images.length - 1
        : previousImage - 1
    )
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1 || isSliderPaused) {
      return
    }

    const interval = window.setInterval(() => {
      nextSlide()
    }, 4500)

    return () => window.clearInterval(interval)
  }, [images.length, isSliderPaused, nextSlide])

  useEffect(() => {
    if (
      images.length > 0 &&
      currentImage >= images.length
    ) {
      setCurrentImage(0)
    }
  }, [currentImage, images.length])

  const isImageOnLeft = index % 2 !== 0

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.08]
        bg-[#0f0f0f]
        shadow-[0_30px_90px_rgba(0,0,0,0.55)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-yellow-400/35
        lg:rounded-[38px]
      "
    >
      {/* TOP HIGHLIGHT */}
      <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent opacity-60" />

      {/* CARD BACKGROUND GLOW */}
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-yellow-400/[0.04] blur-[90px] transition-opacity duration-500 group-hover:bg-yellow-400/[0.07]" />

      {/* PROJECT NUMBER */}
      <div className="pointer-events-none absolute right-7 top-5 hidden select-none text-[90px] font-black leading-none text-white/[0.018] lg:block">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div
        className="
          relative
          grid
          min-h-[620px]
          items-center
          gap-12
          px-6
          py-14
          sm:px-9
          sm:py-16
          lg:min-h-[650px]
          lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]
          lg:gap-16
          lg:px-14
          lg:py-16
          xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]
          xl:px-16
          xl:py-20
        "
      >
        {/* CONTENT SIDE */}
        <div
          className={`
            order-2
            flex
            min-w-0
            flex-col
            justify-center
            ${
              isImageOnLeft
                ? 'lg:order-2'
                : 'lg:order-1'
            }
          `}
        >
          {/* CATEGORY */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-yellow-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-400 sm:text-sm">
              {project.category || 'Mobile Application'}
            </p>
          </div>

          {/* TITLE */}
          <h3
            className="
              mb-3
              break-words
              text-3xl
              font-black
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-[44px]
              xl:text-[48px]
            "
          >
            {project.title || 'Untitled Project'}
          </h3>

          {/* SUBTITLE */}
          {project.subtitle && (
            <h4 className="mb-5 text-lg font-medium leading-relaxed text-gray-300 sm:text-xl">
              {project.subtitle}
            </h4>
          )}

          {/* DESCRIPTION */}
          {project.description && (
            <p className="mb-7 max-w-3xl text-[15px] leading-7 text-gray-400 sm:text-base lg:text-[17px] lg:leading-8">
              {project.description}
            </p>
          )}

          {/* FEATURES */}
          {project.features &&
            project.features.length > 0 && (
              <div className="mb-7">
                <h5 className="mb-4 text-lg font-bold text-yellow-400 sm:text-xl">
                  Key Features
                </h5>

                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {project.features.map(
                    (feature, featureIndex) => (
                      <div
                        key={`${feature}-${featureIndex}`}
                        className="flex min-w-0 items-start gap-3"
                      >
                        <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.45)]" />

                        <p className="break-words text-sm leading-6 text-gray-300 sm:text-[15px]">
                          {feature}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

          {/* TECHNOLOGIES */}
          {project.technologies &&
            project.technologies.length > 0 && (
              <div className="mb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map(
                    (technology, technologyIndex) => (
                      <span
                        key={`${technology}-${technologyIndex}`}
                        className="
                          rounded-full
                          border
                          border-yellow-400/20
                          bg-yellow-400/[0.07]
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-yellow-300
                          transition-all
                          duration-300
                          hover:border-yellow-400/50
                          hover:bg-yellow-400/[0.12]
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

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-3">
            {project.playstore && (
              <ProjectButton
                href={project.playstore}
                primary
              >
                View Play Store
                <ExternalArrow />
              </ProjectButton>
            )}

            {project.github && (
              <ProjectButton href={project.github}>
                GitHub
                <ExternalArrow />
              </ProjectButton>
            )}

            {project.liveDemo && (
              <ProjectButton href={project.liveDemo}>
                Live Demo
                <ExternalArrow />
              </ProjectButton>
            )}

            {project.downloads?.map(
              (downloadItem, downloadIndex) => (
                <ProjectButton
                  key={`${downloadItem.title}-${downloadIndex}`}
                  href={downloadItem.url}
                >
                  {downloadItem.title}
                  <ExternalArrow />
                </ProjectButton>
              )
            )}
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div
          className={`
            order-1
            flex
            items-center
            justify-center
            ${
              isImageOnLeft
                ? 'lg:order-1'
                : 'lg:order-2'
            }
          `}
        >
          <div
            className="relative w-full max-w-[270px] sm:max-w-[295px] lg:max-w-[310px] xl:max-w-[325px]"
            onMouseEnter={() => setIsSliderPaused(true)}
            onMouseLeave={() => setIsSliderPaused(false)}
          >
            {/* GLOW */}
            <div className="pointer-events-none absolute inset-5 rounded-[40px] bg-yellow-400/15 blur-[45px] transition-all duration-500 group-hover:bg-yellow-400/20" />

            {/* PHONE FRAME */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-yellow-400/80
                bg-[#080808]
                p-[5px]
                shadow-[0_25px_70px_rgba(0,0,0,0.65)]
              "
            >
              <div className="overflow-hidden rounded-[29px] bg-[#111111]">
                {images.length > 0 ? (
                  <img
                    key={images[currentImage]}
                    src={images[currentImage]}
                    alt={`${project.title || 'Project'} screenshot ${
                      currentImage + 1
                    }`}
                    className="
                      block
                      h-auto
                      max-h-[500px]
                      w-full
                      animate-[fadeIn_0.5s_ease-in-out]
                      object-contain
                      sm:max-h-[520px]
                      lg:max-h-[535px]
                    "
                  />
                ) : (
                  <div className="flex aspect-[9/16] w-full items-center justify-center px-6 text-center">
                    <p className="text-sm text-gray-500">
                      Project image unavailable
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* SLIDER ARROWS */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous project image"
                  className="
                    absolute
                    -left-5
                    top-1/2
                    z-20
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400/70
                    bg-black/90
                    text-2xl
                    text-yellow-400
                    shadow-xl
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-yellow-400
                    hover:text-black
                    sm:-left-6
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
                    -right-5
                    top-1/2
                    z-20
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-400/70
                    bg-black/90
                    text-2xl
                    text-yellow-400
                    shadow-xl
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-yellow-400
                    hover:text-black
                    sm:-right-6
                  "
                >
                  ›
                </button>
              </>
            )}

            {/* SLIDER FOOTER */}
            {images.length > 1 && (
              <div className="mt-5 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  {images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() =>
                        setCurrentImage(imageIndex)
                      }
                      aria-label={`Show image ${
                        imageIndex + 1
                      }`}
                      className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          currentImage === imageIndex
                            ? 'w-7 bg-yellow-400'
                            : 'w-2 bg-gray-600 hover:bg-gray-400'
                        }
                      `}
                    />
                  ))}
                </div>

                <span className="text-xs font-medium tracking-wider text-gray-500">
                  {String(currentImage + 1).padStart(
                    2,
                    '0'
                  )}
                  {' / '}
                  {String(images.length).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
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
  children: ReactNode
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
            min-h-[48px]
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-yellow-400
            px-6
            py-3
            text-sm
            font-bold
            text-black
            shadow-[0_12px_35px_rgba(250,204,21,0.15)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-yellow-300
            hover:shadow-[0_15px_40px_rgba(250,204,21,0.22)]
            sm:text-base
          `
          : `
            inline-flex
            min-h-[48px]
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-yellow-400/60
            bg-yellow-400/[0.03]
            px-6
            py-3
            text-sm
            font-semibold
            text-yellow-400
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-yellow-400
            hover:bg-yellow-400
            hover:text-black
            sm:text-base
          `
      }
    >
      {children}
    </a>
  )
}

function ExternalArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
