import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Symptoms from "../components/Symptoms";
import Offerings from "../components/Offerings";
import Footer from "../components/Footer";

export default function SymptomsPage() {
  return (
    <>
      <SEO
        title="Symptoms & Conditions"
        description="Find information on common symptoms including back pain, neck & shoulder stiffness, knee joint issues, and sciatica."
        keywords="symptoms, back pain, knee pain, sciatica, neck pain, stiffness"
      />


      <Symptoms />
      <Offerings />

    </>
  );
}
