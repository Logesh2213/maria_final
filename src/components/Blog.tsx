import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Modern Home Design Trends for 2024',
      excerpt: 'Discover the latest architectural trends shaping contemporary residential spaces, from sustainable materials to smart home integration.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      author: 'Admin',
      date: 'Jan 15, 2024',
    },
    {
      id: 2,
      title: 'The Future of Sustainable Construction',
      excerpt: 'Exploring eco-friendly building practices that reduce environmental impact while creating beautiful, durable structures.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      author: 'Admin',
      date: 'Jan 10, 2024',
    },
    {
      id: 3,
      title: 'Renovation Tips for Older Properties',
      excerpt: 'Expert advice on transforming historic homes while preserving their character and charm for modern living.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      author: 'Admin',
      date: 'Jan 5, 2024',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-900/90 to-background-900/70" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-display font-bold text-white sm:text-6xl lg:text-7xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Insights, tips, and stories from the world of construction and design
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-background-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-background-500">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-display font-bold text-background-900 group-hover:text-accent-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mb-6 text-background-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <MotionLink
                    to={`/blog/${post.id}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 font-semibold text-accent-600 transition-colors hover:text-accent-700"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </MotionLink>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
