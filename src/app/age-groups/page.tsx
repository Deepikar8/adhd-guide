import { ageGroups } from '@/data/age-groups'
import Link from 'next/link'

export default function AgeGroupsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-stone-50 via-emerald-50/30 to-green-50/20 dark:from-stone-900 dark:via-emerald-950/20 dark:to-green-950/20 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <div className="text-sm text-emerald-700 font-medium mb-3">Age Groups</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              ADHD across a lifetime
            </h1>
            <p className="text-lg text-stone-700 leading-relaxed">
              The neurology of ADHD does not change — but the demands placed on it do. Each life stage brings
              different expectations, different contexts, and different ways the same underlying differences
              manifest and impair.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-6">
          {ageGroups.map((group) => (
            <div key={group.id} className={`border rounded-2xl p-6 sm:p-8 ${group.color}`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{group.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h2 className="text-xl font-bold text-stone-900">{group.name}</h2>
                    <span className="text-sm text-stone-500 bg-white/60 px-2.5 py-0.5 rounded-full border border-stone-200">{group.ageRange}</span>
                  </div>
                  <p className="text-sm text-stone-600 italic">{group.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed mb-5">{group.overview}</p>
              <div className="mb-4">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">What this looks like</div>
                <ul className="space-y-1.5">
                  {group.keyFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="text-stone-300 mt-1.5 shrink-0">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-bold mb-3">One thing that doesn&apos;t change across age groups</h2>
          <p className="text-stone-400 leading-relaxed max-w-2xl">
            The core neurology — dopamine and norepinephrine dysregulation in the prefrontal cortex — is
            the same from childhood through later life. What changes is what society expects of the
            person, how much structure is externally provided, and how much the person has developed
            their own compensating strategies. When external structure disappears (retirement, university,
            job change), symptoms that seemed managed often resurface.
          </p>
          <div className="mt-6">
            <Link href="/brain" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium hover:underline">
              How the ADHD brain works →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-sm text-indigo-800">
          <strong>This site is for education only.</strong> ADHD diagnosis at any age requires a qualified clinician.
          Age-related information here is based on clinical literature and research, not individual assessment.
        </div>
      </section>
    </div>
  )
}
