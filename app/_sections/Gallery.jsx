"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { galleryImages } from "../_constants";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
      setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleThumbnailHover = (index) => {
    setSelectedImage(galleryImages[index]);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="p-4">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-end gap-2 mb-4">
          <button className="bg-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">
            EXTERIORS
          </button>
          <button className="border border-[#00357B] text-[#00357B] py-4 px-12 rounded-md text-sm font-semibold hover:scale-105 transition-all">
            INTERIORS
          </button>
        </div>

        {/* Main image with zoom on hover */}
        <div
          className="relative w-full h-52 sm:h-64 md:h-[400px] lg:h-[500px] transition"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={selectedImage}
            alt="Selected"
            fill
            className="rounded-xl object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Navigation Arrows */}
        {!isHovered && (
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              className="bg-[#00357B] py-2 px-4 rounded-md text-white font-semibold hover:scale-105 transition-all"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-[#00357B] py-2 px-4 rounded-md text-white font-semibold hover:scale-105 transition-all"
            >
              Next
            </button>
          </div>
        )}

        {/* Thumbnail grid with highlighting */}
        <div className="grid grid-cols-4 gap-4 mt-8 mb-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              onMouseEnter={() => handleThumbnailHover(index)}
              className={`relative w-full h-16 sm:h-28 md:h-32 cursor-pointer transition hover:scale-105 ${
                index === currentIndex ? "border-4 border-[#00357B] rounded-lg" : ""
              }`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-lg p-1"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
