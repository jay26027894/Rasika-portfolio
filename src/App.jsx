import React, { useState } from 'react';
import GooeyNav from './components/GooeyNav';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TiltedCard from './components/TiltedCard';
import Particles from './components/Particles';
const items = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    
    <div
      className="w-full bg-black text-white min-h-screen flex flex-col scroll-smooth overflow-x-hidden"
      style={{ fontFamily: '"Times New Roman", Times, serif' }} >
         <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Particles
          particleColors={['#095EE2']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Responsive Sticky Nav */}
      <header className="w-full sticky top-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-semibold">My Portfolio</h1>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <GooeyNav
              items={items}
              particleCount={10}
              particleDistances={[80, 8]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={400}
              timeVariance={150}
              colors={[1,2,3]}
            />
          </nav>
          {/* Mobile Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div
              className="w-6 h-0.5 bg-white mb-1 transform transition duration-300"
              style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}
            />
            <div
              className="w-6 h-0.5 bg-white mb-1 transition-opacity duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <div
              className="w-6 h-0.5 bg-white transform transition duration-300"
              style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}
            />
          </button>
        </div>
        {/* Mobile Nav Menu */}
        {mobileOpen && (
          <nav className="md:hidden w-full bg-black border-t border-gray-800">
            <ul className="flex flex-col w-full px-4 py-2 space-y-2">
              {items.map((item) => (
                <li key={item.href} className="w-full">
                  <a
                    href={item.href}
                    className="block w-full px-2 py-2 text-white hover:bg-gray-800 rounded"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="w-full flex-1 flex flex-col">
        {/* Home */}
        <section
          id="home"
          className="w-full flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8 text-center"
        >
          <TiltedCard
            imageSrc="https://i.pinimg.com/736x/3f/24/76/3f2476ff11282686fe89431201a3ae7e.jpg"
            altText="Rasika Kharche"
            captionText="Rasika Kharche"
            containerHeight="220px"
            containerWidth="220px"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={<p className="text-sm sm:text-md font-medium">Rasika Kharche</p>}
          />
          <p className="mt-4 leading-relaxed max-w-xl text-sm sm:text-base lg:text-lg">
            Hello! I’m Rasika, a passionate <span className="font-semibold text-blue-400">Machine Learning Engineer</span> creating intelligent and immersive tech with AI and data-driven solutions.
          </p>
        </section>

        {/* About */}
        <section id="about" className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <About />
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <Skills />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full py-16 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-5xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black border-t border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
          <Footer />
        </div>
      </footer>
    </div>
  );
}    