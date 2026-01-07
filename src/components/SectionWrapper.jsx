import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/animations';

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
