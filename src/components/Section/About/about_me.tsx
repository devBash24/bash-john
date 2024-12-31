import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-surface rounded-2xl p-6 md:p-8"
    >
      <div className="relative mb-8 overflow-hidden rounded-xl">
        {/* <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src="/assets/self-image.png"
          alt="About Me"
          className="w-full h-[300px] md:h-[400px] object-cover"
        /> */}
        <motion.h1 initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} className="w-full h-[300px] md:h-[400px] inset-0 flex items-center justify-center text-white text-2xl font-bold">Image Coming soon</motion.h1>
        <div className="absolute inset-0 bg-accent/10" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4"
      >
        <h3 className="font-oswald text-2xl md:text-3xl text-white">
          Who am I?
        </h3>
        <p className="text-lightGray font-roboto leading-relaxed">
        I am a passionate and dedicated full-stack web developer from the Caribbean. I specialize in crafting intuitive, high-performing websites that not only look great but also drive results. Let's build something amazing together.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <InfoItem label="Name" value="Bash John" />
          <InfoItem label="Email" value="devbash98@gmail.com" />
          <InfoItem label="Location" value="Caribbean" />
          <InfoItem label="Experience" value="2 Years" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-muted px-4 py-2 rounded-lg">
    <p className="text-sm text-lightGray">{label}</p>
    <p className="text-white font-medium">{value}</p>
  </div>
);

export default AboutMe;
