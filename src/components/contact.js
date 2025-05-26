const Contact = () => {
  return (
    <section id="contact" style={{ padding: "2rem", maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Get in Touch</h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "#555" }}>
        Whether you want to collaborate, have questions, or just want to say hi, I'm just a message or call away.
        Feel free to reach out anytime!
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        📧 <strong>Email:</strong> <a href="mailto:adarsh7576061625@gmail.com" style={{ color: "#4f46e5", textDecoration: "none" }}>adarsh7576061625@gmail.com</a>
      </p>
      <p style={{ fontSize: "1.2rem" }}>
        📞 <strong>Contact No:</strong> <a href="tel:+916377544705" style={{ color: "#4f46e5", textDecoration: "none" }}>6377544705</a>
      </p>
    </section>
  );
};

export default Contact;
