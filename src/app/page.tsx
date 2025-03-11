import Hero from '@/components/sections/Hero';
import Accomplishments from '@/components/sections/Accomplishments';
import CampaignPlatform from '@/components/sections/CampaignPlatform';
import AboutGiselle from '@/components/sections/AboutGiselle';
import DonationSection from '@/components/sections/DonationSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Accomplishments />
      <CampaignPlatform />
      <AboutGiselle />
      <DonationSection />
    </main>
  );
}
