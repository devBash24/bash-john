import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative w-screen h-screen bg-darkDark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-darkDark opacity-90" />

      {/* Main content */}
      <div className="container relative z-10 mx-auto h-full px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-surface text-accent font-roboto text-sm"
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-oswald text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              <span className="block text-accent">
              Bash John
                <span className="text-accent block text-2xl lg:text-3xl my-2">Software Developer</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-lightGray max-w-xl font-roboto"
            >
              Crafting digital experiences with modern web technologies. Turning ideas into elegant, functional solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="#project"
                className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-lg shadow-cta transition-all duration-300 font-roboto"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-surface hover:bg-muted text-white px-8 py-3 rounded-lg transition-all duration-300 font-roboto"
              >
               Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl transform rotate-6" />
              <div className="absolute inset-0 bg-surface rounded-2xl transform -rotate-3" />
              <h1 className="w-full h-full z-10  inset-0 flex items-center justify-center text-white text-2xl font-bold">Image Coming soon</h1>
              {/* <img
                src="/assets/self-image.png"
                alt={t("hero.imageAlt", "Professional portrait")}
                className="relative z-10 w-full h-full object-cover rounded-2xl bg-surface"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
