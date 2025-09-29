import { Card } from "../ui/card";
import { CheckCircle, Zap, Monitor, Smartphone, Globe, ArrowRight } from "lucide-react";
import { useState } from 'react';

export function SolutionSlide() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="h-full flex flex-col space-y-2 sm:space-y-3">
      {/* Compact Header */}
      <div className="text-center space-y-1">
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="w-6 h-6 sm:w-8 sm:h-8 codewrx-gradient rounded-lg flex items-center justify-center">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight">
            <span className="codewrx-text-gradient">The CodeWRX Solution</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto px-4">
          CodeWRX enables game developers to build or convert their existing Steam PC and mobile games to play instantly on the web
        </p>
      </div>
      
      {/* Compact Main Hero Section */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-3">
        {/* Left Column - Game Conversion Flow */}
        <div className="sm:col-span-2 space-y-3 sm:space-y-4 h-full flex flex-col">
          <Card className="codewrx-card p-3 sm:p-5 flex-1">
            <div className="space-y-3 sm:space-y-4 h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-chart-4/10 rounded-xl flex items-center justify-center">
                  <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-chart-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold">Steam PC Games</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Existing desktop titles</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-3">
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-chart-1" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-chart-2/10 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-chart-2" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold">Mobile Games</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">iOS & Android apps</p>
                </div>
              </div>
              <div className="flex items-center justify-center py-2 sm:py-3">
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-chart-1" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 codewrx-gradient rounded-xl flex items-center justify-center">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold">Instant Web Play</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">No downloads required</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="codewrx-card p-3 sm:p-4 border-chart-1/20 flex-1">
            <div className="space-y-2 sm:space-y-3 h-full flex flex-col">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-chart-1" />
                <h4 className="text-xs sm:text-sm font-semibold">Key Benefits</h4>
              </div>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-chart-1" />
                  <span>Convert existing games</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-chart-1" />
                  <span>Instant browser playback</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-chart-1" />
                  <span>No storage limitations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-chart-1" />
                  <span>Cross-platform compatible</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Center/Right - Hero Gameplay Demo */}
        <div className="sm:col-span-3">
          <Card className="codewrx-card h-full p-2 sm:p-3 relative overflow-hidden">
            <div className="absolute inset-0 codewrx-gradient opacity-5"></div>
            <div className="relative h-full flex flex-col">
              <div className="text-center mb-2">
                <h3 className="text-xs sm:text-sm font-semibold mb-1">Sophisticated 3D Web Gaming</h3>
                <p className="text-xs text-muted-foreground">
                  High-quality games that run instantly in any browser
                </p>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden border border-chart-1/20 shadow-lg bg-black">
                  {/* Error State */}
                  {videoError && (
                    <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 to-chart-2/10 flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-chart-1/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Monitor className="w-6 h-6 text-chart-1" />
                        </div>
                        <p className="text-xs text-muted-foreground">3D Game Demo</p>
                        <p className="text-xs text-red-500 mt-1">Video Loading Failed</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Video Element - Simplified */}
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={() => {
                      console.error('Video failed to load');
                      setVideoError(true);
                    }}
                    onLoadedData={() => {
                      console.log('Video loaded successfully');
                    }}
                  >
                    <source src="https://codewrx-images.s3.us-west-1.amazonaws.com/CodeWRX+Game.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay - Only show if no error */}
                  {!videoError && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                        <div className="bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium">Running in Browser</span>
                            <div className="flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-xs">Live</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div className="p-1.5 bg-chart-1/10 rounded">
                  <div className="text-xs font-semibold text-chart-1">3D Graphics</div>
                  <div className="text-xs text-muted-foreground">Full physics</div>
                </div>
                <div className="p-1.5 bg-chart-2/10 rounded">
                  <div className="text-xs font-semibold text-chart-2">Instant Load</div>
                  <div className="text-xs text-muted-foreground">&lt;3 seconds</div>
                </div>
                <div className="p-1.5 bg-chart-4/10 rounded">
                  <div className="text-xs font-semibold text-chart-4">Universal</div>
                  <div className="text-xs text-muted-foreground">Any device</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Compact Bottom Value Proposition */}
      <Card className="codewrx-card p-2 border-chart-1/20 bg-gradient-to-r from-chart-1/5 to-transparent">
        <div className="flex items-center justify-center gap-3">
          <div className="text-center">
            <div className="text-sm font-bold text-chart-1">Minimal Downloads</div>
            <div className="text-xs text-muted-foreground">Instant access to games</div>
          </div>
          <div className="w-px h-6 bg-border"></div>
          <div className="text-center">
            <div className="text-sm font-bold text-chart-2">Universal Platform</div>
            <div className="text-xs text-muted-foreground">Works on any browser</div>
          </div>
          <div className="w-px h-6 bg-border"></div>
          <div className="text-center">
            <div className="text-sm font-bold text-chart-4">Existing Games</div>
            <div className="text-xs text-muted-foreground">Convert your portfolio</div>
          </div>
        </div>
      </Card>
    </div>
  );
}