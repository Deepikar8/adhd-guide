export interface Source {
  id: string
  title: string
  authors?: string
  journal?: string
  year: number
  url?: string
  note: string
  category: 'diagnostic' | 'neuroscience' | 'treatment' | 'lifespan' | 'gender' | 'comorbidity'
}

export const sources: Source[] = [
  {
    id: 'dsm5',
    title: 'Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR)',
    authors: 'American Psychiatric Association',
    year: 2022,
    note: 'Diagnostic criteria for ADHD including the three presentations, symptom thresholds, and age of onset requirements.',
    category: 'diagnostic',
  },
  {
    id: 'nice-adhd',
    title: 'Attention deficit hyperactivity disorder: diagnosis and management (NG87)',
    authors: 'National Institute for Health and Care Excellence (NICE)',
    year: 2023,
    url: 'https://www.nice.org.uk/guidance/ng87',
    note: 'UK clinical guideline covering diagnosis, medication, and non-pharmacological treatment across all ages.',
    category: 'diagnostic',
  },
  {
    id: 'barkley-2015',
    title: 'Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment (4th ed.)',
    authors: 'Barkley, R. A.',
    year: 2015,
    note: 'Comprehensive clinical reference covering neuropsychology, assessment, and treatment of ADHD across the lifespan.',
    category: 'neuroscience',
  },
  {
    id: 'volkow-adhd',
    title: 'Evaluating dopamine reward pathway in ADHD: clinical implications',
    authors: 'Volkow, N. D. et al.',
    journal: 'JAMA',
    year: 2009,
    note: 'Neuroimaging study documenting dopamine reward pathway differences in ADHD, including reduced dopamine release and receptor availability in striatal and prefrontal regions.',
    category: 'neuroscience',
  },
  {
    id: 'faraone-2021',
    title: 'The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder',
    authors: 'Faraone, S. V. et al.',
    journal: 'Neuroscience & Biobehavioral Reviews',
    year: 2021,
    note: 'Landmark consensus paper summarising the evidence base for ADHD across genetics, neuroscience, diagnosis, and treatment.',
    category: 'diagnostic',
  },
  {
    id: 'quinn-madhoo-2014',
    title: 'A review of attention-deficit/hyperactivity disorder in women and girls',
    authors: 'Quinn, P., Madhoo, M.',
    journal: 'The Primary Care Companion for CNS Disorders',
    year: 2014,
    note: 'Reviews evidence on sex differences in ADHD presentation, diagnosis rates, and impact on quality of life.',
    category: 'gender',
  },
  {
    id: 'hinshaw-2022',
    title: 'Attention deficit hyperactivity disorder (ADHD): Controversy, developmental mechanisms, and multiple levels of analysis',
    authors: 'Hinshaw, S. P.',
    journal: 'Annual Review of Clinical Psychology',
    year: 2018,
    note: 'Reviews developmental trajectories of ADHD from childhood through adulthood.',
    category: 'lifespan',
  },
  {
    id: 'cortese-2020',
    title: 'Pharmacologic Treatment of Attention Deficit-Hyperactivity Disorder',
    authors: 'Cortese, S.',
    journal: 'NEJM',
    year: 2020,
    note: 'Clinical review of stimulant and non-stimulant medication options, efficacy, and safety profiles.',
    category: 'treatment',
  },
  {
    id: 'safren-2010',
    title: 'Cognitive-Behavioral Therapy for ADHD in Medication-Treated Adults',
    authors: 'Safren, S. A. et al.',
    journal: 'Journal of Consulting and Clinical Psychology',
    year: 2010,
    note: 'RCT demonstrating efficacy of ADHD-adapted CBT as an add-on to medication in adults.',
    category: 'treatment',
  },
  {
    id: 'ratey-2008',
    title: 'Spark: The Revolutionary New Science of Exercise and the Brain',
    authors: 'Ratey, J. J.',
    year: 2008,
    note: 'Summarises research on the neurobiological mechanisms by which aerobic exercise improves ADHD symptoms.',
    category: 'treatment',
  },
  {
    id: 'kessler-2006',
    title: 'The prevalence and correlates of adult ADHD in the United States',
    authors: 'Kessler, R. C. et al.',
    journal: 'American Journal of Psychiatry',
    year: 2006,
    note: 'Population study estimating 4.4% adult ADHD prevalence; highlights impairment in work, family, and social function.',
    category: 'lifespan',
  },
  {
    id: 'shaw-2014',
    title: 'Emotional dysregulation in attention deficit hyperactivity disorder',
    authors: 'Shaw, P., Stringaris, A., Nigg, J., Leibenluft, E.',
    journal: 'American Journal of Psychiatry',
    year: 2014,
    note: 'Reviews the neurobiological basis of emotional dysregulation in ADHD and its clinical implications.',
    category: 'comorbidity',
  },
  {
    id: 'dorani-2021',
    title: 'Prevalence of hormone-related mood disorder symptoms in women with ADHD',
    authors: 'Dorani, D. et al.',
    journal: 'Journal of Psychiatric Research',
    year: 2021,
    note: 'Documents how oestrogen fluctuations across the menstrual cycle, pregnancy, and menopause interact with ADHD symptoms.',
    category: 'gender',
  },
  {
    id: 'milich-2001',
    title: 'ADHD combined type and ADHD predominantly inattentive type are distinct and unrelated disorders',
    authors: 'Milich, R., Balentine, A. C., Lynam, D. R.',
    journal: 'Clinical Psychology: Science and Practice',
    year: 2001,
    note: 'Argues for the clinical and neuropsychological distinction between inattentive and combined presentations.',
    category: 'diagnostic',
  },
]
