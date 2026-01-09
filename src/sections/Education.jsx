import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { fadeIn } from '../utils/animations';
import { education } from '../data/portfolio';

const EducationCard = ({ item, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2 * index)}
      className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border-l-4 border-blue-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{item.degree}</h3>
            <p className="text-blue-600 font-semibold">{item.school}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          {item.field}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4 text-gray-600">
        <Calendar className="w-4 h-4" />
        <span className="font-medium">{item.year}</span>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-gradient-to-br from-blue-50 to-gray-50">
      <SectionTitle
        title="Education"
        subtitle="My learning journey and certifications"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {education.map((item, index) => (
          <EducationCard key={item.id} item={item} index={index} />
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
