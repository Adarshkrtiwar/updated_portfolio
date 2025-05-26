import { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["Frontend Developer", "React Developer", "Next.js Enthusiast", "Problem Solver"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      setText(currentRole.substring(0, text.length - 1));
      setSpeed(50);
    } else {
      setText(currentRole.substring(0, text.length + 1));
      setSpeed(150);
    }

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    const timer = setTimeout(() => {}, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">
          Hi, I'm <span className="gradient-text">Adarsh Kr. Tiwari</span>
        </h1>
        <p className="hero-subheading">
          <span className="typed-text">{text}</span>
          <span className="blinking-cursor">|</span>
        </p>
        <a href="#contact" className="hero-button">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
