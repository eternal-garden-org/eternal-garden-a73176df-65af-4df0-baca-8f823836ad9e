"use client";

import { useState } from "react";
import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Photo {
  url: string;
  title?: string;
  description?: string;
}

interface MemorialHeroGalleryProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  photos: Photo[];
  className?: string;
}

export function MemorialHeroGallery({
  fullName,
  birthDate,
  deathDate,
  photos,
  className,
}: MemorialHeroGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const yearsLived = differenceInYears(deathDay, birthDay);

  const currentPhoto = photos[selectedPhotoIndex] || photos[0];

  return (
    <div 
      className={cn("relative w-full min-h-screen flex items-center justify-center py-12 bg-white", className)}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          {/* Thumbnail Gallery - Left side on desktop */}
          {photos.length > 1 && (
            <div className="flex lg:flex-col gap-1 order-2 lg:order-1">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={cn(
                    "relative overflow-hidden transition-all duration-200 border-2",
                    selectedPhotoIndex === index 
                      ? "border-gray-400" 
                      : "border-gray-200"
                  )}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '4px',
                    boxShadow: selectedPhotoIndex !== index ? 'inset 0 0 20px rgba(0,0,0,0.2)' : 'none'
                  }}
                >
                  <Image
                    src={photo.url}
                    alt={photo.title || `Фото ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                  {selectedPhotoIndex !== index && (
                    <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Main content - Right side */}
          <div className="flex flex-col items-center order-1 lg:order-2">
            {/* Main Photo with Frame */}
            <div className="mb-8">
              <div 
                className="relative overflow-hidden mx-auto border-8"
                style={{
                  width: '500px',
                  height: '500px',
                  maxWidth: '90vw',
                  maxHeight: '90vw',
                  borderColor: '#E5E5E5',
                  borderRadius: '4px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Image
                  src={currentPhoto.url}
                  alt={currentPhoto.title || `Фото ${fullName}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 90vw, 500px"
                />
              </div>
            </div>

            {/* Name Block */}
            <div className="text-center mb-6">
              <h1 
                style={{
                  color: '#2F4559',
                  fontSize: '44px',
                  fontWeight: '400',
                  lineHeight: '1.2'
                }}
              >
                {fullName}
              </h1>
            </div>

            {/* Info Row */}
            <div className="flex items-center gap-6">
              {/* Years Lived */}
              <div className="text-center">
                <div 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: '500',
                    color: '#67A6E0',
                    marginBottom: '4px'
                  }}
                >
                  {yearsLived}
                </div>
                <div 
                  style={{ 
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#67A6E0'
                  }}
                >
                  лет жизни
                </div>
              </div>

              {/* Separator */}
              <div 
                style={{
                  width: '1px',
                  height: '50px',
                  backgroundColor: '#E5E5E5'
                }}
              />

              {/* Dates */}
              <div className="text-center">
                <div 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#2F4559',
                    marginBottom: '4px'
                  }}
                >
                  {birthYear}
                </div>
                <div 
                  style={{ 
                    fontSize: '24px',
                    fontWeight: '400',
                    color: '#2F4559'
                  }}
                >
                  {deathYear}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}