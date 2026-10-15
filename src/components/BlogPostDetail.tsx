import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const blogPosts = {
  1: {
    title: 'Building Dreams: How Maria Housing Transformed Vellore\'s Residential Landscape',
    excerpt: 'Discover how our innovative construction approach has reshaped residential living in Vellore, delivering over 90+ successful projects with unmatched quality and customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Oct 15, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">At Maria Housing, we believe that every home tells a story. For over 11 years, we've been crafting these stories across Vellore, transforming empty plots into vibrant living spaces that families cherish. Our journey of 90+ completed projects represents not just buildings, but dreams realized and trust earned.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">A Legacy of Excellence</h2>
      <p class="mb-6 leading-relaxed">What started as a vision to provide quality construction services has grown into Vellore's trusted name in residential and commercial construction. Our commitment to excellence, transparency in pricing, and customer-first approach has set us apart in the industry.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Comprehensive Services Under One Roof</h2>
      <p class="mb-6 leading-relaxed">From residential homes to commercial complexes, from farmhouse retreats to renovation projects, we offer end-to-end construction solutions. Our expertise spans across five key areas: Commercial, Residential, Farmhouse, Renovation, and Layout planning.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Quality That Speaks</h2>
      <p class="mb-6 leading-relaxed">Every project we undertake follows stringent quality standards. We use premium materials, employ skilled craftsmen, and implement modern construction techniques to ensure that every structure we build stands the test of time.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Customer-Centric Approach</h2>
      <p class="mb-6 leading-relaxed">We understand that building a home is one of life's biggest investments. That's why we keep our clients involved at every stage, from initial design to final handover. Our transparent communication and regular updates ensure peace of mind throughout the construction journey.</p>
      
      <p class="mb-6 text-lg leading-relaxed">As we look to the future, Maria Housing remains committed to raising the bar in construction excellence. We continue to innovate, adapt, and deliver spaces that inspire and endure. Join us in building your dream space.</p>
    `,
  },
  2: {
    title: 'Modern Home Design Trends for 2024',
    excerpt: 'Discover the latest architectural trends shaping contemporary residential spaces, from sustainable materials to smart home integration.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Oct 10, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">The world of home design is constantly evolving, and 2024 brings exciting new trends that blend functionality with aesthetics. At Maria Housing, we stay ahead of these trends to deliver homes that are both contemporary and timeless.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Sustainable Materials Take Center Stage</h2>
      <p class="mb-6 leading-relaxed">Eco-friendly materials are no longer just a niche preference—they're becoming mainstream. From reclaimed wood flooring to recycled glass countertops, homeowners are prioritizing sustainability without sacrificing style.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Smart Home Integration</h2>
      <p class="mb-6 leading-relaxed">Technology continues to transform how we interact with our living spaces. Smart thermostats, automated lighting systems, and voice-controlled assistants are becoming standard features in modern homes.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Open Floor Plans Evolve</h2>
      <p class="mb-6 leading-relaxed">While open floor plans remain popular, we're seeing a shift toward more flexible layouts. Homeowners want spaces that can adapt to different needs—whether it's working from home, entertaining guests, or family time.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Our design team at Maria Housing incorporates these trends while ensuring each home reflects the unique personality and lifestyle of its owners.</p>
    `,
  },
  3: {
    title: 'The Future of Sustainable Construction',
    excerpt: 'Exploring eco-friendly building practices that reduce environmental impact while creating beautiful, durable structures.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Oct 5, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">The construction industry is undergoing a significant transformation as sustainability becomes a core priority. At Maria Housing, we're committed to leading this change in Vellore.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Green Building Materials</h2>
      <p class="mb-6 leading-relaxed">Innovative materials are revolutionizing how we build. From bamboo flooring to recycled steel and low-VOC paints, the options for sustainable construction are expanding rapidly.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Energy Efficiency Standards</h2>
      <p class="mb-6 leading-relaxed">Modern buildings are designed with energy efficiency at their core. Advanced insulation, high-performance windows, and efficient HVAC systems work together to dramatically reduce energy consumption.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Water Conservation</h2>
      <p class="mb-6 leading-relaxed">Water-saving technologies are becoming standard in new construction. Rainwater harvesting systems, greywater recycling, and low-flow fixtures help reduce water waste.</p>
      
      <p class="mb-6 text-lg leading-relaxed">The future of construction is green. As technology advances and awareness grows, sustainable practices will become the norm rather than the exception.</p>
    `,
  },
  4: {
    title: 'Renovation Tips for Older Properties',
    excerpt: 'Expert advice on transforming historic homes while preserving their character and charm for modern living.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Sep 28, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Renovating an older property presents unique challenges and opportunities. These homes often possess character and craftsmanship that's hard to replicate in new construction.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Assess Structural Integrity First</h2>
      <p class="mb-6 leading-relaxed">Before beginning any cosmetic updates, it's crucial to evaluate the structural condition of the property. Foundation issues, roof problems, or electrical and plumbing systems that don't meet current codes should be addressed first.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Preserve Original Features</h2>
      <p class="mb-6 leading-relaxed">Original architectural details—crown molding, hardwood floors, vintage fixtures—are often the most valuable aspects of older homes. Whenever possible, restore these elements rather than replace them.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Balance Old and New</h2>
      <p class="mb-6 leading-relaxed">Successful renovations respect the home's history while incorporating modern conveniences. This might mean keeping the original facade while updating the kitchen with contemporary appliances.</p>
      
      <p class="mb-6 text-lg leading-relaxed">With careful planning and respect for the property's history, older homes can be transformed into beautiful, functional spaces that honor their past while embracing the future.</p>
    `,
  },
  5: {
    title: 'Commercial Construction: Building for Business Success',
    excerpt: 'Key considerations for commercial construction projects that ensure functionality, aesthetics, and long-term value.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Sep 20, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Commercial construction requires a different approach than residential projects. At Maria Housing, we understand the unique challenges and requirements of building for business success.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Location and Accessibility</h2>
      <p class="mb-6 leading-relaxed">The success of a commercial property often depends on its location. Easy access, parking availability, and visibility are critical factors that we consider during the planning phase.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Functional Design</h2>
      <p class="mb-6 leading-relaxed">Commercial spaces must be designed for efficiency and productivity. This includes optimal floor plans, proper ventilation, lighting, and infrastructure that supports business operations.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Compliance and Regulations</h2>
      <p class="mb-6 leading-relaxed">Commercial buildings must adhere to strict building codes, safety regulations, and accessibility standards. Our team ensures full compliance while maintaining design excellence.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Whether it's an office complex, retail space, or mixed-use development, Maria Housing delivers commercial properties that combine functionality with aesthetic appeal.</p>
    `,
  },
  6: {
    title: 'Farmhouse Design: Blending Nature with Modern Living',
    excerpt: 'Creating beautiful farmhouse retreats that combine rustic charm with contemporary amenities and sustainable design.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Sep 15, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Farmhouses represent the perfect blend of rustic charm and modern comfort. At Maria Housing, we specialize in creating farmhouse retreats that connect residents with nature while providing all contemporary amenities.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Embracing Natural Surroundings</h2>
      <p class="mb-6 leading-relaxed">Great farmhouse design starts with respecting the natural landscape. We position buildings to maximize views, natural light, and ventilation while preserving existing trees and natural features.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Rustic Materials, Modern Comfort</h2>
      <p class="mb-6 leading-relaxed">Using natural materials like stone, wood, and clay creates the authentic farmhouse aesthetic. We combine these with modern insulation, HVAC systems, and smart home technology for year-round comfort.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Outdoor Living Spaces</h2>
      <p class="mb-6 leading-relaxed">Farmhouses are about indoor-outdoor living. Verandas, courtyards, and gardens extend the living space and create perfect spots for relaxation and entertainment.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Our farmhouse projects in Vellore have become sought-after retreats that offer peaceful living without sacrificing modern conveniences.</p>
    `,
  },
  7: {
    title: 'Understanding Building Approvals in Tamil Nadu',
    excerpt: 'A comprehensive guide to navigating the approval process for construction projects in Vellore and Tamil Nadu.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Sep 10, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Navigating the building approval process in Tamil Nadu can be complex. At Maria Housing, we guide our clients through every step to ensure smooth project execution.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Required Documentation</h2>
      <p class="mb-6 leading-relaxed">The approval process requires several documents including land documents, building plans, structural drawings, and NOCs from various authorities. We help clients prepare and submit all necessary paperwork.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">DTCP and Local Body Approvals</h2>
      <p class="mb-6 leading-relaxed">Depending on the location, approvals may be required from DTCP (Directorate of Town and Country Planning) or local municipal bodies. We have experience working with both and understand their specific requirements.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Timeline and Process</h2>
      <p class="mb-6 leading-relaxed">The approval process typically takes 3-6 months depending on the project complexity and location. We manage this timeline efficiently to avoid delays in construction start.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Our approval assistance service ensures that your project complies with all regulations while minimizing bureaucratic hurdles.</p>
    `,
  },
  8: {
    title: '2D & 3D Design: Visualizing Your Dream Home',
    excerpt: 'How advanced design technology helps clients understand and customize their projects before construction begins.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Sep 5, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">One of the biggest challenges in construction is helping clients visualize their future home. At Maria Housing, our advanced 2D and 3D design services bridge this gap effectively.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">2D Floor Plans</h2>
      <p class="mb-6 leading-relaxed">Detailed 2D floor plans provide the foundation of any project. They show precise measurements, room layouts, and structural elements. Our architects create comprehensive plans that serve as the blueprint for construction.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">3D Visualization</h2>
      <p class="mb-6 leading-relaxed">3D models bring designs to life. Clients can walk through their future home virtually, understand spatial relationships, and make informed decisions about layouts and materials before construction begins.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Customization and Iteration</h2>
      <p class="mb-6 leading-relaxed">Digital designs allow for easy modifications. Clients can request changes, explore alternatives, and finalize designs with confidence. This iterative process ensures the final result matches their vision perfectly.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Our design services have helped hundreds of clients in Vellore visualize and achieve their dream homes with precision and clarity.</p>
    `,
  },
  9: {
    title: 'Cost-Effective Construction Strategies',
    excerpt: 'Smart ways to optimize your construction budget without compromising on quality or design excellence.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    author: 'Maria Housing Team',
    date: 'Aug 28, 2024',
    content: `
      <p class="mb-6 text-lg leading-relaxed">Building a home is a significant investment, but there are smart strategies to optimize your budget without sacrificing quality. Maria Housing helps clients achieve their dreams within their financial means.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Efficient Design</h2>
      <p class="mb-6 leading-relaxed">Simple, efficient designs often cost less to build while providing excellent functionality. Minimizing complex structural elements and optimizing room sizes can significantly reduce construction costs.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Material Selection</h2>
      <p class="mb-6 leading-relaxed">Choosing the right materials is crucial. We help clients select cost-effective alternatives that don't compromise on durability or aesthetics. Local materials often offer better value than imported options.</p>
      
      <h2 class="text-3xl font-display font-bold mb-4 mt-8">Phased Construction</h2>
      <p class="mb-6 leading-relaxed">Building in phases allows clients to spread costs over time. Start with essential spaces and add features later as budget permits. This approach makes dream homes more accessible.</p>
      
      <p class="mb-6 text-lg leading-relaxed">Our transparent pricing and cost optimization strategies have helped many clients in Vellore build quality homes within their budgets.</p>
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
