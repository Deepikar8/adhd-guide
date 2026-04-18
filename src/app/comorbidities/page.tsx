import Link from 'next/link'
import { comorbidities } from '@/data/comorbidities'
import { FadeIn } from '@/components/FadeIn'

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  teal:   { bg: 'bg-teal-50 dark:bg-teal-950/20',   border: 'border-teal-200 dark:border-teal-800/40',   text: 'text-teal-800 dark:text-teal-300',   badge: 'bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-200' },
  slate:  { bg: 'bg-slate-50 dark:bg-slate-800/40',  border: 'border-slate-200 dark:border-slate-700',  text: 'text-slate-800 dark:text-slate-200',  badge: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-950/20', border: 'border-violet-200 dark:border-violet-800/40', text: 'text-violet-800 dark:text-violet-300', badge: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-200' },
  sky:    { bg: 'bg-sky-50 dark:bg-sky-950/20',    border: 'border-sky-200 dark:border-sky-800/40',    text: 'text-sky-800 dark:text-sky-300',    badge: 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-200' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/20', border: 'border-indigo-200 dark:border-indigo-800/40', text: 'text-indigo-800 dark:text-indigo-300', badge: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200' },
}

export default function ComorbiditiesPage() {
  return (
    <div>
      <FadeIn>
        <section className="bg-gradient-to-br from-stone-50 via-teal-50/30 to-violet-50/20 dark:from-stone-900 dark:via-teal-950/20 dark:to-violet-950/20 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-2xl">
              <div className="text-sm text-teal-700 dark:text-teal-400 font-medium mb-3">Comorbidities</div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                ADHD rarely travels alone
              </h1>
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                A comorbidity is a condition that frequently co-occurs with another. For ADHD, 
                having another condition is the rule rather than the exception. Understanding these 
                overlaps is crucial, because untreated comorbidities can make ADHD harder to manage, 
                and untreated ADHD can make comorbidities worse.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-5">
          {comorbidities.map((item) => {
            const c = colorMap[item.color] ?? colorMap.slate
            return (
              <FadeIn key={item.id} delay={0.1}>
                <div className={`border rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md ${c.border}`}>
                  <div className={`px-6 py-5 ${c.bg}`}>
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{item.emoji}</span>
                      <div className="flex-1">
                        <h2 className={`text-lg font-bold mb-1 ${c.text}`}>{item.name}</h2>
                        <p className="text-sm text-stone-500 dark:text-stone-400 italic">{item.tagline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-stone-900/50 px-6 py-5">
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5">{item.plainExplanation}</p>

                    <div className="bg-stone-50 dark:bg-stone-800/40 rounded-xl p-4 border border-stone-200 dark:border-stone-700">
                      <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">The Overlap</div>
                      <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{item.overlap}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <FadeIn delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
          <div className="bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/40 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between text-center sm:text-left">
            <div>
              <h2 className="text-lg font-bold text-teal-900 dark:text-teal-200 mb-1">Untangling the symptoms</h2>
              <p className="text-sm text-teal-800/80 dark:text-teal-300/80">
                It can be hard to know what is ADHD and what is something else. Learning about the core symptoms of ADHD can help.
              </p>
            </div>
            <Link href="/symptoms" className="shrink-0 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Explore Symptoms →
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
