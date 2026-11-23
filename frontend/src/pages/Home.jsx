import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import CompanyLogos from "../components/CompanyLogos/CompanyLogos";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ExploreCategory from "../components/ExploreCategory/ExploreCategory";
import FeaturedOpportunities from "../components/FeaturedOpportunities/FeaturedOpportunities";
import EmployerBanner from "../components/EmployerBanner/EmployerBanner";
import HiringSteps from "../components/HiringSteps/HiringSteps";
import EmployerAdvantage from "../components/EmployerAdvantage/EmployerAdvantage";
import KnowledgeSupport from "../components/KnowledgeSupport/KnowledgeSupport";
import CareerDashboard from "../components/CareerDashboard/CareerDashboard";
import FinalCTA from "../components/FinalCTA/FinalCTA";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CompanyLogos />
        <WhyChooseUs />
        <ExploreCategory />
        <FeaturedOpportunities />
        <EmployerBanner />
        <HiringSteps />
        <EmployerAdvantage />
        <KnowledgeSupport />
        <CareerDashboard />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;
