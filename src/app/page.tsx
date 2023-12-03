"use client";
import SliderSection from "../app/ui/home/sliderSection";
import {
  SliderSectionWithContainer,
  BannerWithContainer,
} from "./ui/container";
import Banner from "./ui/home/banner";
export default function Home() {
  return (
    <section>
      <SliderSectionWithContainer>
        <SliderSection />
      </SliderSectionWithContainer>
      <BannerWithContainer>
        <Banner />
      </BannerWithContainer>
    </section>
  );
}
