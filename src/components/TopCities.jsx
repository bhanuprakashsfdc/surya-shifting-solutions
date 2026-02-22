import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadCities } from "@/data/cities-loader.js";
import localCities from "@/data/cities";

// Simple slug generator kept consistent with router paths
const toSlug = (name) =>
  String(name)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

// Title case for nicer display labels
const toTitleCase = (name) =>
  String(name)
    .toLowerCase()
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");

// Optional prefix lets us reuse for different page types if needed
// limit controls how many chips to show; default 100
const TopCities = ({ labelPrefix = "Packers and Movers in", limit = 100 }) => {
  const location = useLocation();
  const [uniqueCities, setUniqueCities] = useState(() => {
    // Deduplicate local immediately while we load remote
    return Array.from(new Map(localCities.map((name) => [toSlug(name), name])).values());
  });

  useEffect(() => {
    let mounted = true;
    loadCities().then((names) => {
      if (!mounted || !names || names.length === 0) return;
      const dedup = Array.from(new Map(names.map((n) => [toSlug(n), n])).values());
      setUniqueCities(dedup);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Shuffle and sample on each navigation change
  const displayCities = useMemo(() => {
    const shuffled = [...uniqueCities].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, limit);
  }, [uniqueCities, location.key, limit]);

  return (
    <section className="py-8 border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Top cities and towns in India
        </h2>
        <div className="flex flex-wrap gap-2">
          {displayCities.map((name) => {
            const slug = toSlug(name);
            const href = `/packers-and-movers-in-${slug}.html`;
            const label = toTitleCase(name);
            return (
              <a
                key={slug}
                href={href}
                className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted/30 text-xs text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                aria-label={`Navigate to ${labelPrefix} ${label}`}
              >
                {labelPrefix} {label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopCities;