'use client'

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-yellow-400 text-lg mb-3 animate-pulse">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Mynul Alam
          </h1>

          <h2 className="text-2xl text-gray-300 mt-4">
            Junior Software Engineer | Flutter Developer
          </h2>

          <p className="text-gray-400 mt-6 leading-8 text-lg">
          Flutter Developer with 2+ years of experience building high-performance, cross-platform mobile applications for Android and iOS using Flutter and Dart. Skilled in RESTful API integration, Firebase, Provider, GetX, and modern architectures like MVVM and Clean Architecture. Experienced in integrating Machine Learning features using Google ML Kit and custom ML models. Strong focus on performance optimization, clean UI/UX, and scalable app development. Passionate about learning new technologies and building efficient, user-friendly mobile applications.

          </p>

          {/* CONTACT INFO */}
          <div className="mt-6 space-y-2">
            <p className="text-gray-300">
              📧 alammynul43@gmail.com
            </p>

            <p className="text-gray-300">
              📱 +8801860696114
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="https://github.com/mynulyt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-4 rounded-full text-2xl
              animate-bounce
              hover:scale-125
              hover:rotate-12
              hover:bg-white
              transition-all duration-300 shadow-lg shadow-yellow-400/40"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mynul-alam-362231230/?_l=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-4 rounded-full text-2xl
              animate-pulse
              hover:scale-125
              hover:-rotate-12
              hover:bg-white
              transition-all duration-300 shadow-lg shadow-yellow-400/40"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/8801860696114"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-4 rounded-full text-2xl
              animate-bounce
              hover:scale-125
              hover:rotate-12
              hover:bg-white
              transition-all duration-300 shadow-lg shadow-yellow-400/40"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:alammynul43@gmail.com"
              className="bg-yellow-400 text-black p-4 rounded-full text-2xl
              animate-pulse
              hover:scale-125
              hover:-rotate-12
              hover:bg-white
              transition-all duration-300 shadow-lg shadow-yellow-400/40"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* RESUME BUTTON */}
          <div className="mt-10">
            <a
              href="https://res.cloudinary.com/dfa4buz7j/image/upload/Mynul_Resume_jpmsyp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg
              hover:scale-105 hover:bg-white transition duration-300
              shadow-xl shadow-yellow-400/40"
            >
              Download Resume
            </a>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 rounded-full animate-pulse"></div>

            <img
              src="https://res.cloudinary.com/dfa4buz7j/image/upload/v1778451355/IMG_3715_dxejhc.jpg"
              alt="Mynul"
              className="relative rounded-[40px] border-4 border-yellow-400
              w-[380px] object-cover
              hover:scale-105 transition duration-500
              shadow-2xl shadow-yellow-400/30"
            />

          </div>

        </div>

      </div>
    </section>
  )
}
