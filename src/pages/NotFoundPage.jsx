import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import { fadeIn } from '../utils/animations';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50 px-4 pt-20">
      <motion.div
        variants={fadeIn('down', 0)}
        initial="hidden"
        animate="show"
        className="text-center max-w-md"
      >
        <motion.div
          variants={fadeIn('up', 0.2)}
          className="text-9xl font-bold text-transparent bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text mb-4"
        >
          404
        </motion.div>

        <motion.h1
          variants={fadeIn('up', 0.3)}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 text-lg mb-8"
        >
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.5)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button icon={Home} size="lg">
              Go Home
            </Button>
          </Link>
          <Link to="/projects">
            <Button icon={ArrowRight} variant="outline" size="lg">
              View Projects
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
