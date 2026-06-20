export const handleDonateClick = (e) => {
  if (e) e.preventDefault();
  
  const upiId = 'psrmemorial@ptyes';
  const payeeName = 'PSR Memorial Foundation';
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}`;
  
  // Check if it's a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // On mobile, attempt to open UPI app directly
    window.location.href = upiLink;
    
    // Also dispatch event to show fallback modal in case they return or don't have an app
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('open-donate-modal', { 
        detail: { upiId, upiLink, payeeName } 
      }));
    }, 500);
  } else {
    // On desktop, show the QR code modal
    window.dispatchEvent(new CustomEvent('open-donate-modal', { 
      detail: { upiId, upiLink, payeeName } 
    }));
  }
};
