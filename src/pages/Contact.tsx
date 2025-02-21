// src/pages/Contact.tsx

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com'; // Import Email.js

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState<string | null>(null);

  // Set the recipient email address (your email)
  useEffect(() => {
    const email = 'surfaintsoln@gmail.com'; // Your email address
    setRecipientEmail(email);
  }, []);

  // Initialize Email.js with your Public Key
  emailjs.init('IpURbaHykOFffOafS'); // Replace with your actual Public Key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if recipientEmail is set
    if (!recipientEmail) {
      toast.error('Recipient email is not set. Please try again later.');
      setIsSubmitting(false);
      return; // Halt the submission process
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      to_email: recipientEmail, // Your email address
    };

    try {
      // Send the form data using Email.js
      await emailjs.send('service_vhf5zpm', 'Surfatech', templateParams);

      // Show success message
      toast.success('Thank you for your inquiry! We will get back to you soon.');

      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      // Refresh the page immediately
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      // Optionally handle the error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Google Maps Location */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.984756947091!2d73.13550117479711!3d19.239496081999068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7942d288e2feb%3A0x216072afd256c7e1!2sKalyan-Murbad%20Rd%2C%20Kalyan%2C%20Maharashtra%20421301!5e0!3m2!1sen!2sin!4v1740121009835!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-center text-gray-600 mb-12">
            Get in touch with us for any inquiries about our products and services.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                required
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                required
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="input-field"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="input-field"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message*
              </label>
              <textarea
                id="message"
                required
                className="input-field min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;