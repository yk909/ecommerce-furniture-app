"use client";
import SliderSection from "../app/ui/home/sliderSection";
import {
  SliderSectionWithContainer,
  BannerWithContainer,
  CarouselWithContainer,
  ProductValueWithContainer,
} from "./ui/container";
import Banner from "./ui/home/Banner";
import BannerGrid from "./ui/home/BannerGrid";
import ProductCarousel from "./ui/home/ProductCarousel";
import ProductValue from "./ui/home/ProductValue";
export default function Home() {
  return (
    <section>
      <SliderSectionWithContainer>
        <SliderSection />
      </SliderSectionWithContainer>
      <BannerWithContainer>
        <BannerGrid />
      </BannerWithContainer>
      <CarouselWithContainer>
        <ProductCarousel />
      </CarouselWithContainer>
      <ProductValueWithContainer>
        <ProductValue />
      </ProductValueWithContainer>
      <Banner />
    </section>
  );
}
