import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Our Office',
      subtitle: 'Empowering businesses with smart, reliable, and secure tech solutions.',
      getStarted: 'Get Started',
      features: [
        { title: '🚀 Fast Service', description: 'We deliver solutions rapidly, ensuring your business runs efficiently.' },
        { title: '🔒 Secure Systems', description: 'Enterprise-grade security to protect your sensitive data.' },
        { title: '🕐 24/7 Support', description: 'Support available around the clock whenever you need it.' },
      ],
    },
  },
  np: {
    translation: {
      welcome: 'हाम्रो अफिसमा स्वागत छ',
      subtitle: 'व्यवसायलाई स्मार्ट, भरपर्दो, र सुरक्षित समाधानहरू प्रदान गर्दै।',
      getStarted: 'सुरु गर्नुहोस्',
      features: [
        { title: '🚀 छिटो सेवा', description: 'हामी छिटो समाधान प्रदान गर्छौं, तपाईंको व्यवसायलाई सहज बनाउँदै।' },
        { title: '🔒 सुरक्षित प्रणाली', description: 'तपाईंको डाटालाई सुरक्षित राख्न उच्चस्तरको सुरक्षाको प्रयोग।' },
        { title: '🕐 २४/७ सहयोग', description: 'हाम्रो सहयोग सधैं उपलब्ध छ — जब तपाईंलाई आवश्यक पर्छ।' },
      ],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;

