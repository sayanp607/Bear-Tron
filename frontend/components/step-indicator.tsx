"use client"

export default function StepIndicator() {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex items-center gap-4 max-w-2xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
            1
          </div>
          <span className="text-sm font-medium mt-2">Choose Package</span>
        </div>

        {/* Connector */}
        <div className="w-16 h-1 bg-primary" />

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">
            2
          </div>
          <span className="text-sm font-medium mt-2">Make Payment</span>
        </div>

        {/* Connector */}
        <div className="w-16 h-1 bg-muted" />

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-bold">
            3
          </div>
          <span className="text-sm font-medium mt-2">Start Trading</span>
        </div>
      </div>
    </div>
  )
}
