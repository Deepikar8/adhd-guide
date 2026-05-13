import Link from 'next/link'
import { adhdTypes } from '@/data/adhd-types'
import { brainChemicals } from '@/data/brain-chemicals'
import { FadeIn } from '@/components/FadeIn'

const whyMatters = [
  {
    icon: '🧠',
    title: 'ADHD is neurological, not behavioural',
    body: 'ADHD involves measurable differences in dopamine and norepinephrine regulation in the prefrontal cortex. It is not a matter of effort, discipline, or character.',
  },
  {
    icon: '⏱️',
    title: 'It persists across a lifetime',
    body: 'ADHD does not end at 18. Most children with ADHD carry it into adulthood. The presentation changes, but the underlying neurology does not.',
  },
  {
    icon: '🌊',
    title: 'It looks different in different people',
    body: 'Girls and women are chronically underdiagnosed. Adults mask symptoms for decades. Late diagnosis — with all the accumulated self-blame — is extremely common.',
  },
  {
    icon: '📖',
    title: 'Plain language matters',
    body: 'Clinical literature exists but is largely inaccessible. This guide translates what the research actually shows — without jargon, without minimising how hard ADHD actually is.',
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <FadeIn>
        <section className="bg-gradient-to-br from-stone-50 via-indigo-50/30 to-violet-50/30 dark:from-stone-900 dark:via-indigo-950/20 dark:to-violet-950/20 border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-full px-4 py-1.5 text-sm text-stone-700 dark:text-stone-300 mb-6">
                <span>🧩</span>
                <span>Evidence-based · All ages · Plain language · No judgment</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100 leading-tight mb-6">
                What is actually happening<br />
                <span className="text-indigo-700 dark:text-indigo-400">in the ADHD brain?</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-700 dark:text-stone-300 leading-relaxed mb-8 max-w-2xl">
                ADHD is not an attention problem — it is a regulation problem. Dopamine, norepinephrine,
                executive function, working memory, time perception, emotional regulation. This guide
                explains what is actually happening, at every age, in plain language.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/age-groups" className="bg-indigo-700 dark:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-800 dark:hover:bg-indigo-500 transition-colors">
                  See all age groups
                </Link>
                <Link href="/brain" className="bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 px-6 py-3 rounded-xl font-medium hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
                  How the ADHD brain works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Two types */}
      <FadeIn delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">The three presentations</h2>
            <p className="text-stone-500 dark:text-stone-400">All three share the same neurological foundation — but the surface symptoms differ significantly.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {adhdTypes.map((type) => {
              const colors: Record<string, any> = {
                inattentive: {
                  bg: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/50',
                  text: 'text-indigo-800 dark:text-indigo-300',
                  highlight: 'text-indigo-800 dark:text-indigo-400',
                  btn: 'bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-500'
                },
                combined: {
                  bg: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800/50',
                  text: 'text-violet-800 dark:text-violet-300',
                  highlight: 'text-violet-800 dark:text-violet-400',
                  btn: 'bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-500'
                },
                hyperactive: {
                  bg: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/50',
                  text: 'text-rose-800 dark:text-rose-300',
                  highlight: 'text-rose-800 dark:text-rose-400',
                  btn: 'bg-rose-700 hover:bg-rose-800 dark:bg-rose-600 dark:hover:bg-rose-500'
                }
              };
              const c = colors[type.id] || colors.inattentive;
              
              return (
              <div key={type.id} className={`border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-md ${c.bg}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{type.emoji}</span>
                  <div>
                    <h3 className={`text-xl font-bold ${c.text}`}>{type.name}</h3>
                    <p className="text-sm text-stone-500 dark:text-stone-400">{type.headline}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-5">{type.description}</p>

                {/* Stage pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {type.stages.map((s) => (
                    <span key={s.name} className="inline-flex items-center gap-1 bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-full px-2.5 py-1 text-xs text-stone-600 dark:text-stone-300">
                      <span>{s.emoji}</span>
                      <span>{s.name}</span>
                      <span className="text-stone-400 dark:text-stone-500">{s.ageRange}</span>
                    </span>
                  ))}
                </div>

                {/* Highlight callout */}
                <div className="bg-white/70 dark:bg-stone-900/50 rounded-xl p-3 mb-5 text-xs text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                  <span className={`font-semibold ${c.highlight}`}>{type.highlight.label}: </span>
                  {type.highlight.text}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/types/${type.id}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white ${c.btn}`}
                  >
                    {type.shortName} →
                  </Link>
                </div>
              </div>
            )})}
          </div>
        </section>
      </FadeIn>

      {/* Age groups strip */}
      <FadeIn delay={0.2}>
        <section className="bg-white dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">ADHD across a lifetime</h2>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">The same neurology — different demands, different presentations at every stage.</p>
              </div>
              <Link href="/age-groups" className="text-sm text-indigo-700 dark:text-indigo-400 hover:underline font-medium shrink-0 ml-4">
                Full breakdown →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
              {[
                { emoji: '🌱', label: 'Early childhood', sub: '2–5', color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50 text-green-900 dark:text-green-300' },
                { emoji: '🌸', label: 'School age', sub: '6–12', color: 'bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800/50 text-pink-900 dark:text-pink-300' },
                { emoji: '🌿', label: 'Teens', sub: '13–17', color: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-300' },
                { emoji: '🌺', label: 'Young adults', sub: '18–30', color: 'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800/50 text-violet-900 dark:text-violet-300' },
                { emoji: '🍂', label: 'Adults', sub: '31–55', color: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50 text-amber-900 dark:text-amber-300' },
                { emoji: '🌾', label: 'Later life', sub: '55+', color: 'bg-stone-50 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-300' },
              ].map((stage) => (
                <Link key={stage.label} href="/age-groups" className={`border rounded-xl p-4 text-center hover:shadow-sm transition-all hover:-translate-y-1 ${stage.color}`}>
                  <div className="text-2xl mb-2">{stage.emoji}</div>
                  <div className="text-xs font-semibold">{stage.label}</div>
                  <div className="text-[11px] opacity-70 mt-0.5">{stage.sub}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Brain chemicals */}
      <FadeIn delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">It starts with brain chemistry</h2>
            <p className="text-stone-500 dark:text-stone-400 max-w-2xl">
              ADHD is not about trying harder. It is about how the brain regulates dopamine, norepinephrine,
              and related systems — the same systems that drive motivation, attention, and impulse control.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brainChemicals.map((c) => (
              <Link key={c.name} href={c.href} className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-4 hover:shadow-sm hover:border-stone-300 dark:hover:border-stone-500 transition-all hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{c.emoji}</span>
                  <div>
                    <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm mb-1">{c.name}</div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{c.note}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link href="/brain" className="text-sm text-indigo-700 dark:text-indigo-400 hover:underline font-medium">
              See how the ADHD brain works in full →
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* Why it matters */}
      <FadeIn delay={0.2}>
        <section className="bg-stone-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <h2 className="text-2xl font-bold mb-2">Why ADHD literacy matters</h2>
            <p className="text-stone-400 mb-8 max-w-xl">Most people misunderstand ADHD — including many people who have it. That misunderstanding costs years.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {whyMatters.map((item) => (
                <div key={item.title} className="bg-stone-800 rounded-xl p-5 hover:bg-stone-800/80 transition-colors">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <div className="font-semibold text-white mb-2 text-sm">{item.title}</div>
                  <p className="text-stone-400 text-xs leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Quick links */}
      <FadeIn delay={0.1}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-8">Where do you want to start?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/symptoms', emoji: '🌊', title: 'Symptom guide', desc: '8 ADHD symptom clusters explained — including the ones no one talks about', color: 'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100' },
              { href: '/comorbidities', emoji: '🔗', title: 'Comorbidities', desc: 'Anxiety, depression, autism, and other conditions that travel with ADHD', color: 'bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800/50 hover:bg-teal-100 dark:hover:bg-teal-900/40 text-teal-900 dark:text-teal-100' },
              { href: '/diagnosis', emoji: '📋', title: 'Diagnostic journey', desc: 'What to expect from realization to assessment and titration', color: 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/50 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-rose-900 dark:text-rose-100' },
              { href: '/what-helps', emoji: '💊', title: 'What helps', desc: 'Medication, therapy, lifestyle, and tools — evidence-rated', color: 'bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800/50 hover:bg-violet-100 dark:hover:bg-violet-900/40 text-violet-900 dark:text-violet-100' },
              { href: '/age-groups', emoji: '📅', title: 'By age group', desc: 'How ADHD presents and is managed from early childhood to later life', color: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100' },
              { href: '/brain', emoji: '🧠', title: 'The ADHD brain', desc: 'Dopamine, norepinephrine, prefrontal cortex — what is actually different', color: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/50 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-amber-900 dark:text-amber-100' },
            ].map((card) => (
              <Link key={card.href} href={card.href} className={`border rounded-xl p-5 transition-all hover:-translate-y-1 hover:shadow-md group ${card.color}`}>
                <div className="text-3xl mb-3">{card.emoji}</div>
                <h3 className="font-semibold mb-1.5 text-sm">{card.title}</h3>
                <p className="text-xs opacity-80 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Disclaimer */}
      <FadeIn delay={0.2}>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
          <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-xl p-5 text-sm text-indigo-800 dark:text-indigo-300">
            <strong>This site is for education only.</strong> Nothing here is medical advice.
            All diagnosis and treatment decisions should be made with a qualified healthcare provider.
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
