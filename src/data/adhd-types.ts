export interface AgeStage {
  name: string
  ageRange: string
  emoji: string
}

export interface AdhdType {
  id: string
  name: string
  shortName: string
  emoji: string
  headline: string
  description: string
  stages: AgeStage[]
  highlight: {
    label: string
    text: string
  }
}

export const inattentiveStages: AgeStage[] = [
  { name: 'Early signs', ageRange: '4–7', emoji: '🌱' },
  { name: 'School age', ageRange: '8–12', emoji: '🌸' },
  { name: 'Teens', ageRange: '13–17', emoji: '🌿' },
  { name: 'Young adult', ageRange: '18–30', emoji: '🌺' },
  { name: 'Adulthood', ageRange: '30+', emoji: '🍂' },
]

export const combinedStages: AgeStage[] = [
  { name: 'Early signs', ageRange: '3–6', emoji: '🌱' },
  { name: 'School age', ageRange: '7–12', emoji: '🌸' },
  { name: 'Teens', ageRange: '13–17', emoji: '🌿' },
  { name: 'Young adult', ageRange: '18–30', emoji: '🌺' },
  { name: 'Adulthood', ageRange: '30+', emoji: '🍂' },
]

export const adhdTypes: AdhdType[] = [
  {
    id: 'inattentive',
    name: 'Predominantly Inattentive',
    shortName: 'Inattentive (ADHD-PI)',
    emoji: '🌊',
    headline: 'The quiet, often-missed type',
    description:
      'Difficulty sustaining attention, losing things, forgetting tasks, zoning out — without the stereotypical hyperactivity. This is the most commonly overlooked presentation, especially in women, girls, and adults who developed coping strategies in childhood.',
    stages: inattentiveStages,
    highlight: {
      label: 'Chronically underdiagnosed',
      text: 'Inattentive ADHD is frequently missed because it looks like daydreaming, laziness, or anxiety — not the disruptive behavior clinicians were trained to look for.',
    },
  },
  {
    id: 'combined',
    name: 'Hyperactive / Combined',
    shortName: 'Hyperactive & Combined (ADHD-PH/C)',
    emoji: '⚡',
    headline: 'The visible, often mislabeled type',
    description:
      'Both inattention and hyperactivity-impulsivity are present. Historically over-diagnosed in boys and under-recognized in adults, where hyperactivity often becomes internal restlessness rather than visible movement. Executive dysfunction, emotional dysregulation, and impulsivity persist into adulthood.',
    stages: combinedStages,
    highlight: {
      label: 'Shifts with age',
      text: "Visible hyperactivity often decreases after adolescence. What remains — impulsivity, emotional dysregulation, executive dysfunction, and chronic underachievement — is just as impairing but much harder to see.",
    },
  },
]
