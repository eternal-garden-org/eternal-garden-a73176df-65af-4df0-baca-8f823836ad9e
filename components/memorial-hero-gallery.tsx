"use client";

import { useState } from "react";
import { differenceInYears } from "date-fns";
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

  const birthYear = birthDay.getFullYear();
  const deathYear = deathDay.getFullYear();

  const yearsLived = differenceInYears(deathDay, birthDay);

  const currentPhoto = photos[selectedPhotoIndex] || photos[0];

  return (
    <div 
      className={cn("relative w-full min-h-screen flex items-center justify-center py-12", className)}
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Photo Gallery Section */}
          <div className="flex items-center justify-center gap-1 mb-8">
            {/* Thumbnail Gallery - Left side */}
            {photos.length > 1 && (
              <div className="flex gap-1 mr-1">
                {photos.slice(0, 6).map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhotoIndex(index)}
                    className={cn(
                      "relative overflow-hidden transition-all duration-200",
                      selectedPhotoIndex === index 
                        ? "" 
                        : ""
                    )}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '4px',
                      boxShadow: selectedPhotoIndex !== index 
                        ? 'inset 0 0 20px rgba(0, 0, 0, 0.3)' 
                        : 'none'
                    }}
                  >
                    <Image
                      src={photo.url}
                      alt={photo.title || `Фото ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Photo with Frame - Right side */}
            <div 
              className="relative overflow-hidden"
              style={{
                width: '500px',
                height: '500px',
                maxWidth: '90vw',
                maxHeight: '90vw',
                border: '8px solid #E5E5E5',
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
  );
}