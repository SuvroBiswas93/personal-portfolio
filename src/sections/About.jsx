import { motion } from 'framer-motion';
import { Briefcase, MapPin, Download } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { fadeIn } from '../utils/animations';
import { personalInfo, experience } from '../data/portfolio';
import Button from '../components/Button';
import myImg from '../assets/suvro.jpg';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white">
      <SectionTitle
        title="About Me"
        subtitle="Get to know more about my background and experience"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 rounded-2xl rotate-6"></div>
            <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-indigo-600 rounded-2xl -rotate-6"></div>
            <img
              src={myImg}
              alt="Profile"
              className="relative rounded-2xl w-full h-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          className="space-y-5 sm:space-y-6"
        >
          {/* Location & Role */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
              <MapPin className="text-blue-600 shrink-0" size={18} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
              <Briefcase className="text-blue-600 shrink-0" size={18} />
              <span>{personalInfo.title}</span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
            {personalInfo.bio}
          </p>

          {/* Programming Journey */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
            My programming journey began with curiosity about how websites work behind the scenes.
            What started as small experiments with HTML and CSS gradually evolved into building
            full-fledged web applications using JavaScript and modern frontend technologies.
            Each project I take on helps me improve my problem-solving skills and write cleaner,
            more scalable code.
          </p>

          {/* Work Preference */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
            I enjoy working on interactive, user-focused interfaces where design and functionality
            come together. Creating smooth UI interactions, optimizing performance, and ensuring
            responsive layouts across devices are the parts of development I enjoy the most.
          </p>

          {/* Personality */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
            Outside of programming, I like staying active and exploring creative interests.
            Whether it’s sports, learning new tools, or experimenting with UI ideas, I believe
            in maintaining a healthy balance between technical growth and personal creativity.
            I consider myself a curious, disciplined, and growth-driven individual.
          </p>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Experience
            </h3>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeIn('up', 0.1 * index)}
                className="border-l-4 border-blue-600 pl-3 sm:pl-4 py-2"
              >
                <h4 className="font-semibold text-base sm:text-lg text-gray-900">
                  {exp.position}
                </h4>
                <p className="text-blue-600 font-medium text-sm sm:text-base">
                  {exp.company}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  {exp.period}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Resume Button */}
          <div className="flex justify-center sm:justify-start">
            <Button
              icon={Download}
              variant="primary"
              size="lg"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              className="cursor-pointer"
            >
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
