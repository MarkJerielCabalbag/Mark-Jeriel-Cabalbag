const NewContact = () => {
  return (
    <div className="min-h-screen w-full bg-black p-4 sm:p-8 md:p-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 sm:mb-32">
          <h2 className="text-gray-400 font-medium tracking-[0.3em] text-xs sm:text-sm relative inline-block">
            CONTACT
            <span className="absolute -left-8 sm:-left-16 top-1/2 w-6 sm:w-12 h-[1px] bg-gray-400"></span>
          </h2>
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white bg-gradient-to-r bg-clip-text text-transparent from-white to-gray-500">
            Let's Build Something Amazing Together
          </h3>
          <div className="w-16 sm:w-24 h-[2px] bg-blue-500 mb-8 sm:mb-12 opacity-80"></div>

          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-6 sm:mb-8">
            Whether you have a project in mind or just want to chat about
            technology, I'm always excited to connect with fellow developers and
            potential collaborators.
          </p>
          <div className="my-8 md:mt-10 flex gap-4 sm:gap-10">
            <a
              href="https://github.com/MarkJerielCabalbag"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg transform group-hover:bg-white/10 transition-all duration-300"></div>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mark-jeriel-cabalbag-41962a2b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg transform group-hover:bg-white/10 transition-all duration-300"></div>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:cabalbagmarkg@gmail.com"
              className="group relative p-3 sm:p-4 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg transform group-hover:bg-white/10 transition-all duration-300"></div>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
              </svg>
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://drive.google.com/file/d/14ypfhbuFrRX-77iJi7yt_mgFrwsyEFvj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white text-sm sm:text-base font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
