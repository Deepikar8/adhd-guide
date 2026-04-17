import Link from 'next/link'
import { symptoms } from '@/data/symptoms'
import { FadeIn } from '@/components/FadeIn'

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/20', border: 'border-indigo-200 dark:border-indigo-800/40', text: 'text-indigo-800 dark:text-indigo-300', badge: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200' },
  blue:   { bg: 'bg-blue-50 dark:bg-blue-950/20',   border: 'border-blue-200 dark:border-blue-800/40',   text: 'text-blue-800 dark:text-blue-300',   badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200' },
  rose:   { bg: 'bg-rose-50 dark:bg-rose-950/20',   border: 'border-rose-200 dark:border-rose-800/40',   text: 'text-rose-800 dark:text-rose-300',   badge: 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-200' },
  pink:   { bg: 'bg-pink-50 dark:bg-pink-950/20',   border: 'border-pink-200 dark:border-pink-800/40',   text: 'text-pink-800 dark:text-pink-300',   badge: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-200' },
  amber:  { bg: 'bg-amber-50 dark:bg-amber-950/20',  border: 'border-amber-200 dark:border-amber-800/40',  text: 'text-amber-800 dark:text-amber-300',  badge: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-200' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/20', border: 'border-orange-200 dark:border-orange-800/40', text: 'text-orange-800 dark:text-orange-300', badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-200' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-950/20', border: 'border-violet-200 dark:border-violet-800/40', text: 'text-violet-800 dark:text-violet-300', badge: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-200' },
  slate:  { bg: 'bg-slate-50 dark:bg-slate-800/40',  border: 'border-slate-200 dark:border-slate-700',  text: 'text-slate-800 dark:text-slate-200',  badge: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' },
}

export default function SymptomsPage() {
  return (
    <div>
      <FadeIn>
        <section className="bg-gradient-to-br from-stone-50 via-blue-50/30 to-indigo-50/20 dark:from-stone-900 dark:via-blue-950/20 dark:to-indigo-950/20 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-2xl">
              <div className="text-sm text-indigo-700 dark:text-indigo-400 font-medium mb-3">Symptoms</div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                What ADHD actually feels like
              </h1>
              <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
                ADHD is not just &ldquo;can&apos;t sit still&rdquo; or &ldquo;gets distracted easily.&rdquo; It is a cluster of
                interconnected symptoms — many of which are invisible, poorly understood, and routinely
                misattributed to personality flaws.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-5">
          {symptoms.map((symptom) => {
            const c = colorMap[symptom.color] ?? colorMap.indigo
            return (
              <FadeIn key={symptom.id} delay={0.1}>
                <div className={`border rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md ${c.border}`}>
                  <div className={`px-6 py-5 ${c.bg}`}>
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{symptom.emoji}</span>
                      <div className="flex-1">
                        <h2 className={`text-lg font-bold mb-1 ${c.text}`}>{symptom.name}</h2>
                        <p className="text-sm text-stone-500 dark:text-stone-400 italic">{symptom.tagline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-stone-900/50 px-6 py-5">
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5">{symptom.plainExplanation}</p>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">What is happening</div>
                        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{symptom.whatIsHappening}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">Common signs</div>
                        <ul className="space-y-1">
                          {symptom.commonSigns.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-xs text-stone-600 dark:text-stone-400">
                              <span className="text-stone-300 dark:text-stone-600 mt-1 shrink-0">•</span>
                              <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    </div>

                    <div className={`rounded-lg px-3 py-2 text-xs ${c.badge}`}>
                      <strong>When it typically appears:</strong> {symptom.whenItTypicallyAppears}
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <FadeIn delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
          <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-xl p-5 text-sm text-indigo-800 dark:text-indigo-300">
            <strong>This site is for education only.</strong> Symptoms described here are for understanding and context —
            not for self-diagnosis. Only a qualified clinician can diagnose ADHD.
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
