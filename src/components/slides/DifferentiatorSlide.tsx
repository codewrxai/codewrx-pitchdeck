import { Card } from "../ui/card";
import { Zap, Globe, DollarSign } from "lucide-react";

export function DifferentiatorSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Differentiator / Competitors</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Competitive Advantage in AI-Powered Web Game Development
        </p>
      </div>
      
      <Card className="codewrx-card p-6 border-muted/30">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center">Competitive Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left p-2 font-semibold">Platform</th>
                  <th className="text-left p-2 font-semibold">AI Integration</th>
                  <th className="text-left p-2 font-semibold">Web Focus</th>
                  <th className="text-left p-2 font-semibold">Revenue Share</th>
                  <th className="text-left p-2 font-semibold">Unity Support</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/10 bg-chart-1/5">
                  <td className="p-2 font-semibold text-chart-1">CODEWRX</td>
                  <td className="p-2 text-chart-1">✓ Native AI Agent</td>
                  <td className="p-2 text-chart-1">✓ Primary Focus</td>
                  <td className="p-2 text-chart-1">10%</td>
                  <td className="p-2 text-chart-1">✓ Deep Integration</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="p-2">Unity Cloud</td>
                  <td className="p-2">~ Limited</td>
                  <td className="p-2">~ Secondary</td>
                  <td className="p-2">Variable</td>
                  <td className="p-2">✓ Native</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="p-2">Epic Games</td>
                  <td className="p-2">✗ None</td>
                  <td className="p-2">✗ Limited</td>
                  <td className="p-2">12%</td>
                  <td className="p-2">~ Basic</td>
                </tr>
                <tr className="border-b border-border/10">
                  <td className="p-2">Steam</td>
                  <td className="p-2">✗ None</td>
                  <td className="p-2">✗ Limited</td>
                  <td className="p-2">30%</td>
                  <td className="p-2">~ Basic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="codewrx-card p-6 border-chart-1/20 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6 text-chart-1" />
            </div>
            <h3 className="font-semibold">AI-First Approach</h3>
            <p className="text-sm text-muted-foreground">Only platform with integrated AI agent for automated game conversion</p>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center mx-auto">
              <Globe className="w-6 h-6 text-chart-4" />
            </div>
            <h3 className="font-semibold">Web-Native Performance</h3>
            <p className="text-sm text-muted-foreground">Built specifically for web deployment with optimal performance</p>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-3/20 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-chart-3/10 rounded-xl flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6 text-chart-3" />
            </div>
            <h3 className="font-semibold">Lower Platform Fees</h3>
            <p className="text-sm text-muted-foreground">10% vs 30% industry standard - developers keep more revenue</p>
          </div>
        </Card>
      </div>
    </div>
  );
}