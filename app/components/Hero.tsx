
'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-yellow-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Mynul Alam
          </h1>

          <h2 className="text-2xl text-gray-300 mt-4">
            Junior Software Engineer | Flutter Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Flutter Developer with experience building scalable Android & iOS apps using Flutter, Firebase, REST APIs, GetX, Provider, and Clean Architecture.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/mynulyt"
              target="_blank"
              className="bg-yellow-400 text-black p-4 rounded-full"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mynul-alam-362231230/?_l=en_US"
              target="_blank"
              className="bg-yellow-400 text-black p-4 rounded-full"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
       <img
  src="https://res.cloudinary.com/dfa4buz7j/image/upload/v1778451355/IMG_3715_dxejhc.jpg"
  alt="Mynul"
  className="rounded-3xl border-4 border-yellow-400 w-[380px]"
/>
        </div>
      </div>
    </section>
  )
}
