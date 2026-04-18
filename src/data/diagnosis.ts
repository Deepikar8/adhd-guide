export interface DiagnosisStep {
  id: string
  stepNumber: number
  title: string
  emoji: string
  description: string
  commonHurdles: string[]
  tips: string[]
  color: string
}

export const diagnosisSteps: DiagnosisStep[] = [
  {
    id: 'realization',
    stepNumber: 1,
    title: 'The Realization',
    emoji: '💡',
    description: 'The journey usually begins with a "lightbulb moment." You might be reading an article, seeing a post online, or watching a child go through the diagnostic process, and suddenly realize: "This explains my entire life." This phase involves a deep dive into researching ADHD.',
    commonHurdles: [
      'Imposter syndrome ("Maybe I am just lazy after all")',
      'Overwhelm from the sheer amount of information',
      'Grief for the years spent struggling without an explanation'
    ],
    tips: [
      'Start tracking your symptoms daily. Write them down.',
      'Look at the DSM-5 criteria and write specific examples from your childhood and adulthood for each one.',
      'Talk to family or friends who have known you a long time to see if they remember you showing traits in childhood.'
    ],
    color: 'amber',
  },
  {
    id: 'referral',
    stepNumber: 2,
    title: 'Seeking a Referral',
    emoji: '📋',
    description: 'This is the hardest part for many people with ADHD, because the process itself requires executive function. You have to book an appointment with your primary care doctor (GP) and explain why you think you need an assessment.',
    commonHurdles: [
      'Doctors who hold outdated views on ADHD (e.g., "You have a degree, you can\'t have ADHD")',
      'Long waitlists for public healthcare assessments',
      'Forgetting to book the appointment or follow up'
    ],
    tips: [
      'Bring the list of symptoms and specific examples you wrote down in Step 1.',
      'If you are in the UK, research "Right to Choose" which allows you to be referred to private clinics via the NHS to bypass long wait times.',
      'Advocate for yourself. If a doctor dismisses you without a proper screening, you have the right to seek a second opinion.'
    ],
    color: 'indigo',
  },
  {
    id: 'assessment',
    stepNumber: 3,
    title: 'The Assessment',
    emoji: '🧠',
    description: 'The formal assessment is usually conducted by a psychiatrist, clinical psychologist, or a specialist ADHD nurse. It typically involves a structured clinical interview (like the DIVA-5), questionnaires, and sometimes gathering collateral information from parents or partners.',
    commonHurdles: [
      'Masking during the interview (pretending everything is fine out of habit)',
      'Memory blanks when asked for specific examples on the spot',
      'Anxiety leading to downplaying how much you struggle'
    ],
    tips: [
      'Do not answer based on your "best days." Answer based on your unmedicated, un-caffeinated, unstructured baseline.',
      'Be completely honest about the coping mechanisms you use (e.g., "I am never late, but only because I have severe anxiety about being late and sit by the door for two hours").',
      'Bring your notes and let the assessor know you brought them because of working memory issues.'
    ],
    color: 'violet',
  },
  {
    id: 'post-diagnosis',
    stepNumber: 4,
    title: 'Post-Diagnosis & Titration',
    emoji: '🎢',
    description: 'Receiving the diagnosis is often intensely validating, but it can also trigger a mourning period. If you opt for medication, you will enter "titration"—a trial-and-error period of finding the right medication and dose.',
    commonHurdles: [
      'The "ADHD grief" cycle (anger, sadness, acceptance regarding the past)',
      'Side effects during medication titration',
      'The realization that pills do not teach skills—medication helps, but you still need to build systems'
    ],
    tips: [
      'Be patient with titration. The first medication or dose might not be the right one.',
      'Track your blood pressure, heart rate, sleep, and mood while adjusting medication.',
      'Seek an ADHD-informed therapist or coach to help unlearn a lifetime of negative self-talk and build effective coping strategies.'
    ],
    color: 'emerald',
  },
]
