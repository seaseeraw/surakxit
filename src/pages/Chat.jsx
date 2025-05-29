import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica',
  headerBgColor: '#007bff',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#007bff',
  botFontColor: '#fff',
  userBubbleColor: '#eee',
  userFontColor: '#4a4a4a',
};

const steps = [
  { id: '1', message: "नमस्ते! म तपाईंलाई आज कसरी सहयोग गर्न सक्छु?", trigger: '2' },
  {
    id: '2',
    options: [
      { value: 'services', label: 'View Services', trigger: '3' },
      { value: 'contact', label: 'Contact Support', trigger: '4' },
    ],
  },
  {
    id: '3',
    message: 'We offer reliable and customer-focused banking services, including everyday banking, loans, and financial solutions to help you manage and grow your money with confidence.',
    end: true,
  },
  {
    id: '4',
    message: 'You can contact us at support@example.com!',
    end: true,
  },
];

const Chat = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} floating />
  </ThemeProvider>
);

export default Chat;
