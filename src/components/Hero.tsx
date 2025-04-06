import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import html from ".././assets/badges/html-essentials.png";
import js1 from ".././assets/badges/javascript-essentials-1.png";

const Hero = () => {
  const containerVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const badges = [
    {
      id: 1,
      badges: html,
      link: "https://www.credly.com/badges/dc4e7889-b82a-40d6-95d7-9b3f544d20cd",
    },
    {
      id: 2,
      badges: js1,
      link: "https://www.credly.com/badges/bab74507-407c-4d65-b394-ebf831d5b171",
    },
  ];

  return (
    <motion.section
      className="min-h-screen my-10"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4"
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        <motion.img
          src={profile}
          className="w-24 h-24 sm:w-30 sm:h-30 rounded"
        />
        <motion.div variants={itemVariants}>
          <motion.h1 className="font-bold text-xl text-center sm:text-left">
            Mark Jeriel Cabalbag
          </motion.h1>
          <motion.p
            className="text-gray-500 text-center sm:text-left"
            variants={itemVariants}
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.hr className="my-8 sm:my-10" />

      <motion.div className="space-y-6" variants={itemVariants}>
        <motion.h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          About me
        </motion.h2>
        <motion.p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          Hi, I'm Mark Jeriel Cabalbag, a frontend developer with a passion for
          creating beautiful and functional user interfaces. I love to learn new
          technologies and improve my skills.
        </motion.p>
        <motion.p className="text-gray-700 leading-relaxed  text-sm sm:text-base">
          I'm currently looking for opportunities to work on exciting projects
          and collaborate with talented teams.
        </motion.p>

        <motion.h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Badges
        </motion.h2>

        <motion.p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
          These badges represent my professional achievements and certifications
          in web development. They validate my commitment to continuous learning
          and demonstrate my technical proficiency in various development
          technologies.
        </motion.p>

        <motion.div className="flex gap-2">
          {badges.map((badge) => (
            <a
              title="Verify Badge?"
              key={badge.id}
              href={badge.link}
              target="_blank"
            >
              <motion.img src={badge.badges} className="h-20 w-20" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-4 sm:space-y-6 mt-8 sm:mt-10"
        variants={itemVariants}
      >
        <motion.h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Experiences
        </motion.h2>
        <motion.div
          className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
            <motion.div>
              <motion.h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Web Developer
              </motion.h3>
              <motion.h4 className="text-sm sm:text-md font-medium text-gray-500 mt-1">
                MIS ISPSC Sta. Maria Campus
              </motion.h4>
            </motion.div>
            <motion.span className="text-sm text-gray-500">2025</motion.span>
          </motion.div>
          <motion.ul className="text-gray-700 mt-4 leading-relaxed list-disc pl-5 space-y-2 text-sm sm:text-base">
            <motion.li>
              Spearheaded the development of a graduate tracer system, resulting
              in 90% improvement in alumni data collection efficiency
            </motion.li>
            <motion.li>
              Designed and implemented RESTful APIs using Express.js, handling
              data for over 1,000+ alumni records
            </motion.li>
            <motion.li>
              Developed responsive UI components with React and TypeScript,
              achieving 99% mobile compatibility
            </motion.li>
            <motion.li>
              Optimized database queries using PostgreSQL, reducing load times
              by 40%
            </motion.li>
          </motion.ul>
          <motion.div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-50 text-gray-600 rounded-full text-xs sm:text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-blue-50 text-gray-600 rounded-full text-xs sm:text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-blue-50 text-gray-600 rounded-full text-xs sm:text-sm">
              Tailwind
            </span>
            <span className="px-3 py-1 bg-blue-50 text-gray-600 rounded-full text-xs sm:text-sm">
              Express
            </span>
            <span className="px-3 py-1 bg-blue-50 text-gray-600 rounded-full text-xs sm:text-sm">
              PostgreSQL
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-4 sm:space-y-6 mt-8 sm:mt-10"
        variants={itemVariants}
      >
        <motion.h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Skills
        </motion.h2>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-4">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "HTML",
            "CSS",
            "Git",
            "Figma",
            "Node.js",
            "Express",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Prisma",
            "REST APIs",
          ].map((skill) => (
            <motion.div
              key={skill}
              className="bg-blue-50 px-3 sm:px-4 py-2 rounded-lg text-gray-700 text-xs sm:text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
