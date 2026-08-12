"use client";

import Image from "next/image";

interface StripImage {
  src: string;
  label: string;
}

interface MobileImageStripProps {
  images: StripImage[];
  bg?: string;
}

export default function MobileImageStrip({ images, bg = "bg-white" }: MobileImageStripProps) {
  return (
    <div className={`lg:hidden ${bg} py-5 overflow-hidden`}>
      <div className="flex gap-3 overflow-x-auto px-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {images.map((img, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-32 h-44 relative rounded-2xl overflow-hidden shadow-md shadow-rose-primary/10"
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
              sizes="128px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-2 left-2 right-2 text-white text-[8px] font-medium tracking-[0.22em] uppercase leading-tight">
              {img.label}
            </p>
          </div>
        ))}
        <div className="shrink-0 w-1" aria-hidden />
      </div>
    </div>
  );
}
