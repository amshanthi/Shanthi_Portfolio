const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-[#0b1120] px-6 py-24 text-center"
    >
      <div className="mx-auto max-w-4xl">
        {/* Availability Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Actively Seeking Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Shanthi
          </span>
        </h1>

        {/* Role */}
        <h2 className="mt-5 text-xl font-semibold text-gray-300 md:text-2xl">
          HTML5 Developer | CreateJS | JavaScript | GSAP | React
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          12+ years of experience building interactive games, animations, and
          HTML5 experiences using JavaScript, CreateJS, GSAP, and Adobe Animate.
        </p>

        {/* Download Resume */}
        <div className="mt-10">
          <a
            href="/public/resume.docx"
            download="Shanthi_Arunachalam.docx"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-[#0D1B2A] transition hover:bg-cyan-300"
          >
            Download Resume <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
