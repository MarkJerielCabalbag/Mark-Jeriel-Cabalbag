const NewHero = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden flex items-center justify-center px-4 py-8">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-20 -top-20 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-48 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="text-gray-400 font-medium tracking-widest text-xs sm:text-sm transform -translate-y-2 relative">
              PORTFOLIO
              <span className="absolute -left-8 sm:-left-16 top-1/2 w-6 sm:w-12 h-[1px] bg-gray-400"></span>
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight -ml-1 text-center">
              Mark Jeriel Cabalbag
            </h1>
          </div>
          <p className="text-gray-300 text-center w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-base sm:text-lg leading-relaxed -mt-4 mx-auto">
            Hi, I'm Mark Jeriel Cabalbag, a full stack developer with a passion
            for creating beautiful and functional user interfaces. I love to
            learn new technologies and improve my skills.
          </p>
        </div>

        <div className="mt-8 md:mt-10 flex gap-4 sm:gap-10 justify-center">
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
      </div>
    </div>
  );
};

export default NewHero;
