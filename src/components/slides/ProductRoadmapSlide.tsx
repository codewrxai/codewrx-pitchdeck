import { Card } from "../ui/card";
import { Calendar, Rocket, Building2, CheckCircle } from "lucide-react";

export function ProductRoadmapSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Product Roadmap</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Strategic Development Plan
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="codewrx-card p-6 border-chart-1/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold">Q1 2025</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-1" />
                <span className="text-sm">AI Agent Beta Release</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-1" />
                <span className="text-sm">Unity Plugin Enhancement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-1" />
                <span className="text-sm">Developer Portal Launch</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-xl font-semibold">Q2 2025</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-4" />
                <span className="text-sm">Public Platform Launch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-4" />
                <span className="text-sm">Mobile Browser Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-4" />
                <span className="text-sm">Payment Processing Integration</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-3/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-3/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-xl font-semibold">Q3 2025</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-3" />
                <span className="text-sm">Enterprise Features</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-3" />
                <span className="text-sm">Unreal Engine Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-3" />
                <span className="text-sm">Advanced Analytics</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <Card className="codewrx-card p-6 border-muted/30">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Long-term Vision</h3>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Become the leading platform for AI-powered web game development, enabling developers worldwide to create and deploy games faster than ever before while reaching global audiences instantly through web browsers.
          </p>
        </div>
      </Card>
    </div>
  );
}