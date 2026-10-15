import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MotionLink = motion.create(Link);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const featuredPost = {
    id: 1,
    title: 'Building Dreams: How Maria Housing Transformed Vellore\'s Residential Landscape',
    excerpt: 'Discover how our innovative construction approach has reshaped residential living in Vellore, delivering over 90+ successful projects with unmatched quality and customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Jan 15, 2025',
    category: 'Featured',
    readTime: '5 min read',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Modern Home Design Trends for 2026',
      excerpt: 'Discover the latest architectural trends shaping contemporary residential spaces, from sustainable materials to smart home integration.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'Dec 10, 2026',
      category: 'Design',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'The Future of Sustainable Construction',
      excerpt: 'Exploring eco-friendly building practices that reduce environmental impact while creating beautiful, durable structures.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'Nov 5, 2024',
      category: 'Sustainability',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Renovation Tips for Older Properties',
      excerpt: 'Expert advice on transforming historic homes while preserving their character and charm for modern living.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'Oct 28, 2022',
      category: 'Renovation',
      readTime: '5 min read',
    },
    {
      id: 5,
      title: 'Commercial Construction: Building for Business Success',
      excerpt: 'Key considerations for commercial construction projects that ensure functionality, aesthetics, and long-term value.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'Sep 20, 2024',
      category: 'Commercial',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'Farmhouse Design: Blending Nature with Modern Living',
      excerpt: 'Creating beautiful farmhouse retreats that combine rustic charm with contemporary amenities and sustainable design.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'Aug 15, 2023',
      category: 'Farmhouse',
      readTime: '5 min read',
    },
    {
      id: 7,
      title: 'Understanding Building Approvals in Tamil Nadu',
      excerpt: 'A comprehensive guide to navigating the approval process for construction projects in Vellore and Tamil Nadu.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'Jul 10, 2024',
      category: 'Guides',
      readTime: '8 min read',
    },
    {
      id: 8,
      title: '2D & 3D Design: Visualizing Your Dream Home',
      excerpt: 'How advanced design technology helps clients understand and customize their projects before construction begins.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'Jun 5, 2026',
      category: 'Design',
      readTime: '4 min read',
    },
    {
      id: 9,
      title: 'Cost-Effective Construction Strategies',
      excerpt: 'Smart ways to optimize your construction budget without compromising on quality or design excellence.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      author: 'Maria Housing Team',
      date: 'May 28, 2021',
      category: 'Tips',
      readTime: '6 min read',
    },
  ];

  const categories = ['All', 'Design', 'Construction', 'Renovation', 'Commercial', 'Sustainability', 'Farmhouse', 'Guides', 'Tips'];

  // Filter blog posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-900/95 via-background-900/80 to-background-900/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 max-w-4xl"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-wider text-accent-300 bg-accent-500/20 rounded-full">
              Maria Housing Blog
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Expert Insights on
              <br />
              <span className="text-accent-400">Construction & Design</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Stay updated with the latest trends, expert tips, and inspiring stories from the world of construction, renovation, and real estate in Vellore
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-accent-500 transition-all"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60" size={20} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">Featured Story</span>
          </motion.div>
          
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-3xl bg-background-50 shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-sm font-semibold bg-accent-500 text-white rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-background-500">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-background-900 mb-4 group-hover:text-accent-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-background-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-background-500">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <MotionLink
                  to={`/blog/${featuredPost.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 self-start px-6 py-3 bg-background-900 text-white rounded-full font-semibold hover:bg-accent-600 transition-colors"
                >
                  Read Full Story
                  <ArrowRight size={18} />
                </MotionLink>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background-50 border-y border-background-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-accent-500 text-white'
                    : 'bg-white text-background-700 hover:bg-accent-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-background-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-background-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-background-600 max-w-2xl mx-auto">
              Explore our collection of expert articles on construction, design, renovation, and real estate
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-background-900 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-background-500">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-display font-bold text-background-900 group-hover:text-accent-600 transition-colors line-clamp-2">
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-background-600">No articles found matching your search.</p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-background-900 text-white rounded-full font-semibold hover:bg-accent-600 transition-colors"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-background-300 mb-8">
              Subscribe to our newsletter for the latest construction tips, design trends, and company updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-accent-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-500 text-white rounded-full font-semibold hover:bg-accent-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
