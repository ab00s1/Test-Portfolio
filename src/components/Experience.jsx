export default function Experience() {
  const experiences = [
    {
      title: "EY Global Delivery Services & AICTE Internship",
      company: "EY Global Delivery Services",
      period: "February 10, 2025 - March 21, 2025",
      location: "India",
      description: [
        "Successfully completed 6 weeks of internship focused on Building Modern Web Applications with MERN Stack",
        "Participated in the Next Gen Employability Program, developing practical skills in modern web development",
        "Applied full-stack development techniques to create scalable and responsive web applications",
        "Collaborated with team members to implement best practices in web development"
      ],
      tags: ["MERN Stack", "Web Development", "Team Collaboration", "Responsive Design"]
    }
  ];

  const projects = [
    {
      title: "AI-based Interview and Feedback System",
      company: "Personal Project",
      period: "March 2025 - April 2025",
      description: [
        "Developed a sophisticated web application that helps job seekers prepare for technical interviews through AI-generated coding challenges tailored to specific job descriptions",
        "Implemented functionality to generate personalized feedback on coding solutions",
        "Utilized modern web technologies to create an intuitive and responsive user interface"
      ],
      tags: ["REST APIs", "MongoDB", "React.js", "Express.js", "Tailwind CSS", "Node.js"]
    },
    {
      title: "Online Auction Platform",
      company: "Personal Project",
      period: "February 2025 - March 2025",
      description: [
        "Created a dynamic online auction platform enabling buyers and sellers to interact in real-time",
        "Developed a modern user interface using React for the frontend and Express.js for the backend",
        "Implemented secure payment processing, user-friendly interfaces, and scalable architecture"
      ],
      tags: ["MongoDB", "React.js", "Bootstrap", "Node.js", "Express.js", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
          <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-600"></div>
          
          {/* Timeline content */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 z-10"></div>
                
                {/* Content card */}
                <div className={`md:w-5/12 rounded-xl bg-slate-700 shadow-lg p-6 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <span className="mt-2 md:mt-0 text-cyan-400 font-medium">{exp.period}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      <span className="text-slate-300">{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-slate-300">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="mb-4 space-y-2 list-disc list-inside text-slate-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span key={idx} className="bg-slate-600 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-700 rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="mt-2 md:mt-0 text-cyan-400 font-medium">{project.period}</span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-1">
                  <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  <span className="text-slate-300">{project.company}</span>
                </div>
              </div>
              
              <ul className="mb-4 space-y-2 list-disc list-inside text-slate-300">
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-600 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 