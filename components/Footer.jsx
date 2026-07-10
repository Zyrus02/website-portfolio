"use client";

import Link from "next/link";
import { Share2, Maximize2, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-surface text-on-surface-variant py-12 border-t border-outline-variant/30 mt-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="size-8 text-secondary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="font-bold text-on-surface font-headline">Farhan Nur Iman</span>
        </div>
        
        <p className="text-sm font-body">© 2024 Farhan Nur Iman. Built with precision and passion.</p>
        
        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-secondary transition-colors text-on-surface-variant flex items-center justify-center" aria-label="Share">
            <Share2 className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-secondary transition-colors text-on-surface-variant flex items-center justify-center" aria-label="Expand">
            <Maximize2 className="w-5 h-5" />
          </a>
          <button 
            onClick={scrollToTop} 
            className="hover:text-secondary transition-colors text-on-surface-variant bg-transparent border-none cursor-pointer p-0 flex items-center justify-center" 
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
