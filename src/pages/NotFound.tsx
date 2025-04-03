
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="glass p-10 text-center max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-tech-light-blue mb-4">404</h1>
          <p className="text-xl text-tech-lightest-slate mb-6">Oops! Page non trouvée</p>
          <p className="text-tech-light-slate mb-8">
            La page que vous recherchez semble ne pas exister ou a été déplacée.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center bg-tech-light-blue text-tech-dark-blue hover:bg-tech-light-blue/90 font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            <Home size={18} className="mr-2" />
            Retour à l'accueil
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
