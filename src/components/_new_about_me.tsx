import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen w-full bg-black p-4 sm:p-8 md:p-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header with increased spacing */}
        <div className="mb-12 md:mb-24">
          <h2 className="text-gray-400 font-medium tracking-[0.2em] text-sm relative inline-block">
            ABOUT
            <span className="absolute -left-8 md:-left-16 top-1/2 w-8 md:w-12 h-[1px] bg-gray-400"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-24">
          <div className="text-white max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-white">
              Hey, let's skip the fancy intro
            </h3>
            <div className="w-16 md:w-24 h-[2px] bg-blue-500 mb-8 md:mb-12 opacity-80"></div>
            <p className="text-gray-300 leading-relaxed md:leading-loose text-base md:text-lg">
              I could write a long, eloquent paragraph about my "passion for
              coding" and throw in buzzwords like "innovative solutions" – but
              that's not me. I build stuff that works, solve real problems, and
              occasionally make things look good while doing it.
            </p>

            <p className="text-gray-300 leading-relaxed md:leading-loose text-base md:text-lg mt-4 md:mt-6">
              What keeps me going? The thrill of cracking tough problems and
              seeing users actually benefit from what I build. I've worked on
              everything from tiny utilities to complex systems, and each
              project taught me something new. Curious about the details? Let's
              talk about specific projects instead of generic statements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
