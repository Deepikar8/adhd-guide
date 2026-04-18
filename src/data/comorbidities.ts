export interface Comorbidity {
  id: string
  name: string
  emoji: string
  tagline: string
  plainExplanation: string
  overlap: string
  color: string
}

export const comorbidities: Comorbidity[] = [
  {
    id: 'anxiety',
    name: 'Anxiety Disorders',
    emoji: '😰',
    tagline: 'When the brain overcompensates for unreliability',
    plainExplanation: 'Anxiety is extremely common in ADHD. Often, it develops as a coping mechanism. If you cannot trust your brain to remember deadlines or manage time naturally, you use anxiety as an artificial fuel to force yourself to remember and act. Over time, this chronic stress leads to generalised anxiety disorders.',
    overlap: 'Many ADHD symptoms (restlessness, difficulty concentrating, sleep problems) overlap with anxiety, leading to frequent misdiagnosis.',
    color: 'teal',
  },
  {
    id: 'depression',
    name: 'Depression',
    emoji: '🌧️',
    tagline: 'The heavy cost of chronic frustration',
    plainExplanation: 'Untreated ADHD often leads to a cycle of underachievement, missed potential, and social friction. Over years, this chronic frustration and internalized shame can develop into secondary depression. Additionally, dopamine dysregulation inherently impacts mood and motivation.',
    overlap: 'Both conditions feature low motivation, lethargy, and difficulty focusing, though depression is primarily episodic while ADHD is neurodevelopmental and lifelong.',
    color: 'slate',
  },
  {
    id: 'asd',
    name: 'Autism Spectrum Disorder (AuDHD)',
    emoji: '♾️',
    tagline: 'Two divergent operating systems at once',
    plainExplanation: 'ADHD and Autism frequently co-occur. They often mask each other: the need for routine (Autism) fighting against the need for novelty (ADHD). This can create an internal tug-of-war where the person feels they are constantly contradicting themselves.',
    overlap: 'Both involve executive dysfunction, sensory processing differences, and social friction, though the underlying neurobiology and motivations differ.',
    color: 'violet',
  },
  {
    id: 'dyslexia',
    name: 'Specific Learning Differences (Dyslexia/Dyscalculia)',
    emoji: '📖',
    tagline: 'Double hurdles in education',
    plainExplanation: 'Specific learning differences, notably dyslexia (reading) and dyscalculia (maths), are highly comorbid with ADHD. When a child struggles to read due to dyslexia, their attention will naturally wander, mimicking or exacerbating ADHD symptoms.',
    overlap: 'Working memory deficits in ADHD heavily impact reading comprehension and math, making it hard to untangle an attention issue from a specific learning difference.',
    color: 'sky',
  },
  {
    id: 'sleep-disorders',
    name: 'Sleep Disorders',
    emoji: '🌙',
    tagline: 'The foundation that refuses to set',
    plainExplanation: 'Delayed Sleep Phase Syndrome (going to bed and waking up much later than average) and insomnia are almost universal in the ADHD population. The brain\'s transition mechanisms struggle to "turn off" at night.',
    overlap: 'Sleep deprivation directly worsens executive function, working memory, and emotional regulation, making ADHD symptoms exponentially worse the next day.',
    color: 'indigo',
  },
]
