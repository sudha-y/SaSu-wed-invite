import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventsSection from "@/components/EventsSection";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";
import { useAccessLevel } from "@/hooks/useAccessLevel";

const Index = () => {
  const accessLevel = useAccessLevel();

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CoupleSection />
      <EventsSection accessLevel={accessLevel} />
      <RSVPSection />
      <FooterSection />
    </main>
  );
};

export default Index;
