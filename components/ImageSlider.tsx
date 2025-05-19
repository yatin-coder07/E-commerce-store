"use client"

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useCallback, useState } from "react";

    interface Slide {
  id: string;
  image: string;
  alt: string;
  title?: string;
  description?: string;
}
interface ImageSliderProps {
  slides: Slide[];
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

const ImageSlider = ({
  slides,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}: ImageSliderProps) => {

    const [currentIndex , setCurrentIndex] = useState(0);
     const [isPaused, setIsPaused] = useState(false);

     const nextSlide = ()=>{
        setCurrentIndex((prevIndex)=>
            prevIndex == slides.length - 1 ? 0 : prevIndex - 1
        );
     };

     const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

    const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };




  return (
    <>
    <div className="relative w-full  flex justify-center items-center h-70 sm:h-100 md:h-130 rounded-3xl shadow-x1 transition-transform duration-300 ease-in"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>

        <div className="flex flex-row justify-between h-full w-full  rounded-3xl bg-center bg-cover transition transform duration-150 ease-in"
        style={{backgroundImage:`url(${slides[currentIndex].image})`}}>

            <div className="flex flex-col mt-30 h-6 w-6 sm:h-10 sm:w-10 justify-center items-center bg-black text-white  hover:bg-[#D4D4D4] hover:text-black sm:mt-45 sm:mb-45 rounded-full" onClick={prevSlide}>
                <ArrowBigLeft/>
            </div>

             <div className="flex flex-row h-6 w-6 mt-30 sm:h-10 sm:w-10 justify-center items-center bg-black text-white transition transform duration-300 hover:bg-[#D4D4D4] hover:text-black sm:mt-45 sm:mb-45 rounded-full" onClick={nextSlide}>
                <ArrowBigRight/>
            </div>
           
        </div>
    </div>
    
    </>
  )
}

export default ImageSlider