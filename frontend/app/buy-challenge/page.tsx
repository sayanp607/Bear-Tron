"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ChallengeEvaluator from "@/components/challenge-evaluator"

export default function BuyChallengedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ChallengeEvaluator />
      </main>
      <Footer />
    </div>
  )
}
