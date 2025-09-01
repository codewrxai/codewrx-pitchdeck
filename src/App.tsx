import { useState } from 'react';
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Direct imports from individual files
import { CoverSlide } from './components/slides/CoverSlide';
import { ProblemSlide } from './components/slides/ProblemSlide';
import { SolutionSlide } from './components/slides/SolutionSlide';
import { ProductPromiseSlide } from './components/slides/ProductPromiseSlide';
import { ProductSlide } from './components/slides/ProductSlide';
import { GlobalMarketSlide } from './components/slides/GlobalMarketSlide';
import { BusinessModelSlide } from './components/slides/BusinessModelSlide';
import { PricingSlide } from './components/slides/PricingSlide';
import { TractionSlide } from './components/slides/TractionSlide';
import { CompetitiveLandscapeSlide } from './components/slides/CompetitiveLandscapeSlide';
import { DemosSlide } from './components/slides/DemosSlide';
import { TeamSlide } from './components/slides/TeamSlide';
import { PlatformFeesComparisonSlide } from './components/slides/PlatformFeesComparisonSlide';
import { FundraisingSlide } from './components/slides/FundraisingSlide';
import { ProductRoadmapSlide } from './components/slides/ProductRoadmapSlide';
import { ContactSlide } from './components/slides/ContactSlide';

