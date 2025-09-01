import { Card } from "../ui/card";
import { PlayCircle, Globe } from "lucide-react";
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DemosSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Demos</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          See CODEWRX in Action
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="codewrx-card p-6 border-chart-1/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold">Video Demo</h3>
            </div>
            <div className="mb-4">
              <a 
                href="https://youtu.be/SwIF4bFqp8s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block group cursor-pointer"
              >
                <ImageWithFallback
                  src="https://img.youtube.com/vi/SwIF4bFqp8s/maxresdefault.jpg"
                  alt="YouTube Video Demo Thumbnail"
                  className="w-full h-48 object-cover rounded-lg border border-chart-1/20 group-hover:brightness-90 transition-all duration-300"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg group-hover:bg-black/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <PlayCircle className="w-8 h-8 text-chart-1 ml-1" />
                  </div>
                </div>
                {/* Optional: "Click to Play" text */}
                <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to Play Demo
                </div>
              </a>
            </div>
            <div className="space-y-3">
              <div className="bg-chart-1/5 p-3 rounded-lg">
                <div className="font-semibold text-chart-1 text-sm">https://youtu.be/SwIF4bFqp8s</div>
                <div className="text-xs text-muted-foreground">Demo Video Length: 04:13</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-chart-1 rounded-full"></div>
                  <span className="text-xs">Converting Unity game to play in a web browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-chart-1 rounded-full"></div>
                  <span className="text-xs">Converting Unreal game to play in a web browser</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-xl font-semibold">Web Game Demo</h3>
            </div>
            <div className="mb-4">
              <a 
                href="https://burnout.coinstash.games/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block group cursor-pointer"
              >
                <ImageWithFallback
                  src="https://codewrx-images.s3.us-west-1.amazonaws.com/freepik__create-a-video-game-hero-image-of-a-white-mustang-__51891.png"
                  alt="Web Game Demo Preview - White Mustang Racing Game"
                  className="w-full h-48 object-cover rounded-lg border border-chart-4/20 group-hover:brightness-90 transition-all duration-300"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg group-hover:bg-black/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Globe className="w-8 h-8 text-chart-4" />
                  </div>
                </div>
                {/* Optional: "Click to Play" text */}
                <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to Play Game
                </div>
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Experience "Burnout" - a high-performance 3D racing game running directly in your PC browser. Will be playable in mobile browsers soon.
              </p>
              <div className="bg-chart-4/5 p-3 rounded-lg">
                <div className="font-semibold text-chart-4 text-sm">https://burnout.coinstash.games/</div>
                <div className="text-xs text-muted-foreground">Built with the Babylon Toolkit and deployed instantly to the web</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}