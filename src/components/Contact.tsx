import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    location: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you for your enquiry! We will get back to you soon.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          projectType: '',
          location: '',
          budget: '',
          message: '',
        });
      } else {
        alert('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send your message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 bg-background-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Start the conversation
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background-900 mb-6">
            LET'S TALK ABOUT WHAT YOU'RE BUILDING.
          </h2>
          <p className="text-lg text-background-600 max-w-2xl mx-auto">
            Have a plot? Planning a home? Renovating an existing property? Looking for a commercial space? Tell us what you have in mind.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="bg-accent-100 p-4 rounded-2xl">
                <MapPin className="text-accent-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-background-900 mb-2">Visit Us</h3>
                <p className="text-background-600 leading-relaxed">98/A, Bank Man's Colony, Azhagiri Nagar Alamelumangapuram, Vellore-9</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-accent-100 p-4 rounded-2xl">
                <Phone className="text-accent-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-background-900 mb-2">Call Us</h3>
                <p className="text-background-600 text-lg">9042177779</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-accent-100 p-4 rounded-2xl">
                <Mail className="text-accent-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-background-900 mb-2">Email Us</h3>
                <p className="text-background-600 text-lg">infosupercity@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-accent-100 p-4 rounded-2xl">
                <MessageCircle className="text-accent-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-background-900 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/919042177779?text=Hello%20Maria%20Housing%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background-600 text-lg hover:text-accent-600 transition-colors"
                >
                  9042177779
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-10 shadow-xl border border-background-200"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-background-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-background-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all bg-background-50"
                />
              </div>

              <div>
                <label className="block text-background-900 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-background-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all bg-background-50"
                />
              </div>

              <div>
                <label className="block text-background-900 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-background-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all bg-background-50"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-background-900 font-semibold mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-background-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all bg-background-50"
                  >
                    <option value="">Select type</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residential">Residential</option>
                    <option value="Farmhouse">Farmhouse</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Layout">Layout</option>
                  </select>
                </div>

                <div>
                  <label className="block text-background-900 font-semibold mb-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    className="w-full px-5 py-4 rounded-2xl border border-background-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all bg-background-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-background-900 font-semibold mb-2">Approximate Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Example: ₹50L - ₹1Cr"
                  className="w-full px-5 py-4 rounded-2xl border border-background-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all bg-background-50"
                />
              </div>

              <div>
                <label className="block text-background-900 font-semibold mb-2">Tell us about your project</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements"
                  rows={4}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-background-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-200 outline-none transition-all resize-none bg-background-50"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-background-900 text-white py-4 rounded-2xl font-semibold hover:bg-background-800 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                START THE CONVERSATION
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
