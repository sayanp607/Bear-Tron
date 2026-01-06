"use client"

import { useState } from "react"
import { useTranslation } from "@/lib/translations"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQSection() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="h-10 w-10 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.faq.title}
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          {t.faq.subtitle}
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {t.faq.questions.map((item: any, index: number) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-xl px-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-blue-500 py-5 hover:no-underline">
              <span className="flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-blue-500/10 text-blue-500 text-xs sm:text-sm font-bold mt-0.5">
                  {index + 1}
                </span>
                <span className="flex-1">{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4 sm:pb-5 pl-8 sm:pl-10">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center p-6 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/10 rounded-xl">
        <p className="text-foreground font-medium mb-2">{t.faq.stillHaveQuestions}</p>
        <p className="text-muted-foreground text-sm">
          {t.faq.contactUs}{" "}
          <a href="mailto:support@beartron.com" className="text-blue-500 hover:underline font-medium">
            support@beartron.com
          </a>
        </p>
      </div>
    </div>
  )
}
