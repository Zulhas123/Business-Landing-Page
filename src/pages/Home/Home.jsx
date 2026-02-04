import React from "react";
import Hero from "../../components/home/Hero/Hero";
import Categories from "../../components/home/Categories/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import FlashSale from "../../components/home/FlashSale/FlashSale";
import BannerSlider from "../../components/home/BannerSlider/BannerSlider";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import TrustBadges from "../../components/home/TrustBadges/TrustBadges";
import Newsletter from "../../components/home/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Categories />
      <FeaturedProducts />
      <FlashSale />
      <BannerSlider />
      <Testimonials />
      <Newsletter />
    </>
  );
}
