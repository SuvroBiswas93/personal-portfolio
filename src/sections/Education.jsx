import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { fadeIn } from '../utils/animations';
import { education, certificates } from '../data/portfolio';
import Button from '../components/Button';

const Education = () => {
  // Filter only Bachelor's degree
  const bachelor = education.find((edu) =>
    edu.degree.toLowerCase().includes('bachelor')
  );

  return (
    <SectionWrapper id="education" className="bg-gradient-to-br from-white to-gray-100">
      <SectionTitle
        title="Education"
        subtitle="A journey of knowledge and growth"
      />

      <div className="relative mt-12 lg:mt-16">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 w-1 bg-blue-600 h-full rounded-full hidden md:block"></div>

        {bachelor && (
          <motion.div
            variants={fadeIn('up', 0.1)}
            className="relative md:pl-16"
          >
            {/* Dot on timeline */}
            <div className="absolute -left-2 top-4 md:-left-3 md:top-6 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

            {/* Glass card */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">{bachelor.degree}</h4>
              <p className="text-blue-600 font-semibold mt-1">{bachelor.institution}</p>
              <p className="text-gray-500 text-sm mt-1">{bachelor.period}</p>
              <p className="text-gray-700 mt-2 leading-relaxed">{bachelor.description}</p>
            </div>
          </motion.div>
        )}

        {/* Download Certificates Button */}
        {certificates.length > 0 && (
          <div className="mt-12 text-center">
            <Button
              icon={GraduationCap}
              variant="primary"
              size="lg"
              onClick={() => window.open('/path-to-certificates.pdf', '_blank')}
            >
              Download Certificates
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Education;
