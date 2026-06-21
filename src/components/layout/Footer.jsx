import React, { useState } from 'react';
import { Mail, Phone, MapPin, Users, MessageCircle, Camera, Briefcase } from 'lucide-react';
import Button from '../ui/Button';
import { handleDonateClick } from '../../utils/payment';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };
  return (
    <footer id="contact" className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-lg p-1">
                <img loading="lazy" 
                  src="/psr logo.webp" 
                  alt="PSR Memorial Foundation" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <p className="font-heading text-sm font-semibold text-accent tracking-wide uppercase mt-2">
              Inspire • Support • Transform
            </p>
            <p className="font-heading italic text-xs font-medium text-secondary">
              "One act of kindness can transform generations."
            </p>
            <p className="font-body text-blue-100 leading-relaxed text-xs">
              Empowering underserved communities through education, health, nutrition, and environmental sustainability. Continuing a legacy of kindness and service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Users size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Camera size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-secondary transition-colors">
                <Briefcase size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-base text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3 font-body text-xs text-blue-100">
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-secondary transition-colors">Our Programs</a></li>
              <li><a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#donate" onClick={handleDonateClick} className="hover:text-secondary transition-colors">Donate Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-base text-white">Contact Us</h3>
            <ul className="flex flex-col gap-4 font-body text-xs text-blue-100">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-secondary shrink-0 mt-0.5" />
                <a href="tel:+918125756876" className="hover:text-white transition-colors">
                  +91 81257 56876
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-secondary shrink-0 mt-0.5" />
                <a href="mailto:psrmemorialfoundation@gmail.com" className="hover:text-white transition-colors">
                  psrmemorialfoundation@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-secondary shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana,<br />India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-base text-white">Newsletter</h3>
            <p className="font-body text-xs text-blue-100">
              Subscribe to our newsletter to receive updates on our impact and upcoming programs.
            </p>
            {subscribed ? (
              <div className="bg-blue-900/40 border border-emerald-500/30 rounded-xl p-4 text-center">
                <p className="text-secondary font-bold text-xs mb-1">🎉 Thank you!</p>
                <p className="text-blue-100 text-[11px]">You've successfully subscribed to our newsletter.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address" 
                  required
                  className="px-3 py-2 rounded-md bg-blue-900/50 border border-blue-800 text-white placeholder-blue-300 focus:outline-none focus:border-secondary font-body text-xs"
                />
                <Button type="submit" variant="accent" size="sm" className="w-full text-xs py-2 bg-secondary hover:bg-amber-500">
                  Subscribe
                </Button>
              </form>
            )}
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-blue-800 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-[10px] text-blue-200">
          <p>&copy; {new Date().getFullYear()} PSR Memorial Foundation. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
