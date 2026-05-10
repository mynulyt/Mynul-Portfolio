
export default function Projects() {
  const projects = [
    {
      title: 'Poran Global',
      desc: 'Multi Vendor eCommerce Flutter Application.',
      link: 'https://play.google.com/store/apps/details?id=com.poranglobalapp.app'
    },
    {
      title: 'Quick Delivery',
      desc: 'Multi Vendor Delivery Platform.',
      link: 'https://play.google.com/store/apps/details?id=com.quickdeliveruser.app'
    },
    {
      title: 'Poran Seller Center',
      desc: 'Seller management application for vendors.',
      link: 'https://play.google.com/store/apps/details?id=com.poranseller.app'
    }
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-14 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="text-yellow-400"
              >
                View on Play Store →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
