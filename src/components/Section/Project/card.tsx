import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import OverlayCard from './overlay_card';
import ProjectDownloadIcon from './project_dowload_icon';
import WebsiteIcon from './website_icon';

const ProjectCard = ({ project }: { project: any }) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <motion.div
      className="relative bg-surface rounded-xl overflow-hidden group"
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative h-[200px] overflow-hidden">
        <motion.img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-accent/10" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-oswald text-white">{project.title}</h3>
          <div className="flex gap-2">
            {project.url && <WebsiteIcon link={project.url} />}
            {project.dwl && <ProjectDownloadIcon link={project.dwl} />}
          </div>
        </div>

        <p className="text-lightGray text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-muted text-lightGray"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.button
          onClick={() => setOverlay(true)}
          className="w-full py-2 mt-4 text-white bg-accent rounded-lg hover:bg-opacity-90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>

      <AnimatePresence>
        {overlay && (
          <OverlayCard project={project} toggleOverlayClose={() => setOverlay(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
