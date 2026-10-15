import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import HomeStats from './components/HomeStats';
import HomeServices from './components/HomeServices';
import HomeProjects from './components/HomeProjects';
import WhoWeAre from './components/WhoWeAre';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPostDetail from './components/BlogPostDetail';
import Footer from './components/Footer';
import ProjectDetailsPage from './components/ProjectDetailsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>Maria Housing | Construction, Renovation & Real Estate Services in Vellore</title>
                <meta name="description" content="Maria Housing - Leading construction company in Vellore offering residential, commercial, farmhouse construction, renovation, and layout services. 11+ years experience, 90+ completed projects. Call 9042177779." />
                <meta name="keywords" content="construction company Vellore, home builders Vellore, residential construction, commercial construction, farmhouse construction, renovation services, real estate Vellore, building contractors, layout planning, 2D 3D design, construction services Tamil Nadu, Maria Housing" />
              </Helmet>
              <Hero /><HomeStats /><HomeServices /><HomeProjects /><Process /><Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Helmet>
                <title>Services | Maria Housing - Construction & Renovation in Vellore</title>
                <meta name="description" content="Maria Housing offers comprehensive construction services including Commercial, Residential, Farmhouse, Renovation, and Layout planning in Vellore. 11+ years of expertise." />
                <meta name="keywords" content="construction services Vellore, residential construction, commercial construction, farmhouse construction, renovation services, layout planning, building contractors Vellore" />
              </Helmet>
              <Services /><Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Helmet>
                <title>About Us | Maria Housing - Leading Construction Company in Vellore</title>
                <meta name="description" content="Learn about Maria Housing - Vellore's trusted construction company with 11+ years experience, 90+ completed projects, and commitment to quality construction services." />
                <meta name="keywords" content="about Maria Housing, construction company Vellore, building contractors, construction experience, quality construction services" />
              </Helmet>
              <WhoWeAre /><Stats /><About /><WhyChooseUs /><Testimonials /><Footer />
            </>
          } />
          <Route path="/gallery" element={
            <>
              <Helmet>
                <title>Project Gallery | Maria Housing - Construction Projects in Vellore</title>
                <meta name="description" content="Explore Maria Housing's project gallery showcasing completed residential, commercial, farmhouse, and renovation projects in Vellore and Tamil Nadu." />
                <meta name="keywords" content="construction projects gallery, completed projects Vellore, residential projects, commercial projects, farmhouse construction, renovation projects" />
              </Helmet>
              <Gallery /><Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Helmet>
                <title>Contact Us | Maria Housing - Construction Services in Vellore</title>
                <meta name="description" content="Contact Maria Housing for construction, renovation, and real estate services in Vellore. Call 9042177779 or visit our office. Get a free consultation for your project." />
                <meta name="keywords" content="contact Maria Housing, construction company contact, building contractors Vellore, construction consultation, 9042177779" />
              </Helmet>
              <Contact /><Footer />
            </>
          } />
          <Route path="/blog" element={
            <>
              <Helmet>
                <title>Blog | Maria Housing - Construction Tips & Design Trends</title>
                <meta name="description" content="Read expert articles on construction, design trends, renovation tips, and real estate insights from Maria Housing's blog. Stay updated with the latest in construction industry." />
                <meta name="keywords" content="construction blog, design trends, renovation tips, construction tips, real estate insights, building guides, sustainable construction" />
              </Helmet>
              <Blog /><Footer />
            </>
          } />
          <Route path="/blog/:id" element={<><BlogPostDetail /><Footer /></>} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
