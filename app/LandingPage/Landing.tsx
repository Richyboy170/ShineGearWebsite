"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';


export default function LandingAds() {
  const [showAd, setShowAd] = useState<boolean>(false);
  const [showInitialLogo, setShowInitialLogo] = useState<boolean>(true);
  const [showAnimations, setShowAnimations] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 50) {
        setShowAd(true);
        setShowInitialLogo(false);
      }

      if (window.scrollY > window.innerHeight) {
        setShowAnimations(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="flex bg-customGold h-screen justify-between items-end relative">
        {/* Left Image */}
        <div className="relative w-1/2 h-5/6">
          <Image
            src="/images/ShineBoy.png"
            alt="Product 1"
            layout="fill"
            objectFit="contain"
            className="pl-20"
          />
        </div>

        {/* Right Image */}
        <div className="relative w-2/3 h-full" id="brand-logo-container">
          {showInitialLogo && (
            <Image
              src="/images/MainBrand2 Navy.png"
              alt="Product 2"
              layout="fill"
              objectFit="contain"
              className="pr-40 pt-8"
              id="brand-logo"
            />
          )}
          {showAd && (
            <div className="absolute right-auto bottom-1/2 transform -translate-x-1/2 mb-4 ad-content flex flex-col items-center justify-center">
              <p className="text-8xl text-red-700 mt-4" style={{ fontFamily: 'Colonna MT' }}>Early Month Sales</p>
              <p className="text-5xl text-red-700 mt-2" style={{ fontFamily: 'Coda' }}>Only in 1-7 July -20% off!</p>
            </div>
          )}
        </div>
      </div>

      <div className="h-screen bg-customBlue">
        <div className="flex flex-row h-screen pb-10">
          <div className="relative bg-customPink flex-1 flex items-end justify-center">
            <div className="relative w-3/4 h-3/4 bottom-0">
              {showAnimations && (
                <Image
                  src="/images/SSoatmeal.png"
                  alt="Ad 1"
                  layout="fill"
                  objectFit="contain"
                  className="animated-image"
                />
              )}
            </div>
          </div>
          <div className="relative bg-customRed flex-1 flex items-end justify-center">
            <div className="relative w-3/4 h-3/4 bottom-0">
              {showAnimations && (
                <Image
                  src="/images/SSsky.png"
                  alt="Ad 2"
                  layout="fill"
                  objectFit="contain"
                  className="animated-image"
                />
              )}
            </div>
          </div>
          <div className="relative bg-customGreen flex-1 flex items-end justify-center">
            <div className="relative w-3/4 h-3/4 bottom-0">
              {showAnimations && (
                <Image
                  src="/images/SSpink.png"
                  alt="Ad 3"
                  layout="fill"
                  objectFit="contain"
                  className="animated-image"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
