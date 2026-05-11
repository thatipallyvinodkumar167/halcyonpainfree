import Hero from "../components/Hero";
import Services from "../components/Services";
import Symptoms from "../components/Symptoms";
import Offerings from "../components/Offerings";
import PainStats from "../components/PainStats";
import WhyHalcyon from "../components/WhyHalcyon";
import Specialists from "../components/Specialists";
import SEO from "../components/SEO";


export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Halcyon Pain Management Center offers advanced, non-surgical treatments for back pain, neck pain, sciatica, and more. Reclaim your life today."
        keywords="pain management, physiotherapy, chiropractic, sciatica treatment, back pain relief"
      />


      <Hero />
      <PainStats />
      <WhyHalcyon />
      <Specialists />
      <Services />
      <Symptoms />
      <Offerings />


    </>
  );
}
