
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-tech-light-navy">
      <div className="container mx-auto px-6 text-center">
        <p className="text-tech-light-slate text-sm mb-2">
          Conçu et développé par Votre Nom
        </p>
        <p className="text-tech-light-slate text-xs">
          &copy; {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