export default function CODEWRXInvestorPitch() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'cover',
      title: 'CODEWRX AI',
      subtitle: 'Revolutionizing Game Development with AI',
      component: CoverSlide,
      // You can add positioning values here:
      logoVerticalOffset: -20,   // Negative moves up, positive moves down
      headerVerticalOffset: 40  // Negative moves up, positive moves down
    },
    {
      id: 'problem',
      title: 'Problem',
      subtitle: 'The Game Development Crisis',
      component: ProblemSlide
    },
    {
      id: 'solution',
      title: 'Solution',
      subtitle: 'AI-Powered Game Development',
      component: SolutionSlide
    },
    {
      id: 'product-promise',
      title: 'Product Promise',
      subtitle: 'Develop, Port and Deploy Web Games with AI Speed',
      component: ProductPromiseSlide
    },
    {
      id: 'product',
      title: 'Product',
      subtitle: 'CodeWRX Hub - Beautiful 3D Games Platform',
      component: ProductSlide
    },
    {
      id: 'demos',
      title: 'Demos',
      subtitle: 'See CODEWRX in Action',
      component: DemosSlide
    },
    {
      id: 'global-market',
      title: 'Global Web Browser Market Size',
      subtitle: 'Massive Growth Opportunity',
      component: GlobalMarketSlide
    },
    {
      id: 'business-model-detailed',
      title: 'Business Model - B2C & B2B',
      subtitle: 'Free to Start, Revenue Share Success',
      component: BusinessModelSlide
    },
    {
      id: 'pricing',
      title: 'Pricing',
      subtitle: 'Scalable Revenue Model',
      component: PricingSlide
    },
    {
      id: 'platform-fees',
      title: 'Platform Fees Comparison',
      subtitle: 'Industry-Low Platform Fees',
      component: PlatformFeesComparisonSlide
    },
    {
      id: 'traction-detailed',
      title: 'Traction',
      subtitle: 'Early Adoption & Market Validation',
      component: TractionSlide
    },
    {
      id: 'competitive-landscape',
      title: 'Competitive Landscape',
      subtitle: 'Market Position & Opportunity',
      component: CompetitiveLandscapeSlide
    },
    {
      id: 'team-detailed',
      title: 'Team',
      subtitle: 'Experienced Leadership in AI & Gaming',
      component: TeamSlide
    },
    {
      id: 'fundraising',
      title: 'Fundraising',
      subtitle: 'Raising $1.5M Pre-Seed',
      component: FundraisingSlide
    },
    {
      id: 'product-roadmap',
      title: 'Product Roadmap',
      subtitle: 'Strategic Development Plan',
      component: ProductRoadmapSlide
    },
    {
      id: 'contact',
      title: 'Thank You',
      subtitle: 'Questions & Discussion',
      component: ContactSlide,
      // Logo positioning and sizing controls:
      logoSize: 400,             // Logo size in pixels
      logoVerticalOffset: -80,   // Negative moves up, positive moves down
      logoHorizontalOffset: 0    // Negative moves left, positive moves right
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getSlideBackground = (slideId: string) => {
    switch (slideId) {
      case 'cover':
        return 'relative'; // Cover slide handles its own background
      case 'problem':
        return 'codewrx-bg-problem';
      case 'solution':
        return 'codewrx-bg-solution';
      case 'product-promise':
        return 'bg-gradient-to-br from-chart-1/6 via-primary/4 to-chart-4/6';
      case 'product':
        return 'codewrx-bg-product';
      case 'global-market':
        return 'bg-gradient-to-br from-chart-2/6 via-chart-3/4 to-chart-5/6';
      case 'business-model-detailed':
        return 'bg-gradient-to-br from-chart-3/5 via-chart-1/4 to-secondary/8';
      case 'pricing':
        return 'bg-gradient-to-br from-chart-5/5 via-chart-1/5 to-chart-3/4';
      case 'traction-detailed':
        return 'bg-gradient-to-br from-chart-4/6 via-chart-2/4 to-primary/5';
      case 'competitive-landscape':
        return 'bg-gradient-to-br from-chart-1/6 via-chart-2/4 to-chart-4/5';
      case 'demos':
        return 'bg-gradient-to-br from-chart-1/7 via-chart-4/5 to-chart-2/6';
      case 'team-detailed':
        return 'bg-gradient-to-br from-chart-2/5 via-chart-5/4 to-chart-1/6';
      case 'platform-fees':
        return 'bg-gradient-to-br from-chart-3/6 via-chart-4/4 to-primary/5';
      case 'fundraising':
        return 'bg-gradient-to-br from-primary/6 via-chart-5/5 to-chart-3/4';
      case 'product-roadmap':
        return 'bg-gradient-to-br from-chart-4/5 via-chart-1/6 to-chart-2/4';
      case 'contact':
        return 'relative'; // Contact slide handles its own background
      default:
        return 'bg-gradient-to-br from-secondary/8 via-primary/4 to-chart-1/5';
    }
  };

  const currentSlideData = slides[currentSlide];
  const CurrentSlideComponent = currentSlideData.component;
  
  // Pass positioning props to slides if available
  const getSlideProps = () => {
    if (currentSlideData.id === 'cover') {
      return {
        logoVerticalOffset: currentSlideData.logoVerticalOffset || 0,
        headerVerticalOffset: currentSlideData.headerVerticalOffset || 0
      };
    }
    if (currentSlideData.id === 'contact') {
      return {
        logoSize: currentSlideData.logoSize || 96,
        logoVerticalOffset: currentSlideData.logoVerticalOffset || 0,
        logoHorizontalOffset: currentSlideData.logoHorizontalOffset || 0
      };
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 codewrx-gradient rounded-xl flex items-center justify-center">
                <div className="text-white font-bold text-lg">C</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xl font-bold tracking-tight">
                  <span className="codewrx-text-gradient">CODEWRX</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-lg font-medium text-foreground">Investor Pitch</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg border">
              <span className="text-sm font-medium text-muted-foreground">
                {currentSlide + 1} / {slides.length}
              </span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm font-medium text-foreground">
                {currentSlideData.title}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Slide Content - 3:2 Aspect Ratio Container */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className={`aspect-[3/2] p-8 rounded-2xl ${getSlideBackground(currentSlideData.id)}`}>
            <CurrentSlideComponent {...getSlideProps()} />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 bg-background/50 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex items-center gap-3 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-lg border">
              <span className="text-sm font-medium text-muted-foreground">
                {currentSlide + 1} / {slides.length}
              </span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-sm font-medium text-foreground">
                {currentSlideData.title}
              </span>
            </div>
            
            <Button 
              variant="outline" 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 bg-background/50 backdrop-blur-sm"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}