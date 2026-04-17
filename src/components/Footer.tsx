import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🧩</span>
              <span className="font-semibold text-stone-800">ADHD Guide</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Evidence-based, plain-language guides to ADHD across all life stages —
              for everyone who lives with it, loves someone who does, or is just finding out.
            </p>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 mb-3">ADHD Types</h3>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/types" className="hover:text-stone-800 transition-colors">Types overview</Link></li>
              <li><Link href="/types/inattentive" className="hover:text-stone-800 transition-colors">Inattentive (ADHD-PI)</Link></li>
              <li><Link href="/types/combined" className="hover:text-stone-800 transition-colors">Hyperactive / Combined</Link></li>
              <li><Link href="/age-groups" className="hover:text-stone-800 transition-colors">Age groups</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 mb-3">Symptoms & Help</h3>
            <ul className="space-y-2 text-stone-500">
              <li><Link href="/symptoms" className="hover:text-stone-800 transition-colors">All symptoms</Link></li>
              <li><Link href="/brain" className="hover:text-stone-800 transition-colors">Brain & chemistry</Link></li>
              <li><Link href="/what-helps" className="hover:text-stone-800 transition-colors">What helps</Link></li>
              <li><Link href="/sources" className="hover:text-stone-800 transition-colors">Sources</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="font-semibold text-stone-700 mb-3">About</h3>
            <p className="text-stone-500 leading-relaxed text-xs">
              This site is for educational purposes only and does not constitute medical advice.
              All content is based on peer-reviewed research, clinical guidelines (NICE, DSM-5-TR,
              Endocrine Society), and publicly available evidence.
            </p>
            <p className="text-stone-400 text-xs mt-3 leading-relaxed">
              Always consult a qualified healthcare provider for diagnosis and treatment decisions.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-400">
            Evidence-based ADHD education. Not medical advice.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
            <Link href="/sources" className="hover:text-stone-600 transition-colors">Sources & Citations</Link>
            <Link href="/age-groups" className="hover:text-stone-600 transition-colors">Age Groups</Link>
            <span className="text-stone-300 hidden sm:inline">·</span>
            <span>Built by{' '}
              <a
                href="https://www.linkedin.com/in/deepika-rudra-murthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-indigo-700 transition-colors underline underline-offset-2"
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
