export interface BrainChemical {
  name: string
  emoji: string
  note: string
  href: string
}

export const brainChemicals: BrainChemical[] = [
  {
    name: 'Dopamine',
    emoji: '⚡',
    note: 'The reward signal. ADHD involves impaired dopamine signalling — not a deficiency per se, but dysregulated release and uptake that makes it hard to initiate tasks without immediate reward.',
    href: '/brain',
  },
  {
    name: 'Norepinephrine',
    emoji: '🎯',
    note: 'Alertness and executive attention. Works alongside dopamine in the prefrontal cortex. Low norepinephrine activity impairs working memory, attention regulation, and impulse control.',
    href: '/brain',
  },
  {
    name: 'Serotonin',
    emoji: '😌',
    note: 'Mood and emotional regulation. Serotonin dysregulation contributes to the emotional dysregulation, irritability, and rejection sensitivity seen in ADHD — independent of co-occurring depression.',
    href: '/brain',
  },
  {
    name: 'GABA',
    emoji: '🛑',
    note: 'The brain\'s brake pedal. Insufficient GABA activity is associated with hyperactivity and impulsivity — the nervous system struggles to inhibit inappropriate responses.',
    href: '/brain',
  },
  {
    name: 'Glutamate',
    emoji: '🔗',
    note: 'Working memory and cognitive flexibility. Glutamate-dopamine interactions in the prefrontal cortex are central to executive function, and disruptions contribute to ADHD\'s cognitive profile.',
    href: '/brain',
  },
  {
    name: 'Acetylcholine',
    emoji: '🧠',
    note: 'Attention networks and learning. Regulates the cortical arousal needed for focused attention. Low acetylcholine activity makes it harder to filter irrelevant stimuli and consolidate new information.',
    href: '/brain',
  },
]
