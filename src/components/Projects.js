const projects = [
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with React, Redux, Node.js, and MongoDB. Features user authentication, product listings, cart functionality, Stripe/PayPal integration, and an admin panel for managing products & orders.",
    // image: "/images/ecommerce.jpg",
    // demo: "https://your-ecommerce-demo.com",
    github: "https://github.com/Adarshkrtiwar",
  },
  {
    title: "Social Media App with Real-Time Features",
    description:
      "A social media app built with React, Context API/Redux, Firebase & Firestore. Includes social login, real-time notifications, user profiles, post creation/interactions, and responsive UI with Tailwind/Material UI.",
    // image: "/images/socialmedia.jpg",
    // demo: "https://your-socialmedia-demo.com",
    github: "https://github.com/Adarshkrtiwar",
  },
  {
    title: "AI-Powered Q&A System (Major Project)",
    description:
      "An AI-based question answering system for college websites using DistilBERT NLP & Haystack for web scraping + deep learning. Achieved 62% accuracy in real-world college FAQ datasets.",
    // image: "/images/qa-system.jpg",
    // demo: "https://your-qa-system-demo.com",
    github: "https://github.com/Adarshkrtiwar",
  },
  // New projects added below
  {
    title: "GitHub User Info App",
    description:
      "A React app that fetches GitHub user data via API, displays user profile, repositories, and supports searching users with error handling and loading states.",
    github: "https://github.com/Adarshkrtiwar",
  },
  
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">My Projects</h2>
        <div className="projects-grid">
          {projects.map(({ title, description, image, demo, github }, index) => (
            <div key={index} className="project-card">
              {/* <img src={image} alt={title} className="project-image" /> */}
              <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-links">
                  {/* <a href={demo} target="_blank" rel="noopener noreferrer">
                    🔗 Live Demo
                  </a> */}
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
