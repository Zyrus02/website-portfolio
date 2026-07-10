"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [lightboxData, setLightboxData] = useState(null);

  const filters = ["All", "Automotive", "Street/Urban", "Pre Convocation Portrait", "Travel"];

  const photos = [
    {
      src: "/Img/BMW.jpg",
      title: "German Engineering",
      category: "Automotive",
      meta: "f/4.0 | 1/250s | ISO 600",
      alt: "Three machines, one passion."
    },
    {
      src: "/Img/2-DSC01305.jpg",
      title: "Neon Echoes",
      category: "Travel",
      meta: "f/4.0 | 1/160s | ISO 400",
      alt: "Where design meets imagination."
    },
    {
      src: "/Img/DSC09390.jpg",
      title: "Solo Portrait",
      category: "Pre Convocation Portrait",
      meta: "f/1.8 | 1/200s | ISO 200",
      alt: "One step closer to the next chapter."
    },
    {
      src: "/Img/1-DSC02288.jpg",
      title: "Group Portrait",
      category: "Pre Convocation Portrait",
      meta: "f/4.0 | 1/200s | ISO 400",
      alt: "Running towards memories and milestones."
    },
    {
      src: "/Img/DSC05003.jpg",
      title: "Group Portrait",
      category: "Pre Convocation Portrait",
      meta: "f/4.0 | 1/400s | ISO 200",
      alt: "Collecting moments before the big day."
    },
    {
      src: "/Img/3-DSC02580.jpg",
      title: "Structured Light",
      category: "Street/Urban",
      meta: "f/11.0 | 1/500s | ISO 100",
      alt: "A minimalist architectural photograph of a brutalist concrete building."
    }
  ];

  const handlePhotoClick = (photo) => {
    setLightboxImg(photo.src);
    setLightboxData(photo);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    setLightboxData(null);
  };

  const filteredPhotos = activeFilter === "All"
    ? photos
    : photos.filter((p) => p.category === activeFilter);

  return (
    <main className="pt-32 pb-24 max-w-[1280px] mx-auto px-4 md:px-10">
      {/* Hero Section */}
      <section className="mb-16">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold">Portfolio</span>
        <h1 className="font-headline text-headline-lg md:text-5xl font-black text-on-surface leading-none mt-2">
          Creative Perspective:<br />A Visual Sandbox
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant mt-6 max-w-2xl leading-relaxed">
          Where Data Meets Design... Exploring the intersection of technical precision and artistic expression through the lens.
        </p>
      </section>

      {/* Category Filter */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-3 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border text-xs font-semibold font-label transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "bg-secondary border-secondary text-on-secondary"
                  : "border-outline-variant/60 text-on-surface-variant hover:border-secondary hover:text-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Uniform Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.src}
              onClick={() => handlePhotoClick(photo)}
              className="relative aspect-[3/2] group cursor-pointer overflow-hidden rounded-xl bg-surface-container border border-outline-variant/20"
            >
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                alt={photo.alt}
                src={photo.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="font-label text-[10px] text-secondary font-bold uppercase tracking-wider mb-1">
                  {photo.category}
                </span>
                <h3 className="font-headline text-lg font-bold text-white mb-2">{photo.title}</h3>
                <div className="flex gap-3 text-xs text-slate-300 font-mono">
                  <span>{photo.meta.split(" | ")[0]}</span>
                  <span>•</span>
                  <span>{photo.meta.split(" | ")[1]}</span>
                  <span>•</span>
                  <span>{photo.meta.split(" | ")[2]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center">
        <div className="glass-card p-10 rounded-xl inline-flex flex-col items-center gap-6 border border-outline-variant/20">
          <h2 className="font-headline text-xl font-bold text-on-surface">Want to see the full collection?</h2>
          <a
            className="px-8 py-3 bg-secondary text-on-secondary rounded-lg font-label text-xs font-bold hover:brightness-110 active:scale-95 transition-all duration-200"
            href="https://zyrus.mypixieset.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full High-Res Gallery on Pixieset
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && lightboxData && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md">
          <button
            className="absolute top-6 right-6 p-2 text-white hover:text-secondary transition-colors cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6">
            <img
              className="max-h-[70vh] w-auto object-contain rounded-lg border border-white/10 shadow-2xl"
              alt={lightboxData.alt}
              src={lightboxImg}
            />
            <div className="text-center text-white">
              <h2 className="font-headline text-xl font-bold">{lightboxData.title}</h2>
              <p className="font-mono text-xs text-secondary mt-2 uppercase tracking-wide">
                {lightboxData.category} • {lightboxData.meta}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
