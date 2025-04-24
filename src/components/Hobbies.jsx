export default function Hobbies() {
  const strengths = [
    {
      name: "Problem Solving",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "Strong analytical and problem-solving abilities demonstrated through competitive programming on platforms like CodeChef and Codeforces."
    },
    {
      name: "Quick Learner",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "Passion for new technologies and ability to quickly adapt to and learn new technical skills and frameworks."
    },
    {
      name: "Teamwork",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Excellent teamwork and collaboration skills developed through group projects and internship experiences."
    },
    {
      name: "Adaptability",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "Adaptable to fast-paced environments and changing requirements, with a focus on delivering quality solutions on time."
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Strengths & Interests</h2>
          <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 shadow-lg flex gap-6">
              <div className="bg-cyan-500/20 rounded-full h-20 w-20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                {strength.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{strength.name}</h3>
                <p className="text-slate-300">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">Competitive Programming</h3>
          <div className="space-y-4">
            <div className="bg-slate-700 rounded-lg p-4">
              <h4 className="text-lg font-medium text-cyan-400 mb-2">Data Structures and Algorithms</h4>
              <p className="text-slate-300">
                Active participant on platforms like CodeChef and Codeforces to enhance problem-solving skills.
                Regularly practice implementing various data structures and algorithms to solve complex programming
                challenges, which has significantly improved my logical thinking and coding efficiency.
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg p-4">
              <h4 className="text-lg font-medium text-cyan-400 mb-2">Language Proficiency</h4>
              <p className="text-slate-300">
                Bilingual proficiency in English and Hindi, which enables me to communicate effectively
                with diverse teams and clients. Strong technical writing skills for documentation and 
                technical specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 