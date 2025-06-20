
import React from 'react';
import { motion } from 'framer-motion';


const Abouts = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="about-title"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="about-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        At <strong>Surakxit</strong>, we fuse creativity, innovation, and technology to create solutions
        that empower businesses and individuals alike. Our focus is on secure, scalable, and smart
        digital experiences.
      </motion.p>

      <div className="about-cards">
        {[
          {
            icon: '🚀',
            title: 'Our Mission',
            description:
              'To deliver innovative and secure solutions that drive business success.',
          },
          {
            icon: '🌐',
            title: 'Our Vision',
            description:
              'To become a trusted global leader in cutting-edge digital transformation.',
          },
          {
            icon: '💙',
            title: 'Our Values',
            description:
              'Integrity, creativity, collaboration, and a customer-first mindset.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="about-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            viewport={{ once: true }}
          >
            <div className="about-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Abouts;

