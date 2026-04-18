import Link from 'next/link'
import { diagnosisSteps } from '@/data/diagnosis'
import { FadeIn } from '@/components/FadeIn'

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; circle: string }> = {
  amber:  { bg: 'bg-amber-50 dark:bg-amber-950/20',  border: 'border-amber-200 dark:border-amber-800/40',  text: 'text-amber-800 dark:text-amber-300',  badge: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-200', circle: 'bg-amber-500 text-white' },
  indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/20', border: 'border-indigo-200 dark:border-indigo-800/40', text: 'text-indigo-800 dark:text-indigo-300', badge: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-200', circle: 'bg-indigo-500 text-white' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-950/20', border: 'border-violet-200 dark:border-violet-800/40', text: 'text-violet-800 dark:text-violet-300', badge: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-200', circle: 'bg-violet-500 text-white' },
  emerald: { bg: 'bg-emerald-50 dark:bg-emerald-950/20', border: 'border-emerald-200 dark:border-emerald-800/40', text: 'text-emerald-800 dark:text-emerald-300', badge: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-200', circle: 'bg-emerald-500 text-white' },
}

export default function DiagnosisPage() {
  return (
    <div>
      <FadeIn>
        <section className="bg-gradient-to-br from-stone-50 via-indigo-50/30 to-emerald-50/20 dark:from-stone-900 dark:via-indigo-950/20 dark:to-emerald-950/20 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="max-w-2xl">
              <div className="text-sm text-indigo-700 dark:text-indigo-400 font-medium mb-3">Assessment</div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                The Diagnostic Journey
              </h1>
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                Getting evaluated for ADHD, particularly as an adult, can be a daunting, confusing, and highly emotional process. 
                Knowing what to expect at each stage can help you advocate for yourself effectively.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-stone-200 dark:before:bg-stone-800">
          {diagnosisSteps.map((step, index) => {
            const c = colorMap[step.color] ?? colorMap.indigo
            return (
              <FadeIn key={step.id} delay={0.1 * index}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-stone-900 ${c.circle} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold`}>
                    {step.stepNumber}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] border rounded-2xl overflow-hidden transition-all hover:shadow-md ${c.border}`}>
                    <div className={`px-5 py-4 ${c.bg}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{step.emoji}</span>
                        <h2 className={`text-lg font-bold ${c.text}`}>{step.title}</h2>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-stone-900/50 px-5 py-5">
                      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5">{step.description}</p>
                      
                      <div className="mb-4">
                        <h3 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">Common Hurdles</h3>
                        <ul className="space-y-1.5">
                          {step.commonHurdles.map((hurdle, i) => (
                            <li key={i} className="flex gap-2 text-sm text-stone-600 dark:text-stone-300">
                              <span className="text-stone-400 shrink-0">✕</span>
                              <span>{hurdle}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">Tips</h3>
                        <ul className="space-y-1.5">
                          {step.tips.map((tip, i) => (
                            <li key={i} className="flex gap-2 text-sm text-stone-600 dark:text-stone-300">
                              <span className={`${c.text.split(' ')[0]} shrink-0`}>✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>
    </div>
  )
}
