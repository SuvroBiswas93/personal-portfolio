import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { fadeIn } from '../utils/animations';
import { education } from '../data/portfolio';

// Shared classes for consistent layout
const cardBaseClasses = "rounded-3xl p-8 flex flex-col justify-between h-full transition-all";

const EducationCardStyle1 = ({ item, index }) => (
  <motion.div
    variants={fadeIn('up', 0.2 * index)}
    className={`${cardBaseClasses} bg-gradient-to-br from-blue-100 to-blue-50 shadow-xl hover:shadow-3xl border-t-4 border-blue-500 relative`}
  >
    {/* Icon */}
    <div className="absolute top-6 right-4 bg-blue-100 p-3 rounded-full shadow-md flex items-center justify-center">
      <BookOpen className="w-6 h-6 text-blue-600" />
    </div>

    {/* Degree and School */}
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
      <p className="text-blue-600 font-semibold">{item.school}</p>
    </div>

    {/* Field */}
    <span className="inline-block mt-2 px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
      {item.field}
    </span>

    {/* Year */}
    <div className="flex items-center gap-2 mt-4 text-gray-600">
      <Calendar className="w-4 h-4" />
      <span className="font-medium">{item.year}</span>
    </div>

    {/* Description */}
    <p className="mt-4 text-gray-700 leading-relaxed">{item.description}</p>
  </motion.div>
);

const EducationCardStyle2 = ({ item, index }) => (
  <motion.div
    variants={fadeIn('up', 0.2 * index)}
    className={`${cardBaseClasses} bg-white shadow-xl hover:shadow-3xl border-t-4 border-purple-500 relative`}
  >
    <div className="absolute top-6 right-4 bg-purple-100 p-3 rounded-full shadow-md flex items-center justify-center">
      <BookOpen className="w-6 h-6 text-purple-600" />
    </div>

    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
      <p className="text-purple-600 font-semibold">{item.school}</p>
    </div>

    <span className="inline-block mt-2 px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">
      {item.field}
    </span>

    <div className="flex items-center gap-2 mt-4 text-gray-600">
      <Calendar className="w-4 h-4" />
      <span className="font-medium">{item.year}</span>
    </div>

    <p className="mt-4 text-gray-700 leading-relaxed">{item.description}</p>
  </motion.div>
);

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-gradient-to-br from-blue-50 to-gray-50">
      <SectionTitle
        title="Education"
        subtitle="My learning journey and certifications"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {education.map((item, index) => (
          index % 2 === 0 ? (
            <EducationCardStyle1 key={item.id} item={item} index={index} />
          ) : (
            <EducationCardStyle2 key={item.id} item={item} index={index} />
          )
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 0.8)}
        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center"
      >
        <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
        <p className="text-lg font-semibold">
          Continuous learning is my commitment to staying updated with the latest technologies and best practices
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Education;
