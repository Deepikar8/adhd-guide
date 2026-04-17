import Link from 'next/link'
import { adhdTypes } from '@/data/adhd-types'

const type = adhdTypes.find((t) => t.id === 'combined')!

const hyperactiveSigns = [
  { label: 'Fidgets, taps hands or feet, squirms in seat', detail: 'Physical restlessness that the person often does not notice — or cannot stop.' },
  { label: 'Leaves seat in situations when remaining seated is expected', detail: 'In children: classrooms. In adults: meetings, restaurants, long journeys.' },
  { label: 'Runs or climbs in situations where inappropriate', detail: 'In adults, this often presents as extreme internal restlessness rather than physical movement.' },
  { label: "Unable to play or engage in leisure activities quietly", detail: 'Noise, movement, and stimulation are sought; quiet activities feel unbearable.' },
  { label: '"On the go" — acts as if driven by a motor', detail: 'Constant need for movement or activity. Difficulty being still even when choosing to be.' },
  { label: 'Talks excessively', detail: 'Difficulty modulating how much they are talking; interrupting their own topics.' },
]

const impulsiveSigns = [
  { label: 'Blurts out answers before questions are completed', detail: 'The thought arrives and exits before the brain has time to evaluate whether it should.' },
  { label: 'Difficulty waiting their turn', detail: 'In conversations, games, queues. The waiting feels genuinely intolerable, not just annoying.' },
  { label: 'Interrupts or intrudes on others', detail: 'Conversations, activities, jokes. Often aware of it afterward; often unable to stop in the moment.' },
]

const adultShift = [
  { heading: 'Hyperactivity internalises', text: 'Visible running and climbing become internal restlessness, racing thoughts, inability to sit still mentally. From the outside, it is invisible. From the inside, it is exhausting.' },
  { heading: 'Impulsivity becomes costly', text: 'Impulsive spending, relationship decisions, job changes, risk-taking. The consequences are larger in adulthood and harder to undo.' },
  { heading: 'Emotional dysregulation remains', text: 'Rejection sensitivity, frustration intolerance, and rapid mood shifts often persist — or worsen — through adulthood if unmanaged.' },
]

export default function CombinedPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-violet-50/30 to-violet-50/10 dark:from-stone-900 dark:via-violet-950/20 dark:to-violet-950/10 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-sm text-violet-700 dark:text-violet-400 font-medium mb-3">
            <Link href="/types" className="hover:underline">ADHD Types</Link> / Hyperactive &amp; Combined
          </div>
          <div className="flex items-start gap-4 max-w-2xl">
            <span className="text-5xl mt-1">{type.emoji}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-3">{type.name}</h1>
              <p className="text-lg text-violet-700 dark:text-violet-400 font-medium mb-3">{type.headline}</p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{type.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">Hyperactivity symptoms</h2>
            <div className="space-y-3">
              {hyperactiveSigns.map((s) => (
                <div key={s.label} className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-4 flex gap-3">
                  <span className="text-violet-400 mt-0.5">◆</span>
                  <div>
                    <div className="text-sm font-medium text-stone-800 dark:text-stone-200">{s.label}</div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-4">Impulsivity symptoms</h2>
            <div className="space-y-3">
              {impulsiveSigns.map((s) => (
                <div key={s.label} className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-4 flex gap-3">
                  <span className="text-violet-400 mt-0.5">◆</span>
                  <div>
                    <div className="text-sm font-medium text-stone-800 dark:text-stone-200">{s.label}</div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800/40 rounded-xl p-4 text-xs text-stone-600 dark:text-stone-400">
              <strong className="text-violet-800 dark:text-violet-300">Combined type</strong> also meets criteria for inattentive symptoms (6+ or 5+ in adults).
              See the <Link href="/types/inattentive" className="text-violet-700 underline">inattentive page</Link> for those criteria.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-50 dark:bg-violet-950/20 border-y border-violet-100 dark:border-violet-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">How combined ADHD changes in adulthood</h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">The hyperactivity often reduces in visibility. The impairment does not.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {adultShift.map((item) => (
              <div key={item.heading} className="bg-white dark:bg-stone-800/50 rounded-xl p-5 border border-violet-200 dark:border-violet-800/40">
                <h3 className="font-semibold text-violet-800 dark:text-violet-300 mb-2 text-sm">{item.heading}</h3>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-4 flex-wrap">
          <Link href="/symptoms" className="bg-violet-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-violet-800 transition-colors">
            See all ADHD symptoms →
          </Link>
          <Link href="/what-helps" className="bg-white dark:bg-stone-800/50 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
            What helps →
          </Link>
        </div>
      </section>
    </div>
  )
}
