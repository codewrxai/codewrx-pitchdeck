import { Card } from "../ui/card";
import { Download, Rocket, Calendar } from "lucide-react";

export function TractionSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Traction</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Early Adoption & Market Validation
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="codewrx-card p-6 border-chart-1/20 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center mx-auto">
              <Download className="w-6 h-6 text-chart-1" />
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-chart-1">1,400+</div>
              <div className="text-muted-foreground text-sm">Downloads on MSFT Visual Studio Code Marketplace</div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center mx-auto">
              <Rocket className="w-6 h-6 text-chart-4" />
            </div>
            <div className="space-y-1">
              <div className="text-xl font-bold text-chart-4">In Progress</div>
              <div className="text-muted-foreground text-sm">Pilot game conversion</div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-3/20 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-chart-3/10 rounded-xl flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6 text-chart-3" />
            </div>
            <div className="space-y-1">
              <div className="text-xl font-bold text-chart-3">Jan 2025</div>
              <div className="text-muted-foreground text-sm">Official Release</div>
            </div>
          </div>
        </Card>
      </div>
      
      <Card className="codewrx-card p-6 border-muted/30">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Early Market Validation</h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Strong developer interest demonstrated through Visual Studio Code Marketplace downloads, with active pilot programs underway for game conversion services.
          </p>
        </div>
      </Card>
    </div>
  );
}