import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { fadeIn } from '../utils/animations';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.1 * index)}
      initial={false}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-500
            md:group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0 bg-linear-to-t from-black/60 to-transparent
            opacity-100 md:opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Live Demo
            </motion.a>

            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              Code
            </motion.a>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <SectionWrapper id="projects" className="bg-white">
      <SectionTitle
        title="Featured Projects"
        subtitle="Some of my recent work and side projects"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div variants={fadeIn('up', 0.3)} initial={false}>
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          More Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
