import { Card } from "../ui/card";
import { Play, Star, Users, CreditCard, Download, Globe, Zap, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
// Mech Warriors image replaced with AWS link
// Space Odyssey image replaced with AWS link
import neonRacingImage from 'figma:asset/ffd3f317d479457dbc55fd38f49bcf748ae9dfd9.png';
// Dragon Quest image replaced with AWS link
// Cyber City image replaced with AWS link
import { useState } from 'react';
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ProductSlide() {
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});
  const [imageErrorStates, setImageErrorStates] = useState<Record<string, boolean>>({});

  const handleImageLoad = (gameTitle: string) => {
    setImageLoadStates(prev => ({ ...prev, [gameTitle]: true }));
  };

  const handleImageError = (gameTitle: string) => {
    setImageErrorStates(prev => ({ ...prev, [gameTitle]: true }));
  };

  const featuredGames = [
    {
      title: "Neon Racing",
      genre: "3D Racing",
      rating: 4.8,
      players: "2.3K",
      price: "$4.99",
      image: neonRacingImage,
      status: "trending"
    },
    {
      title: "Space Odyssey",
      genre: "3D Adventure",
      rating: 4.9,
      players: "5.1K",
      price: "Free",
      image: "https://codewrx-images.s3.us-west-1.amazonaws.com/space-travel-collage-design0.25%400.25x.jpg",
      status: "new"
    },
    {
      title: "Crystal Realms",
      genre: "3D RPG",
      rating: 4.7,
      players: "1.8K",
      price: "$7.99",
      image: "https://codewrx-images.s3.us-west-1.amazonaws.com/3d-isometric-view-castle-with-river-0.5%400.5x.jpg",
      status: "featured"
    },
    {
      title: "Mech Warriors",
      genre: "3D Action",
      rating: 4.6,
      players: "3.4K",
      price: "$5.99",
      image: "https://codewrx-images.s3.us-west-1.amazonaws.com/two-robots-stage-with-one-being-held-up-by-one-another0.25%400.25x.jpg",
      status: "popular"
    },
    {
      title: "Cyber City",
      genre: "3D Strategy",
      rating: 4.5,
      players: "4.2K",
      price: "$6.99",
      image: "https://codewrx-images.s3.us-west-1.amazonaws.com/space-travel-collage-design+(1)0.25%400.25x.jpg",
      status: "trending"
    },
    {
      title: "Dragon Quest",
      genre: "3D Fantasy",
      rating: 4.8,
      players: "6.1K",
      price: "$8.99",
      image: "https://codewrx-images.s3.us-west-1.amazonaws.com/fantasy-landscape-floating-islands-illustration-0.5%400.5x.jpg",
      status: "featured"
    }
  ];

  const platformFeatures = [
    {
      icon: Globe,
      title: "Instant Web Play",
      description: "No downloads, runs in any browser",
      color: "chart-1"
    },
    {
      icon: CreditCard,
      title: "Integrated Payments",
      description: "Secure payment processing built-in",
      color: "chart-2"
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Player reviews and social features",
      color: "chart-4"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time performance metrics",
      color: "chart-3"
    }
  ];

  return (
    <div className="h-full flex flex-col space-y-3">
      {/* Header */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold tracking-tight">
          <span className="codewrx-text-gradient">CodeWRX Hub</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Once games are published in web native language, Javascript, they can be hosted on CodeWRX discovery hub that provides integrated payment processing or hosted on any other web marketplace.
        </p>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 grid grid-cols-3 gap-4 mobile-grid-1">
        {/* Left Column - Platform Features + Payment + Value Prop */}
        <div className="space-y-3">
          <Card className="codewrx-card p-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 codewrx-gradient rounded-md flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <h3 className="font-semibold text-xs">Platform Features</h3>
              </div>
              
              <div className="space-y-1">
                {platformFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 p-1.5 bg-muted/20 rounded-sm">
                    <div className={`w-5 h-5 bg-${feature.color}/10 rounded-sm flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className={`w-2.5 h-2.5 text-${feature.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-xs">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          <Card className="codewrx-card p-2.5 border-chart-1/20">
            <div className="space-y-2">
              <h4 className="font-semibold text-xs flex items-center gap-1">
                <CreditCard className="w-3 h-3 text-chart-2" />
                Payment Processing
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Processing Fee</span>
                  <span className="font-medium">2.9% + $0.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platform Fee</span>
                  <span className="font-medium text-chart-1">10%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Developer Keep</span>
                  <span className="font-bold text-chart-1">87.1%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Value Proposition - Moved here and made compact */}
          <Card className="codewrx-card p-2.5 border-chart-1/20 bg-gradient-to-r from-chart-1/5 to-transparent">
            <div className="space-y-2">
              <div className="text-center">
                <div className="text-xs font-bold text-chart-1">Beautiful Games</div>
                <div className="text-xs text-muted-foreground">Sophisticated 3D experiences</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-chart-2">Instant Access</div>
                <div className="text-xs text-muted-foreground">Play immediately in browser</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-chart-4">Easy Monetization</div>
                <div className="text-xs text-muted-foreground">Built-in payment processing</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Center/Right Columns - Game Gallery (6 games in 3x2 grid) */}
        <div className="col-span-2">
          <Card className="codewrx-card h-full p-3">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">Featured 3D Games</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 text-xs">
                    Visualization
                  </Badge>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* 6 games in 3x2 grid */}
              <div className="flex-1 grid grid-cols-3 gap-2 mobile-grid-2">
                {featuredGames.map((game, index) => (
                  <Card key={index} className="codewrx-card-ai overflow-hidden group hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        {!imageLoadStates[game.title] && !imageErrorStates[game.title] && (
                          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 to-chart-2/10 flex items-center justify-center animate-pulse">
                            <div className="w-4 h-4 border border-chart-1/30 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                        {imageErrorStates[game.title] && (
                          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 to-chart-2/10 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-6 h-6 bg-chart-1/20 rounded flex items-center justify-center mx-auto mb-1">
                                <Play className="w-3 h-3 text-chart-1" />
                              </div>
                              <p className="text-xs text-muted-foreground">{game.genre}</p>
                            </div>
                          </div>
                        )}
                        {game.image.startsWith('figma:asset') ? (
                          <ImageWithFallback 
                            src={game.image}
                            alt={game.title}
                            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${imageLoadStates[game.title] ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => handleImageLoad(game.title)}
                            onError={() => handleImageError(game.title)}
                            loading="lazy"
                          />
                        ) : (
                          <img 
                            src={game.image}
                            alt={game.title}
                            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${imageLoadStates[game.title] ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => handleImageLoad(game.title)}
                            onError={() => handleImageError(game.title)}
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-1 left-1">
                        {game.status === 'new' && (
                          <Badge className="bg-chart-2 text-white text-xs px-1 py-0">New</Badge>
                        )}
                        {game.status === 'trending' && (
                          <Badge className="bg-chart-1 text-white text-xs px-1 py-0">Trending</Badge>
                        )}
                        {game.status === 'featured' && (
                          <Badge className="bg-chart-3 text-white text-xs px-1 py-0">Featured</Badge>
                        )}
                        {game.status === 'popular' && (
                          <Badge className="bg-chart-4 text-white text-xs px-1 py-0">Popular</Badge>
                        )}
                      </div>
                      <div className="absolute top-1 right-1">
                        <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 h-4 w-4 p-0">
                          <Play className="w-2 h-2" />
                        </Button>
                      </div>
                      <div className="absolute bottom-1 left-1 right-1">
                        <div className="text-white">
                          <h4 className="font-semibold text-xs">{game.title}</h4>
                          <p className="text-xs opacity-90">{game.genre}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-1.5 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium">{game.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="w-2.5 h-2.5" />
                          <span className="text-xs">{game.players}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-chart-1 text-xs">{game.price}</span>
                        <Button size="sm" className="h-4 text-xs px-1.5 py-0">
                          Play
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}