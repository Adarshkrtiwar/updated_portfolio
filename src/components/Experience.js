const experiences = [
  {
    title: "Associate Software Developer",
    company: "Doodhvale Farms Pvt. Ltd., New Delhi",
    duration: "May 2024 – Present",
    points: [
      "Promoted to full-time role after successful internship based on performance and contribution.",
      "Built and deployed 15+ responsive web applications using React.js, Next.js, and Tailwind CSS with emphasis on performance and UI/UX (Spotify-like experience).",
      "Managed API integrations and state handling via Redux Toolkit and React Query.",
      "Implemented features like authentication, server-side rendering, and dynamic routing using Next.js.",
      "Deployed projects using Vercel, collaborated on designs via Figma, and followed clean code practices.",
      "Contributed to GitHub-based open source and internal team projects with agile methodology.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Doodhvale Farms Pvt. Ltd., Remote",
    duration: "March 2024 – May 2024",
    points: [
      "Developed core modules of internal customer dashboard using React and Tailwind CSS.",
      "Participated in sprint planning, code reviews, and collaborated closely with senior developers.",
      "Learned production-level coding practices including Git workflows, testing, and component reusability.",
      "Built reusable components for the product catalogue and customer profile pages.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Technex IIT BHU, Remote",
    duration: "June 2022 – July 2022",
    points: [
      "Worked on Real Estate Price Prediction model achieving 0.818 accuracy.",
      "Applied GridSearchCV, Linear Regression, and data preprocessing for model optimization.",
    ],
  },
  {
    title: "Web Development Trainee",
    company: "NIELIT, Remote",
    duration: "May 2021 – June 2021",
    points: [
      "Developed a responsive web music player with core playback functionality using HTML, CSS, and JavaScript.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-company">
              {exp.company} | <span className="experience-duration">{exp.duration}</span>
            </p>
            <ul className="experience-points">
              {exp.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
