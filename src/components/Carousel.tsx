"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/carousel-1.png", alt: "Slime Monster Character", title: "Meet Our Slime Friends!" },
  { src: "/images/carousel-2.png", alt: "Colorful Slime Characters", title: "Amazing Slime Varieties" },
  { src: "/images/carousel-3.png", alt: "Slime Monster Merchandise", title: "Children's Entrepreneur Market" },
  { src: "/images/carousel-4.png", alt: "Slime Family Fun", title: "Slime Adventures Await!" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full py-8 px-4">
      <div className="relative overflow-hidden rounded-lg max-w-5xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.src} className="min-w-full">
              <div className="relative bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={896}
                  height={320}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">{slide.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}
