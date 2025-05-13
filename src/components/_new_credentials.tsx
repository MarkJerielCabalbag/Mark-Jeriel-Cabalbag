import html from ".././assets/badges/html-essentials.png";
import js1 from ".././assets/badges/javascript-essentials-1.png";
import css from ".././assets/badges/css-essentials.png";
import webfundamentals from ".././assets/badges/web-development-fundamentals.png";
import certificate1 from "../assets/makati.png";
import certificate2 from "../assets/sillag.png";
import certificate3 from "../assets/css.png";
const certifications = [
  {
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    date: "April 4, 2025",
    description:
      "Mastered HTML fundamentals including semantic markup, document structure, and HTML5 features.",
    certificate: html,
  },
  {
    title: "Javascript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "February 12, 2025",
    description:
      "Core JavaScript concepts including DOM manipulation, events, async programming, and ES6+.",
    certificate: js1,
  },
  {
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    date: "April 6, 2025",
    description:
      "CSS styling expertise including flexbox, grid, responsive design, and animations.",
    certificate: css,
  },
  {
    title: "Web Development Fundamentals",
    issuer: "IBM SKILLSBUILD",
    date: "April 11, 2025",
    description:
      "Comprehensive web development knowledge covering HTML, CSS, JavaScript, and modern development practices.",
    certificate: webfundamentals,
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
const NewCredential = () => {
  return (
    <div className="min-h-screen w-full bg-black p-4 sm:p-8 md:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-32">
          <h2 className="text-gray-400 font-medium tracking-[0.3em] text-xs sm:text-sm relative inline-block">
            CREDENTIALS
            <span className="absolute -left-8 sm:-left-16 top-1/2 w-6 sm:w-12 h-[1px] bg-gray-400"></span>
          </h2>
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white bg-gradient-to-r bg-clip-text">
          Not the Smartest, But Dedicated and Effective
        </h3>
        <div className="w-16 sm:w-24 h-[2px] bg-blue-500 mb-8 sm:mb-12 opacity-80"></div>

        <div className="space-y-8 sm:space-y-12">
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-gray-300 text-base sm:text-lg mb-2">
                  Information Technology, Web and Mobile Development Track
                </h4>
                <p className="text-gray-500 text-sm sm:text-base">
                  Ilocos Sur Polytechnic State College - Santa Maria Campus
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
              Experience
            </h3>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-gray-300 text-base sm:text-lg mb-2">
                  Full Stack Developer Intern
                </h4>
                <p className="text-gray-500 text-sm sm:text-base mb-3 sm:mb-4">
                  MIS ISPSC Sta. Maria Campus, Jan 2025 - Apr 2025
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Led development of Graduate Tracer System that streamlined
                  alumni tracking and data collection, improving graduate
                  employment monitoring efficiency.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
              Certifications
            </h3>
            <div className="space-y-8 sm:space-y-12">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-8"
                >
                  <img
                    src={cert.certificate}
                    alt={cert.title}
                    className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
                  />
                  <div className="flex-1">
                    <h4 className="text-gray-300 text-base sm:text-lg font-semibold mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-3">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
              Competitions Awards
            </h3>
            <div className="space-y-8 sm:space-y-12">
              {recognitionAndAwards.map((award, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-8"
                >
                  <img
                    src={award.certificate}
                    alt={award.title}
                    className="w-48 h-48 sm:w-36 sm:h-36 object-contain"
                  />
                  <div className="flex-1">
                    <h4 className="text-gray-300 text-base sm:text-lg font-semibold mb-2">
                      {award.title}
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base mb-2 sm:mb-3">
                      {award.issuer} • {award.date}
                    </p>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCredential;
