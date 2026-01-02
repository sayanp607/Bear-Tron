"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import CompetitionHero from "@/components/competition/hero"
import CompetitionRules from "@/components/competition/rules"
import CompetitionLeaderboard from "@/components/competition/leaderboard"
import CompetitionRegistration from "@/components/competition/registration"

export default function CompetitionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CompetitionHero />
        <CompetitionRules />
        <CompetitionLeaderboard />
        <CompetitionRegistration />
      </main>
      <Footer />
    </div>
  )
}
