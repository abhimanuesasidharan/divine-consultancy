import { BsWhatsapp } from 'react-icons/bs';

function StickyWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=9544534502"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <BsWhatsapp className="text-green-700 w-12 h-12 rounded-full bg-white p-2 shadow-lg cursor-pointer animate-ping" />
    </a>
  );
}

export default StickyWhatsApp;
