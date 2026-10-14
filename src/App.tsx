import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<><Hero /><HomeStats /><HomeServices /><HomeProjects /><Process /><Footer /></>} />
          <Route path="/services" element={<><Services /><Footer /></>} />
          <Route path="/about" element={<><WhoWeAre /><Stats /><About /><WhyChooseUs /><Testimonials /><Footer /></>} />
          <Route path="/gallery" element={<><Gallery /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
          <Route path="/blog" element={<><Blog /><Footer /></>} />
          <Route path="/blog/:id" element={<><BlogPostDetail /><Footer /></>} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
