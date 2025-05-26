// src/pages/Home.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import Chat from '../pages/Chat';
// import '../App.css';

// const features = [
//   {
//     title: '🚀 Fast Service',
//     description: 'We deliver solutions rapidly, ensuring your business runs efficiently with minimal downtime.',
//   },
//   {
//     title: '🔒 Secure Systems',
//     description: 'Enterprise-grade security to protect your sensitive data and maintain trust.',
//   },
//   {
//     title: '🕐 24/7 Support',
//     description: 'Round-the-clock support to assist your team whenever they need it.',
//   },
// ];

// const Home = () => {
//   return (
//     <motion.div
//       className="home-container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* HERO SECTION */}
//       <motion.div
//         className="hero"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="hero-title">Welcome to Our Office</h1>
//         <p className="hero-subtitle">
//           Empowering businesses with smart, reliable, and secure tech solutions.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           className="cta-button"
//         >
//           Get Started
//         </motion.button>
//       </motion.div>

//       {/* FEATURES SECTION */}
//       <div className="features">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="feature-card"
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 * index, duration: 0.6, ease: 'easeOut' }}
//           >
//             <h3 className="feature-title">{feature.title}</h3>
//             <p className="feature-description">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//       <Chat/>
//     </motion.div>
    
//   );
// };

// export default Home;


// src/pages/Home.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import '../App.css';

// const Home = () => {
//   const { t, i18n } = useTranslation();
//   const features = t('features', { returnObjects: true });

//   return (
//     <motion.div
//       className="home-container"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Language Toggle */}
//       <div className="lang-toggle">
//         <button onClick={() => i18n.changeLanguage('en')}>🇺🇸 English</button>
//         <button onClick={() => i18n.changeLanguage('np')}>🇳🇵 नेपाली</button>
//       </div>

//       {/* HERO SECTION */}
//       <motion.div
//         className="hero"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="hero-title">{t('welcome')}</h1>
//         <p className="hero-subtitle">{t('subtitle')}</p>

//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.95 }}
//           className="cta-button"
//         >
//           {t('getStarted')}
//         </motion.button>
//       </motion.div>

//       {/* FEATURES SECTION */}
//       <div className="features">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="feature-card"
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 * index, duration: 0.6, ease: 'easeOut' }}
//           >
//             <h3 className="feature-title">{feature.title}</h3>
//             <p className="feature-description">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Home;



import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../App.css'; // make sure CSS includes your styles

const Home = () => {
  const { t, i18n } = useTranslation();
  const features = t('features', { returnObjects: true });

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Language Toggle */}
      <div className="lang-toggle">
        <button onClick={() => i18n.changeLanguage('en')}>🇺🇸 English</button>
        <button onClick={() => i18n.changeLanguage('np')}>🇳🇵 नेपाली</button>
      </div>

      {/* HERO SECTION */}
      <motion.div
        className="hero"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">{t('welcome')}</h1>
        <p className="hero-subtitle">{t('subtitle')}</p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          {t('getStarted')}
        </motion.button>
      </motion.div>

      {/* FEATURES SECTION */}
      <div className="features">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
