import edugemini from "../assets/sample-bg.png";
import graduate from "../assets/sample-bg-2.png";
import rfid from "../assets/sample-bg-3.png";
import paesano from "../assets/sample-bg-4.png";
import ispsc from "../assets/sample-bg-5.png";

const NewProjects = () => {
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
      picture: edugemini,
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
      picture: graduate,
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
      tools: [
        "MongoDB",
        "ReactJS",
        "Node.js",
        "Express",
        "Arduino",
        "Bootstrap",
      ],
      picture: rfid,
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
      picture: paesano,
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
      picture: ispsc,
    },
  ];
  return (
    <div className="min-h-screen w-full bg-black p-4 md:p-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-32">
          <h2 className="text-gray-400 font-medium tracking-[0.3em] text-xs md:text-sm relative inline-block">
            PROJECT BASED LEARNING
            <span className="absolute -left-16 top-1/2 w-12 h-[1px] bg-gray-400"></span>
          </h2>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-500">
          When I Learn, I Apply The Concepts Through Hands-on Projects
        </h3>
        <div className="w-24 h-[2px] bg-blue-500 mb-8 md:mb-12 opacity-80"></div>

        <div className="flex flex-col space-y-20 md:space-y-40">
          {projects.map((project) => (
            <div key={project.id} className="space-y-8 md:space-y-12">
              <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-16">
                <div className="flex-1 space-y-6 md:space-y-10">
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 md:space-y-6">
                    <h5 className="text-lg md:text-xl text-white font-medium">
                      Key Responsibilities:
                    </h5>
                    <ul className="list-disc pl-6 md:pl-8 text-gray-400 space-y-3 md:space-y-4">
                      {project.responsibilities.map((resp) => (
                        <li
                          key={resp.id}
                          className="text-sm md:text-base leading-relaxed"
                        >
                          {resp.description}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 md:px-5 py-2 md:py-2.5 bg-blue-500/10 text-blue-400 rounded-full text-xs md:text-sm font-medium hover:bg-blue-500/20 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-4 md:space-y-6">
                  {project.picture && (
                    <img
                      src={project.picture}
                      alt={project.title}
                      className="shadow-lg w-full hover:scale-[1.02] transition-transform duration-300"
                    />
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-400 hover:text-blue-300 transition-colors text-base md:text-lg font-medium"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
