import { Card } from "../ui/card";
import { BarChart3, Globe } from "lucide-react";

export function GlobalMarketSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Global Web Browser Market Size</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Massive Growth Opportunity in Web Gaming
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="codewrx-card p-6 border-chart-1/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold">Market Valuation</h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-chart-1">$18.5B</div>
                <div className="text-muted-foreground text-sm">2023 Market Value</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-chart-5">$45.2B</div>
                <div className="text-muted-foreground text-sm">2033 Projection</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold codewrx-success">9.3% CAGR</div>
                <div className="text-muted-foreground text-sm">Growth Rate 2025-2033</div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-2/30">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-2/20 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold">Regional Breakdown</h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-chart-3">~50%</div>
                <div className="text-muted-foreground text-sm">Asia-Pacific Market Share</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-chart-4">$4.3B</div>
                <div className="text-muted-foreground text-sm">North America Revenue</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-chart-5">$15.0B</div>
                <div className="text-muted-foreground text-sm">Statista 2023 Revenue</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <Card className="codewrx-card p-6 border-muted/30">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center">Market Sources</h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-semibold">DataHorizzon Research</div>
              <p className="text-sm text-muted-foreground">Global browser game market projections and CAGR analysis</p>
            </div>
            <div className="space-y-1">
              <div className="font-semibold">Statista</div>
              <p className="text-sm text-muted-foreground">Regional revenue breakdown and market validation</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}