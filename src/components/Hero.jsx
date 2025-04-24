export default function Hero() {
  return (
    <section id="hero" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-medium text-cyan-400 mb-2">Hello, I am</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Abhinav Singh</h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">Aspiring Full-stack Developer</h3>
          <p className="text-slate-400 text-lg mb-8">
            Dedicated and technically proficient Computer Applications student with hands-on experience in 
            full-stack development. Passionate about creating intuitive user interfaces and efficient backend systems.
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 font-medium rounded-md transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl shadow-cyan-500/20">
              <img 
                src="/src/assets/profile.jpg" 
                alt="Abhinav Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-800 px-6 py-2 rounded-full border border-slate-700 shadow-lg">
              <span className="text-cyan-400 font-medium">DSA Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
