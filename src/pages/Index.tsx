import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsBar from '@/components/BenefitsBar';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsBar />
        <HowItWorks />
        <Features />
        <Pricing />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
