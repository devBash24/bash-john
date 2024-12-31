import { motion } from "framer-motion";
import ContactForm from "./contact_form";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-accent" size={24} />,
      title: "Email",
      content: "devbash98@gmail.com",
      link: "mailto:devbash98@gmail.com"
    },
    {
      icon: <FaPhone className="text-accent" size={24} />,
      title: "Phone",
      content: "+1 784 498-1544",
      link: "tel:+1 784 498-1544"
    },
    {
      icon: <FaMapMarkerAlt className="text-accent" size={24} />,
      title: "Timezone",
      content: "Atlantic Standard Time (UTC -4)",
      link: null
    }
  ];

  return (
    <section id="contact" className="w-full min-h-screen bg-background py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lightGray mt-6 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-surface p-8 rounded-2xl space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-muted rounded-lg">{info.icon}</div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lightGray hover:text-accent transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-lightGray">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
