import { interventions, type EvidenceTier } from '@/data/interventions'
import Link from 'next/link'

const evidenceLabels: Record<EvidenceTier, { label: string; color: string }> = {
  strong:   { label: 'Strong evidence', color: 'bg-emerald-100 text-emerald-800' },
  moderate: { label: 'Moderate evidence', color: 'bg-amber-100 text-amber-800' },
  limited:  { label: 'Limited evidence', color: 'bg-stone-200 text-stone-700 dark:text-stone-300' },
}

const categoryLabels: Record<string, { label: string; emoji: string }> = {
  medication: { label: 'Medication', emoji: '💊' },
  therapy:    { label: 'Therapy', emoji: '🧠' },
  lifestyle:  { label: 'Lifestyle', emoji: '🏃' },
  tools:      { label: 'Tools & Systems', emoji: '📋' },
}

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  indigo:  { bg: 'bg-indigo-50 dark:bg-indigo-950/20',  border: 'border-indigo-200 dark:border-indigo-800/40',  text: 'text-indigo-800 dark:text-indigo-300' },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-800' },
  violet:  { bg: 'bg-violet-50 dark:bg-violet-950/20',  border: 'border-violet-200 dark:border-violet-800/40',  text: 'text-violet-800 dark:text-violet-300' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
  green:   { bg: 'bg-green-50',   border: 'border-green-200',   text: 'text-green-800' },
  slate:   { bg: 'bg-slate-50',   border: 'border-slate-200',   text: 'text-slate-800' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-800' },
  lime:    { bg: 'bg-lime-50',    border: 'border-lime-200',    text: 'text-lime-800' },
}

const categories = ['medication', 'therapy', 'lifestyle', 'tools'] as const

export default function WhatHelpsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-emerald-50/30 to-indigo-50/20 dark:from-stone-900 dark:via-emerald-950/20 dark:to-indigo-950/20 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-sm text-emerald-700 dark:text-emerald-400 font-medium mb-3">What Helps</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Evidence-based interventions for ADHD
            </h1>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              What actually works for ADHD — with evidence ratings, what each intervention does,
              and who it is best suited for. Medication, therapy, lifestyle, and practical tools.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence key */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-2">
        <div className="flex flex-wrap gap-3">
          {Object.entries(evidenceLabels).map(([, v]) => (
            <span key={v.label} className={`text-xs font-medium px-3 py-1 rounded-full ${v.color}`}>{v.label}</span>
          ))}
        </div>
      </section>

      {categories.map((cat) => {
        const items = interventions.filter((i) => i.category === cat)
        const catMeta = categoryLabels[cat]
        return (
          <section key={cat} className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-5 flex items-center gap-2">
              <span>{catMeta.emoji}</span>
              <span>{catMeta.label}</span>
            </h2>
            <div className="space-y-5">
              {items.map((item) => {
                const c = colorMap[item.color] ?? colorMap.indigo
                const ev = evidenceLabels[item.evidenceTier]
                return (
                  <div key={item.id} className={`border rounded-2xl overflow-hidden ${c.border}`}>
                    <div className={`px-6 py-4 ${c.bg} flex items-start gap-4`}>
                      <span className="text-3xl">{item.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className={`font-bold text-base ${c.text}`}>{item.name}</h3>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${ev.color}`}>{ev.label}</span>
                        </div>
                        <p className="text-sm text-stone-600 dark:text-stone-400 italic">{item.tagline}</p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-stone-800/50 px-6 py-5">
                      <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-5">{item.description}</p>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide mb-2">Best for</div>
                          <ul className="space-y-1">
                            {item.bestFor.map((b) => (
                              <li key={b} className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300">
                                <span className="text-stone-400 mt-1 shrink-0">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-stone-600 dark:text-stone-400 uppercase tracking-wide mb-2">Notes</div>
                          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{item.notes}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-xl p-5 text-sm text-indigo-800 dark:text-indigo-300">
          <strong>This site is for education only.</strong> Medication decisions require a licensed prescriber
          who knows your full medical history. Do not start, stop, or adjust medication based on this guide.
        </div>
      </section>
    </div>
  )
}
