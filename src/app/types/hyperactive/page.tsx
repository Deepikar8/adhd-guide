import Link from 'next/link'
import { adhdTypes } from '@/data/adhd-types'

const type = adhdTypes.find((t) => t.id === 'hyperactive')!

const signs = [
  { label: 'Fidgets with hands or feet, squirms in seat', detail: 'Constant physical movement. In adults, this often becomes internal restlessness or leg bouncing.' },
  { label: 'Leaves seat in situations when remaining seated is expected', detail: 'Struggles with meetings, dinners, or classroom settings that require sitting still.' },
  { label: 'Runs about or climbs in inappropriate situations', detail: 'In adolescents and adults, this may be limited to feeling restless.' },
  { label: 'Unable to play or engage in leisure activities quietly', detail: 'Everything is done at high volume or high intensity.' },
  { label: 'Is "on the go", acting as if "driven by a motor"', detail: 'Constant forward momentum; finds it deeply uncomfortable to just do nothing.' },
  { label: 'Talks excessively', detail: 'Often taking over conversations or unable to tolerate silence.' },
  { label: 'Blurts out answers before a question has been completed', detail: 'Impulsivity in social interactions.' },
  { label: 'Difficulty waiting their turn', detail: 'In lines, in traffic, or in conversation.' },
  { label: 'Interrupts or intrudes on others', detail: 'Butting into conversations or games without meaning to be rude, driven by impulse.' },
]

const whoGetsThis = [
  { heading: 'Young boys', text: 'This presentation is overwhelmingly diagnosed in young children, predominantly boys. It is the stereotypical "ADHD kid" profile.' },
  { heading: 'Rare in adults', text: 'As the prefrontal cortex develops and societal demands increase, purely hyperactive individuals almost always begin to show inattentive symptoms, shifting their diagnosis to Combined type.' },
  { heading: 'Internalized restlessness', text: 'For those who retain strong hyperactive traits into adulthood, the physical running and climbing usually transitions into a profound internal restlessness and chronic overworking.' },
]

export default function HyperactivePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-rose-50/30 to-rose-50/10 dark:from-stone-900 dark:via-rose-950/20 dark:to-rose-950/10 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-sm text-rose-700 dark:text-rose-400 font-medium mb-3">
            <Link href="/types" className="hover:underline">ADHD Types</Link> / Hyperactive
          </div>
          <div className="flex items-start gap-4 max-w-2xl">
            <span className="text-5xl mt-1">{type.emoji}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-3">{type.name}</h1>
              <p className="text-lg text-rose-700 dark:text-rose-400 font-medium mb-3">{type.headline}</p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{type.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">The DSM-5 criteria — in plain language</h2>
        <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">6+ of the following in children (under 17); 5+ in adults. Present for 6+ months, in 2+ settings, causing impairment.</p>
        <div className="space-y-3">
          {signs.map((s) => (
            <div key={s.label} className="bg-white dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 rounded-xl p-4 flex gap-3">
              <span className="text-rose-400 mt-0.5">◆</span>
              <div>
                <div className="text-sm font-medium text-stone-800 dark:text-stone-200">{s.label}</div>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-rose-50 dark:bg-rose-950/20 border-y border-rose-100 dark:border-rose-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">The developmental pathway</h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">Why this is rarely an adult diagnosis.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {whoGetsThis.map((item) => (
              <div key={item.heading} className="bg-white dark:bg-stone-800/50 rounded-xl p-5 border border-rose-200 dark:border-rose-800/40">
                <h3 className="font-semibold text-rose-800 dark:text-rose-300 mb-2 text-sm">{item.heading}</h3>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white/70 dark:bg-stone-800/50 border border-rose-100 dark:border-rose-800/40 rounded-xl p-5 text-sm text-rose-900 dark:text-rose-200 mb-6">
          <strong>Key fact:</strong> Physical hyperactivity tends to decrease significantly by late adolescence. What remains is impulsivity and an internal feeling of being unsettled or restless.
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/types" className="bg-rose-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-rose-800 transition-colors">
            See all presentations →
          </Link>
          <Link href="/symptoms" className="bg-white dark:bg-stone-800/50 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
            Explore symptoms →
          </Link>
        </div>
      </section>
    </div>
  )
}
