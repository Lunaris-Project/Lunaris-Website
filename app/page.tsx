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

