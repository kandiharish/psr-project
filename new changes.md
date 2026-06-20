
Configure the **Donate Now** button to directly initiate a UPI payment using the following UPI ID:

**psrmemorial@ptyes**

When a user clicks the Donate Now button:

* On mobile devices, automatically open the installed UPI application (Google Pay, PhonePe, Paytm, BHIM, etc.).
* Pre-fill the payment details using the UPI ID.
* Display the payee name as **PSR Memorial Foundation**.
* Use a standard UPI payment intent link.
* If no UPI application is available, show a fallback popup containing:

  * UPI ID: psrmemorial@ptyes
  * Copy UPI ID button
  * QR Code for payment
  * Simple payment instructions

Generate the UPI payment link using:

upi://pay?pa=psrmemorial@ptyes&pn=PSR%20Memorial%20Foundation

Add a subtle donation confirmation message after redirection:

"Thank you for supporting PSR Memorial Foundation. Your contribution helps create opportunities, inspire hope, and transform lives."

Ensure the implementation is mobile-friendly, secure, responsive, and provides a smooth donation experience.
