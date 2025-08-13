"use client";

import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

interface MemorialHeroProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  backgroundImage?: string;
  className?: string;
}

export function MemorialHero({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  backgroundImage,
  className,
}: MemorialHeroProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const yearsLived = differenceInYears(deathDay, birthDay);

  return (
    <div 
      className={cn(
        "relative w-full",
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 py-12 lg:py-16">
          {/* Photo Section - Left */}
          <div className="flex-shrink-0">
            <div 
              className="relative overflow-hidden"
              style={{
                width: '480px',
                height: '480px',
                maxWidth: '90vw',
              }}
            >
              <Image
                src={photoUrl}
                alt={`Фото ${fullName}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, 480px"
              />
            </div>
          </div>

          {/* Text Section - Right */}
          <div className="flex flex-col justify-between flex-1 text-left px-4 lg:px-0">
            <div>
              {/* Name */}
              <h1 
                className="font-bold text-white"
                style={{ fontSize: '40px', lineHeight: '1.2' }}
              >
                {fullName}
              </h1>

              {/* Years Lived Badge */}
              <div style={{ marginTop: '40px', marginBottom: '20px' }}>
                <span 
                  className="inline-block font-thin px-6 py-2"
                  style={{ 
                    backgroundColor: '#F6B95A',
                    borderRadius: '9999px',
                    fontSize: '16px',
                    color: '#1F1F1F'
                  }}
                >
                  {yearsLived} лет жизни
                </span>
              </div>

              {/* Dates */}
              <div style={{ marginTop: '20px' }}>
                <p style={{ fontSize: '20px', lineHeight: '1.4' }}>
                  <span className="font-thin" style={{ color: '#8B8B8B' }}>{birthDayMonth}</span>
                  {' '}
                  <span className="font-bold text-white">{birthYear}</span>
                  {' – '}
                  <span className="font-bold text-white">{deathYear}</span>
                  {' '}
                  <span className="font-thin" style={{ color: '#8B8B8B' }}>{deathDayMonth}</span>
                </p>
              </div>
            </div>

            {/* Location Blocks */}
            <div className="space-y-4 mt-8 lg:mt-0">
              {/* Birth Place */}
              <div className="space-y-1">
                <div className="flex items-center">
                  <MapPin size={16} style={{ color: '#8B8B8B' }} className="mr-2" />
                  <span style={{ fontSize: '14px', color: '#8B8B8B' }}>
                    Место рождения
                  </span>
                </div>
                <p className="font-bold text-white" style={{ fontSize: '20px' }}>
                  {birthPlace}
                </p>
              </div>

              {/* Death Place */}
              <div className="space-y-1">
                <div className="flex items-center">
                  <MapPin size={16} style={{ color: '#8B8B8B' }} className="mr-2" />
                  <span style={{ fontSize: '14px', color: '#8B8B8B' }}>
                    Место смерти
                  </span>
                </div>
                <p className="font-bold text-white" style={{ fontSize: '20px' }}>
                  {deathPlace}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}