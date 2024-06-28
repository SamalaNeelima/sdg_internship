import React, { useEffect } from 'react';
import './MobilePrivacyPolicy.css'; // Import custom CSS for styling

const MobilePrivacyPolicy = () => {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Select all elements with animation classes
      const elements = document.querySelectorAll('.mobile-policy h1, .mobile-content h2, .mobile-content p');

      // Loop through each element
      elements.forEach((element) => {
        // Get bounding rect of element
        const rect = element.getBoundingClientRect();

        // Add 'animate' class if element is within viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add('animate');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Trigger handleScroll once to check initial position
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mobile-policy container mt-5">
      <h1>Mobile Privacy Policy</h1>
      <div className="mobile-content">
        <p>Last updated: 20 June 2024</p>

        <h2>Introduction</h2>
        <p>
          SDG Solutions respects your privacy and is committed to protecting it through our compliance with this policy.
          This policy describes the types of information we may collect from you or that you may provide when you use our
          mobile application.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information about your device, including information that is automatically collected and
          information that you voluntarily provide to us.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use information that we collect about you or that you provide to us, including any personal information, to
          operate and improve our mobile application and deliver the services you request.
        </p>

        <h2>Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we
          provide users with advance notice. This does not include website hosting partners and other parties who assist us in
          operating our website, conducting our business, or serving our users.
        </p>

        <h2>Data Security</h2>
        <p>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized
          access, use, alteration, and disclosure.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Mobile Privacy Policy, please contact us at [Email Address].
        </p>
      </div>
    </div>
  );
};

export default MobilePrivacyPolicy;
