import React from "react";
import Layout from "@/components/Layout";
import DonationHero from "@/components/Donation/DonationHero";
import DonationService from "@/components/Donation/DonationService";

function donation() {
  return (
    <Layout title={"Donation"}>
      <DonationHero />
      <DonationService />
    </Layout>
  );
}

export default donation;
