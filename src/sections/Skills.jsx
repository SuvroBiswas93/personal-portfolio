import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import { fadeIn } from "../utils/animations";
import { skills } from "../data/portfolio";
import { skillIcons } from "../data/skillIcons";
import { skillColors } from "../data/skillColors";

const SkillBar = ({ skill, index }) => {
  const Icon = skillIcons[skill.name];
  const color = skillColors[skill.name] || "#2563EB"; // fallback blue

  return (
    <motion.div
      variants={fadeIn("up", 0.1 * index)}
      className="space-y-2"
    >
      <div className="flex justify-between items-center group">
        <div className="flex items-center gap-3">
          {Icon && (
            <Icon
              className="text-lg transition-transform group-hover:scale-110"
              style={{ color }}
            />
          )}
          <span className="text-gray-700 font-medium">
            {skill.name}
          </span>
        </div>

        <span className="text-blue-600 font-semibold">
          {skill.level}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2 * index,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2 * index)}
      className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
        {category.category}
      </h3>

      <div className="space-y-6">
        {category.items.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper
      id="skills"
      className="bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <SectionTitle
        title="Skills & Expertise"
        subtitle="Technologies and tools I work with"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <SkillCategory
            key={category.category}
            category={category}
            index={index}
          />
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", 0.8)}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 text-lg">
          Always learning and exploring new technologies to stay at the cutting edge
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
