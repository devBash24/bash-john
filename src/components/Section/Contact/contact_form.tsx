import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import useEmail from '../../../hooks/useEmail';

// Animation Variants
const formVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};


const ContactForm = () => {
  const { formData, handleChange, handleSubmit, emailState, message } = useEmail();
  
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-surface p-8 rounded-2xl shadow-lg"
      initial="hidden"
      animate="visible"
    >
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg mb-6 ${
            emailState === 'error' 
              ? 'bg-red-500/10 text-red-500' 
              : 'bg-green-500/10 text-green-500'
          }`}
        >
          {message}
        </motion.div>
      )}

      <div className="space-y-6">
        <motion.div variants={formVariant} className="space-y-2">
          <label htmlFor="name" className="block text-white font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted border-2 border-transparent 
                     focus:border-accent/30 focus:outline-none transition-colors
                     text-white placeholder-lightGray/50"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div variants={formVariant} className="space-y-2">
          <label htmlFor="email" className="block text-white font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-muted border-2 border-transparent 
                     focus:border-accent/30 focus:outline-none transition-colors
                     text-white placeholder-lightGray/50"
            placeholder="john@example.com"
          />
        </motion.div>

        <motion.div variants={formVariant} className="space-y-2">
          <label htmlFor="message" className="block text-white font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-muted border-2 border-transparent 
                     focus:border-accent/30 focus:outline-none transition-colors
                     text-white placeholder-lightGray/50 resize-none"
            placeholder="Your message here..."
          />
        </motion.div>

        <motion.button
          type="submit"
          variants={formVariant}
          className="w-full py-4 bg-accent text-white rounded-lg font-medium
                   hover:bg-opacity-90 transition-all duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={emailState === 'sending'}
        >
          {emailState === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>

        {/* Social Links */}
        <motion.div
          variants={formVariant}
          className="flex justify-center gap-6 pt-6 border-t border-muted"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightGray hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.form>
  );
};

const socialLinks = [
  {
    url: "https://linkedin.com",
    icon: <FaLinkedin size={24} />
  },
  {
    url: "https://github.com/devBash24",
    icon: <FaGithub size={24} />
  },
  {
    url: "https://instagram.com",
    icon: <FaInstagram size={24} />
  }
];

export default ContactForm;
