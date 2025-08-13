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
  className?: string;
}

export function MemorialHero({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
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
    <div className={cn("relative w-full bg-white", className)}>
      <Container>
        <div className="flex flex-col items-center py-12 lg:py-16">
          {/* Photo Section - Centered */}
          <div className="flex-shrink-0 mb-8">
            <div 
              className="relative overflow-hidden mx-auto"
              style={{
                width: '500px',
                height: '500px',
                maxWidth: '90vw',
                maxHeight: '90vw',
                border: '4px solid #E5E5E5',
                borderRadius: '8px'
              }}
            >
              <Image
                src={photoUrl}
                alt={`Фото ${fullName}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </div>
          </div>

          {/* Text Section - Below Photo, Full Width */}
          <div className="w-full text-center px-4 lg:px-0">
            {/* Name */}
            <h1 
              className="font-bold text-foreground"
              style={{ fontSize: '40px', lineHeight: '1.2' }}
            >
              {fullName}
            </h1>

            {/* Years Lived Badge */}
            <div style={{ marginTop: '24px', marginBottom: '20px' }}>
              <span 
                className="inline-block font-medium px-6 py-2"
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
                <span className="font-normal" style={{ color: '#8B8B8B' }}>{birthDayMonth}</span>
                {' '}
                <span className="font-bold text-foreground">{birthYear}</span>
                {' – '}
                <span className="font-bold text-foreground">{deathYear}</span>
                {' '}
                <span className="font-normal" style={{ color: '#8B8B8B' }}>{deathDayMonth}</span>
              </p>
            </div>

            {/* Location Blocks */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8">
              {/* Birth Place */}
              <div className="space-y-1">
                <div className="flex items-center justify-center">
                  <MapPin size={16} style={{ color: '#8B8B8B' }} className="mr-2" />
                  <span style={{ fontSize: '14px', color: '#8B8B8B' }}>
                    Место рождения
                  </span>
                </div>
                <p className="font-bold text-foreground" style={{ fontSize: '20px' }}>
                  {birthPlace}
                </p>
              </div>

              {/* Death Place */}
              <div className="space-y-1">
                <div className="flex items-center justify-center">
                  <MapPin size={16} style={{ color: '#8B8B8B' }} className="mr-2" />
                  <span style={{ fontSize: '14px', color: '#8B8B8B' }}>
                    Место смерти
                  </span>
                </div>
                <p className="font-bold text-foreground" style={{ fontSize: '20px' }}>
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