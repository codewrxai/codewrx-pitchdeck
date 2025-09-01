import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Globe, Users, Gamepad2, Zap, Code, Cpu, ArrowRight } from "lucide-react";

export function CompetitiveLandscapeSlide() {
  const competitors = [
    {
      name: "itch.io",
      icon: "🎯",
      focus: "Indie games, game jams, experimental titles",
      webPlayable: "HTML5/browser games",
      strengths: ["Large indie community", "Experimental focus"],
      limitations: ["Mostly simple 2D", "No built-in payments"],
      bgColor: "chart-1",
      borderColor: "chart-1"
    },
    {
      name: "Kongregate",
      icon: "🕹️",
      focus: "Casual web games, achievements",
      webPlayable: "Flash (legacy), HTML5, Unity WebGL",
      strengths: ["Established community", "Achievement system"],
      limitations: ["Aging Flash legacy", "Basic Unity WebGL"],
      bgColor: "chart-2",
      borderColor: "chart-2"
    },
    {
      name: "CrazyGames",
      icon: "🎮",
      focus: "Mass-market casual games",
      webPlayable: "Modern HTML5 only",
      strengths: ["Modern HTML5 focus", "Mass market appeal"],
      limitations: ["Still mostly 2D/simple 3D", "No advanced physics"],
      bgColor: "chart-4",
      borderColor: "chart-4"
    }
  ];

  const technologies = [
    {
      name: "WebGL",
      description: "Hardware-accelerated 3D graphics",
      icon: Cpu,
      color: "chart-1"
    },
    {
      name: "WebGPU",
      description: "Next-gen graphics & compute",
      icon: Zap,
      color: "chart-2"
    },
    {
      name: "Havoc Physics",
      description: "Professional physics engine",
      icon: Code,
      color: "chart-4"
    }
  ];

  return (
    <div className="h-full flex flex-col space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">
          <span className="codewrx-text-gradient">Competitive Landscape</span>
        </h2>
        <p className="text-base text-muted-foreground max-w-4xl mx-auto">
          Top web game hubs host simple games. Browser technologies like WebGL, WebGPU and Havoc Web Physics Engine are capable of 
          <span className="font-semibold text-chart-1 mx-1">so much more</span>
        </p>
      </div>

      {/* Featured Browser Technology Capabilities - Moved to Top */}
      <Card className="codewrx-card p-4 bg-gradient-to-r from-chart-1/10 via-chart-2/5 to-chart-4/10 border-chart-1/20">
        <div className="grid grid-cols-4 gap-4 items-center">
          {/* Browser Tech Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 codewrx-gradient rounded-md flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-sm">Modern Browser Tech</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-tight">
              Advanced capabilities ready for AAA gaming experiences
            </p>
          </div>
          
          {/* Technology Cards */}
          {technologies.map((tech, index) => (
            <div key={index} className={`p-3 bg-${tech.color}/5 border border-${tech.color}/20 rounded-lg`}>
              <div className="flex items-center gap-2 mb-2">
                <tech.icon className={`w-4 h-4 text-${tech.color}`} />
                <span className="font-semibold text-sm">{tech.name}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">{tech.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* CodeWRX Opportunity Banner */}
      <Card className="codewrx-card p-3 border-chart-1/20 bg-gradient-to-br from-chart-1/5 to-transparent">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-chart-1" />
            <span className="font-bold text-sm text-chart-1">CodeWRX Opportunity:</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Leverage modern browser capabilities to deliver AAA-quality 3D gaming experiences that current platforms cannot match
          </span>
        </div>
      </Card>

      {/* Competitor Analysis - Compact Cards */}
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-4 h-full">
          {competitors.map((competitor, index) => (
            <Card key={index} className={`codewrx-card h-full border-${competitor.borderColor}/20`}>
              <div className="p-3 h-full flex flex-col">
                {/* Header */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{competitor.icon}</span>
                    <h3 className="font-bold text-sm">{competitor.name}</h3>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-start gap-1">
                      <span className="text-xs font-medium text-muted-foreground flex-shrink-0">🕹️</span>
                      <span className="text-xs text-foreground leading-tight">{competitor.focus}</span>
                    </div>
                    
                    <div className="flex items-start gap-1">
                      <span className="text-xs font-medium text-muted-foreground flex-shrink-0">✅</span>
                      <span className="text-xs text-foreground leading-tight">{competitor.webPlayable}</span>
                    </div>
                  </div>
                </div>

                {/* Strengths */}
                <div className="space-y-1 mb-3">
                  <h4 className="text-xs font-semibold text-green-600">Strengths</h4>
                  <div className="space-y-1">
                    {competitor.strengths.map((strength, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Limitations */}
                <div className="space-y-1 flex-1">
                  <h4 className="text-xs font-semibold text-orange-600">Limitations</h4>
                  <div className="space-y-1">
                    {competitor.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-orange-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Type Badge */}
                <div className="mt-3 pt-2 border-t border-border/30">
                  <Badge variant="secondary" className={`bg-${competitor.bgColor}/10 text-${competitor.bgColor} text-xs w-full justify-center`}>
                    Legacy Platform
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Strategic Insight */}
      <Card className="codewrx-card p-3 bg-gradient-to-r from-chart-1/10 via-chart-2/5 to-chart-4/10 border-chart-1/20">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-chart-1" />
            <span className="text-sm font-semibold">CodeWRX Position:</span>
          </div>
          <span className="text-sm text-muted-foreground">
            First platform that leverages AI to unlock the full potential of modern browser gaming with AAA-quality 3D experiences
          </span>
        </div>
      </Card>
    </div>
  );
}