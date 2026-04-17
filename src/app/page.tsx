import Link from 'next/link'
import { adhdTypes } from '@/data/adhd-types'
import { brainChemicals } from '@/data/brain-chemicals'

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
      <section className="bg-gradient-to-br from-stone-50 via-indigo-50/30 to-violet-50/30 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-1.5 text-sm text-stone-600 mb-6">
              <span>🧩</span>
              <span>Evidence-based · All ages · Plain language · No judgment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-6">
              What is actually happening<br />
              <span className="text-indigo-700">in the ADHD brain?</span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl">
              ADHD is not a attention problem — it is a regulation problem. Dopamine, norepinephrine,
              executive function, working memory, time perception, emotional regulation. This guide
              explains what is actually happening, at every age, in plain language.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/age-groups" className="bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-800 transition-colors">
                See all age groups
              </Link>
              <Link href="/brain" className="bg-white border border-stone-300 text-stone-700 px-6 py-3 rounded-xl font-medium hover:bg-stone-50 transition-colors">
                How the ADHD brain works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">The two main presentations</h2>
          <p className="text-stone-500">Both share the same neurological foundation — but the surface symptoms differ significantly.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {adhdTypes.map((type) => (
            <div key={type.id} className={`border rounded-2xl p-6 ${type.id === 'inattentive' ? 'bg-indigo-50 border-indigo-200' : 'bg-violet-50 border-violet-200'}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{type.emoji}</span>
                <div>
                  <h3 className={`text-xl font-bold ${type.id === 'inattentive' ? 'text-indigo-800' : 'text-violet-800'}`}>{type.name}</h3>
                  <p className="text-sm text-stone-500">{type.headline}</p>
                </div>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">{type.description}</p>

              {/* Stage pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {type.stages.map((s) => (
                  <span key={s.name} className="inline-flex items-center gap-1 bg-white border border-stone-200 rounded-full px-2.5 py-1 text-xs text-stone-600">
                    <span>{s.emoji}</span>
                    <span>{s.name}</span>
                    <span className="text-stone-400">{s.ageRange}</span>
                  </span>
                ))}
              </div>

              {/* Highlight callout */}
              <div className="bg-white/70 rounded-xl p-3 mb-5 text-xs text-stone-600 border border-stone-200">
                <span className={`font-semibold ${type.id === 'inattentive' ? 'text-indigo-800' : 'text-violet-800'}`}>{type.highlight.label}: </span>
                {type.highlight.text}
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/types/${type.id}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white ${type.id === 'inattentive' ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-violet-700 hover:bg-violet-800'}`}
                >
                  {type.shortName} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Age groups strip */}
      <section className="bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">ADHD across a lifetime</h2>
              <p className="text-stone-500 text-sm mt-1">The same neurology — different demands, different presentations at every stage.</p>
            </div>
            <Link href="/age-groups" className="text-sm text-indigo-700 hover:underline font-medium shrink-0 ml-4">
              Full breakdown →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            {[
              { emoji: '🌱', label: 'Early childhood', sub: '2–5', color: 'bg-green-50 border-green-200' },
              { emoji: '🌸', label: 'School age', sub: '6–12', color: 'bg-pink-50 border-pink-200' },
              { emoji: '🌿', label: 'Teens', sub: '13–17', color: 'bg-emerald-50 border-emerald-200' },
              { emoji: '🌺', label: 'Young adults', sub: '18–30', color: 'bg-violet-50 border-violet-200' },
              { emoji: '🍂', label: 'Adults', sub: '31–55', color: 'bg-amber-50 border-amber-200' },
              { emoji: '🌾', label: 'Later life', sub: '55+', color: 'bg-stone-50 border-stone-300' },
            ].map((stage) => (
              <Link key={stage.label} href="/age-groups" className={`border rounded-xl p-4 text-center hover:shadow-sm transition-all ${stage.color}`}>
                <div className="text-2xl mb-2">{stage.emoji}</div>
                <div className="text-xs font-semibold text-stone-800">{stage.label}</div>
                <div className="text-[11px] text-stone-500 mt-0.5">{stage.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brain chemicals */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-2">It starts with brain chemistry</h2>
          <p className="text-stone-500 max-w-2xl">
            ADHD is not about trying harder. It is about how the brain regulates dopamine, norepinephrine,
            and related systems — the same systems that drive motivation, attention, and impulse control.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {brainChemicals.map((c) => (
            <Link key={c.name} href={c.href} className="bg-white border border-stone-200 rounded-xl p-4 hover:shadow-sm hover:border-stone-300 transition-all">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{c.emoji}</span>
                <div>
                  <div className="font-semibold text-stone-900 text-sm mb-1">{c.name}</div>
                  <p className="text-xs text-stone-500 leading-relaxed">{c.note}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/brain" className="text-sm text-indigo-700 hover:underline font-medium">
            See how the ADHD brain works in full →
          </Link>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold mb-2">Why ADHD literacy matters</h2>
          <p className="text-stone-400 mb-8 max-w-xl">Most people misunderstand ADHD — including many people who have it. That misunderstanding costs years.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {whyMatters.map((item) => (
              <div key={item.title} className="bg-stone-800 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-semibold text-white mb-2 text-sm">{item.title}</div>
                <p className="text-stone-400 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-stone-900 mb-8">Where do you want to start?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/symptoms', emoji: '🌊', title: 'Symptom guide', desc: '8 ADHD symptom clusters explained — including the ones no one talks about', color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100' },
            { href: '/what-helps', emoji: '💊', title: 'What helps', desc: 'Medication, therapy, lifestyle, and tools — evidence-rated', color: 'bg-violet-50 border-violet-200 hover:bg-violet-100' },
            { href: '/age-groups', emoji: '📅', title: 'By age group', desc: 'How ADHD presents and is managed from early childhood to later life', color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100' },
            { href: '/brain', emoji: '🧠', title: 'The ADHD brain', desc: 'Dopamine, norepinephrine, prefrontal cortex — what is actually different', color: 'bg-amber-50 border-amber-200 hover:bg-amber-100' },
          ].map((card) => (
            <Link key={card.href} href={card.href} className={`border rounded-xl p-5 transition-colors group ${card.color}`}>
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="font-semibold text-stone-900 mb-1.5 text-sm group-hover:text-stone-700">{card.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-sm text-indigo-800">
          <strong>This site is for education only.</strong> Nothing here is medical advice.
          All diagnosis and treatment decisions should be made with a qualified healthcare provider.
        </div>
      </section>
    </div>
  )
}
