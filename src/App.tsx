import React, { useEffect, useRef } from 'react';
import { Palette, Code, Lightbulb, Heart, Sparkles, User, Laptop, Rocket } from 'lucide-react';
import { useTypewriter } from './hooks/useTypewriter';
import Navbar from "./components/NavBar/navbar";
import Skills from './components/Skills/skills';
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const titleText = useTypewriter("Web design is about telling a story...", 70);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] 
          bg-cover bg-center opacity-20"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-center px-4 z-10">
          {titleText}<span className="animate-pulse">|</span>
        </h1>
      </section>

      {/* Story Sections */}
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-32">
            <div className="fade-in flex items-center gap-8">
              <Palette className="w-16 h-16 text-purple-400 flex-shrink-0" />
              <p className="text-2xl md:text-3xl leading-relaxed">
                It begins with a vision, a blank canvas waiting to be transformed into something extraordinary...
              </p>
            </div>

            <div className="fade-in flex items-center gap-8 flex-row-reverse">
              <Code className="w-16 h-16 text-blue-400 flex-shrink-0" />
              <p className="text-2xl md:text-3xl leading-relaxed text-right">
                Through lines of code and careful craftsmanship, we breathe life into digital experiences...
              </p>
            </div>

            <div className="fade-in flex items-center gap-8">
              <Lightbulb className="w-16 h-16 text-yellow-400 flex-shrink-0" />
              <p className="text-2xl md:text-3xl leading-relaxed">
                Each pixel, each interaction is thoughtfully designed to illuminate ideas...
              </p>
            </div>

            <div className="fade-in flex items-center gap-8 flex-row-reverse">
              <Heart className="w-16 h-16 text-red-400 flex-shrink-0" />
              <p className="text-2xl md:text-3xl leading-relaxed text-right">
                Because at its core, great design is about creating connections that resonate...
              </p>
            </div>

            <div className="fade-in flex items-center gap-8">
              <Sparkles className="w-16 h-16 text-emerald-400 flex-shrink-0" />
              <p className="text-2xl md:text-3xl leading-relaxed">
                And when it all comes together, magic happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="min-h-screen relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] 
          bg-cover bg-center opacity-10"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center scale-in">
              <User className="w-24 h-24 text-indigo-400 mx-auto mb-8" />
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                I'm Nehemiah
              </h2>
            </div>

            <div className="slide-in-left flex items-center gap-8">
              <Laptop className="w-16 h-16 text-cyan-400 flex-shrink-0" />
              <p className="text-2xl md:text-3xl leading-relaxed">
                A web designer who transforms ideas into immersive digital experiences...
              </p>
            </div>

            <div className="slide-in-right flex items-center gap-8 flex-row-reverse">
              <Rocket className="w-16 h-16 text-pink-400 flex-shrink-0" />
              <p className="text-2xl md:text-3xl leading-relaxed text-right">
                Capable of crafting stunning websites that captivate and inspire, just like the one you're experiencing now.
              </p>
            </div>

            <div className="scale-in text-center max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl leading-relaxed text-gray-300">
                Let's work together to bring your vision to life with the same attention to detail, smooth transitions, and engaging storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <Skills />
      <Works />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Nehemiah's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;