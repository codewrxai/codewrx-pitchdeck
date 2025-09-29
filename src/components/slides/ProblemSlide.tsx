import { Card } from "../ui/card";
import { AlertTriangle, Smartphone, Monitor, HardDrive, Zap } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import webGamesImage from 'figma:asset/d4ed70ce0cdb867e40daa042f47e24daf7e1bb9d.png';
import { useState } from 'react';

export function ProblemSlide() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="h-full flex flex-col space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">The Browser Gaming Problem</h2>
        </div>
        <p className="text-base text-muted-foreground max-w-4xl mx-auto">
          Modern game engines like Unity and Unreal are not designed to develop and publish sophisticated 3D games with physics to play in mobile and PC browsers
        </p>
      </div>
      
      {/* Main Content Split */}
      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Left Column - Current Web Games */}
        <Card className="codewrx-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-muted/20 rounded-xl flex items-center justify-center">
              <Monitor className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">Current Web Games</h3>
          </div>
          
          <div className="space-y-3">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border/30 relative">
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 border-2 border-muted-foreground/30 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {imageError && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Web Games Collection</p>
                  </div>
                </div>
              )}
              <ImageWithFallback 
                src={webGamesImage}
                alt="Collection of simple web games including Stone Grass, HazMob FPS, and casual browser games"
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                loading="lazy"
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Simple 2D puzzle games and basic casual experiences dominate browser gaming
              </p>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted/10 rounded-full">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">
                  Limited sophistication
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Center Column - Mobile Storage Problem */}
        <Card className="codewrx-card p-6 space-y-4 border-destructive/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-semibold text-lg">Mobile Storage Running Out</h3>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Downloaded mobile games are better quality, but everyone's mobile phones are running out of space
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Storage Used</span>
                <span className="text-sm text-destructive font-semibold">92%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-3">
                <div className="bg-destructive h-3 rounded-full" style={{width: '92%'}}></div>
              </div>
              <div className="text-xs text-muted-foreground text-center">
                128GB iPhone - Only 10GB remaining
              </div>
            </div>
            
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center gap-2 px-3 py-1 bg-destructive/10 rounded-full">
                <HardDrive className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">
                  No space for new games
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Column - Technical Limitations */}
        <Card className="codewrx-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-chart-4/10 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-chart-4" />
            </div>
            <h3 className="font-semibold text-lg">Engine Limitations</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-muted/10 rounded-lg">
                <h4 className="font-medium text-sm mb-1">Unity WebGL</h4>
                <p className="text-xs text-muted-foreground">Large file sizes, poor mobile performance</p>
              </div>
              
              <div className="p-3 bg-muted/10 rounded-lg">
                <h4 className="font-medium text-sm mb-1">Unreal Engine</h4>
                <p className="text-xs text-muted-foreground">Not optimized for web deployment</p>
              </div>
              
              <div className="p-3 bg-muted/10 rounded-lg">
                <h4 className="font-medium text-sm mb-1">Native Mobile</h4>
                <p className="text-xs text-muted-foreground">Requires app store approval & storage</p>
              </div>
            </div>
            
            <div className="pt-2 border-t border-border/30">
              <div className="flex items-center gap-2 px-3 py-1 bg-chart-4/10 rounded-full">
                <AlertTriangle className="w-4 h-4 text-chart-4" />
                <span className="text-sm font-medium text-chart-4">
                  Technical barriers
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Bottom Impact Statement */}
      <Card className="codewrx-card p-4 border-destructive/20 bg-gradient-to-r from-destructive/5 to-transparent">
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          <div className="text-center">
            <h4 className="font-semibold">The Gap in the Market</h4>
            <p className="text-sm text-muted-foreground">
              Players want sophisticated 3D games that run instantly in browsers without downloads or storage concerns
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}