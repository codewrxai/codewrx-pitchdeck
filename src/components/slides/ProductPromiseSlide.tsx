import { Card } from "../ui/card";
import { Zap, Rocket, Globe } from "lucide-react";

export function ProductPromiseSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Technology Promise</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Develop, Port and Deploy Web Games with AI Speed
        </p>
      </div>
      
      <Card className="codewrx-card p-12 border-chart-1/10 text-center">
        <div className="space-y-6">
          <div className="text-6xl font-bold text-chart-1">&gt;8.5X</div>
          <div className="text-xl font-semibold text-muted-foreground">
            Projected efficiency gains vs manual coding
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed">
              CODEWRX combines proprietary toolkits that are paired with specialized AI-agents to dramatically reduce time, labor and cost in game development, conversion and remastering games to play instantly in PC and Mobile web browsers.
            </p>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="codewrx-card p-6 border-chart-2/20">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-chart-2" />
            </div>
            <h3 className="text-lg font-semibold">AI-Powered Web Game Technology</h3>
            <p className="text-muted-foreground text-sm">Automated conversion and optimization for web deployment</p>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-3/20">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-chart-3/10 rounded-xl flex items-center justify-center mx-auto">
              <Rocket className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="text-lg font-semibold">Instant Deployment</h3>
            <p className="text-muted-foreground text-sm">Games play immediately in browsers without downloads</p>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center mx-auto">
              <Globe className="w-6 h-6 text-chart-4" />
            </div>
            <h3 className="text-lg font-semibold">Cross-Platform Ready</h3>
            <p className="text-muted-foreground text-sm">Works seamlessly on PC and mobile browsers</p>
          </div>
        </Card>
      </div>
    </div>
  );
}