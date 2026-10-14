import { motion } from 'framer-motion';

const Stats = () => {
  const highlights = [
    'Design-led thinking',
    'Construction expertise',
    'Renovation clarity',
    'Property guidance',
  ];

  return (
    <section className="py-24 bg-background-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-accent-300 mb-4">
            Experience that goes beyond construction.
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            THOUGHTFUL PLANNING.
            <br />
            <span className="text-accent-400">CONFIDENT EXECUTION.</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <p className="text-5xl font-display font-bold text-accent-300">11 Years</p>
            <p className="max-w-32 text-left text-sm font-semibold uppercase tracking-[0.16em] text-background-200">
              Experience
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <p className="text-5xl font-display font-bold text-accent-300">90+</p>
            <p className="max-w-32 text-left text-sm font-semibold uppercase tracking-[0.16em] text-background-200">
              Projects Completed
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <p className="text-2xl font-display font-bold text-accent-300 mb-2">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-background-200 text-lg uppercase tracking-[0.12em]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
