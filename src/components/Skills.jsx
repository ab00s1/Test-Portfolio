export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
      ]
    },
    {
      name: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "RESTful APIs", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-cyan-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-6">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-6">Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">English</span>
                <span className="text-cyan-400">Fluent</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full w-11/12"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">Hindi</span>
                <span className="text-cyan-400">Native</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}