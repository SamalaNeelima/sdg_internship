import React, { useEffect } from 'react';
import './TermsAndConditions.css'; // Import custom CSS for styling

function TermsAndConditions() {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Select all elements with animation classes
      const elements = document.querySelectorAll('.terms-content h2, .terms-content p');

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
    <div className="terms-and-conditions container mt-5">
      <h1 style={{ fontSize: '32px' }}>Terms and Conditions</h1>

      <div className="terms-content">
        <p>
          These terms and conditions outline the rules and regulations for the use of [Your Website Name]'s Website, located at [website URL].
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Your Website Name] if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By accessing [Your Website Name], you agreed to use cookies in agreement with the [Your Company Name]'s Privacy Policy.
          Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
        </p>

        <h2>License</h2>
        <p>
          Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all material on [Your Website Name]. All intellectual property rights are reserved. You may access this from [Your Website Name] for your own personal use subjected to restrictions set in these terms and conditions.
          You must not: Republish material from [Your Website Name], Sell, rent or sub-license material from [Your Website Name], Reproduce, duplicate or copy material from [Your Website Name], Redistribute content from [Your Website Name]
        </p>

        <h2>Content Liability</h2>
        <p>
          We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
        </p>

        <h2>Reservation of Rights</h2>
        <p>
          We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
        </p>

        <h2>Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: limit or exclude our or your liability for death or personal injury, limit or exclude our or your liability for fraud or fraudulent misrepresentation, limit any of our or your liabilities in any way that is not permitted under applicable law, or exclude any of our or your liabilities that may not be excluded under applicable law.
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
