
const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-4">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Bharat Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
