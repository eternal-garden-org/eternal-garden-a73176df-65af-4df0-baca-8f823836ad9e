import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHeroGallery } from "@/components/memorial-hero-gallery";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  const memorialPhotos = [
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755099139342_main_image_3.png",
      title: "main_image_3",
      description: "ффф"
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755099147901_photo_3_1.png",
      title: "photo_3_1",
      description: "фффф"
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755099155841_photo_3_2.png",
      title: "photo_3_2",
      description: "ффффф"
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755099163281_photo_3_3.png",
      title: "photo_3_3",
      description: "ффффф"
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755099172363_photo_3_4.png",
      title: "photo_3_4",
      description: "ффффффф"
    },
    {
      url: "https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755107311490_bg_image-min.png",
      title: "bg_image-min",
      description: "фы"
    }
  ];

  return (
    <PageLayout>
      <MemorialHeroGallery
        fullName="Александр Викторович Карпук"
        birthDate="1976-02-11"
        deathDate="2025-08-05"
        photos={memorialPhotos}
      />
      <Container>
        <MemorialInfo />
        <MemorialBio />
      </Container>
      <MemorialQuotes />
      <Container>
        <MemorialMedia />
        <MemorialPhotos />
        <MemorialWords />
        <MemorialContacts />
      </Container>
      <Footer />
    </PageLayout>
  );
}