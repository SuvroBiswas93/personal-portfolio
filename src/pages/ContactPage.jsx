import { useEffect } from 'react';
import Contact from '../sections/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-20">
      <Contact />
    </div>
  );
};

export default ContactPage;
