"use client";
import SliderSection from "./ui/home/SliderSection";
import {
  SliderSectionWithContainer,
  BannerWithContainer,
  CarouselWithContainer,
  ProductValueWithContainer,
  BlogSectionWithContainer,
} from "./ui/container";
import Banner from "./ui/home/Banner";
import BannerGrid from "./ui/home/BannerGrid";
import BlogSection from "./ui/home/BlogSection";
import NewsLetter from "./ui/home/Newsletter";
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
      <BlogSectionWithContainer>
        <BlogSection />
      </BlogSectionWithContainer>
      <NewsLetter />
    </section>
  );
}
