import { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Education from '../sections/Education'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <About />
      {/* <Education /> */}
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
};

export default HomePage;
