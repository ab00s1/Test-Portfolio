export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Computer Applications",
      institution: "Lovely Professional University (LPU)",
      period: "September 2023 - June 2026 (Expected)",
      location: "India",
      description: "Pursuing a comprehensive program in computer applications with a focus on software development, data structures, and web technologies.",
      grade: "In Progress"
    },
    {
      degree: "Bachelor of Technology - Mechanical Engineering",
      institution: "Harcourt Butler Technical University",
      period: "November 2020 - May 2023",
      location: "India",
      description: "",
      grade: ""
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-500/20 rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <div className="text-cyan-400">{edu.institution}</div>
                </div>
              </div>
              
              <div className="ml-16">
                <div className="flex items-center mb-3">
                  <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-slate-300">{edu.period}</span>
                  
                  <svg className="w-4 h-4 text-cyan-400 ml-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-slate-300">{edu.location}</span>
                </div>
                
                <p className="text-slate-300 mb-3">{edu.description}</p>
                
                <div className="bg-slate-700/50 rounded-lg px-4 py-2 inline-block">
                  <span className="text-cyan-300 font-medium">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
