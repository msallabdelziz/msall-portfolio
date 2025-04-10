
import React, { useState, useEffect } from 'react';
import { Mail, Send, Github, Linkedin, MessageSquare, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission to the specified email
    setTimeout(() => {
      // Prepare email data
      const emailData = {
        to: 'msall.abdelaziz@gmail.com',
        from: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dès que possible."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);

      // Note: In a real-world scenario, you would use an actual email sending service
      console.log('Email prepared to be sent:', emailData);
    }, 1500);
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const reveal = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return <section id="contact" className="section-padding py-28 bg-tech-dark-blue/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center reveal">
          <span className="number-heading">06.</span>
          Contact
          <span className="h-[1px] bg-tech-light-navy ml-4 flex-grow"></span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h3 className="text-2xl font-semibold mb-4 text-tech-lightest-slate">Travaillons ensemble !</h3>
            <p className="text-tech-light-slate max-w-xl mx-auto">
              Je suis actuellement à la recherche de nouvelles opportunités et mon inbox est toujours ouvert. 
              N'hésitez pas à me contacter si vous avez une question ou simplement envie de dire bonjour !
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass p-6 reveal">
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-tech-lightest-slate mb-1">Nom</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-tech-light-navy/50 border border-tech-light-navy focus:border-tech-light-blue rounded-md px-4 py-2 text-tech-lightest-slate placeholder-tech-light-slate/60 outline-none transition-colors" placeholder="Votre nom" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-tech-lightest-slate mb-1">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-tech-light-navy/50 border border-tech-light-navy focus:border-tech-light-blue rounded-md px-4 py-2 text-tech-lightest-slate placeholder-tech-light-slate/60 outline-none transition-colors" placeholder="votre@email.com" required />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-tech-lightest-slate mb-1">Sujet</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-tech-light-navy/50 border border-tech-light-navy focus:border-tech-light-blue rounded-md px-4 py-2 text-tech-lightest-slate placeholder-tech-light-slate/60 outline-none transition-colors" placeholder="Sujet de votre message" required />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-tech-lightest-slate mb-1">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-tech-light-navy/50 border border-tech-light-navy focus:border-tech-light-blue rounded-md px-4 py-2 text-tech-lightest-slate placeholder-tech-light-slate/60 outline-none transition-colors resize-none" placeholder="Votre message..." required></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="group flex items-center justify-center w-full bg-tech-light-blue text-tech-dark-blue hover:bg-tech-light-blue/90 font-medium px-6 py-3 rounded-md transition-all duration-300 disabled:opacity-70">
                  {isSubmitting ? <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-tech-dark-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span> : <>
                      <Send size={18} className="mr-2" />
                      Envoyer
                    </>}
                </button>
              </form>
            </div>
            
            <div className="glass p-6 reveal">
              <h3 className="text-xl font-semibold mb-4 text-tech-lightest-slate">Informations de contact</h3>
              
              <div className="mb-6">
                <div className="flex items-start mb-4">
                  <Mail size={20} className="text-tech-light-blue mr-3 mt-1" />
                  <div>
                    <p className="text-tech-lightest-slate">Email</p>
                    <a href="mailto:msall.abdelaziz@gmail.com" className="text-tech-light-slate hover:text-tech-light-blue transition-colors">msall.abdelaziz@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Phone size={20} className="text-tech-light-blue mr-3 mt-1" />
                  <div>
                    <p className="text-tech-lightest-slate">Téléphone</p>
                    <a href="tel:+33758368844" className="text-tech-light-slate hover:text-tech-light-blue transition-colors">(+33) 7 58 36 88 44</a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-tech-lightest-slate">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/msallabdelaziz" target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-light-blue transition-colors p-2 hover:bg-tech-light-blue/10 rounded-full" aria-label="GitHub">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/msallabdelaziz/" target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-light-blue transition-colors p-2 hover:bg-tech-light-blue/10 rounded-full" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href="https://wa.me/33758368844" target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-light-blue transition-colors p-2 hover:bg-tech-light-blue/10 rounded-full" aria-label="WhatsApp">
                  <MessageSquare size={22} />
                </a>
                <a href="mailto:msall.abdelaziz@gmail.com" target="_blank" rel="noopener noreferrer" className="text-tech-light-slate hover:text-tech-light-blue transition-colors p-2 hover:bg-tech-light-blue/10 rounded-full" aria-label="Email">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
