"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function ScrollSpy() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [sections, setSections] = useState<{ id: string; text: string; level: number }[]>([])
  const [hasInitialized, setHasInitialized] = useState(false)
  const lastPathRef = useRef<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Track if we need to rebuild the section list
  const shouldRebuildSections = useMemo(() => {
    // Only rebuild if the path changed and we need to find new sections
    return lastPathRef.current !== pathname;
  }, [pathname]);

  // Function to find headings and setup observer
  const setupSectionsAndObserver = () => {
    // Find all h2 and h3 elements with IDs
    const headings = Array.from(document.querySelectorAll("h2[id], h3[id]"))
      .map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: element.tagName === "H2" ? 2 : 3,
      }))
      .filter((heading) => heading.id && heading.text);

    if (headings.length > 0) {
      setSections(headings);
      setHasInitialized(true);
      
      // Set initial active section
      if (!activeSection) {
        setActiveSection(headings[0].id);
      }
    }

    // Cleanup previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Setup new intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the first section that is intersecting
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveSection(intersectingEntry.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0.1,
      }
    );

    // Observe all section headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Update the last path we processed
    lastPathRef.current = pathname;
  };

  // Effect to handle pathname changes without resetting state completely
  useEffect(() => {
    if (!shouldRebuildSections && hasInitialized) {
      // If we've already initialized and the path hasn't really changed meaningfully,
      // we don't need to do a full reset
      return;
    }

    // Only reset activeSection on pathname change, keep the sections array
    if (shouldRebuildSections) {
      setActiveSection(null);
    }
    
    // Use a timer to ensure DOM is updated after route change
    const timer = setTimeout(() => {
      setupSectionsAndObserver();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, shouldRebuildSections, hasInitialized]);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Don't render anything if there are no sections
  if (sections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2 transition-opacity duration-300">
      <h4 className="mb-4 font-medium text-primary">On This Page</h4>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "block text-sm transition-colors hover:text-foreground",
              section.level === 2 ? "pl-2" : "pl-4",
              activeSection === section.id
                ? "font-medium text-primary border-l-2 border-primary pl-3"
                : "text-muted-foreground hover:text-foreground/80 border-l-2 border-transparent pl-3",
            )}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({
                behavior: "smooth",
              });
              setActiveSection(section.id);
              // Update URL without causing a page reload
              window.history.pushState(null, "", `#${section.id}`);
            }}
          >
            {section.text}
          </a>
        ))}
      </nav>
    </div>
  );
}

