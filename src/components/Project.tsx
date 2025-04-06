import { motion } from "framer-motion";
import { Card } from "./ui/card";

const projects = [
  {
    id: 1,
    title: "EduGemini",
    description:
      "AI-powered classroom management system designed to revolutionize how educators manage student outputs and assessments.",
    link: "https://edugemini.online/",
    responsibilities: [
      {
        id: 1,
        description:
          "Automated the process of checking outputs and providing assessments for both students and teachers, saving significant time for educators",
      },
      {
        id: 2,
        description:
          "Integrated AI/LLM with the Gemini API to deliver accurate and efficient evaluations.",
      },
      {
        id: 3,
        description:
          "Served as the Project Manager, leading the team and overseeing system development and deployment.",
      },
    ],
    tools: [
      "React",
      "Tailwind CSS",
      "Shadcn",
      "Node.js",
      "Express",
      "Gemini API",
    ],
  },
  {
    id: 2,
    title: "ISPSC Graduate Tracer",
    description:
      "A web-based application that streamlines the process of tracking and analyzing alumni data, enhancing the connection between graduates and the institution.",
    link: "https://ispsc-graduate-tracer.vercel.app/",
    responsibilities: [
      {
        id: 1,
        description:
          "Designed and developed a responsive web application using React, TypeScript, and Tailwind CSS, ensuring a seamless user experience across devices",
      },
      {
        id: 2,
        description:
          "Implemented RESTful APIs using Express.js and PostgreSQL to manage alumni data efficiently",
      },
      {
        id: 3,
        description:
          "Enchanced the way alumni data is collected and analyzed, improving the overall efficiency of the tracer system",
      },
    ],
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Express.js",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    id: 3,
    title: "RFID",
    description: "Web based RFID to encahnce the security of Computer Labs.",
    responsibilities: [
      {
        id: 1,
        description:
          "Developed a web-based security system for computer labs using MongoDB, ReactJS, Node.js, and Express",
      },
      {
        id: 2,
        description:
          "Integrated the REST API with Arduino to establish seamless communication between the hardware andweb application.",
      },
      {
        id: 3,
        description:
          "Used Arduino IDE to program the Arduino for RFID functionality and ensure secure lab access.",
      },
    ],
    tools: ["MongoDB", "ReactJS", "Node.js", "Express", "Arduino", "Bootstrap"],
  },
  {
    id: 4,
    title: "Paesano",
    description: "A web based for barber online appointment system.",
    link: "https://paesano.personatab.com/",
    responsibilities: [
      {
        id: 3,
        description:
          "Collaborated with the backend developer to ensure seamless functionality and feature integration",
      },
      {
        id: 1,
        description:
          "Designed and developed a responsive website frontend using Bootstrap and HTML, ensuring compatibility across various screen sizes",
      },
      {
        id: 2,
        description:
          "Created a user-friendly interface to enhance customer experience for booking appointments.",
      },
    ],
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 5,
    title: "ISPSC Department Of Psychology",
    description: "A web based for ISPSC Department Of Psychology.",
    link: "https://ispsc.personatab.com/",
    responsibilities: [
      {
        id: 3,
        description:
          "Collaborated with the backend developer to ensure seamless functionality and feature integration",
      },
      {
        id: 1,
        description:
          "Designed and developed a responsive website frontend using Bootstrap and HTML, ensuring compatibility across various screen sizes",
      },

      {
        id: 2,
        description:
          "Created a user-friendly for students to access information about the department",
      },
    ],
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

const Project = () => {
  return (
    <motion.section>
      <motion.h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        Projects
      </motion.h2>
      <motion.div>
        {projects.map((project) => (
          <Card
            key={project.id}
            className="my-5 p-6 hover:shadow-lg transition-shadow"
          >
            <motion.div className="flex justify-between items-center">
              <motion.h1 className="text-xl font-bold text-gray-800">
                {project.title}
              </motion.h1>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors"
                >
                  Visit Site →
                </motion.a>
              )}
            </motion.div>

            <motion.hr />

            <motion.div>
              <motion.p className="text-gray-600 leading-relaxed">
                {project.description}
              </motion.p>
            </motion.div>

            <motion.div className="space-y-6">
              <motion.div>
                <motion.h3 className="text-lg font-semibold mb-3">
                  Responsibilities
                </motion.h3>
                <ul className="space-y-2">
                  {project.responsibilities.map((responsibility) => (
                    <li key={responsibility.id} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span className="text-gray-600">
                        {responsibility.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div>
                <motion.h3 className="text-lg font-semibold mb-3">
                  Tools
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Card>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Project;
