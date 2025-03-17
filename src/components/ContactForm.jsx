import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Changed from e.target.id to e.target.name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:jothamhospital@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Send us a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="transform transition-all duration-300 hover:scale-[1.01]">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name" // Added name attribute
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:px-3 sm:py-1 md:px-4 md:py-2"
            placeholder="Your Name"
            required
          />
        </div>
        
        <div className="transform transition-all duration-300 hover:scale-[1.01]">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email" // Added name attribute
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:px-3 sm:py-1 md:px-4 md:py-2"
            placeholder="Your Email"
            required
          />
        </div>
        
        <div className="transform transition-all duration-300 hover:scale-[1.01]">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message" // Added name attribute
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:px-3 sm:py-1 md:px-4 md:py-2"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-purple-700/70 sm:py-2 md:py-3"
        >
          Send Message
        </button>
      </form>

      <p className="mt-4 text-sm text-blue-600 text-center">
        Or email us directly at:{' '}
        <a 
          href="mailto:jothamhospital@gmail.com"
          className="text-blue-600 hover:text-red-600"
        >
          jothamhospital@gmail.com
        </a>
      </p>
    </div>
  );
}

export default ContactForm;