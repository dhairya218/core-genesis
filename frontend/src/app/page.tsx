export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            We help businesses grow through innovative web development, SEO optimization, and strategic marketing solutions.
          </p>
          <button className="btn-cta">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Web Development', 'SEO', 'Marketing'].map((service) => (
              <div key={service} className="p-6 rounded-lg bg-[rgb(245,245,245)]">
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-[rgb(34,34,34)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 