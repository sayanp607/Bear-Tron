"use client"

import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PaymentForm from "@/components/payment-form"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const packageId = searchParams.get("package")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Complete Your Purchase</h1>
          <PaymentForm packageId={packageId} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
