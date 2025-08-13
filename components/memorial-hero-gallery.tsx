"use client";

import { useState } from "react";
import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

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
  backgroundImage?: string;
  className?: string;
}

export function MemorialHeroGallery({
  fullName,
  birthDate,
  deathDate,
  photos,
  backgroundImage = "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755107311490_bg_image-min.png",
  className,
}: MemorialHeroGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const yearsLived = differenceInYears(deathDay, birthDay);

  const currentPhoto = photos[selectedPhotoIndex] || photos[0];

  return (
    <div 
      className={cn("relative w-full min-h-screen flex items-center justify-center py-12", className)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Main Photo with Frame */}
          <div className="mb-6">
            <div 
              className="relative overflow-hidden mx-auto"
              style={{
                width: '500px',
                height: '500px',
                maxWidth: '90vw',
                maxHeight: '90vw',
                border: '12px solid rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
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

          {/* Thumbnail Gallery */}
          {photos.length > 1 && (
            <div className="flex gap-3 mb-8 flex-wrap justify-center">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={cn(
                    "relative overflow-hidden transition-all duration-200",
                    selectedPhotoIndex === index 
                      ? "ring-4 ring-white shadow-lg scale-110" 
                      : "ring-2 ring-white/50 hover:ring-white/75 hover:scale-105"
                  )}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '4px'
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

          {/* Name Block */}
          <div 
            className="text-center mb-6 p-6 rounded-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Typography.H1 className="text-foreground mb-0">
              {fullName}
            </Typography.H1>
          </div>

          {/* Info Row */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 rounded-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Years Lived */}
            <div className="text-center">
              <span 
                className="inline-block font-semibold px-5 py-2"
                style={{ 
                  backgroundColor: '#F6B95A',
                  borderRadius: '9999px',
                  fontSize: '18px',
                  color: '#1F1F1F'
                }}
              >
                Прожил {yearsLived} лет
              </span>
            </div>

            {/* Separator */}
            <div 
              className="hidden sm:block"
              style={{
                width: '2px',
                height: '30px',
                backgroundColor: '#E5E5E5'
              }}
            />

            {/* Dates */}
            <div className="text-center">
              <Typography.P className="mb-0" style={{ fontSize: '18px', fontWeight: '500' }}>
                <span style={{ color: '#666' }}>{birthDayMonth}</span>
                {' '}
                <span className="font-bold text-foreground">{birthYear}</span>
                {' — '}
                <span className="font-bold text-foreground">{deathYear}</span>
                {' '}
                <span style={{ color: '#666' }}>{deathDayMonth}</span>
              </Typography.P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}