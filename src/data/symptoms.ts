export interface Symptom {
  id: string
  name: string
  emoji: string
  tagline: string
  plainExplanation: string
  whatIsHappening: string
  commonSigns: string[]
  whenItTypicallyAppears: string
  color: string
}

export const symptoms: Symptom[] = [
  {
    id: 'executive-dysfunction',
    name: 'Executive Dysfunction',
    emoji: '🗂️',
    tagline: "Your brain's CEO keeps calling in sick",
    plainExplanation:
      "Starting tasks, prioritising between them, switching when needed, keeping track of steps — these are executive functions. In ADHD, the prefrontal cortex doesn't regulate these reliably. It's not a matter of knowing what to do; it's that the signal to start, continue, or shift often doesn't fire.",
    whatIsHappening:
      "The prefrontal cortex — responsible for planning, working memory, and impulse control — has dysregulated dopamine and norepinephrine signalling in ADHD. This involves altered neurotransmitter reuptake and release patterns, not simply a deficiency. The result is an inconsistent activation system: the brain struggles to engage reliably with tasks it doesn't find immediately rewarding. The ADHD brain isn't lazy; its internal activation system is neurologically unreliable.",
    commonSigns: [
      'Knowing exactly what needs doing but being unable to start',
      'Losing track of multi-step tasks midway through',
      'Difficulty prioritising — everything feels equally urgent or equally avoidable',
      'Task-switching that derails the original task',
      'Frequently losing items needed for tasks',
    ],
    whenItTypicallyAppears:
      'Present from early childhood, but often not recognised until academic or work demands increase. Worsens significantly under stress, sleep deprivation, and hormonal shifts.',
    color: 'indigo',
  },
  {
    id: 'attention-regulation',
    name: 'Attention Dysregulation',
    emoji: '🌊',
    tagline: "Can't control what your brain locks onto",
    plainExplanation:
      "ADHD isn't a deficit of attention — it's inconsistent control over where attention goes. The ADHD brain can hyperfocus intensely on high-interest tasks for hours, while failing to sustain attention on necessary but less stimulating ones for more than minutes. Both extremes impair daily functioning.",
    whatIsHappening:
      "Attention in ADHD is driven by interest, novelty, challenge, and urgency — not importance or intention. The dopamine system that should modulate what gets attention is dysregulated. High-interest tasks trigger enough dopamine to sustain focus. Low-interest tasks don't, regardless of how important they are.",
    commonSigns: [
      'Zoning out mid-conversation or mid-task',
      'Hyperfocusing on interesting tasks to the exclusion of everything else',
      'Difficulty reading long texts despite adequate reading ability',
      'Extreme difficulty with repetitive or low-stimulation tasks',
      'Missing details even while appearing to pay attention',
    ],
    whenItTypicallyAppears:
      'Core symptom present from early childhood. Hyperfocus is often not recognised as ADHD-related — it looks like a strength. Symptoms are often masked in highly stimulating environments.',
    color: 'blue',
  },
  {
    id: 'emotional-dysregulation',
    name: 'Emotional Dysregulation',
    emoji: '🌡️',
    tagline: 'Emotions that hit harder and linger longer',
    plainExplanation:
      "Emotions in ADHD are experienced more intensely and take longer to regulate. This isn't about being 'too sensitive' — it's a neurological difference in how the brain processes and dampens emotional responses. Frustration, excitement, disappointment, and embarrassment all come in at a higher volume.",
    whatIsHappening:
      'The prefrontal cortex normally helps regulate emotional responses from the amygdala. In ADHD, this regulatory circuit is less efficient. Dopamine and norepinephrine play roles in emotional modulation — their dysregulation means the brain struggles to turn down the volume on strong emotions once triggered.',
    commonSigns: [
      'Intense frustration from minor setbacks',
      'Difficulty calming down after being upset',
      'Emotional outbursts that feel disproportionate afterward',
      'Mood shifts that come on quickly and seem to change the whole day',
      'Rejection Sensitive Dysphoria (RSD) — see below',
    ],
    whenItTypicallyAppears:
      'Present throughout life but often attributed to personality or mood disorders. Peaks during adolescence and under high-stress life periods.',
    color: 'rose',
  },
  {
    id: 'rsd',
    name: 'Rejection Sensitive Dysphoria',
    emoji: '💔',
    tagline: 'Perceived rejection as acute emotional pain',
    plainExplanation:
      "Rejection Sensitive Dysphoria (RSD) is an intense, often overwhelming emotional response to perceived or actual rejection, criticism, or failure. 'Perceived' is key — it doesn't have to be real. A tone of voice, a short reply, or not being invited to something can trigger what feels like genuine devastation. RSD is widely reported by people with ADHD and is one of the most impairing aspects of living with the condition — but it is not a formal DSM-5 diagnostic criterion.",
    whatIsHappening:
      "The neurobiological basis of RSD is not fully established. It is generally understood as part of the emotional dysregulation that accompanies ADHD — plausibly related to the same prefrontal cortex dysregulation that impairs emotional regulation more broadly — combined with a accumulated experience of criticism, failure, and social friction. Its status as a distinct ADHD feature versus a form of comorbid emotional or anxiety dysregulation is still debated in clinical literature.",
    commonSigns: [
      'Extreme distress from criticism, even gentle or constructive',
      'Avoiding trying new things for fear of failure or embarrassment',
      'People-pleasing to prevent rejection',
      'Intense anger when feeling unfairly criticised',
      'Relationship difficulties due to perceived slights that others don\'t register',
    ],
    whenItTypicallyAppears:
      "Often intensifies in adolescence as social stakes rise. A major driver of anxiety, avoidance, and low self-esteem in adults with ADHD who don't know this experience is common in the ADHD population.",
    color: 'pink',
  },
  {
    id: 'working-memory',
    name: 'Working Memory Deficits',
    emoji: '🧩',
    tagline: 'Information disappears before you can use it',
    plainExplanation:
      "Working memory is the brain's short-term workspace — the ability to hold information in mind while using it. In ADHD, this workspace is unreliable and smaller. Instructions vanish mid-task. You forget what you went to the kitchen for. You lose the thread of what you were saying.",
    whatIsHappening:
      'Working memory depends on dopamine and norepinephrine activity in the prefrontal cortex. ADHD disrupts this system, reducing the capacity to hold and manipulate information in real time. This is not an intelligence deficit — it\'s a difference in the temporary storage and processing system.',
    commonSigns: [
      'Forgetting what was just said in conversation',
      'Losing track of instructions before completing them',
      'Forgetting where items were just placed',
      'Losing the thread of thought mid-sentence',
      'Difficulty doing mental maths or following verbal directions',
    ],
    whenItTypicallyAppears:
      'Measurable from early childhood and persists across the lifespan. Worsens significantly under cognitive load, stress, and poor sleep.',
    color: 'amber',
  },
  {
    id: 'time-blindness',
    name: 'Time Blindness',
    emoji: '⏳',
    tagline: "Now, or not now — no in-between",
    plainExplanation:
      'People with ADHD experience time differently. There is often only two time states: now and not-now. Events in the future feel abstract and unreal until they are imminent. This is why someone with ADHD can know a deadline is in three days and genuinely not feel any urgency until it is three hours away.',
    whatIsHappening:
      "Time perception involves the prefrontal cortex, basal ganglia, and cerebellum — areas affected by ADHD's dopamine dysregulation. The most consistent evidence implicates prefrontal and striatal dysfunction in temporal judgment and working memory for time. This isn't irresponsibility; it's a genuine neurological difference in how time is processed and used to motivate present behaviour.",
    commonSigns: [
      'Consistently underestimating how long tasks take',
      'Chronically late despite efforts to improve',
      'No sense of urgency until a deadline is minutes away',
      'Difficulty planning backward from a future event',
      'Hours disappearing while doing a preferred task',
    ],
    whenItTypicallyAppears:
      'Present from childhood; often interpreted as disrespect or carelessness rather than a neurological feature. One of the most impairing symptoms for adult functioning.',
    color: 'orange',
  },
  {
    id: 'hyperfocus',
    name: 'Hyperfocus',
    emoji: '🔭',
    tagline: "Total absorption that ignores everything else",
    plainExplanation:
      "Hyperfocus is the flip side of ADHD attention problems. When a task is sufficiently interesting or novel, the ADHD brain can lock onto it with extraordinary intensity — losing track of time, hunger, social obligations, and everything else. It's not a superpower; it's the same dysregulation pointing in a different direction.",
    whatIsHappening:
      "High-interest tasks generate enough dopamine to sustain focus indefinitely. The same mechanism that makes boring tasks impossible makes exciting tasks impossible to stop. Hyperfocus explains why ADHD doesn't look like attention problems when someone is playing video games, doing art, or deep in a topic they love.",
    commonSigns: [
      'Hours disappearing into a single activity',
      'Forgetting to eat, sleep, or attend to responsibilities',
      'Extreme irritability when interrupted during hyperfocus',
      'Intense productivity on interesting tasks vs near-zero on uninteresting ones',
      'Relationships strained by hyperfocus episodes',
    ],
    whenItTypicallyAppears:
      'Present throughout life. Often used by others (and the person themselves) to argue they "can\'t really have ADHD". It\'s actually diagnostic — this is the dysregulation, not evidence against it.',
    color: 'violet',
  },
  {
    id: 'sleep',
    name: 'Sleep Dysregulation',
    emoji: '🌙',
    tagline: "A brain that doesn't know when to shut down",
    plainExplanation:
      "ADHD and sleep problems are deeply connected. Difficulty falling asleep (often because the mind won't stop), delayed sleep phase (waking up later than desired), and non-restorative sleep are all common. Sleep deprivation then worsens every ADHD symptom, creating a reinforcing cycle.",
    whatIsHappening:
      'Dopamine and norepinephrine regulate the sleep-wake cycle as well as attention. ADHD dysregulation affects both. Many people with ADHD have a delayed circadian rhythm (going to sleep and waking up later than they want). The hyperactive mind at night — racing thoughts, reviewing the day, planning — is the same activation system that misfires during the day.',
    commonSigns: [
      'Difficulty falling asleep despite exhaustion',
      'Racing thoughts at bedtime',
      'Extreme difficulty waking in the morning',
      'Non-restorative sleep — tired even after enough hours',
      'Sleep deprivation making all ADHD symptoms worse',
    ],
    whenItTypicallyAppears:
      'Common across all ages. Often attributed to anxiety or poor habits. Untreated ADHD sleep dysregulation is a major driver of mood, cognitive, and physical health problems.',
    color: 'slate',
  },
]
