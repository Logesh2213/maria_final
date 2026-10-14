import { motion } from 'framer-motion';
import aboutImage from '../../Home/IMG-20240223-WA0039.webp';
import chairmanImage from '../../chairman.png';
import directorImage from '../../director.png';
 
const About = () => {
  const pillars = [
    'Construction',
    'Design',
    'Renovation',
    'Consultancy',
    'Approvals',
    'Real Estate',
  ];

  return (
    <section id="about" className="py-32 bg-background-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Completed Maria Housing home exterior"
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
            <p className="text-sm uppercase tracking-[0.25em] text-accent-600">Our story</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-background-900 leading-tight">
              BUILT ON EXPERIENCE.
              <br />
              <span className="text-accent-500">DRIVEN BY POSSIBILITY.</span>
            </h2>

            <div className="space-y-4 text-lg text-background-700 leading-relaxed">
              <p>Every project begins differently.</p>
              <p>A family planning its first home.</p>
              <p>A business creating a new way of working.</p>
              <p>A property ready for a second life.</p>
            </div>

            <p className="text-xl text-background-600 leading-relaxed">
              At Maria Housing, we bring together the people, planning and expertise required to take an idea from concept to completion with clarity and confidence.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-background-900 text-white rounded-2xl p-6"
            >
              <p className="text-2xl font-display font-bold">THIS IS MARIA HOUSING.</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-white border border-background-200 rounded-2xl px-5 py-6 text-center text-lg font-semibold text-background-800 shadow-sm"
            >
              {pillar}
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Leadership</p>
            <h2 className="text-4xl font-display font-bold text-background-900 sm:text-5xl">Meet Our Team</h2>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-lg border border-background-200 bg-white shadow-sm"
            >
              <img
                src={chairmanImage}
                alt="J Inego Lancy, Chairman"
                className="h-[420px] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-background-900">J Inego Lancy</h3>
                <p className="mt-1 font-semibold text-accent-600">Chairman</p>
                <p className="mt-3 leading-relaxed text-background-600">
                  Providing strategic leadership and guiding the company's vision for growth and excellence.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-lg border border-background-200 bg-white shadow-sm"
            >
              <img
                src={directorImage}
                alt="L Kiran Harishan, Managing Director"
                className="h-[420px] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-background-900">L Kiran Harishan</h3>
                <p className="mt-1 font-semibold text-accent-600">Managing Director</p>
                <p className="mt-3 leading-relaxed text-background-600">
                  Overseeing operations and ensuring delivery of quality construction projects.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
