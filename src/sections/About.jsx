import { motion } from 'framer-motion';
import { Briefcase, MapPin, Download } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { fadeIn } from '../utils/animations';
import { personalInfo, experience } from '../data/portfolio';
import Button from '../components/Button';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white">
      <SectionTitle
        title="About Me"
        subtitle="Get to know more about my background and experience"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeIn('right', 0.2)}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -rotate-6"></div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Profile"
              className="relative rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-blue-600" size={20} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Briefcase className="text-blue-600" size={20} />
              <span>{personalInfo.title}</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {personalInfo.bio}
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeIn('up', 0.1 * index)}
                className="border-l-4 border-blue-600 pl-4 py-2"
              >
                <h4 className="font-semibold text-lg text-gray-900">{exp.position}</h4>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>

          <Button
            icon={Download}
            variant="primary"
            size="lg"
            onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
          >
            Download Resume
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
