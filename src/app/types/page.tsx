import Link from 'next/link'
import { adhdTypes } from '@/data/adhd-types'

export default function TypesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-indigo-50/30 to-violet-50/20 dark:from-stone-900 dark:via-indigo-950/20 dark:to-violet-950/20 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-sm text-indigo-700 dark:text-indigo-400 font-medium mb-3">ADHD Types</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              The presentations of ADHD
            </h1>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              ADHD is classified into three presentations. Two of them — inattentive, and
              hyperactive/combined — account for the vast majority of diagnoses. Both share the same
              neurological foundation but look very different on the surface.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {adhdTypes.map((type) => (
            <div key={type.id} className={`border rounded-2xl p-7 ${type.id === 'inattentive' ? 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800/40' : 'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800/40'}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">{type.emoji}</span>
                <div>
                  <h2 className={`text-xl font-bold ${type.id === 'inattentive' ? 'text-indigo-800 dark:text-indigo-300' : 'text-violet-800 dark:text-violet-300'}`}>{type.name}</h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">{type.headline}</p>
                </div>
              </div>

              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6">{type.description}</p>

              <div className="mb-6">
                <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">Presents across</div>
                <div className="flex flex-wrap gap-1.5">
                  {type.stages.map((s) => (
                    <span key={s.name} className="inline-flex items-center gap-1 bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-full px-2.5 py-1 text-xs text-stone-600 dark:text-stone-400">
                      <span>{s.emoji}</span>
                      <span>{s.name}</span>
                      <span className="text-stone-400">{s.ageRange}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 dark:bg-stone-800/50 rounded-xl p-4 mb-6 border border-stone-200 dark:border-stone-700">
                <div className={`text-xs font-semibold mb-1 ${type.id === 'inattentive' ? 'text-indigo-700' : 'text-violet-700'}`}>{type.highlight.label}</div>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{type.highlight.text}</p>
              </div>

              <Link
                href={`/types/${type.id}`}
                className={`inline-flex px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors ${type.id === 'inattentive' ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-violet-700 hover:bg-violet-800'}`}
              >
                Deep dive: {type.name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-100 border-y border-stone-200 dark:border-stone-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">What about &ldquo;ADHD-NOS&rdquo; or the third type?</h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-3xl">
            The DSM-5-TR technically includes a third category — <strong>Other Specified ADHD</strong> — for presentations that cause significant impairment but don&apos;t fully meet criteria for either presentation.
            Clinically, most diagnoses fall into inattentive or combined. The distinction between presentations is less about fixed categories and more about where the impairment is most prominent.
            Presentations can also shift over time — hyperactive symptoms often decrease with age, while inattention tends to persist.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-xl p-5 text-sm text-indigo-800 dark:text-indigo-300">
          <strong>This site is for education only.</strong> ADHD diagnosis requires a qualified clinician.
          This guide explains the presentations — not how to self-diagnose.
        </div>
      </section>
    </div>
  )
}
