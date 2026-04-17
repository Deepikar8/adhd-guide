export interface AgeGroup {
  id: string
  name: string
  ageRange: string
  emoji: string
  tagline: string
  overview: string
  keyFeatures: string[]
  color: string
  href: string
}

export const ageGroups: AgeGroup[] = [
  {
    id: 'early-childhood',
    name: 'Early Childhood',
    ageRange: '2–5',
    emoji: '🌱',
    tagline: 'First signs & early development',
    overview:
      'The earliest presentations of ADHD emerge here — often as extreme difficulty waiting, emotional outbursts, and inability to sustain play. Most children this age are active, so ADHD can be hard to distinguish. Diagnosis before age 4 is uncommon, but behavioural signs are often visible to parents.',
    keyFeatures: [
      'Extreme difficulty waiting or taking turns',
      'Very short attention span even for preferred activities',
      'Frequent emotional outbursts disproportionate to situation',
      'High activity level that exhausts caregivers',
      'Sleep difficulties common from early on',
    ],
    color: 'bg-green-50 border-green-200',
    href: '/age-groups',
  },
  {
    id: 'school-age',
    name: 'School Age',
    ageRange: '6–12',
    emoji: '🌸',
    tagline: 'When demands reveal the gap',
    overview:
      'Starting school is when ADHD most often surfaces or becomes undeniable. Academic demands — sitting still, following instructions, completing tasks — expose executive function gaps. This is the most common age for first diagnosis. Boys with hyperactive symptoms are typically diagnosed sooner than girls.',
    keyFeatures: [
      'Academic underperformance despite apparent intelligence',
      'Difficulty following multi-step instructions',
      'Losing homework, books, belongings regularly',
      'Social friction from impulsive comments or not waiting turns',
      'Avoidance of tasks requiring sustained mental effort',
    ],
    color: 'bg-pink-50 border-pink-200',
    href: '/age-groups',
  },
  {
    id: 'teens',
    name: 'Teens',
    ageRange: '13–17',
    emoji: '🌿',
    tagline: 'Executive function meets rising expectations',
    overview:
      'Adolescence raises the bar on self-regulation, planning, and social navigation — exactly the skills ADHD impairs. Many teens with undiagnosed ADHD are labelled lazy or unmotivated. Emotional dysregulation, rejection sensitive dysphoria (RSD), and risk-taking behaviours emerge strongly in this period.',
    keyFeatures: [
      'Chronic procrastination on large assignments',
      'Emotional dysregulation that damages relationships',
      'Rejection sensitive dysphoria — extreme response to perceived criticism',
      'Risk-taking, impulsive decisions',
      'Sleep phase delay makes mornings nearly impossible',
      'Frequent late or missing work despite effort',
    ],
    color: 'bg-emerald-50 border-emerald-200',
    href: '/age-groups',
  },
  {
    id: 'young-adults',
    name: 'Young Adults',
    ageRange: '18–30',
    emoji: '🌺',
    tagline: 'Late diagnosis, new demands',
    overview:
      'College and early careers remove external structures that previously masked ADHD. This is also when many — especially women — receive their first diagnosis. The combination of executive demands, financial independence, and relationship complexity can trigger crisis if ADHD is unmanaged.',
    keyFeatures: [
      'Difficulty managing unstructured time (university)',
      'Chronic procrastination leading to academic failure',
      'Late diagnosis after years of self-blame',
      'Financial impulsivity and disorganisation',
      'Relationship difficulties due to emotional dysregulation',
      'High comorbidity with anxiety and depression at this stage',
    ],
    color: 'bg-violet-50 border-violet-200',
    href: '/age-groups',
  },
  {
    id: 'adults',
    name: 'Adults',
    ageRange: '31–55',
    emoji: '🍂',
    tagline: 'Work, relationships, and the burnout risk',
    overview:
      'Adult ADHD is heavily underdiagnosed and often masked by years of developed coping strategies. Workplace demands, parenting, and long-term relationship maintenance amplify impairment. Burnout is common when coping strategies stop working. Some women with ADHD report significant symptom worsening around perimenopause — possibly related to oestrogen\'s role in dopamine regulation — though individual experience varies widely.',
    keyFeatures: [
      'Career underachievement relative to intelligence',
      'Chronic disorganisation affecting home and work',
      'Hyperfocus on interests; avoidance of uninteresting tasks',
      'Relationship difficulties due to forgetfulness and impulsivity',
      'High rates of burnout and exhaustion from compensating',
      'Hormonal shifts (women) worsening ADHD symptoms',
    ],
    color: 'bg-amber-50 border-amber-200',
    href: '/age-groups',
  },
  {
    id: 'later-life',
    name: 'Later Life',
    ageRange: '55+',
    emoji: '🌾',
    tagline: 'Retirement, cognition, and new challenges',
    overview:
      'ADHD in older adults is almost never recognised or discussed. Retirement removes work structures that provided routine, often worsening disorganisation. Some ADHD symptoms can be confused with normal cognitive ageing. Medication review is important as cardiovascular considerations become relevant.',
    keyFeatures: [
      'Removal of work structure worsens symptoms',
      'Risk of ADHD symptoms being attributed to normal ageing',
      'Medication considerations change with cardiovascular health',
      'Long-undiagnosed adults carry significant accumulated shame',
      'New relationship with time and purpose needed',
    ],
    color: 'bg-stone-50 border-stone-300',
    href: '/age-groups',
  },
]
