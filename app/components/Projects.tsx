'use client'

export default function Projects() {

  const projects = [
    {
      title: 'Poran Global',
      desc: 'Multi Vendor eCommerce Flutter Application with modern UI, secure payment system, REST API integration, Firebase support, and scalable architecture.',

      images: [
        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454022/WhatsApp_Image_2026-05-11_at_4.58.47_AM_gdbvws.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454019/WhatsApp_Image_2026-05-11_at_4.58.48_AM_pcxvhu.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454015/WhatsApp_Image_2026-05-11_at_4.58.48_AM_1_cgamo2.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454014/WhatsApp_Image_2026-05-11_at_4.58.48_AM_2_qxo8rr.jpg',

        'https://res.cloudinary.com/dfa4buz7j/image/upload/v1778454014/WhatsApp_Image_2026-05-11_at_4.58.49_AM_gsd8qf.jpg',
      ],

      link:
        'https://play.google.com/store/apps/details?id=com.poranglobalapp.app',

      tech: [
        'Flutter',
        'Firebase',
        'REST API',
        'GetX',
        'Provider'
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-black text-white"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-extrabold text-center mb-16 text-yellow-400">
          Featured Projects
        </h2>

        <div className="space-y-20">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-[#111111] rounded-[40px] border border-gray-800
              overflow-hidden hover:border-yellow-400
              transition duration-500 hover:shadow-2xl
              hover:shadow-yellow-400/20"
            >

              {/* IMAGE SCROLL */}
              <div className="flex gap-5 overflow-x-auto p-6 scrollbar-hide">

                {project.images.map((image, i) => (

                  <img
                    key={i}
                    src={image}
                    alt={project.title}
                    className="h-[500px] rounded-3xl border border-gray-700
                    hover:scale-[1.03] transition duration-300"
                  />

                ))}

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-4xl font-bold mb-5">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg leading-8 mb-8">
                  {project.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="bg-yellow-400/10 text-yellow-400
                      px-4 py-2 rounded-full text-sm border border-yellow-400/20"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* BUTTON */}
                <a
                  href={project.link}
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

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
