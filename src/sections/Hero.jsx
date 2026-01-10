import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { fadeIn, textVariant } from '../utils/animations';
import Button from '../components/Button';
import Typewriter from '../components/Typewriter'
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/5 rounded-full"
            style={{
              width: Math.random() * 400 + 50,
              height: Math.random() * 400 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4 font-medium min-h-10 sm:min-h-14"
          >
            <Typewriter texts={personalInfo.typewriterTexts} speed={80} deleteSpeed={40} delayBetween={2000} />
          </motion.p>

          <motion.p
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            animate="show"
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button onClick={scrollToProjects} size="lg" className='cursor-pointer'>
              View My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg" className='cursor-pointer'>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: personalInfo.social.github },
              { icon: Linkedin, href: personalInfo.social.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} className="text-gray-700" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={32} className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
