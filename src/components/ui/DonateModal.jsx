import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, CheckCircle, Heart } from 'lucide-react';
import Button from './Button';

const DonateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    upiId: 'psrmemorial@ptyes',
    payeeName: 'PSR Memorial Foundation',
    upiLink: 'upi://pay?pa=psrmemorial@ptyes&pn=PSR%20Memorial%20Foundation'
  });
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e) => {
      if (e.detail) {
        setPaymentDetails(e.detail);
      }
      setIsOpen(true);
      setShowThankYou(false);
    };

    window.addEventListener('open-donate-modal', handleOpenModal);
    return () => window.removeEventListener('open-donate-modal', handleOpenModal);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentDetails.upiId);
    setCopied(true);
    setShowThankYou(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] max-w-md w-full overflow-hidden flex flex-col border border-primary/20 ring-4 ring-white/50"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white text-center relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-red-500 rounded-full p-2 backdrop-blur-md transition-all duration-300 group shadow-sm border border-white/20 flex items-center justify-center"
                aria-label="Close"
              >
                <X size={20} className="text-white group-hover:scale-110 transition-transform" />
              </button>
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center p-2 shadow-lg">
                <img src="/psr_logo.png" alt="PSR Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-1">Support Our Mission</h3>
              <p className="text-sm font-body text-blue-100 opacity-90">Your generosity creates lasting change.</p>
            </div>

            {/* Body */}
            <div className="px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-5 flex flex-col items-center bg-gray-50/80">
              <div className="bg-white p-4 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-secondary/50 mb-6 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none"></div>
                <div className="relative">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(paymentDetails.upiLink)}`} 
                    alt="UPI QR Code" 
                    className="w-48 h-48 md:w-56 md:h-56 mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-xl">
                    <p className="text-primary font-bold font-heading text-lg">Scan to Pay</p>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white rounded-2xl border border-gray-200 p-4 mb-2 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1 pl-2">UPI ID</p>
                <div className="flex items-center justify-between pl-2">
                  <span className="font-heading font-bold text-lg text-primary tracking-wide">
                    {paymentDetails.upiId}
                  </span>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-primary rounded-lg text-sm font-medium transition-colors"
                  >
                    {copied ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2 pl-2">Payee: {paymentDetails.payeeName}</p>
              </div>
              
              <div className="text-center mt-4 w-full">
                <div className="flex flex-col items-center gap-3 mb-2">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider flex items-center gap-2">
                    <Heart size={12} className="text-secondary fill-secondary" />
                    Supported Apps
                  </p>
                  <div className="flex items-center justify-center gap-5 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-4 md:h-5 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                    <div className="w-px h-6 bg-gray-200"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-5 md:h-6 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                    <div className="w-px h-6 bg-gray-200"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" alt="Paytm" className="h-3 md:h-4 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                  </div>
                </div>
                <AnimatePresence>
                  {showThankYou && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      className="bg-green-50 border border-green-100 rounded-xl p-4 text-green-800 text-sm font-medium leading-relaxed"
                    >
                      "Thank you for supporting PSR Memorial Foundation. Your contribution helps create opportunities, inspire hope, and transform lives."
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;
