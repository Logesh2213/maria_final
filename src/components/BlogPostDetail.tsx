import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const blogPosts = {
  1: {
    title: 'Modern Home Design Trends for 2024',
    excerpt: 'Discover the latest architectural trends shaping contemporary residential spaces, from sustainable materials to smart home integration.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    author: 'Admin',
    date: 'Jan 15, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">The world of home design is constantly evolving, and 2024 brings exciting new trends that blend functionality with aesthetics. As we move further into the decade, homeowners are increasingly seeking spaces that reflect their values while embracing modern innovations.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Sustainable Materials Take Center Stage</h2>
      <p class="mb-6 leading-relaxed">Eco-friendly materials are no longer just a niche preference—they're becoming mainstream. From reclaimed wood flooring to recycled glass countertops, homeowners are prioritizing sustainability without sacrificing style. These materials not only reduce environmental impact but often offer unique character that mass-produced alternatives can't match.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Smart Home Integration</h2>
      <p class="mb-6 leading-relaxed">Technology continues to transform how we interact with our living spaces. Smart thermostats, automated lighting systems, and voice-controlled assistants are becoming standard features in modern homes. The focus is on creating intuitive systems that enhance convenience while remaining unobtrusive.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Open Floor Plans Evolve</h2>
      <p class="mb-6 leading-relaxed">While open floor plans remain popular, we're seeing a shift toward more flexible layouts. Homeowners want spaces that can adapt to different needs—whether it's working from home, entertaining guests, or family time. This has led to innovative solutions like sliding walls, multi-purpose rooms, and designated zones within open areas.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Biophilic Design Elements</h2>
      <p class="mb-6 leading-relaxed">Bringing nature indoors continues to gain momentum. Large windows, indoor gardens, and natural materials help create calming environments that connect residents with the outdoors. This trend isn't just about aesthetics—studies show that biophilic design can improve mental health and productivity.</p>
      
      <p class="mb-6 text-lg leading-relaxed">As we look ahead, these trends will continue to evolve, influenced by technological advances, environmental concerns, and changing lifestyles. The key is finding the right balance between innovation and timeless design principles that create homes we love to live in.</p>
    `,
  },
  2: {
    title: 'The Future of Sustainable Construction',
    excerpt: 'Exploring eco-friendly building practices that reduce environmental impact while creating beautiful, durable structures.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    author: 'Admin',
    date: 'Jan 10, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">The construction industry is undergoing a significant transformation as sustainability becomes a core priority. Builders, architects, and homeowners are increasingly adopting practices that minimize environmental impact while delivering high-quality, durable structures.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Green Building Materials</h2>
      <p class="mb-6 leading-relaxed">Innovative materials are revolutionizing how we build. From bamboo flooring to recycled steel and low-VOC paints, the options for sustainable construction are expanding rapidly. These materials often offer superior performance characteristics while reducing the carbon footprint of building projects.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Energy Efficiency Standards</h2>
      <p class="mb-6 leading-relaxed">Modern buildings are designed with energy efficiency at their core. Advanced insulation, high-performance windows, and efficient HVAC systems work together to dramatically reduce energy consumption. Smart building management systems optimize performance in real-time, further enhancing efficiency.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Water Conservation</h2>
      <p class="mb-6 leading-relaxed">Water-saving technologies are becoming standard in new construction. Rainwater harvesting systems, greywater recycling, and low-flow fixtures help reduce water waste. These systems not only conserve resources but also lower utility costs for building owners.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Waste Reduction Strategies</h2>
      <p class="mb-6 leading-relaxed">Construction waste management has improved dramatically. Prefabrication and modular construction techniques minimize on-site waste, while recycling programs ensure that materials are diverted from landfills. These approaches benefit both the environment and project budgets.</p>
      
      <p class="mb-6 text-lg leading-relaxed">The future of construction is green. As technology advances and awareness grows, sustainable practices will become the norm rather than the exception. This shift benefits not only the environment but also creates healthier, more efficient spaces for occupants.</p>
    `,
  },
  3: {
    title: 'Renovation Tips for Older Properties',
    excerpt: 'Expert advice on transforming historic homes while preserving their character and charm for modern living.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: 'Admin',
    date: 'Jan 5, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Renovating an older property presents unique challenges and opportunities. These homes often possess character and craftsmanship that's hard to replicate in new construction, but they may also require updates to meet modern standards of comfort and efficiency.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Assess Structural Integrity First</h2>
      <p class="mb-6 leading-relaxed">Before beginning any cosmetic updates, it's crucial to evaluate the structural condition of the property. Foundation issues, roof problems, or electrical and plumbing systems that don't meet current codes should be addressed first. This ensures safety and prevents more expensive problems down the line.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Preserve Original Features</h2>
      <p class="mb-6 leading-relaxed">Original architectural details—crown molding, hardwood floors, vintage fixtures—are often the most valuable aspects of older homes. Whenever possible, restore these elements rather than replace them. They add authenticity and character that new materials can't match.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Balance Old and New</h2>
      <p class="mb-6 leading-relaxed">Successful renovations respect the home's history while incorporating modern conveniences. This might mean keeping the original facade while updating the kitchen with contemporary appliances, or preserving vintage windows while adding modern insulation. The key is finding harmony between past and present.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Energy Efficiency Upgrades</h2>
      <p class="mb-6 leading-relaxed">Older homes often lack modern energy efficiency features. Adding insulation, sealing air leaks, and upgrading to efficient HVAC systems can dramatically improve comfort while reducing utility costs. These updates can often be done without compromising the home's historic character.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Work with Experienced Professionals</h2>
      <p class="mb-6 leading-relaxed">Renovating older properties requires specialized knowledge. Contractors and architects with experience in historic preservation can help navigate the unique challenges these projects present. They understand how to work with older construction methods and materials while meeting modern building standards.</p>
      
      <p class="mb-6 text-lg leading-relaxed">With careful planning and respect for the property's history, older homes can be transformed into beautiful, functional spaces that honor their past while embracing the future.</p>
    `,
  },
};

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = blogPosts[id as unknown as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-accent-600 hover:text-accent-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-900/90 to-background-900/70" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl font-display font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <article className="py-20 bg-background-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 sm:p-12"
          >
            <div
              className="prose prose-lg max-w-none text-background-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-background-200 flex items-center justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-semibold text-background-800 hover:text-accent-600 transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
              <button className="inline-flex items-center gap-2 font-semibold text-background-800 hover:text-accent-600 transition-colors">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default BlogPostDetail;
