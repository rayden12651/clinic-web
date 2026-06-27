"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

interface MediaBlockProps {
  type?: "image" | "video" | "background-video";
  /* REPLACE: Set src to your actual image or video path/URL */
  src?: string;
  alt?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  overlay?: boolean;
  label?: string; // shown in placeholder
}

const aspectMap = {
  square:    "aspect-square",
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide:      "aspect-video",
};

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

export default function MediaBlock({
  type = "image",
  src,
  alt = "Clinic image",
  aspectRatio = "landscape",
  rounded = "2xl",
  className = "",
  overlay = false,
  label,
}: MediaBlockProps) {
  const [playing, setPlaying] = useState(false);

  const rClass = roundedMap[rounded];
  const aClass = aspectMap[aspectRatio];

  if (type === "video" && src) {
    return (
      <div className={`relative overflow-hidden ${aClass} ${rClass} ${className} bg-clinic-dark`}>
        {!playing ? (
          <>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-primary/30 to-clinic-dark/60" />
              {/* REPLACE: Add your video thumbnail as background-image */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPlaying(true)}
                className="relative z-10 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl hover:bg-white transition-all"
                aria-label="Play video"
              >
                <Play size={22} className="text-rose-primary ml-1" fill="currentColor" />
              </motion.button>
            </div>
            {label && (
              <p className="absolute bottom-4 left-4 text-white/60 text-xs tracking-widest uppercase z-10">
                {label}
              </p>
            )}
          </>
        ) : (
          <video
            src={src}
            autoPlay
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  }

  if (type === "background-video" && src) {
    return (
      <div className={`relative overflow-hidden ${aClass} ${rClass} ${className}`}>
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-clinic-dark/40" />
        )}
      </div>
    );
  }

  // Default: image block (with placeholder when src is not set)
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aClass} ${rClass} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/40 to-transparent" />
        )}
      </div>
    );
  }

  // Placeholder block (no src provided)
  return (
    <div
      className={`relative overflow-hidden ${aClass} ${rClass} ${className} bg-gradient-to-br from-rose-light to-rose-blush flex flex-col items-center justify-center gap-3 border border-dashed border-rose-mid`}
    >
      <div className="text-rose-primary/40">
        {/* Camera icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      </div>
      <p className="text-xs text-rose-primary/50 tracking-widest uppercase text-center px-4">
        {label ?? "Replace with your image"}
      </p>
    </div>
  );
}
