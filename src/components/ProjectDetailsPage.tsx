import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Home, Layout, Video, Image, Building, Users, Info } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState('synopsis');

  const projects: any[] = [
    {
      id: '1',
      category: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      title: 'MODERN FAMILY RESIDENCE',
      location: 'Vellore, Tamil Nadu',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124876.123456789!2d79.123456789!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzU5LjkiTiA3OcKwMDUnMzMuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
    {
      id: '2',
      category: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'CONTEMPORARY VILLA',
      location: 'Vellore, Tamil Nadu',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124876.123456789!2d79.123456789!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzU5LjkiTiA3OcKwMDUnMzMuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
    {
      id: '3',
      category: 'RENOVATION',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'SPACE, REIMAGINED',
      location: 'Vellore, Tamil Nadu',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124876.123456789!2d79.123456789!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzU5LjkiTiA3OcKwMDUnMzMuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
    {
      id: '4',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'COMMERCIAL SPACE',
      location: 'Vellore, Tamil Nadu',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124876.123456789!2d79.123456789!3d12.9166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzU5LjkiTiA3OcKwMDUnMzMuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    },
  ];

  const project = projects.find(p => p.id === id) || projects[0];
  const pageTitle = `${project.title} in ${project.location.split(',')[0]} | Maria Housing`;
  const pageDescription = `${project.title} is a ${project.category.toLowerCase()} project by Maria Housing in ${project.location}. Explore project details, floor plans, and gallery.`;
  const pageUrl = `https://mariahousing.com/project/${project.id}`;

  const sections = [
    { id: 'synopsis', icon: Info, title: 'Project Synopsis' },
    { id: 'map', icon: MapPin, title: 'Live Map' },
    { id: 'specs', icon: Home, title: 'Project Specifications' },
    { id: 'floor', icon: Layout, title: 'Floor Plans' },
    { id: 'walkthrough', icon: Video, title: 'Model Apartment Walkthrough' },
    { id: 'gallery', icon: Image, title: 'Gallery' },
    { id: 'interior', icon: Building, title: 'Interior' },
    { id: 'exterior', icon: Building, title: 'Exterior' },
    { id: 'clubhouse', icon: Users, title: 'Club House' },
  ];

  const dummyData = {
    synopsis: {
      description: 'This premium residential project represents the pinnacle of modern living. Designed with meticulous attention to detail, it offers spacious layouts, premium finishes, and world-class amenities. The project features contemporary architecture blended with sustainable design principles, creating homes that are both beautiful and environmentally responsible.',
    },
    specs: {
      totalArea: '5 Acres',
      units: '120 Villas',
      startingPrice: '₹2.5 Cr',
      plotSize: '2400 - 4800 sq.ft',
      builtUpArea: '1800 - 3500 sq.ft',
      bedrooms: '3 - 5 BHK',
      possession: 'Dec 2026',
      reraNumber: 'TN/12345/67890',
    },
    floorPlans: [
      { type: '3 BHK', area: '2400 sq.ft', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
      { type: '4 BHK', area: '3200 sq.ft', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
      { type: '5 BHK', area: '4800 sq.ft', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
    ],
    walkthrough: {
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Experience our model apartment through this immersive virtual walkthrough. See the spacious living areas, premium finishes, and thoughtful design details.',
    },
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    ],
    interior: [
      { title: 'Living Room', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80' },
      { title: 'Kitchen', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80' },
      { title: 'Bedroom', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
      { title: 'Bathroom', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
    ],
    exterior: [
      { title: 'Front View', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
      { title: 'Side View', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
      { title: 'Garden Area', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80' },
      { title: 'Parking', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80' },
    ],
    clubhouse: {
      amenities: ['Swimming Pool', 'Gymnasium', 'Club House', 'Children Play Area', 'Jogging Track', 'Tennis Court', 'Multipurpose Hall', '24/7 Security'],
      description: 'Our premium clubhouse offers world-class amenities for residents to enjoy a luxurious lifestyle.',
    },
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'synopsis':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Info className="text-accent-600" size={32} />
              Project Synopsis
            </h2>
            <p className="text-background-600 leading-relaxed text-lg">
              {dummyData.synopsis.description}
            </p>
          </motion.div>
        );

      case 'map':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <MapPin className="text-accent-600" size={32} />
              Live Map
            </h2>
            <p className="text-background-600 mb-6">
              {project.location}
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={project.mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        );

      case 'specs':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Home className="text-accent-600" size={32} />
              Project Specifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-background-50 rounded-2xl p-6 border border-background-200">
                <h4 className="text-accent-600 font-semibold mb-2">Total Area</h4>
                <p className="text-2xl font-display font-bold text-background-900">{dummyData.specs.totalArea}</p>
              </div>
              <div className="bg-background-50 rounded-2xl p-6 border border-background-200">
                <h4 className="text-accent-600 font-semibold mb-2">Units</h4>
                <p className="text-2xl font-display font-bold text-background-900">{dummyData.specs.units}</p>
              </div>
              <div className="bg-background-50 rounded-2xl p-6 border border-background-200">
                <h4 className="text-accent-600 font-semibold mb-2">Starting Price</h4>
                <p className="text-2xl font-display font-bold text-background-900">{dummyData.specs.startingPrice}</p>
              </div>
            </div>
            <div className="space-y-4 text-background-600">
              <div className="flex justify-between py-3 border-b border-background-200">
                <span>Plot Size</span>
                <span className="font-semibold text-background-900">{dummyData.specs.plotSize}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-background-200">
                <span>Built-up Area</span>
                <span className="font-semibold text-background-900">{dummyData.specs.builtUpArea}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-background-200">
                <span>Bedrooms</span>
                <span className="font-semibold text-background-900">{dummyData.specs.bedrooms}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-background-200">
                <span>Possession</span>
                <span className="font-semibold text-background-900">{dummyData.specs.possession}</span>
              </div>
              <div className="flex justify-between py-3">
                <span>RERA Number</span>
                <span className="font-semibold text-background-900">{dummyData.specs.reraNumber}</span>
              </div>
            </div>
          </motion.div>
        );

      case 'floor':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Layout className="text-accent-600" size={32} />
              Floor Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {dummyData.floorPlans.map((plan, index) => (
                <div key={index} className="bg-background-50 rounded-2xl overflow-hidden border border-background-200">
                  <img src={plan.image} alt={plan.type} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-display font-bold text-background-900">{plan.type}</h4>
                    <p className="text-background-600">{plan.area}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'walkthrough':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Video className="text-accent-600" size={32} />
              Model Apartment Walkthrough
            </h2>
            <p className="text-background-600 mb-6">{dummyData.walkthrough.description}</p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={dummyData.walkthrough.videoUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        );

      case 'gallery':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Image className="text-accent-600" size={32} />
              Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dummyData.gallery.map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover rounded-xl" />
              ))}
            </div>
          </motion.div>
        );

      case 'interior':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Building className="text-accent-600" size={32} />
              Interior
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dummyData.interior.map((item, index) => (
                <div key={index} className="bg-background-50 rounded-2xl overflow-hidden border border-background-200">
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h4 className="font-display font-bold text-background-900">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'exterior':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Building className="text-accent-600" size={32} />
              Exterior
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dummyData.exterior.map((item, index) => (
                <div key={index} className="bg-background-50 rounded-2xl overflow-hidden border border-background-200">
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h4 className="font-display font-bold text-background-900">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'clubhouse':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-background-200 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-background-900 mb-6 flex items-center gap-3">
              <Users className="text-accent-600" size={32} />
              Club House
            </h2>
            <p className="text-background-600 mb-6">{dummyData.clubhouse.description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dummyData.clubhouse.amenities.map((amenity, index) => (
                <div key={index} className="bg-accent-50 rounded-xl p-4 text-center border border-accent-200">
                  <p className="font-semibold text-accent-700">{amenity}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={project.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={project.image} />
      </Helmet>
      <Navbar />
      {/* Header */}
      <div className="relative h-64 md:h-96 pt-20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-900/80 to-transparent" />
        <div className="absolute top-6 left-6">
          <Link
            to="/#gallery"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Gallery</span>
          </Link>
        </div>
        <div className="absolute bottom-6 left-6 md:left-10">
          <span className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-2 block">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveSection(section.id)}
                className={`group rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border ${
                  activeSection === section.id
                    ? 'bg-accent-500 text-white border-accent-500'
                    : 'bg-white text-background-900 border-background-200 hover:border-accent-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  activeSection === section.id ? 'bg-white/20' : 'bg-accent-100'
                }`}>
                  <Icon className={activeSection === section.id ? 'text-white' : 'text-accent-600'} size={24} />
                </div>
                <h3 className="font-display font-semibold text-sm md:text-base">
                  {section.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Active Section Content */}
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
