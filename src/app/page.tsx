"use client";
import SliderSection from "../app/ui/home/sliderSection";
import { SliderSectionWithContainer } from "./ui/container";
export default function Home() {
  return (
    <aside>
      <SliderSectionWithContainer>
        <SliderSection />
      </SliderSectionWithContainer>
    </aside>
  );
}
