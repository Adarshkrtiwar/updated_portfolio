const skills = [
  { name: "C", level: "85%" },
  { name: "C++", level: "85%" },
  { name: "Python", level: "80%" },

  { name: "HTML5", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "95%" },

  { name: "React.js", level: "90%" },
  { name: "Redux", level: "85%" },
  { name: "Bootstrap", level: "80%" },

  { name: "Node.js", level: "85%" },
  { name: "Express.js", level: "80%" },
  { name: "MongoDB", level: "80%" },
  { name: "Mongoose", level: "75%" },

  { name: "JWT (Authentication & Authorization)", level: "75%" },
  { name: "Bcryptjs", level: "70%" },

  { name: "RESTful APIs", level: "80%" },

  { name: "MySQL", level: "75%" },
  { name: "Git & GitHub", level: "90%" },

  { name: "AWS", level: "65%" },
  { name: "Unit Testing & Manual Testing", level: "70%" },

  { name: "Data Structures & Algorithms", level: "80%" },
  { name: "Database Management Systems", level: "75%" },
  { name: "Operating Systems", level: "70%" },
  { name: "Object-Oriented Programming (OOP)", level: "85%" },
  { name: "Computer Networks", level: "70%" },
  { name: "Cryptography & Network Security", level: "60%" },
  { name: "Natural Language Processing (NLP)", level: "60%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
              </div>
              <div className="skill-bar-bg" style={{ backgroundColor: '#ddd', borderRadius: '8px', overflow: 'hidden', height: '10px' }}>
                <div
                  className="skill-bar-fill"
                  style={{
                    width: skill.level,
                    backgroundColor: '#4caf50',
                    height: '100%',
                    transition: 'width 0.6s ease',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
