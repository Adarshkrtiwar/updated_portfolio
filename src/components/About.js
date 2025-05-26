

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
          I'm a passionate frontend developer with expertise in React, Next.js, and modern UI.
          I love building scalable, user-friendly web applications that solve real-world problems.
          With a strong foundation in JavaScript and frontend architecture, I aim to create seamless digital experiences.
        </p>
        <div className="about-button-wrapper">
          <a href="/resume.pdf" download className="about-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
