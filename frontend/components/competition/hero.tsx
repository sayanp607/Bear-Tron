"use client"

export default function CompetitionHero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          Monthly Championship
        </div>

        <h1 className="text-5xl font-bold tracking-tight mb-6 text-balance">Compete & Win Funded Accounts</h1>

        <p className="text-xl text-muted-foreground mb-8 text-balance">
          Join our trading championship for just ₹149. Trade with ₹1 crore demo capital. Top 3 traders win real funded
          accounts worth ₹1 lakh each.
        </p>

        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Total Prize Pool: ₹3 Lakhs
          </p>
          <p className="text-sm text-muted-foreground">🏆 1st: ₹1L Funded • 🥈 2nd: ₹1L Funded • 🥉 3rd: ₹1L Funded</p>
        </div>
      </div>
    </section>
  )
}
