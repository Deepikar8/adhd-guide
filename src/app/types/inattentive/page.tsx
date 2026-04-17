import Link from 'next/link'
import { adhdTypes } from '@/data/adhd-types'

const type = adhdTypes.find((t) => t.id === 'inattentive')!

const signs = [
  { label: 'Often fails to give close attention to details', detail: 'Makes careless mistakes in schoolwork or at work — not due to lack of care, but due to attention regulation.' },
  { label: 'Difficulty sustaining attention on tasks', detail: 'Particularly on tasks that are low-interest or repetitive. Not a problem with high-interest, novel, or urgent tasks.' },
  { label: 'Does not seem to listen when spoken to directly', detail: "The mind drifts — often mid-sentence, mid-conversation. Not deliberate; the brain's attention regulation is not holding." },
  { label: 'Does not follow through on instructions', detail: 'Starts tasks and abandons them. Often misinterpreted as defiance or carelessness.' },
  { label: 'Difficulty organising tasks and activities', detail: 'Managing time, keeping materials in order, meeting deadlines — all require executive function that ADHD impairs.' },
  { label: 'Avoids tasks requiring sustained mental effort', detail: 'Homework, reports, long forms. Avoidance is a rational response to tasks the brain struggles to sustain.' },
  { label: 'Loses things necessary for tasks', detail: 'Keys, phone, wallet, homework — working memory fails to track where things were placed.' },
  { label: 'Easily distracted by extraneous stimuli', detail: 'Including internal stimuli — thoughts, memories, tangential ideas — not just external noise.' },
  { label: 'Forgetful in daily activities', detail: 'Appointments, chores, returning calls. Not negligence; the memory system is genuinely unreliable in this domain.' },
]

const whoMissed = [
  { heading: 'Girls and women', text: 'Inattentive ADHD is dramatically underdiagnosed in females. Girls are more likely to internalise symptoms — anxiety, low self-esteem, self-blame — rather than externalise them as disruptive behaviour. Many receive anxiety or depression diagnoses first, or never receive a diagnosis at all.' },
  { heading: 'High achievers', text: "High intelligence can mask inattentive ADHD for years — or decades. A student can be chronically disorganised, perpetually under-performing relative to ability, exhausted by the effort of compensating, and still be told they're doing fine because their grades are acceptable." },
  { heading: 'Adults diagnosed late', text: 'Inattentive ADHD without significant hyperactivity does not get referred in childhood. Many adults only get diagnosed after a child is diagnosed, after a crisis, or after learning what ADHD actually looks like in adults.' },
]

export default function InattentivePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-indigo-50/30 to-indigo-50/10 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-sm text-indigo-700 font-medium mb-3">
            <Link href="/types" className="hover:underline">ADHD Types</Link> / Inattentive
          </div>
          <div className="flex items-start gap-4 max-w-2xl">
            <span className="text-5xl mt-1">{type.emoji}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">{type.name}</h1>
              <p className="text-lg text-indigo-700 font-medium mb-3">{type.headline}</p>
              <p className="text-stone-600 leading-relaxed">{type.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">The DSM-5 criteria — in plain language</h2>
        <p className="text-stone-500 text-sm mb-6">6+ of the following in children (under 17); 5+ in adults. Present for 6+ months, in 2+ settings, causing impairment.</p>
        <div className="space-y-3">
          {signs.map((s) => (
            <div key={s.label} className="bg-white border border-stone-200 rounded-xl p-4 flex gap-3">
              <span className="text-indigo-400 mt-0.5">◆</span>
              <div>
                <div className="text-sm font-medium text-stone-800">{s.label}</div>
                <p className="text-xs text-stone-500 mt-1 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-50 border-y border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-bold text-stone-900 mb-2">Who gets missed</h2>
          <p className="text-stone-500 text-sm mb-6">Inattentive ADHD is the most underdiagnosed presentation. Here is why.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {whoMissed.map((item) => (
              <div key={item.heading} className="bg-white rounded-xl p-5 border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2 text-sm">{item.heading}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white/70 border border-indigo-100 rounded-xl p-5 text-sm text-indigo-900 mb-6">
          <strong>Key fact:</strong> A person with inattentive ADHD can hyperfocus deeply on tasks they find interesting. This is often used to argue they &ldquo;can&apos;t really have ADHD.&rdquo;
          It is actually consistent with the diagnosis — attention dysregulation goes both ways.
        </div>
        <div className="flex gap-4 flex-wrap">
          <Link href="/symptoms" className="bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-800 transition-colors">
            See all ADHD symptoms →
          </Link>
          <Link href="/what-helps" className="bg-white border border-stone-300 text-stone-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors">
            What helps →
          </Link>
        </div>
      </section>
    </div>
  )
}
