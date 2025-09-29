import { ImageWithFallback } from '../figma/ImageWithFallback';
import backgroundImage from 'figma:asset/ea405a08b36491b403ec6878f119c5f1d4c8e8e6.png';
import codewrxLogo from 'figma:asset/2934990ad377e54580e1e33a3657213c122de545.png';
import { useState } from 'react';

interface CoverSlideProps {
  logoVerticalOffset?: number; // Vertical offset in pixels (negative = up, positive = down)
  headerVerticalOffset?: number; // Vertical offset in pixels (negative = up, positive = down)
}

export function CoverSlide({ logoVerticalOffset = 0, headerVerticalOffset = 0 }: CoverSlideProps) {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="aspect-[3/2] rounded-2xl relative overflow-hidden">
      {/* Layer 1: Background Image */}
      <div className="absolute inset-0">
        {!backgroundLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-chart-2/5 to-chart-4/10 animate-pulse"></div>
        )}
        <ImageWithFallback
          src={backgroundImage}
          alt="AI Technology Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${backgroundLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setBackgroundLoaded(true)}
          loading="eager"
        />
      </div>
      
      {/* Layer 2: Main Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: `translateY(${logoVerticalOffset}px)` }}
        >
          {!logoLoaded && (
            <div className="w-[500px] h-[500px] mobile-logo-container flex items-center justify-center">
              <div className="w-96 h-96 mobile-logo-inner codewrx-gradient rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <div className="text-white text-6xl mobile-logo-text font-bold tracking-wider opacity-50">
                  CODEWRX
                </div>
              </div>
            </div>
          )}
          <ImageWithFallback
            src={codewrxLogo}
            alt="CODEWRX Logo"
            className={`w-[500px] h-[500px] mobile-logo-container object-contain transition-opacity duration-500 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLogoLoaded(true)}
            loading="eager"
          />
        </div>
      </div>
      
      {/* Layer 3: Header Text on Top */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-center text-white z-10 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateY(${headerVerticalOffset}px)` }}
        >
          <p className="text-2xl font-medium text-white/90 max-w-4xl mx-auto text-[16px]">
           Agentic AI to Publish and Build Modern 3D Games on the Web
          </p>
        </div>
      </div>
    </div>
  );
}