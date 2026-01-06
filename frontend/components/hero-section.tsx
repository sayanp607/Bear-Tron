"use client"

import { HandMetal, ThumbsUp, Trophy, DollarSign } from "lucide-react"
import { useTranslation } from "@/lib/translations"

export default function HeroSection() {
  const { t } = useTranslation()
  const features = [
    {
      icon: HandMetal,
      title: t.hero.noRewardDenials,
      description: t.hero.noRewardDenialsDesc,
    },
    {
      icon: ThumbsUp,
      title: t.hero.favoritePlatforms,
      description: t.hero.favoritePlatformsDesc,
    },
    {
      icon: Trophy,
      title: t.hero.flexibleRewards,
      description: t.hero.flexibleRewardsDesc,
    },
    {
      icon: DollarSign,
      title: t.hero.growTogether,
      description: t.hero.growTogetherDesc,
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {t.hero.tradingMadeSimple}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">{t.hero.proveSkills}</h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto px-4">
            {t.hero.getFunded}
          </p>

          <div className="flex flex-col gap-4 items-center justify-center px-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              ✓ {t.hero.realRules} • ✓ {t.hero.realTimeMonitoring} • ✓ {t.hero.quickPayouts}
            </p>
          </div>
        </div>

        {/* Why BearTron Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.hero.whyBearTron}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <h3 className="text-lg font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-primary/80">{feature.title}</h3>
                    <p className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-green-700">{feature.description}</p>
                  </div>

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

