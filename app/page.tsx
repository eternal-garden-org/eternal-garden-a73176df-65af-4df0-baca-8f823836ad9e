import { PageLayout } from "@/components/page-layout";
import { Container } from "@/components/container";
import { MemorialHero } from "@/components/memorial-hero";
import { MemorialInfo } from "@/components/memorial-info";
import { MemorialBio } from "@/components/memorial-bio";
import { MemorialQuotes } from "@/components/memorial-quotes";
import { MemorialMedia } from "@/components/memorial-media";
import { MemorialPhotos } from "@/components/memorial-photos";
import { MemorialWords } from "@/components/memorial-words";
import { MemorialContacts } from "@/components/memorial-contacts";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <PageLayout>
      <MemorialHero
        fullName="Александр Викторович Карпук"
        birthDate="1976-02-11"
        deathDate="2025-08-05"
        photoUrl="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755099139342_main_image_3.png"
        birthPlace="Солигорск, Беларусь"
        deathPlace="Брест, Беларусь"
        backgroundImage="https://rfuuxxxcubnqezacyouv.supabase.co/storage/v1/object/public/memorial-media/memorials/a73176df-65af-4df0-baca-8f823836ad9e/photo/1755099128774_bg_image_3.png"
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