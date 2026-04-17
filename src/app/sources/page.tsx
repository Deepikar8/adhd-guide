import { sources } from '@/data/sources'

const categoryLabels: Record<string, string> = {
  diagnostic:   'Diagnostic criteria & guidelines',
  neuroscience: 'Neuroscience & mechanisms',
  treatment:    'Treatment & interventions',
  lifespan:     'Lifespan & prevalence',
  gender:       'Sex & gender differences',
  comorbidity:  'Comorbidities & emotional regulation',
}

const categoryOrder = ['diagnostic', 'neuroscience', 'treatment', 'lifespan', 'gender', 'comorbidity'] as const

export default function SourcesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-stone-100/40 dark:from-stone-900 dark:via-stone-800/40 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-sm text-stone-500 dark:text-stone-400 font-medium mb-3">Sources</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Sources &amp; citations
            </h1>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              This site is based on peer-reviewed research, clinical guidelines, and expert consensus.
              All major claims are traceable to the sources below.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {categoryOrder.map((cat) => {
          const items = sources.filter((s) => s.category === cat)
          if (items.length === 0) return null
          return (
            <div key={cat} className="mb-10">
              <h2 className="text-base font-bold text-stone-800 dark:text-stone-200 mb-4 border-b border-stone-200 dark:border-stone-700 pb-2">
                {categoryLabels[cat]}
              </h2>
              <div className="space-y-3">
                {items.map((source) => (
                  <div key={source.id} className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-4">
                    <div className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-1">
                      {source.url ? (
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">
                          {source.title}
                        </a>
                      ) : (
                        source.title
                      )}
                    </div>
                    {(source.authors || source.journal || source.year) && (
                      <div className="text-xs text-stone-500 dark:text-stone-400 mb-2">
                        {source.authors && <span>{source.authors}</span>}
                        {source.journal && <span> · <em>{source.journal}</em></span>}
                        {source.year && <span> · {source.year}</span>}
                      </div>
                    )}
                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{source.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-xl p-5 text-sm text-indigo-800 dark:text-indigo-300">
          <strong>Not medical advice.</strong> Sources are provided for transparency and further reading.
          This site is educational only. Always consult a qualified healthcare provider for diagnosis and treatment.
        </div>
      </section>
    </div>
  )
}
