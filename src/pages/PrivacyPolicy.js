import React, { useEffect } from 'react';
import './PrivacyPolicy.css'; // Import custom CSS for styling


const PrivacyPolicy = () => {
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Select all elements with animation classes
      const elements = document.querySelectorAll('.privacy-policy h1, .privacy-content h2, .privacy-content h3, .privacy-content p, .privacy-content ul');

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
    <div className="privacy-policy container mt-5">
      <h1>Privacy Policy</h1>
      <div className="privacy-content">
        <p><strong>Last Updated:</strong> 20 June 2024</p>
        <p>
          We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://sdgsolutions.in/">sdgsolutions.in</a> and use our services. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
        </p>

        <h2>Information We Collect</h2>
        
        <h3>Personal Data</h3>
        <p>
          Personal Data is any information that relates to an identified or identifiable individual. We collect Personal Data that you provide to us directly, such as:
        </p>
        <ul>
          <li><strong>Identity Data:</strong> Name, username or similar identifier, marital status, title, date of birth, gender.</li>
          <li><strong>Contact Data:</strong> Billing address, delivery address, email address, telephone numbers.</li>
          <li><strong>Financial Data:</strong> Bank account and payment card details.</li>
          <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of products and services you have purchased from us.</li>
          <li><strong>Profile Data:</strong> Username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
          <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
        </ul>

        <h3>Automatically Collected Data</h3>
        <p>
          As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns. This includes:
        </p>
        <ul>
          <li><strong>Device Information:</strong> Information about your computer, tablet, smartphone, or other electronic device, including browser type, Internet Protocol (IP) address, time zone setting, operating system, and platform.</li>
          <li><strong>Usage Data:</strong> Details of your visits to our website including traffic data, location data, logs, and other communication data and the resources that you access and use on the website.</li>
        </ul>

        <h3>Cookies and Similar Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to track the activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. For more information, please refer to our <a href="#cookie-policy">Cookie Policy</a>.
        </p>

        <h3>Information from Third Parties</h3>
        <p>
          We may receive Personal Data about you from various third parties, including:
        </p>
        <ul>
          <li><strong>Technical Data:</strong> From analytics providers such as Google.</li>
          <li><strong>Contact, Financial, and Transaction Data:</strong> From providers of technical, payment, and delivery services.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect or receive for various purposes, including to:
        </p>
        <ul>
          <li><strong>Provide and Manage Services:</strong> To deliver products and services you request, process transactions, and manage your account.</li>
          <li><strong>Improve Our Services:</strong> To understand and analyze how you use our website, develop new products, services, features, and functionality.</li>
          <li><strong>Communication:</strong> To send you updates, newsletters, marketing materials, and other information that may be of interest to you, subject to your preferences and applicable law.</li>
          <li><strong>Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
          <li><strong>Advertising:</strong> To administer contests, promotions, surveys, or other site features and to send you promotional communications.</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We may share your information with:
        </p>

        <h3>Service Providers</h3>
        <p>
          We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf. These may include:
        </p>
        <ul>
          <li>Payment processors</li>
          <li>Data analysis providers</li>
          <li>Email service providers</li>
          <li>Hosting service providers</li>
          <li>Customer service and support providers</li>
        </ul>

        <h3>Business Transfers</h3>
        <p>
          We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
        </p>

        <h3>Legal Requirements</h3>
        <p>
          We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
        </p>

        <h3>With Your Consent</h3>
        <p>
          We may disclose your information for any other purpose with your consent.
        </p>

        <h2>Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your Personal Data. While we have taken reasonable steps to secure the Personal Data you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your Personal Data:
        </p>
        <ul>
          <li><strong>Access:</strong> You can request access to the Personal Data we hold about you.</li>
          <li><strong>Correction:</strong> You can request that we correct or update any incorrect or incomplete Personal Data.</li>
          <li><strong>Deletion:</strong> You can request that we delete your Personal Data under certain conditions.</li>
          <li><strong>Objection:</strong> You can object to our processing of your Personal Data.</li>
          <li><strong>Restriction:</strong> You can request that we restrict the processing of your Personal Data.</li>
          <li><strong>Portability:</strong> You can request to receive your Personal Data in a structured, commonly used, and machine-readable format.</li>
          <li><strong>Withdraw Consent:</strong> If we are processing your Personal Data based on your consent, you have the right to withdraw your consent at any time.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at [Contact Email].
        </p>

        <h2>International Data Transfers</h2>
        <p>
          Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. By submitting your information, you agree to this transfer.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> [Contact Email]</li>
          <li><strong>Address:</strong> [Company Address]</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
