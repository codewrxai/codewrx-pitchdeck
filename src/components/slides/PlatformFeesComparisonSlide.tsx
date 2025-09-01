import { Card } from "../ui/card";
import { DollarSign, TrendingDown, CheckCircle, Star, Trophy, Phone, Gamepad2, Smartphone, Monitor, Globe } from "lucide-react";

export function PlatformFeesComparisonSlide() {
  const codewrxPlans = [
    {
      name: "CODEWRX INDIE",
      fee: "10%",
      description: "Payment processing fee",
      features: ["Web-first platform", "AI-powered development", "Unity integration"],
      highlight: true,
      icon: Star,
      color: "chart-1"
    },
    {
      name: "CODEWRX ENTERPRISE",
      fee: "Contact Us",
      description: "Custom enterprise pricing",
      features: ["Priority support", "Custom integrations", "Volume discounts"],
      highlight: false,
      icon: Phone,
      color: "chart-2"
    }
  ];

  const competitors = [
    {
      name: "Epic Games Store",
      fee: "12%",
      description: "Platform fee",
      note: "Desktop gaming platform",
      icon: Monitor,
      color: "chart-4"
    },
    {
      name: "Steam",
      fee: "30%",
      description: "Platform fee",
      note: "PC gaming platform",
      icon: Gamepad2,
      color: "muted"
    },
    {
      name: "PlayStation Store",
      fee: "30%",
      description: "Platform fee",
      note: "Console gaming platform",
      icon: Gamepad2,
      color: "muted"
    },
    {
      name: "Xbox",
      fee: "30%",
      description: "Platform fee",
      note: "Console gaming platform",
      icon: Gamepad2,
      color: "muted"
    },
    {
      name: "Nintendo eShop",
      fee: "30%",
      description: "Platform fee",
      note: "Console gaming platform",
      icon: Gamepad2,
      color: "muted"
    },
    {
      name: "Google Play",
      fee: "30%",
      description: "Platform fee",
      note: "Mobile gaming platform",
      icon: Smartphone,
      color: "muted"
    },
    {
      name: "App Store",
      fee: "30%",
      description: "Platform fee",
      note: "Mobile gaming platform",
      icon: Smartphone,
      color: "muted"
    }
  ];

  const revenueExample = [
    {
      platform: "CODEWRX (10%)",
      amount: "$90,000",
      percentage: 90,
      highlight: true,
      color: "chart-1"
    },
    {
      platform: "Epic Games (12%)",
      amount: "$88,000",
      percentage: 88,
      highlight: false,
      color: "chart-4"
    },
    {
      platform: "Other Platforms (30%)",
      amount: "$70,000",
      percentage: 70,
      highlight: false,
      color: "muted"
    }
  ];

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Platform Fees Comparison</h2>
        <p className="text-base text-muted-foreground">
          CODEWRX delivers exceptional value with industry-low platform fees
        </p>
      </div>
      
      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* Left Column - CODEWRX Plans */}
        <div className="space-y-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-chart-1" />
              <h3 className="font-semibold text-lg text-chart-1">CODEWRX AI</h3>
            </div>
          </div>
          
          {codewrxPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`codewrx-card p-4 relative ${
                plan.highlight 
                  ? 'border-chart-1/30 ring-2 ring-chart-1/20 bg-gradient-to-br from-chart-1/8 to-transparent' 
                  : 'border-chart-2/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-chart-1 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  BEST VALUE
                </div>
              )}
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 bg-${plan.color}/10 rounded-lg flex items-center justify-center`}>
                    <plan.icon className={`w-4 h-4 text-${plan.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{plan.name}</h4>
                    <p className="text-xs text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
                
                <div className={`text-2xl font-bold ${plan.highlight ? 'text-chart-5' : 'text-chart-2'}`}>
                  {plan.fee}
                </div>
                
                <div className="space-y-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-chart-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Middle Column - Competitor Comparison */}
        <div className="space-y-3">
          <div className="text-center mb-3">
            <h3 className="font-semibold text-lg text-muted-foreground">Industry Standard</h3>
          </div>
          
          <div className="space-y-2">
            {competitors.map((comp, index) => (
              <Card key={index} className="codewrx-card p-3 border-muted/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-muted/10 rounded flex items-center justify-center">
                      <comp.icon className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs">{comp.name}</div>
                      <div className="text-xs text-muted-foreground">{comp.note}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">{comp.fee}</div>
                    <div className="text-xs text-muted-foreground">Platform fee</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Right Column - Revenue Savings Example */}
        <div className="space-y-3">
          <div className="text-center mb-3">
            <h3 className="font-semibold text-lg">Revenue Savings Example</h3>
            <p className="text-xs text-muted-foreground">See how much more you keep with CODEWRX on $100,000 in game revenue</p>
          </div>
          
          <div className="space-y-3">
            {revenueExample.map((example, index) => (
              <Card 
                key={index}
                className={`codewrx-card p-4 ${
                  example.highlight 
                    ? 'border-chart-1/30 bg-gradient-to-br from-chart-1/8 to-transparent' 
                    : 'border-muted/20'
                }`}
              >
                <div className="space-y-2">
                  <div className="font-semibold text-sm">{example.platform}</div>
                  <div className={`text-xl font-bold ${example.highlight ? 'text-chart-1' : 'text-foreground'}`}>
                    {example.amount}
                  </div>
                  <div className="text-xs text-muted-foreground">You keep</div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        example.highlight ? 'bg-chart-1' : 'bg-muted-foreground'
                      }`}
                      style={{ width: `${example.percentage}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Savings Highlight */}
            <Card className="codewrx-card p-4 border-chart-1/30 bg-gradient-to-br from-chart-1/10 to-chart-2/5">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <TrendingDown className="w-5 h-5 text-chart-1" />
                  <span className="font-bold text-lg text-chart-1">Save $20,000</span>
                </div>
                <div className="text-xs text-muted-foreground">vs traditional platforms</div>
                <div className="font-semibold text-sm">That's 20% more revenue in your pocket</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}