import { useEffect } from 'react';
import Skills from '../sections/Skills';

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-20">
      <Skills />
    </div>
  );
};

export default SkillsPage;
