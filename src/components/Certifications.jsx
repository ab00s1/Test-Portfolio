export default function Certifications() {
  const certifications = [
    {
      name: "Building Modern Web Applications with MERN Stack",
      issuer: "EY Global Delivery Services & AICTE",
      date: "March 2025",
      credential: "CERT-MERN-2025",
      image: "https://placehold.co/200x100/2563eb/ffffff?text=EY"
    },
    {
      name: "Start the UX Design Process: Empathize, Define, and Ideate",
      issuer: "Google",
      date: "February 2025",
      credential: "UX-DESIGN-2025",
      image: "https://placehold.co/200x100/4285F4/ffffff?text=Google"
    },
    {
      name: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "January 2025",
      credential: "FCC-JS-2025",
      image: "https://placehold.co/200x100/0a0a23/ffffff?text=freeCodeCamp"
    },
    {
      name: "Programming with C and C++",
      issuer: "Coursera",
      date: "December 2024",
      credential: "COURSE-CPP-2024",
      image: "https://placehold.co/200x100/2A73CC/ffffff?text=Coursera"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-700 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-24 flex items-center justify-center bg-slate-600">
                <img src={cert.image} alt={cert.name} className="max-h-16" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    <span className="text-slate-300">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-slate-300">{cert.date}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="text-slate-300">{cert.credential}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center">
                    View Certificate
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
