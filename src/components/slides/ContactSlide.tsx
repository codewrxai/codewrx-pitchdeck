import { Card } from "../ui/card";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import techBackground from 'figma:asset/ea405a08b36491b403ec6878f119c5f1d4c8e8e6.png';
import codewrxLogo from 'figma:asset/2934990ad377e54580e1e33a3657213c122de545.png';
import { useState } from 'react';

interface ContactSlideProps {
  logoSize?: number; // Logo size in pixels
  logoVerticalOffset?: number; // Vertical offset in pixels (negative = up, positive = down)
  logoHorizontalOffset?: number; // Horizontal offset in pixels (negative = left, positive = right)
}

export function ContactSlide({ 
  logoSize = 96, // Default 96px (w-24 h-24)
  logoVerticalOffset = 0, 
  logoHorizontalOffset = 0 
}: ContactSlideProps) {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <div className="aspect-[3/2] rounded-2xl relative overflow-hidden" style={{ backgroundColor: '#2F2C5D' }}>
      {/* Layer 1: Background Image */}
      <div className="absolute inset-0">
        {!backgroundLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-chart-2/5 to-chart-4/10 animate-pulse"></div>
        )}
        <ImageWithFallback
          src={techBackground}
          alt="AI Technology Background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${backgroundLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setBackgroundLoaded(true)}
          loading="eager"
        />
      </div>

      {/* Layer 2: Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

      {/* Layer 3: Independent Logo Layer */}
      <div className="absolute inset-0 flex items-start justify-center pt-16">
        <div 
          className="transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translate(${logoHorizontalOffset}px, ${logoVerticalOffset}px)`,
            width: `${logoSize}px`,
            height: `${logoSize}px`
          }}
        >
          {!logoLoaded && (
            <div className="w-full h-full codewrx-gradient rounded-full flex items-center justify-center shadow-xl animate-pulse">
              <div className="text-white text-lg font-bold opacity-50">
                CODEWRX
              </div>
            </div>
          )}
          <ImageWithFallback
            src={codewrxLogo}
            alt="CODEWRX Logo"
            className={`w-full h-full object-contain transition-opacity duration-500 ${logoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLogoLoaded(true)}
            loading="eager"
          />
        </div>
      </div>

      {/* Layer 4: Content Layer */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="relative z-10 text-center space-y-8 px-12 py-16 mt-12">
          <div className="space-y-6">
            {/* Space for logo is handled by independent layer above */}
            <div className="space-y-4 mt-16">
              <h2 className="text-3xl font-semibold">
                Ready to Transform Game Development?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Join us in revolutionizing how games are built and deployed on the web
              </p>
            </div>
          </div>
          
          <Card className="max-w-2xl mx-auto p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="text-white/70 text-sm">Email</div>
                  <div className="text-white font-medium">codewrxai@gmail.com</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/70 text-sm">Website</div>
                  <a 
                    href="https://www.codewrxai.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-white/80 transition-colors duration-200 underline decoration-white/30 hover:decoration-white/60"
                  >
                    codewrxai.com
                  </a>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="pt-6 text-white/70">
            <p className="text-base">CODEWRX, CO. • September 2025 • Confidential</p>
          </div>
        </div>
      </div>
    </div>
  );
}