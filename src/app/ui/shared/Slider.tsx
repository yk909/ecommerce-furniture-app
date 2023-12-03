import Image from "next/image";
import React, { useState } from "react";

const ArrowSlider = ({ onLeft = false }: { onLeft?: boolean }) => {
  const style = (onLeft && `rotate-180`) || "";
  return (
    <Image
      src="/icons/arrow/arrow-right.svg"
      width={32}
      height={32}
      alt="Icon arrow"
      className={style}
    />
  );
};

const ArrowCircleSlider = ({ children }: { children: React.ReactNode }) => {
  return <div className="rounded-full bg-white-01 p-2.5">{children}</div>;
};

const ArrowLeftSlider = () => {
  return (
    <ArrowCircleSlider>
      <ArrowSlider onLeft />
    </ArrowCircleSlider>
  );
};

const ArrowRightSlider = () => {
  return (
    <ArrowCircleSlider>
      <ArrowSlider />
    </ArrowCircleSlider>
  );
};

const DotSlider = ({ isActive }: { isActive: boolean }) => {
  const style = `rounded-full  h-2 w-2 bg-white-01 block ${
    isActive ? "w-7" : "w-2"
  }`;
  return <span className={style}></span>;
};

const Slider = ({ slides }: { slides: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <picture className="w-full h-72 relative md:h-[536px] brightness-110 duration-500 group">
      <Image
        src={slides[currentIndex]}
        fill
        alt="Image portrait furniture 01"
        loading="eager"
        className="object-cover"
        priority
      />
      <div className="hidden group-hover:flex absolute inset-y-0 left-2 items-center">
        <button onClick={prevSlide}>
          <ArrowLeftSlider />
        </button>
      </div>
      <div className="hidden group-hover:flex absolute inset-y-0 right-2 items-center">
        <button onClick={nextSlide}>
          <ArrowRightSlider />
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-x-4">
        {slides.map((slide, index) => (
          <button key={slide} onClick={() => setCurrentIndex(index)}>
            <DotSlider isActive={currentIndex === index} />
          </button>
        ))}
      </div>
    </picture>
  );
};

export default Slider;
