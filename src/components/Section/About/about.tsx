import { motion } from "framer-motion";
import AboutMe from "./about_me";
import Education from "./education";
import Skills from "./skills";

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AboutMe />
          <div className="space-y-12">
            <Education />
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
