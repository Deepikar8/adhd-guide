export type EvidenceTier = 'strong' | 'moderate' | 'limited'

export interface Intervention {
  id: string
  name: string
  emoji: string
  category: 'medication' | 'therapy' | 'lifestyle' | 'tools'
  evidenceTier: EvidenceTier
  tagline: string
  description: string
  bestFor: string[]
  notes: string
  color: string
}

export const interventions: Intervention[] = [
  {
    id: 'stimulants',
    name: 'Stimulant Medication',
    emoji: '💊',
    category: 'medication',
    evidenceTier: 'strong',
    tagline: 'The most evidence-backed intervention for ADHD',
    description:
      'Methylphenidate (Ritalin, Concerta) and amphetamine-based medications (Adderall, Vyvanse) are the most studied and consistently effective treatments for ADHD. They work by increasing dopamine and norepinephrine availability in the prefrontal cortex.',
    bestFor: ['Executive dysfunction', 'Attention regulation', 'Hyperactivity/impulsivity', 'Working memory', 'Time blindness'],
    notes: 'Stimulants produce a measurable clinical response in approximately 70–80% of people with ADHD, though this reflects any improvement — substantial symptom reduction with good tolerability is closer to 50–60%. Finding the right medication and dose requires titration. Side effects (appetite, sleep, cardiovascular) should be monitored.',
    color: 'indigo',
  },
  {
    id: 'non-stimulants',
    name: 'Non-Stimulant Medication',
    emoji: '🧪',
    category: 'medication',
    evidenceTier: 'strong',
    tagline: 'Effective alternatives when stimulants are unsuitable',
    description:
      "Atomoxetine (Strattera), guanfacine (Intuniv), and clonidine are non-stimulant options. They work on norepinephrine rather than dopamine. They don't carry abuse potential and may suit people with anxiety, tics, or cardiovascular concerns.",
    bestFor: ['ADHD with anxiety', 'ADHD with tics', 'Emotional dysregulation', 'When stimulants cause significant side effects'],
    notes: 'Slower to take effect (weeks) and generally show smaller effect sizes than stimulants for attention symptoms in clinical trials, though individual responses vary. May be equally or more effective for hyperactivity-impulsivity in some people. Useful as adjuncts or primary treatment when stimulants are contraindicated.',
    color: 'blue',
  },
  {
    id: 'cbt',
    name: 'Cognitive Behavioural Therapy (CBT)',
    emoji: '🧠',
    category: 'therapy',
    evidenceTier: 'strong',
    tagline: 'Building skills that ADHD makes harder to develop naturally',
    description:
      'ADHD-specific CBT addresses the thought patterns and behavioural habits that develop around a lifetime of ADHD impairment — procrastination cycles, avoidance, negative self-belief, and coping deficits. Most effective as a complement to medication.',
    bestFor: ['Procrastination and avoidance', 'Self-esteem and shame', 'Emotional dysregulation', 'Anxiety and depression comorbidity'],
    notes: 'Standard CBT often does not work well for ADHD — therapists need to use ADHD-adapted protocols (Safren, Ramsey, Solanto). Skills-based, structured, practical.',
    color: 'violet',
  },
  {
    id: 'coaching',
    name: 'ADHD Coaching',
    emoji: '🎯',
    category: 'therapy',
    evidenceTier: 'moderate',
    tagline: 'External scaffolding for executive function',
    description:
      "ADHD coaches work on practical day-to-day systems — time management, task initiation, organisation, and accountability. Unlike therapy, coaching focuses on present functioning rather than past patterns. It provides the external structure that the ADHD brain's internal regulation system doesn't reliably generate.",
    bestFor: ['Task initiation and follow-through', 'Time management', 'Goal setting', 'Organisation systems', 'Career and academic performance'],
    notes: 'Growing evidence base. Quality varies significantly — look for coaches trained through accredited ADHD coaching programmes. Best used alongside medication and/or therapy.',
    color: 'emerald',
  },
  {
    id: 'exercise',
    name: 'Regular Aerobic Exercise',
    emoji: '🏃',
    category: 'lifestyle',
    evidenceTier: 'strong',
    tagline: 'The most underutilised ADHD intervention',
    description:
      "Aerobic exercise increases dopamine, norepinephrine, and serotonin — the same neurotransmitters targeted by ADHD medications. Studies show it improves attention, executive function, and mood in people with ADHD. Exercise produces both acute post-exercise benefits (hours) and chronic benefits with sustained practice.",
    bestFor: ['Attention and focus (post-exercise)', 'Mood and emotional regulation', 'Executive function', 'Sleep quality'],
    notes: 'Consistent moderate-to-vigorous aerobic exercise (30 min, 3–5x/week) shows the best results. Morning exercise is often recommended to maximise focus early in the day, though evidence on optimal timing is limited — consistency matters more than timing.',
    color: 'green',
  },
  {
    id: 'sleep-hygiene',
    name: 'Sleep Optimisation',
    emoji: '🌙',
    category: 'lifestyle',
    evidenceTier: 'strong',
    tagline: "Treating ADHD without treating sleep is fighting with one hand tied",
    description:
      'Sleep deprivation worsens every ADHD symptom. ADHD also causes sleep problems, creating a reinforcing cycle. Addressing sleep — delayed circadian rhythm, sleep onset difficulty, non-restorative sleep — is foundational before other interventions will be fully effective.',
    bestFor: ['All ADHD symptoms', 'Emotional dysregulation', 'Executive function', 'Medication effectiveness'],
    notes: 'Delayed sleep phase is common in ADHD. Low-dose melatonin (0.5–5mg, 1–2 hours before desired sleep) is often used to shift circadian rhythm; evidence in ADHD populations is promising but mixed, and results vary individually. Consistent wake time and morning light exposure are lower-risk first steps.',
    color: 'slate',
  },
  {
    id: 'external-structure',
    name: 'External Structure & Systems',
    emoji: '📋',
    category: 'tools',
    evidenceTier: 'moderate',
    tagline: 'Replacing the internal scaffolding ADHD removes',
    description:
      "Because ADHD impairs internal regulation, external systems — visible timers, calendars, body doubling, routines, written reminders — compensate for what the brain isn't reliably providing. These aren't workarounds; they're appropriate accommodations for a neurological difference.",
    bestFor: ['Task initiation', 'Time management', 'Forgetfulness', 'Organisation', 'Routine maintenance'],
    notes: "Analogue tools (physical calendars, whiteboards, sticky notes) often work better than digital ones for ADHD — they're always visible and don't compete with notifications. 'Body doubling' (working alongside someone else) is highly effective and now accessible via online platforms.",
    color: 'amber',
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Blood Sugar',
    emoji: '🥗',
    category: 'lifestyle',
    evidenceTier: 'limited',
    tagline: 'Stable blood sugar supports more stable attention',
    description:
      'Blood sugar crashes worsen ADHD symptoms significantly. Protein-forward meals, reduced refined sugar, and regular eating times can help stabilise attention and reduce irritability. Omega-3 supplementation has modest evidence for ADHD symptom reduction.',
    bestFor: ['Attention stability across the day', 'Mood regulation', 'Medication effectiveness'],
    notes: 'No dietary intervention replaces medication when it is indicated. Omega-3 (EPA-focused formulations) shows the most consistent evidence among nutritional supplements for ADHD, though effect sizes are modest and results are mixed across trials — it is not an established treatment. Iron, zinc, and magnesium deficiencies may worsen symptoms — worth checking labs if deficiency is suspected.',
    color: 'lime',
  },
]
