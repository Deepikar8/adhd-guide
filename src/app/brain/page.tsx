import Link from 'next/link'
import { brainChemicals } from '@/data/brain-chemicals'

const regions = [
  {
    name: 'Prefrontal Cortex',
    emoji: '🧩',
    role: 'Executive function hub',
    adhdImpact: 'Dysregulated dopamine and norepinephrine signalling — involving altered reuptake and release patterns — impairs planning, working memory, impulse control, and task initiation. This is where the most consistent structural and functional differences are found in ADHD.',
    color: 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800/40',
    textColor: 'text-indigo-800 dark:text-indigo-300',
  },
  {
    name: 'Striatum & Basal Ganglia',
    emoji: '🔄',
    role: 'Reward processing & habit formation',
    adhdImpact: 'Dopamine signalling differences in the striatum alter how the ADHD brain responds to reward. Low-reward tasks generate insufficient dopamine to sustain motivation — high-reward tasks generate more than enough. This is the biological basis of hyperfocus and task-avoidance existing in the same person.',
    color: 'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800/40',
    textColor: 'text-violet-800 dark:text-violet-300',
  },
  {
    name: 'Cerebellum',
    emoji: '⏱️',
    role: 'Timing and coordination',
    adhdImpact: 'The cerebellum contributes to time perception alongside the prefrontal cortex and basal ganglia. Some studies find structural or functional cerebellar differences in ADHD, though findings are inconsistent. Time blindness in ADHD is most robustly linked to prefrontal and striatal dysfunction affecting temporal judgment — the cerebellum\'s specific contribution remains an active area of research.',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-800',
  },
  {
    name: 'Amygdala',
    emoji: '🌡️',
    role: 'Emotional processing',
    adhdImpact: 'The amygdala fires in response to perceived threats, rejection, and emotional stimuli. In ADHD, the prefrontal cortex\'s ability to dampen the amygdala\'s response is reduced — leading to emotional dysregulation, rejection sensitive dysphoria, and disproportionate emotional reactions.',
    color: 'bg-rose-50 border-rose-200',
    textColor: 'text-rose-800',
  },
  {
    name: 'Default Mode Network',
    emoji: '🌊',
    role: 'Mind-wandering & self-referential thought',
    adhdImpact: 'The Default Mode Network (DMN) is typically suppressed during focused tasks. Some neuroimaging studies suggest the DMN does not deactivate as readily in ADHD, potentially contributing to internal distractibility. However, findings are not consistent across all studies, and the DMN\'s precise role in ADHD remains under investigation.',
    color: 'bg-amber-50 border-amber-200',
    textColor: 'text-amber-800',
  },
]

const myths = [
  { myth: 'ADHD is caused by too much sugar or screen time', fact: 'ADHD is a highly heritable neurodevelopmental condition. Sugar does not cause ADHD. Screen use may worsen symptoms but does not cause the disorder.' },
  { myth: "People with ADHD just aren't trying hard enough", fact: 'The ADHD brain has a dysregulated activation system. Effort alone cannot reliably overcome a neurological difference in dopamine signalling.' },
  { myth: "ADHD isn't real because they can focus on things they enjoy", fact: 'Hyperfocus is part of the disorder — not evidence against it. Interest-dependent attention IS the dysregulation. Both extremes (hyperfocus and inability to focus) have the same cause.' },
  { myth: 'ADHD is overdiagnosed', fact: 'The picture is mixed: some populations are underdiagnosed (girls, women, adults, lower-income groups), while some male children in higher-income countries have higher diagnosis rates. Estimated prevalence ranges from 5–7% in children and 2–5% in adults, but these figures vary significantly by country and diagnostic criteria. Globally, underdiagnosis is the larger problem.' },
]

export default function BrainPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-indigo-50/30 to-blue-50/20 dark:from-stone-900 dark:via-indigo-950/20 dark:to-blue-950/20 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-sm text-indigo-700 dark:text-indigo-400 font-medium mb-3">Brain &amp; Chemistry</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              How the ADHD brain works
            </h1>
            <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              ADHD involves measurable differences in brain structure, function, and neurochemistry.
              Understanding these differences is not about excuses — it is about accuracy. You cannot
              manage something you do not understand.
            </p>
          </div>
        </div>
      </section>

      {/* Neurotransmitters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">Key neurotransmitters</h2>
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">ADHD primarily involves dysregulation — not deficiency — of these signalling systems.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {brainChemicals.map((c) => (
            <div key={c.name} className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-5 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.emoji}</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100 text-sm">{c.name}</span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brain regions */}
      <section className="bg-stone-50 dark:bg-stone-900/50 border-y border-stone-200 dark:border-stone-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">Brain regions involved in ADHD</h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">Structural and functional neuroimaging studies consistently implicate these regions.</p>
          <div className="space-y-4">
            {regions.map((r) => (
              <div key={r.name} className={`border rounded-2xl p-5 ${r.color}`}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{r.emoji}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className={`font-bold text-sm ${r.textColor}`}>{r.name}</h3>
                      <span className="text-xs text-stone-500 dark:text-stone-400 bg-white/70 dark:bg-stone-800/50 px-2 py-0.5 rounded-full border border-stone-200 dark:border-stone-700">{r.role}</span>
                    </div>
                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{r.adhdImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-6">Common myths — corrected</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {myths.map((m) => (
            <div key={m.myth} className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-5">
              <div className="flex items-start gap-2 mb-3">
                <span className="text-red-400 text-sm font-bold mt-0.5">✕</span>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">{m.myth}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 text-sm font-bold mt-0.5">✓</span>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{m.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex gap-4 flex-wrap">
          <Link href="/symptoms" className="bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-800 transition-colors">
            See all ADHD symptoms →
          </Link>
          <Link href="/sources" className="bg-white dark:bg-stone-800/50 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
            Sources &amp; citations →
          </Link>
        </div>
      </section>
    </div>
  )
}
