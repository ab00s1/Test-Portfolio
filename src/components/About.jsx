export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg">
              Dedicated and technically proficient Computer Applications student with hands-on experience in 
              full-stack development. Skilled in building web applications using the MERN stack with proven 
              project experience and internship training.
            </p>
            <p className="text-slate-300 text-lg">
              Passionate about creating intuitive user interfaces and efficient backend systems. 
              My approach is user-centered, ensuring each project is not only visually appealing 
              but also functional and accessible.
            </p>
            <p className="text-slate-300 text-lg">
              Beyond coding, I'm passionate about continuous learning and knowledge sharing. 
              I actively participate in competitive programming on platforms like CodeChef and Codeforces 
              to enhance my problem-solving skills and stay updated with the latest trends and best practices 
              in web development.
            </p>
          </div>
          
          <div className="bg-slate-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Personal Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-cyan-400 font-medium w-28">Name:</span>
                <span className="text-slate-300">Abhinav Singh</span>
              </li>
              <li className="flex">
                <span className="text-cyan-400 font-medium w-28">Email:</span>
                <span className="text-slate-300">abhi.singh6701@gmail.com</span>
              </li>
              <li className="flex">
                <span className="text-cyan-400 font-medium w-28">Phone:</span>
                <span className="text-slate-300">+91 8604776701</span>
              </li>
              <li className="flex">
                <span className="text-cyan-400 font-medium w-28">Location:</span>
                <span className="text-slate-300">Varanasi, Uttar Pradesh, India</span>
              </li>
              <li className="flex">
                <span className="text-cyan-400 font-medium w-28">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/abhinav-singh-961aa720a/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  linkedin.com/in/abhinav-singh
                </a>
              </li>
              <li className="flex">
                <span className="text-cyan-400 font-medium w-28">GitHub:</span>
                <a href="https://github.com/ab00s1/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  github.com/abhinav-singh
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a 
                href="/Resume - Abhinav Singh.pdf"
                className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 