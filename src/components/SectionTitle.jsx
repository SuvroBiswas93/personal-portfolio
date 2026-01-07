import { motion } from 'framer-motion';
import { textVariant } from '../utils/animations';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      variants={textVariant(0.1)}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
