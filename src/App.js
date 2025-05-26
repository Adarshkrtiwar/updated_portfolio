import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // moved up
import Projects from './components/Projects';
import Skills from './components/Skills';
import LinksAndAchievements from './components/LinksAndAchievements'; // moved down
import Contact from './components/contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <LinksAndAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "My Portfolio - Frontend Developer",
  description: "Portfolio of a React and Next.js developer showcasing projects and skills.",
};
