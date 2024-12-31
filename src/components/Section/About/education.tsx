import { motion } from 'framer-motion';


const educationData = [
    {
        period: "2020 - 2024",
        degree: "Bachelor's Degree",
        school: "Nanjing University of Information Science & Technology",
        description: "Computer Science & Technology"
    },
    {
      period: "2015 - 2017",
      degree: "CAPE A'Levels",
      school: "St. Vincent Community College",
      description: "Biology, Chemistry, Computer Science, Communication Studies"
    }
  ];
const Education = () => {


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-surface rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-oswald text-2xl md:text-3xl text-white mb-6">
        Education
      </h3>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-6 border-l-2 border-accent"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium">{edu.period}</span>
            <h4 className="text-white font-bold mt-1">{edu.degree}</h4>
            <p className="text-lightGray">{edu.school}</p>
            <p className="text-sm text-lightGray mt-1">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
