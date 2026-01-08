import { useEffect } from 'react';
import Projects from '../sections/Projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-20">
      <Projects />
    </div>
  );
};

export default ProjectsPage;
