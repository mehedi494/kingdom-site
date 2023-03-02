import React from "react";
// import sections
import Hero from "./Hero";
import AboutUsSection from "./AboutUsSection";
import SmallGroup from "./SmallGroup";
import FutureGoverning from "./FutureGoverning";
import WorkInquiries from "./WorkInquiries";
import GoverningKingdom from "./GoverningKingdom";
import FindOpportunintes from "./FindOpportunintes";
import GoverningStructure from "./GoverningStructure";
import BusinessVariation from "./BusinessVariation";

function HomePage() {
  return (
    <section>
      <Hero />
      <AboutUsSection />
      <SmallGroup />
      <FutureGoverning />
      <WorkInquiries />
      <GoverningKingdom />
      <FindOpportunintes />
      <GoverningStructure />
      <BusinessVariation/>
    </section>
  );
}

export default HomePage;
