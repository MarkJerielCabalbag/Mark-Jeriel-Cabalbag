import { motion } from "framer-motion";
import certificate1 from "../assets/makati.png";
import certificate2 from "../assets/sillag.png";
import certificate3 from "../assets/css.png";
import certificate4 from "../assets/ciscohtml.png";
import certificate5 from "../assets/ciscojs1.png";
import certificate6 from "../assets/ciscocss.png";
import certificate7 from "../assets/ibm-web-fundamentals.png";

const Certificates = () => {
  const certifications = [
    {
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      date: "April 4, 2025",
      description:
        "Mastered fundamental HTML concepts including semantic markup, document structure, accessibility best practices, and modern HTML5 features through Cisco's comprehensive certification program.",
      certificate: certificate4,
    },
    {
      title: "Javascript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "February 12, 2025",
      description:
        "Acquired strong foundation in JavaScript programming, covering core concepts such as DOM manipulation, event handling, async programming, and modern ES6+ features.",
      certificate: certificate5,
    },
    {
      title: "CSS Essentials",
      issuer: "Cisco Networking Academy",
      date: "April 6, 2025",
      description:
        "Developed expertise in CSS styling, including flexbox, grid layouts, responsive design, animations, and modern CSS features for creating polished web interfaces.",
      certificate: certificate6,
    },
    {
      title: "Web Dvelopment Fundamentals",
      issuer: "IBM SKILLSBUILD",
      date: "April 11, 2025",
      description:
        "This credential earner demonstrates knowledge of web development concepts, processes to develop, deploy, and test websites, and the tools and programming languages that web developers use. The individual has a conceptual understanding of how to develop an interactive website using HTML, CSS, and JavaScript in a simulated integrated development environment (IDE). The earner is aware of the job outlook in web development and is familiar with the skills required for success in various roles.",
      certificate: certificate7,
    },
  ];
  const recognitionAndAwards = [
    {
      title: "2nd Runner Up, Web Design",
      issuer: "12th IT Skills Olympics, University of Makati",
      date: "November 24, 2023",
      description:
        "Achieved recognition in a prestigious national competition involving 50 Universities and Colleges, demonstrating excellence in web design principles, user interface development, and creative problem-solving.",
      certificate: certificate1,
    },
    {
      title: "Finalist, Student Category",
      issuer:
        "SILLAG Startup Summit and Hackathon: Ilocos Sur Leg, University of Northern Philippines",
      date: "August 23, 2024",
      description:
        "Participated in an intensive hackathon event where teams collaborated to develop innovative solutions for real-world problems, showcasing skills in rapid prototyping and entrepreneurial thinking.",
      certificate: certificate2,
    },
    {
      title: "2nd Place, Web Development Competition",
      issuer:
        "CCS Week 2024, Tech Fusion: Blending Boundaries and Igniting Possibilities, ISPSC Sta. Maria Campus",
      date: "June, 7, 2024",
      description:
        "Secured second place by demonstrating proficiency in modern web development technologies, responsive design implementation, and creating user-centric web applications.",
      certificate: certificate3,
    },
  ];
  return (
    <motion.div className="mx-auto">
      <motion.h2
        className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Awards & Recognitions
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recognitionAndAwards.map((cert, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-white/5 backdrop-blur-sm hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {cert.certificate && (
              <div className="mb-4 rounded-md">
                <img
                  src={cert.certificate}
                  alt={cert.title}
                  className="w-full "
                />
              </div>
            )}
            <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
            <h4 className="text-gray-600 font-medium mb-2">{cert.issuer}</h4>
            <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-xl my-5 sm:text-2xl font-bold mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-white/5 backdrop-blur-sm hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {cert.certificate && (
              <div className="mb-4 rounded-md">
                <img
                  src={cert.certificate}
                  alt={cert.title}
                  className="w-full "
                />
              </div>
            )}
            <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
            <h4 className="text-gray-600 font-medium mb-2">{cert.issuer}</h4>
            <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
