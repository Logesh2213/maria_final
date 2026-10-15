import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
              alt="Maria Housing Architecture"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-background-900 leading-tight">
              BUILDING SPACES.
              <br />
              <span className="text-accent-500">CREATING FUTURES.</span>
            </h2>

            <p className="text-xl text-background-600 leading-relaxed">
              Every project begins differently. A family planning its first home. A business looking for a new space. A property ready for a second life. An idea waiting to become real.
            </p>

            <div className="space-y-4 text-lg text-background-700 leading-relaxed">
              <p>At Maria Housing, we bring together the people, planning and expertise required to take that idea from concept to completion.</p>
            </div>

            <div className="bg-background-50 rounded-2xl p-6 border border-background-200">
              <p className="text-3xl font-display font-bold text-accent-600">11+ years of experience.</p>
            </div>

            <a
              href="#about-details"
              className="inline-flex items-center gap-2 bg-background-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-background-800 transition-all shadow-xl"
            >
              ABOUT MARIA
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
