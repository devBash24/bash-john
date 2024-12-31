import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
    ],
    "Backend": [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 80 },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-surface rounded-2xl p-6 md:p-8"
    >
      <h3 className="font-oswald text-2xl md:text-3xl text-white mb-6">
        Skills
      </h3>
      <div className="space-y-8">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={category} className="space-y-4">
            <h4 className="text-lg text-white font-medium">{category}</h4>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-lightGray">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
