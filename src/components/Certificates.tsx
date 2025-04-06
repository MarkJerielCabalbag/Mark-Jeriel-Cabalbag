import { motion } from "framer-motion";
import certificate1 from "../assets/makati.png";
import certificate2 from "../assets/sillag.png";
import certificate3 from "../assets/css.png";
import certificate4 from "../assets/ciscohtml.png";
import certificate5 from "../assets/ciscojs1.png";
import certificate6 from "../assets/tesda1.png";
import certificate7 from "../assets/tesda2.png";
import certificate8 from "../assets/tesda3.png";
import certificate9 from "../assets/tesda4.png";
import certificate10 from "../assets/tesda5.png";

const Certificates = () => {
  const certificates = [
    {
      title: "2nd Runner Up - Web Design",
      issuer: "12th IT Skills Olympics, University of Makati",
      date: "November 24, 2023",
      description:
        "A national competion where 60+ Universities and Colleges participated, showcasing their skills in web design and development.",
      certificate: certificate1,
    },
    {
      title: "Finalist, Student Category",
      issuer:
        "SILLAG Startup Summit and Hackathon: Ilocos Sur Leg, University of Northern Philippines",
      date: "August 24, 2025",
      description:
        "A hackathon event where students from various universities collaborated to develop innovative solutions to real-world problems.",
      certificate: certificate2,
    },

    {
      title: "2nd Place, Web Development Competition",
      issuer:
        "CCS Week 2024, Tech Fusion: Blending Boundaries and Igniting Possibilities, ISPSC Sta. Maria Campus",
      date: "June, 7, 2024",
      description:
        "A competition where students showcased their web development skills and creativity.",
      certificate: certificate3,
    },

    {
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      date: "April 4, 2025",
      description:
        "Completed the couse on HTML Essentials, gaining a solid foundation in web development.",
      certificate: certificate4,
    },

    {
      title: "Javascript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "February 12, 2025",
      description:
        "Completed the couse on JavaScript Essentials 1, gaining a solid foundation in web development.",
      certificate: certificate5,
    },

    {
      title: "Installing and Configuring Computer Systems",
      issuer: "Tesda",
      date: "February 24, 2025",
      description:
        "Completed the coure on Installing and Configuring Computer Systems, gaining practical skills in computer hardware and software.",
      certificate: certificate6,
    },

    {
      title: "Setting Up Computer Servers",
      issuer: "Tesda",
      date: "February 24, 2025",
      description:
        "Completed the coure on Setting Up Computer Servers, gaining practical skills in server management.",
      certificate: certificate7,
    },

    {
      title: "Maintaining Computer Systems and Networks",
      issuer: "Tesda",
      date: "February 24, 2025",
      description:
        "Completed the coure on Maintaining Computer Systems and Networks, gaining practical skills in network management.",
      certificate: certificate8,
    },

    {
      title: "Introduction to CSS",
      issuer: "Tesda",
      date: "February 24, 2025",
      description:
        "Completed the coure on Computer Systems Servicing, gaining practical skills in computer hardware and software.",
      certificate: certificate9,
    },

    {
      title: "Setting Up Computer Networks",
      issuer: "Tesda",
      date: "February 24, 2025",
      description:
        "Completed the coure on Setting Up Computer Networks, gaining practical skills in network management.",
      certificate: certificate10,
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
        Certificates
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
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
