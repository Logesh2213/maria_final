import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Maria Housing Project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background-900/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            READY TO BUILD
            <br />
            <span className="text-accent-400">YOUR NEXT SPACE?</span>
          </h2>
          
          <div className="space-y-4 text-xl text-background-200 mb-12 max-w-2xl mx-auto">
            <p>Have a plot?</p>
            <p>Planning a home?</p>
            <p>Renovating?</p>
            <p>Building a commercial space?</p>
          </div>
          
          <p className="text-2xl text-white mb-12">
            Tell us what you're imagining.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-600 transition-all shadow-xl shadow-accent-500/30"
          >
            Start Your Project
            <ArrowRight size={20} />
          </motion.a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.a
              href="tel:9042177779"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white/30"
            >
              <Phone size={20} />
              <span>Phone</span>
            </motion.a>
            <motion.a
              href="https://wa.me/919042177779?text=Hello%20Maria%20Housing%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white/30"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </motion.a>
            <motion.a
              href="mailto:infosupercity@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white/30"
            >
              <Mail size={20} />
              <span>Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
