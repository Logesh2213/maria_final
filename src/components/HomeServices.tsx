import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

const HomeServices = () => {
  const services = [
    {
      title: 'Construction',
      description: 'Specializing in new construction projects for residential and commercial properties',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Real Estate',
      description: 'Comprehensive services for buying, selling, and leasing land properties',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: '2D & 3D Designing',
      description: 'Advanced 2D and 3D design services to visualize project concepts',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-display font-bold text-background-900 sm:text-5xl">
            Our Service
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-background-600 leading-relaxed">
            Explore Maria Housing's diverse services, including construction, renovation, real estate transactions, 
            building consultancy, approval assistance, and cutting-edge 2D & 3D designing. 
            Transforming visions into reality with precision and excellence.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-background-50 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-display font-bold text-background-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-background-600 leading-relaxed">
                  {service.description}
                </p>
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
                >
                  Get Quote
                  <ArrowRight size={18} />
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-background-800 transition-colors hover:text-accent-600"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
