"use client";

import { useState, useEffect } from "react";

// Import section components
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Documentation from "@/components/sections/Documentation";
import Installation from "@/components/sections/Installation";
import Community from "@/components/sections/Community";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

// useLenis hook to demonstrate Lenis programmatic scrolling control
function useLenis() {
  useEffect(() => {
    // This function will run on the client side only
    const handleScrollToTop = () => {
      // Get the global Lenis instance from window
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 3.5, // Even slower scroll (3.5 seconds)
          easing: (t: number) => 1 - Math.pow(1 - t, 3), // Cubic ease out for smooth deceleration
          immediate: false, // Allow smooth animation
        });
      }
    };

    // Add button to control scroll
    const addScrollButton = () => {
      const existingButton = document.getElementById('slow-scroll-top');
      if (!existingButton) {
        const button = document.createElement('button');
        button.id = 'slow-scroll-top';
        button.innerHTML = '↑';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = '9999';
        button.style.padding = '10px 15px';
        button.style.borderRadius = '8px';
        button.style.background = 'rgba(0, 0, 0, 0.7)';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
        button.style.cursor = 'pointer';
        button.style.fontFamily = 'system-ui, sans-serif';
        button.style.fontSize = '14px';
        button.style.fontWeight = '500';
        button.style.transition = 'all 0.2s ease';
        
        // Hover state
        button.addEventListener('mouseenter', () => {
          button.style.background = 'rgba(0, 0, 0, 0.9)';
          button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
          button.style.background = 'rgba(0, 0, 0, 0.7)';
          button.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', handleScrollToTop);
        document.body.appendChild(button);
      }
    };

    // Run after slight delay to ensure Lenis is initialized
    setTimeout(addScrollButton, 1000);

    return () => {
      const button = document.getElementById('slow-scroll-top');
      if (button) {
        button.removeEventListener('click', handleScrollToTop);
        button.remove();
      }
    };
  }, []);

  return null;
}

// Home component is the main page component
export default function Home() {
  // State variables
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Ensure hydration and set up scroll tracking
  useEffect(() => {
    // After mounting, set mounted to true
    setMounted(true);

    // Function to handle scroll events
    const handleScroll = () => {
      // Define the sections to track
      const sections = [
        "hero",
        "features",
        "showcase",
        "installation",
        "community",
      ];

      // Iterate through the sections
      for (const section of sections) {
        // Get the element by its ID
        const element = document.getElementById(section);
        // If the element doesn't exist, continue to the next section
        if (!element) continue;

        // Get the bounding rectangle of the element
        const rect = element.getBoundingClientRect();
        // If the element is within the viewport (top and bottom within 100px of the top), set it as the active section
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add Lenis controller
  useLenis();

  // If not mounted, return null
  if (!mounted) return null;

  // Render the main page content
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Render the Header component, passing the activeSection */}
      <Header activeSection={activeSection} />

      <main>
        {/* Render the Hero section */}
        <Hero />
        {/* Render the Features section */}
        <Features />
        {/* Render the Showcase section */}
        <Showcase />
        {/* Render the Documentation section */}
        <Documentation />
        {/* Render the Installation section */}
        <Installation />
        {/* Render the Community section */}
        <Community />
        {/* Render the Cta section */}
        <Cta />
      </main>

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

