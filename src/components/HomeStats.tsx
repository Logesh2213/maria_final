import { motion } from 'framer-motion';
import { Building2, Award, Users, MapPin } from 'lucide-react';

const HomeStats = () => {
  const stats = [
    {
      icon: Building2,
      number: '90+',
      label: 'Completed Projects',
    },
    {
      icon: Award,
      number: '15+',
      label: 'Awards Won',
    },
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
    },
    {
      icon: MapPin,
      number: 'Vellore',
      label: 'City Area',
    },
  ];

  return (
    <section className="bg-background-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10">
                  <Icon className="text-accent-500" size={32} />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="mb-2 text-4xl font-display font-bold text-white sm:text-5xl"
                >
                  {stat.number}
                </motion.div>
                <p className="text-sm font-semibold uppercase tracking-wider text-background-400 sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
