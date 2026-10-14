import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
        <div className="mx-auto max-w-[1100px]">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="flex items-center justify-between rounded-[28px] border border-white/60 bg-[#f3efe9]/90 px-4 py-3 shadow-[0_12px_35px_rgba(21,21,21,0.08)] backdrop-blur-sm md:px-6"
          >
            <MotionLink
              to="/"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="flex flex-col items-start leading-none">
                <span
                  className="select-none bg-gradient-to-r from-[#1f9fe8] via-[#1a87d9] to-[#0d4d9a] bg-clip-text text-transparent"
                  style={{
                    fontFamily: 'Arial Black, Impact, sans-serif',
                    fontSize: 'clamp(2rem, 3vw, 4.9rem)',
                    lineHeight: '0.82',
                    letterSpacing: '-0.08em',
                    fontWeight: 900,
                  }}
                >
                  MARIA
                </span>
                <span
                  className="select-none mt-1 uppercase text-background-900"
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 'clamp(0.5rem, 0.72vw, 1rem)',
                    letterSpacing: '0.46em',
                    fontWeight: 700,
                    lineHeight: '1',
                  }}
                >
                  HOUSING
                </span>
              </div>
            </MotionLink>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <MotionLink
                  key={link.name}
                  to={link.href}
                  whileHover={{ y: -1 }}
                  className="text-[15px] font-medium text-background-700 transition-colors hover:text-background-900"
                >
                  {link.name}
                </MotionLink>
              ))}
            </div>

            <motion.a
              href="https://wa.me/917010680759?text=Hello%20Maria%20Housing%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden items-center gap-2 rounded-full bg-[#b5965a] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(181,150,90,0.35)] transition-colors hover:bg-[#a9884e] md:inline-flex"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </motion.a>

            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center rounded-full border border-background-200 bg-white/70 p-2 text-background-900 transition-colors hover:border-background-300 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </motion.nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#f3efe9]/95 px-4 pt-28 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <MotionLink
                  key={link.name}
                  to={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-semibold text-background-900"
                >
                  {link.name}
                </MotionLink>
              ))}
              <motion.a
                href="https://wa.me/917010680759?text=Hello%20Maria%20Housing%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[#b5965a] px-6 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(181,150,90,0.35)]"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
