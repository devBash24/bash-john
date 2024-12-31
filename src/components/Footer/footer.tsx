import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import navItems, { INavItems } from '../../lib/navItems';
import { onSectionChange } from '../../lib/section_change';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation("global");

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://linkedin.com/in/bash-john-220a87308",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/devBash24",
      label: "GitHub"
    },
    // {
    //   icon: <FaTwitter size={20} />,
    //   href: "https://twitter.com/your-profile",
    //   label: "Twitter"
    // },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:devbash98@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-darkDark text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-oswald font-bold text-white">
              Bash <span className="text-accent">John</span>
            </h2>
            <p className="text-lightGray text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item: INavItems, index: number) => (
                <li key={index}>
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className="text-lightGray hover:text-accent transition-colors duration-300"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-lightGray">
              <li>Email: devbash98@gmail.com</li>
              <li>Phone: +1 784 498-1544</li>
              <li>Timezone: UTC-4</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-surface hover:bg-accent rounded-lg text-lightGray hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[1px] bg-muted my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-lightGray"
        >
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {t("footer.copyright")} 
            <span className="inline-flex items-center">
              Made with <FaHeart className="text-accent mx-1" size={14} /> by Bash John
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
