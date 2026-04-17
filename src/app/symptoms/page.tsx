import Link from 'next/link'
import { symptoms } from '@/data/symptoms'

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800', badge: 'bg-indigo-100 text-indigo-700' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-800',   badge: 'bg-blue-100 text-blue-700' },
  rose:   { bg: 'bg-rose-50',   border: 'border-rose-200',   text: 'text-rose-800',   badge: 'bg-rose-100 text-rose-700' },
  pink:   { bg: 'bg-pink-50',   border: 'border-pink-200',   text: 'text-pink-800',   badge: 'bg-pink-100 text-pink-700' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-800',  badge: 'bg-amber-100 text-amber-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', badge: 'bg-orange-100 text-orange-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', badge: 'bg-violet-100 text-violet-700' },
  slate:  { bg: 'bg-slate-50',  border: 'border-slate-200',  text: 'text-slate-800',  badge: 'bg-slate-100 text-slate-700' },
}

export default function SymptomsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-blue-50/30 to-indigo-50/20 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-sm text-indigo-700 font-medium mb-3">Symptoms</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              What ADHD actually feels like
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              ADHD is not just &ldquo;can&apos;t sit still&rdquo; or &ldquo;gets distracted easily.&rdquo; It is a cluster of
              interconnected symptoms — many of which are invisible, poorly understood, and routinely
              misattributed to personality flaws.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-5">
          {symptoms.map((symptom) => {
            const c = colorMap[symptom.color] ?? colorMap.indigo
            return (
              <div key={symptom.id} className={`border rounded-2xl overflow-hidden ${c.border}`}>
                <div className={`px-6 py-5 ${c.bg}`}>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{symptom.emoji}</span>
                    <div className="flex-1">
                      <h2 className={`text-lg font-bold mb-1 ${c.text}`}>{symptom.name}</h2>
                      <p className="text-sm text-stone-500 italic">{symptom.tagline}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-6 py-5">
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">{symptom.plainExplanation}</p>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">What is happening</div>
                      <p className="text-xs text-stone-600 leading-relaxed">{symptom.whatIsHappening}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Common signs</div>
                      <ul className="space-y-1">
                        {symptom.commonSigns.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="text-stone-300 mt-1 shrink-0">•</span>
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
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-sm text-indigo-800">
          <strong>This site is for education only.</strong> Symptoms described here are for understanding and context —
          not for self-diagnosis. Only a qualified clinician can diagnose ADHD.
        </div>
      </section>
    </div>
  )
}
