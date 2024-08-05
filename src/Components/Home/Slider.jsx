import React, { useState } from 'react';
import './Slider.css'


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState('slide1');

  const goToSlide = (slideId) => {
    setCurrentSlide(slideId);
  };

  return (
    <div >
      <div className="carousel w-full">
        <div id="slide1" className={`carousel-item relative w-full h-500 ${currentSlide === 'slide1' ? 'block' : 'hidden'}`}>
          <img
            src="https://i.gadgets360cdn.com/large/miui_beta_xiaomi_12_pro_android_13_1660764133548.jpg"
            className="w-full"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={() => goToSlide('slide4')} className="btn btn-circle">❮</button>
            <button onClick={() => goToSlide('slide2')} className="btn btn-circle">❯</button>
          </div>
        </div>
        <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 'slide2' ? 'block' : 'hidden'}`}>
          <img
            src="https://w0.peakpx.com/wallpaper/966/491/HD-wallpaper-samsung-galaxy-s23-android-13.jpg"
            className="w-full"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={() => goToSlide('slide1')} className="btn btn-circle">❮</button>
            <button onClick={() => goToSlide('slide3')} className="btn btn-circle">❯</button>
          </div>
        </div>
        <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 'slide3' ? 'block' : 'hidden'}`}>
          <img
            src="https://9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-14-wallpapers.jpg?quality=82&strip=all&w=1600"
            className="w-full"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={() => goToSlide('slide2')} className="btn btn-circle">❮</button>
            <button onClick={() => goToSlide('slide4')} className="btn btn-circle">❯</button>
          </div>
        </div>
        <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 'slide4' ? 'block' : 'hidden'}`}>
          <img
            src="https://en.letsgodigital.org/uploads/2020/12/samsung-galaxy-s21-smartphones.jpg?amp=1"
            className="w-full"
            alt="Slide 4"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={() => goToSlide('slide3')} className="btn btn-circle">❮</button>
            <button onClick={() => goToSlide('slide1')} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;