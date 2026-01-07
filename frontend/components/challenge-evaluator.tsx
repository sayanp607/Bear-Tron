"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Check } from "lucide-react"
import { useTranslation } from "@/lib/translations"
import FAQSection from "@/components/faq-section"

export default function ChallengeEvaluator() {
  const [selectedStep, setSelectedStep] = useState<"1step" | "2step">("1step")
  const [selectedSize, setSelectedSize] = useState("1l")
  const { data: session } = useSession()
  const router = useRouter()
  const { t } = useTranslation()

  const accountSizes = [
    { value: "50k", label: "₹50k", amount: 50000, price2step: 1700, price1step: 2500 },
    { value: "1l", label: "₹1L", amount: 100000, price2step: 3000, price1step: 4250 },
    { value: "2l", label: "₹2L", amount: 200000, price2step: 5800, price1step: 8000 },
    { value: "5l", label: "₹5L", amount: 500000, price2step: 14000, price1step: 19500 },
    { value: "10l", label: "₹10L", amount: 1000000, price2step: 28000, price1step: 36000 },
    { value: "25l", label: "₹25L", amount: 2500000, price2step: 58000, price1step: 86000 },
    { value: "50l", label: "₹50L", amount: 5000000, price2step: 125000, price1step: 160000 },
  ]

  const selectedAccount = accountSizes.find((acc) => acc.value === selectedSize)
  const currentPrice = selectedAccount ? (selectedStep === "2step" ? selectedAccount.price2step : selectedAccount.price1step) : 0

  const handleBuyChallenge = () => {
    if (session) {
      router.push("/new-challenge")
    } else {
      router.push("/signin")
    }
  }

  // Calculate profit targets based on selected step
  const noviceProfit = selectedAccount ? selectedAccount.amount * 0.1 : 10000
  const expertProfit = selectedAccount ? selectedAccount.amount * 0.08 : 8000

  const evaluationData = {
    noviceProfit: `₹${noviceProfit.toLocaleString('en-IN')} (10%)`,
    expertProfit: `₹${expertProfit.toLocaleString('en-IN')} (8%)`,
    noviceMaxLoss: "8%",
    expertMaxLoss: "6%",
    masterMaxLoss: "5%",
    noviceMaxDailyLoss: "5%",
    expertMaxDailyLoss: "4%",
    masterMaxDailyLoss: "3%",
    minTradingDays: "7 days",
    maxTradingDays: "3 months",
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      feedback: "BearTron completely changed my trading journey. Got funded in my first attempt and received payout within days!"
    },
    {
      name: "Michael Chen",
      role: "Forex Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      feedback: "No hidden rules, no denials. This is the most transparent prop firm I've worked with. Highly recommend!"
    },
    {
      name: "Emma Rodriguez",
      role: "Day Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      feedback: "The evaluation process is straightforward and fair. Finally, a prop firm that values real traders."
    },
    {
      name: "David Park",
      role: "Swing Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      feedback: "Quick payouts and excellent support. BearTron treats you like a professional trader should be treated."
    },
    {
      name: "Lisa Anderson",
      role: "Crypto Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      feedback: "Best decision ever! The flexibility and real-time monitoring make this platform stand out from the rest."
    },
    {
      name: "James Wilson",
      role: "Options Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      feedback: "I've tried multiple prop firms, but BearTron's honesty and transparency are unmatched. Worth every penny!"
    },
    {
      name: "Sophia Martinez",
      role: "Scalper",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
      feedback: "Finally passed my evaluation and got funded! The rules are clear, and the platform is incredibly user-friendly."
    },
    {
      name: "Ryan Thompson",
      role: "Commodity Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
      feedback: "No games, no tricks. Just pure trading evaluation. BearTron delivers exactly what they promise."
    },
    {
      name: "Olivia Brown",
      role: "Stock Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
      feedback: "The real-time monitoring and instant feedback helped me improve my trading. Amazing platform!"
    },
    {
      name: "Daniel Kim",
      role: "Futures Trader",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
      feedback: "Received my first payout in record time. BearTron is the real deal for serious traders!"
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {t.challenge.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            {t.challenge.subtitle}
          </p>
        </div>

        {/* Step Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setSelectedStep("1step")}
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all ${
              selectedStep === "1step"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-card/80"
            }`}
          >
            {t.challenge.oneStep}
          </button>
          <button
            onClick={() => setSelectedStep("2step")}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              selectedStep === "2step"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-card/80"
            }`}
          >
            {t.challenge.twoStep}
          </button>
        </div>

        {/* Account Size Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {accountSizes.map((size) => (
            <button
              key={size.value}
              onClick={() => setSelectedSize(size.value)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all ${
                selectedSize === size.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>

        {/* Evaluation Stage */}
        <div className="bg-gradient-to-br from-primary via-primary/80 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <h3 className="text-white text-center text-base sm:text-lg md:text-xl font-semibold mb-6 sm:mb-8">{t.challenge.evaluationStage}</h3>

          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <div className={`${selectedStep === "2step" ? "min-w-[700px]" : "min-w-[550px]"} sm:min-w-0`}>
              {/* Header Row */}
              <div className={`grid ${selectedStep === "2step" ? "grid-cols-[180px_repeat(3,1fr)]" : "grid-cols-[180px_repeat(1,1fr)]"} gap-3 sm:gap-4 mb-6 sm:mb-8`}>
                <div></div>
                {/* Novice Column - Only for 2 step */}
                {selectedStep === "2step" && (
                  <div className="text-center px-2">
                    <div className="mb-2 sm:mb-4">
                      <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/20 text-white text-sm sm:text-base md:text-lg font-bold">
                        1
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-6">Novice</h4>
                  </div>
                )}

                {/* Expert Column */}
                <div className="text-center px-2">
                  <div className="mb-2 sm:mb-4">
                    <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/20 text-white text-sm sm:text-base md:text-lg font-bold">
                      {selectedStep === "2step" ? "2" : "1"}
                    </div>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-6">Expert</h4>
                </div>

                {/* Master Column - Only for 2 step */}
                {selectedStep === "2step" && (
                  <div className="text-center px-2">
                    <div className="mb-2 sm:mb-4">
                      <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/20 text-primary-foreground">
                        <Crown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-6">{t.challenge.master}</h4>
                  </div>
                )}
              </div>

          {/* Evaluation Rows */}
          <div className="space-y-3 sm:space-y-4">
            {/* Profit Target */}
            <div className={`grid ${selectedStep === "2step" ? "grid-cols-[180px_repeat(3,1fr)]" : "grid-cols-[180px_repeat(1,1fr)]"} gap-3 sm:gap-4 items-center bg-white/5 rounded-lg p-3 sm:p-4`}>
              <div className="text-white text-sm sm:text-sm md:text-base font-medium flex items-center gap-1 sm:gap-2">
                <span className="truncate">{t.challenge.profitTarget}</span>
                <span className="text-primary-foreground/70 text-xs hidden sm:inline">ⓘ</span>
              </div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.noviceProfit}</div>
              )}
              <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.expertProfit}</div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">-</div>
              )}
            </div>

            {/* Maximum Loss */}
            <div className={`grid ${selectedStep === "2step" ? "grid-cols-[180px_repeat(3,1fr)]" : "grid-cols-[180px_repeat(1,1fr)]"} gap-3 sm:gap-4 items-center bg-white/5 rounded-lg p-3 sm:p-4`}>
              <div className="text-white text-sm sm:text-sm md:text-base font-medium flex items-center gap-1 sm:gap-2">
                <span className="truncate">{t.challenge.maximumLoss}</span>
                <span className="text-primary-foreground/70 text-xs hidden sm:inline">ⓘ</span>
              </div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.noviceMaxLoss}</div>
              )}
              <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.expertMaxLoss}</div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.masterMaxLoss}</div>
              )}
            </div>

            {/* Maximum Daily Loss */}
            <div className={`grid ${selectedStep === "2step" ? "grid-cols-[180px_repeat(3,1fr)]" : "grid-cols-[180px_repeat(1,1fr)]"} gap-3 sm:gap-4 items-center bg-white/5 rounded-lg p-3 sm:p-4`}>
              <div className="text-white text-sm sm:text-sm md:text-base font-medium flex items-center gap-1 sm:gap-2">
                <span className="truncate">{t.challenge.maximumDailyLoss}</span>
                <span className="text-primary-foreground/70 text-xs hidden sm:inline">ⓘ</span>
              </div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.noviceMaxDailyLoss}</div>
              )}
              <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.expertMaxDailyLoss}</div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.masterMaxDailyLoss}</div>
              )}
            </div>

            {/* Minimum Trading Days */}
            <div className={`grid ${selectedStep === "2step" ? "grid-cols-[180px_repeat(3,1fr)]" : "grid-cols-[180px_repeat(1,1fr)]"} gap-3 sm:gap-4 items-center bg-white/5 rounded-lg p-3 sm:p-4`}>
              <div className="text-white text-sm sm:text-sm md:text-base font-medium flex items-center gap-1 sm:gap-2">
                <span className="truncate">{t.challenge.minimumTradingDays}</span>
                <span className="text-primary-foreground/70 text-xs hidden sm:inline">ⓘ</span>
              </div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.minTradingDays}</div>
              )}
              <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.minTradingDays}</div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">-</div>
              )}
            </div>

            {/* Maximum Trading Days */}
            <div className={`grid ${selectedStep === "2step" ? "grid-cols-[180px_repeat(3,1fr)]" : "grid-cols-[180px_repeat(1,1fr)]"} gap-3 sm:gap-4 items-center bg-white/5 rounded-lg p-3 sm:p-4`}>
              <div className="text-white text-sm sm:text-sm md:text-base font-medium flex items-center gap-1 sm:gap-2">
                <span className="truncate">Maximum Trading Days</span>
                <span className="text-primary-foreground/70 text-xs hidden sm:inline">ⓘ</span>
              </div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.maxTradingDays}</div>
              )}
              <div className="text-center text-white text-sm md:text-base font-semibold px-2">{evaluationData.maxTradingDays}</div>
              {selectedStep === "2step" && (
                <div className="text-center text-white text-sm md:text-base font-semibold px-2">-</div>
              )}
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12 w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <span className="text-muted-foreground text-xs sm:text-sm">{t.challenge.accountSize}</span>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{selectedAccount?.label.toLowerCase()}</p>
            </div>
            <div className="text-center sm:text-left">
              <span className="text-muted-foreground text-xs sm:text-sm">Price</span>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                ₹{currentPrice >= 100000 
                  ? `${(currentPrice / 100000).toFixed(currentPrice % 100000 === 0 ? 0 : 2)}L` 
                  : `${(currentPrice / 1000).toFixed(1)}k`}
              </p>
            </div>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg w-full sm:w-auto" onClick={handleBuyChallenge}>
            {t.challenge.buyChallenge}
          </Button>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 sm:mt-20 md:mt-32">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">What Traders Say</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 px-4">Join thousands of successful traders who trust BearTron</p>
          
          <div className="relative overflow-hidden">
            {/* Gradient overlays for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x">
              <div className="flex gap-6 pb-4 px-4 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="snap-center flex-shrink-0 w-80 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-14 w-14 border-2 border-primary/20">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <svg
                        className="absolute -top-2 -left-1 h-8 w-8 text-primary/20"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-sm text-foreground/80 leading-relaxed pl-6">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </section>
  )
}
