"use client"

import { Card } from "@/components/ui/card"

export default function TradingObjectives() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Trading Objectives</h2>

      <div className="space-y-6">
        {/* Maximum Daily Loss */}
        <div className="p-6 border border-border rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Maximum Daily Loss</h3>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-3 py-1 rounded-full">
              Resets In: 01:06:39:28
            </span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-muted-foreground">Maximum Allowed Daily Loss: ₹24,111</span>
            <span className="text-sm text-muted-foreground">Todays Starting Equity: ₹4,82,221</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }} />
          </div>
          <div className="mt-2 text-sm text-right text-muted-foreground">Remaining: ₹24,111</div>
        </div>

        {/* Maximum Loss */}
        <div className="p-6 border border-border rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Maximum Loss</h3>
            <span className="text-xs bg-muted px-3 py-1 rounded-full">Overall</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-muted-foreground">Maximum Allowed Loss: ₹40,000</span>
            <span className="text-sm text-muted-foreground">Balance Threshold: ₹4,60,000</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }} />
          </div>
          <div className="mt-2 text-sm text-right text-muted-foreground">Remaining: ₹32,221</div>
        </div>

        {/* Profit Target */}
        <div className="p-6 border border-border rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Profit Target</h3>
            <span className="text-xs bg-muted px-3 py-1 rounded-full">Student Level</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-sm text-muted-foreground">Target: 15% of Account</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "0%" }} />
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-muted-foreground">Progress: 0%</span>
            <span className="text-muted-foreground">Need: ₹75,000</span>
          </div>
        </div>

        {/* Minimum Trading Days */}
        <div className="p-6 border border-border rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Minimum Trading Days</h3>
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 px-3 py-1 rounded-full">
              Passed
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }} />
          </div>
          <div className="mt-2 text-sm text-right text-green-600">Requirement Met: 16/10 days</div>
        </div>
      </div>

      {/* Daily Summary */}
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="font-bold mb-4">Daily Summary</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">Today's PnL</p>
            <p className="text-2xl font-bold text-green-500">+₹2,500</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">Today's Trades</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
