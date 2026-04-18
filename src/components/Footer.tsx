import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🧩</span>
              <span className="font-semibold text-stone-800 dark:text-stone-100">ADHD Guide</span>
            </div>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
              Evidence-based, plain-language guides to ADHD across all life stages —
              for everyone who lives with it, loves someone who does, or is just finding out.
            </p>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-3">ADHD Types</h3>
            <ul className="space-y-2 text-stone-500 dark:text-stone-400">
              <li><Link href="/types" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Types overview</Link></li>
              <li><Link href="/types/inattentive" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Inattentive (ADHD-PI)</Link></li>
              <li><Link href="/types/combined" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Combined (ADHD-C)</Link></li>
              <li><Link href="/types/hyperactive" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Hyperactive (ADHD-PH)</Link></li>
              <li><Link href="/age-groups" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Age groups</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-3">Symptoms & Help</h3>
            <ul className="space-y-2 text-stone-500 dark:text-stone-400">
              <li><Link href="/symptoms" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">All symptoms</Link></li>
              <li><Link href="/brain" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Brain & chemistry</Link></li>
              <li><Link href="/comorbidities" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Comorbidities</Link></li>
              <li><Link href="/diagnosis" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Diagnostic journey</Link></li>
              <li><Link href="/what-helps" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">What helps</Link></li>
              <li><Link href="/sources" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Sources</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 dark:text-stone-300 mb-3">About</h3>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-xs">
              This site is for educational purposes only and does not constitute medical advice.
              All content is based on peer-reviewed research, clinical guidelines (NICE, DSM-5-TR,
              Endocrine Society), and publicly available evidence.
            </p>
            <p className="text-stone-400 dark:text-stone-500 text-xs mt-3 leading-relaxed">
              Always consult a qualified healthcare provider for diagnosis and treatment decisions.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400 dark:text-stone-500">
            Evidence-based ADHD education. Not medical advice.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 dark:text-stone-500">
            <Link href="/sources" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">Sources & Citations</Link>
            <Link href="/age-groups" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">Age Groups</Link>
            <span className="text-stone-300 dark:text-stone-700 hidden sm:inline">·</span>
            <span>Built by{' '}
              <a
                href="https://www.linkedin.com/in/deepika-rudra-murthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 dark:text-stone-400 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors underline underline-offset-2"
              >
                Deepika Rudra Murthy
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
