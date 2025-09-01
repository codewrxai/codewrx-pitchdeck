import { Card } from "../ui/card";
import { DollarSign, PieChart, Target, Users, Rocket, CheckCircle } from "lucide-react";

export function FundraisingSlide() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Fundraising</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Raising $1.5M Pre-Seed
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="codewrx-card p-6 border-chart-1/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-xl font-semibold">Funding Goals</h3>
            </div>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-1">$1.5M</div>
                <div className="text-muted-foreground text-sm">Pre-Seed Round</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-chart-1" />
                  <span className="text-sm">Train & Refine AI Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-chart-1" />
                  <span className="text-sm">Build UX / UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-chart-1" />
                  <span className="text-sm">Collaborate and Build Pilots</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-chart-4/10 rounded-xl flex items-center justify-center">
                <PieChart className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-xl font-semibold">Use of Funds</h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Development</span>
                  <span className="font-semibold text-chart-1">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Product Development</span>
                  <span className="font-semibold text-chart-4">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Team Expansion</span>
                  <span className="font-semibold text-chart-3">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Operations</span>
                  <span className="font-semibold text-chart-4">10%</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="codewrx-card p-6 border-chart-3/20">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-chart-3">Milestones</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-3" />
                <span className="text-sm">Publish Indie Web Games</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-3" />
                <span className="text-sm">Sign Up Enterprise Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chart-3" />
                <span className="text-sm">Launch Beta Platform</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="codewrx-card p-6 border-chart-4/20">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-chart-4">Timeline</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Q1 2025</span>
                <span className="text-chart-4 text-sm">AI Agent Beta</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Q2 2025</span>
                <span className="text-chart-4 text-sm">Platform Launch</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Q3 2025</span>
                <span className="text-chart-4 text-sm">Enterprise Pilots</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}