import { Card } from "../ui/card";
import { Users, Building2, CheckCircle } from "lucide-react";

export function BusinessModelSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Business Model - B2C & B2B</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Free to Start, Revenue Share Success
        </p>
      </div>
      
      <Card className="codewrx-card p-6 border-chart-1/10">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center">CODEWRX provides its tech to developers for free</h3>
          <p className="text-base text-center text-muted-foreground max-w-3xl mx-auto">
            We make money from payment processing, hosting and hub fees. These services are integrated into the web games that are published using our technology. Our license agreement with audit rights grants CodeWRX 10% of revenue from games that earn over $100,000 in gross revenue regardless of where they are published.
          </p>
        </div>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="codewrx-card p-6 border-chart-2/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-xl font-semibold">B2C Model</h3>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                B2C customer base are players of games that we enabled to publish on the web. Scalable customer base that generates a percentage of revenue from hit games.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-2" />
                  <span className="text-sm">Free for developers to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-2" />
                  <span className="text-sm">10% revenue share on success</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-2" />
                  <span className="text-sm">Scalable player base</span>
                </div>
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
              <h3 className="text-xl font-semibold">B2B Model</h3>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                B2B customers are enterprise game publishers with libraries of mobile, PC or console games that we enable to publish on the web. Negotiate deals with game developers and publishers to convert their games for revenue share.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-sm">Enterprise partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-sm">Library conversion deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-sm">Revenue sharing agreements</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}