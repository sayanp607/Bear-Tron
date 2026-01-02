"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ChallengeOptions from "@/components/challenge-options"
import ChallengeEvaluator from "@/components/challenge-evaluator"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChallengeEvaluator />
      </main>
      <Footer />
    </div>
  )
}
