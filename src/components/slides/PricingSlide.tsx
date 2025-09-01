import { Card } from "../ui/card";
import { Star, Building2, CheckCircle } from "lucide-react";

export function PricingSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Pricing</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Scalable Revenue Model
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="codewrx-card p-6 border-chart-1/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-chart-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Indie Partner License</h3>
                <div className="text-sm text-muted-foreground">B2C</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-1">$0</div>
                <div className="text-muted-foreground text-sm">for the license</div>
              </div>
              <div className="text-center p-3 bg-chart-1/5 rounded-lg">
                <div className="font-semibold">Pay 10% of revenue</div>
                <div className="text-sm text-muted-foreground">in payment processing fees</div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-chart-4" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Enterprise License</h3>
                <div className="text-sm text-muted-foreground">B2B</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-lg font-bold text-chart-4">Contact us for Quote</div>
                <div className="text-muted-foreground text-sm">Studios with annual revenue &gt; $500,000</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="codewrx-card p-6 border-chart-3/20">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-chart-3">Volume Discounts</h3>
            <p className="text-muted-foreground text-sm">
              Scaled pricing for high-volume game conversions and enterprise partnerships
            </p>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-chart-4">Partnership Programs</h3>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-chart-4" />
                <span className="text-sm">Library Conversion Partnerships</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-chart-4" />
                <span className="text-sm">Remastering Classic Games Partnerships</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}