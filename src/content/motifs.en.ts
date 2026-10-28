import type { Motif, MotifFaq, MotifSection } from "./motifs";

export type { Motif, MotifFaq, MotifSection };

export const motifs: Motif[] = [
  {
    slug: "giftedness-hqi-thqi",
    label: "Giftedness (HPI, HQI / THQI)",
    metaTitle: "Giftedness (HPI, HQI / THQI)",
    metaDescription:
      "Psychomotor therapy and giftedness in Nantes: a space for the body of HPI, HQI or THQI people, where intensity and sensitivity can settle. Manuela Edom, psychomotor therapist.",
    title: "Giftedness, HPI, HQI: when the body also needs room.",
    lead: "Having developed a fine understanding of giftedness, I very often see HPI, HQI or THQI people. Psychomotor therapy offers a space where the intelligence no longer has to carry everything, where the body, on the other hand, can settle.",
    sections: [
      {
        heading: "What are we talking about?",
        paragraphs: [
          "Giftedness (also called high intellectual potential (HPI), or HQI and THQI when the quotient is very high) describes a particular way of thinking, often marked by great speed of thought, emotional intensity and strong sensitivity.",
          "It is neither an illness nor a superiority: it is a way of being in the world which, at times, can become tiring. The feeling of being out of step, the need for meaning, the difficulty of finding one's place sometimes weigh more than the thought itself.",
          "For many HPI, HQI or THQI people, the body says it first: tension, agitation, somatisation, difficulty slowing down, settling, letting an emotion pass through without being overwhelmed.",
        ],
      },
      {
        heading: "When to consult?",
        paragraphs: [
          "There is no “right” moment, nor any “good” reason. People often come because something weighs on them, without always having the words to name it.",
        ],
        items: [
          "a lasting feeling of being out of step with others",
          "thoughts that never stop, difficulty falling asleep",
          "hypersensitivity, an emotional intensity that is hard to contain",
          "agitation, bodily tension, somatisation",
          "the fatigue of having to adapt constantly, or to “make oneself smaller”",
          "difficulty finding one's bearings in one's sensations and body",
          "a period of life (studies, work, parenthood) that turns everything upside down",
        ],
      },
      {
        heading: "What psychomotor therapy offers",
        paragraphs: [
          "The session does not try to “silence” that intensity. It offers a space to experience it differently, starting from the body, sensations, movement and materials.",
          "Through relaxation, movement, breathing, drawing, clay or therapeutic touch, the aim is to find support again, to inhabit a body sometimes held at a distance, and to give yourself permission to slow down.",
          "This work happens at your own pace, leaving you room to think as much as to feel.",
        ],
      },
    ],
    note: {
      title: "I am also a trainer",
      text: "I teach on the theme of giftedness (HPI, HQI/THQI), as well as on parenthood, child development, babywearing and transculturality.",
      tone: "peach",
    },
    faq: [
      {
        question: "Do I need an HPI or HQI diagnosis to consult?",
        answer:
          "No. A diagnosis is not needed to come. You can consult because something weighs on you, without having a word for it. A medical prescription is still required to start the assessment or follow-up, but it is not asked for at a first appointment.",
      },
      {
        question: "Does psychomotor therapy “cure” giftedness?",
        answer:
          "No, giftedness is not something to be cured. The work is about the lived experience: the tension, the fatigue, the place you allow yourself to take.",
      },
      {
        question: "Do you see HPI or HQI/THQI teenagers?",
        answer:
          "Yes. I see teenagers and adults, and children depending on the situation.",
      },
    ],
    related: ["giftedness-hqi-thqi-and-psychomotor-therapy"],
  },

  {
    slug: "adhd",
    label: "ADHD",
    metaTitle: "ADHD",
    metaDescription:
      "Psychomotor therapy and ADHD in Nantes: regulation, movement and concrete supports for the teenagers and adults concerned. Manuela Edom, psychomotor therapist.",
    title: "ADHD: putting the body back into the equation.",
    lead: "I work with people affected by other forms of neurodivergence, such as ADHD. When attention scatters, when the body gets restless or switches off, psychomotor therapy offers concrete supports.",
    sections: [
      {
        heading: "What are we talking about?",
        paragraphs: [
          "ADHD (attention deficit disorder, with or without hyperactivity) concerns the way attention is sustained, and the way agitation and impulsivity are regulated.",
          "It is not a lack of attention, but an attention that is hard to direct and to hold. The body is fully involved: moving, standing up, swaying, or on the contrary freezing, are often ways of holding on.",
          "Fatigue, the feeling of not managing, and difficulties in relationships or at work often come on top of that.",
        ],
      },
      {
        heading: "When to consult?",
        paragraphs: [
          "ADHD is a form of neurodivergence: it is not a lack of will. You can consult to find support, without trying to “correct” yourself.",
        ],
        items: [
          "attention that drifts away, tasks started and never finished",
          "bodily restlessness, difficulty staying still without moving",
          "impulsivity, words or gestures that overflow",
          "constant fatigue, exhaustion from having to “hold things together”",
          "difficulties organising, planning, managing time",
          "a complicated relationship with one's body and sensations",
          "periods of disruption (studies, work) that bring difficulties back up",
        ],
      },
      {
        heading: "What psychomotor therapy offers",
        paragraphs: [
          "The session invites you to experiment rather than force things: moving, finding support, settling, feeling, and little by little noticing what helps.",
          "The work is on tonic-emotional regulation, identifying sensations, the relationship to time and space, motor skills, as well as on executive functions: organising, planning, starting and finishing. So many supports that can carry over into daily life.",
          "The bodily mediations (movement, breathing, touch, materials) are chosen with you, according to what speaks to you.",
        ],
      },
    ],
    note: {
      title: "As a complement, never a replacement",
      text: "ADHD is a form of neurodivergence: it is not a lack of will. My support is offered in addition to medical follow-up, never as a replacement for it.",
      tone: "peach",
    },
    faq: [
      {
        question: "Do I need an ADHD diagnosis to come?",
        answer:
          "No, it is not essential to begin. Many people first come because of a feeling of unease, without a diagnosis.",
      },
      {
        question: "Does psychomotor therapy replace medical follow-up?",
        answer:
          "No. It comes in addition to medical or psychological follow-up, never instead of them.",
      },
      {
        question: "Do you see adults with ADHD?",
        answer:
          "I mostly see teenagers and adults. For children, it depends on the situation: do not hesitate to write to me.",
      },
    ],
    related: ["psychomotor-therapy-for-adults-in-nantes"],
  },

  {
    slug: "anxiety-and-burnout",
    label: "Anxiety & burnout",
    metaTitle: "Anxiety & burnout",
    metaDescription:
      "Anxiety, panic attacks, chronic stress, burnout and professional exhaustion: psychomotor therapy offers another path, through the body. Sessions in Nantes with Manuela Edom, psychomotor therapist.",
    title: "Anxiety, burnout: going through the body to step to one side.",
    lead: "When the head goes round in circles, the body is another path. Going through the body makes it possible to step to one side while exploring in depth, it is also a way of cultivating your inner resources.",
    sections: [
      {
        heading: "What are we talking about?",
        paragraphs: [
          "Anxiety, chronic stress and professional exhaustion (burnout) are not fragilities: they are signals. The body is often deeply involved: tension, sleep, shortness of breath, pain, digestive problems, fatigue that does not lift.",
          "You can have “everything you need” and still feel emptied out, or permanently on alert. Words sometimes fail to say it; the body, on the other hand, keeps the trace.",
          "A psychomotor therapy session does not replace medical or psychological follow-up. It offers another point of entry.",
        ],
      },
      {
        heading: "When to consult?",
        paragraphs: [
          "You do not have to be “at rock bottom” to consult. People often come because they feel that a balance has shifted.",
        ],
        items: [
          "anxiety (generalised or occasional) that takes up a lot of room, repetitive thoughts",
          "panic attacks, a body that goes into overdrive without warning",
          "an exhaustion that resists rest (burnout)",
          "tension, pain or somatisation linked to stress",
          "difficult sleep, a body always on alert",
          "a disconnection from one's sensations and one's needs",
          "an event or a period of life that is hard to get through",
          "the wish to find support again and to cultivate one's resources",
        ],
      },
      {
        heading: "What psychomotor therapy offers",
        paragraphs: [
          "The session offers time for oneself, where things slow down. Through breathing, relaxation, movement, materials or therapeutic touch, the aim is to give the body its place back.",
          "The goal is not to “vent”, but to recover the capacity to feel, to settle, to recognise what calms you, and to turn that into resources for what comes next.",
          "The rhythm is built with you: once a week or every two weeks, according to what you need.",
        ],
      },
    ],
    note: {
      title: "Support that complements care",
      text: "If you are going through deep suffering or a crisis, psychomotor therapy does not replace medical or psychological support: it can complement it. If in doubt, we talk it over, and I will point you elsewhere if needed.",
      tone: "peach",
    },
    faq: [
      {
        question: "How does the body help with anxiety?",
        answer:
          "Anxiety is also felt in the body. Working on breathing, sensations and movement often makes it possible to find concrete supports, where the mind goes round in circles.",
      },
      {
        question: "Does this replace therapy?",
        answer:
          "No. Psychomotor therapy is bodily support, which can be combined with psychological or medical follow-up.",
      },
      {
        question: "How many sessions are needed?",
        answer:
          "It varies from person to person and depending on the request. The usual rhythm is one session a week or every two weeks.",
      },
    ],
    related: ["anxiety-and-burnout-why-work-through-the-body"],
  },

  {
    slug: "specific-learning-difficulties",
    label: "Specific learning difficulties",
    metaTitle: "Specific learning difficulties",
    metaDescription:
      "Dyspraxia, dysgraphia, dyslexia, coordination difficulties: psychomotor therapy focuses on the body that learns. Assessment and sessions in Nantes with Manuela Edom, state-certified psychomotor therapist.",
    title: "Specific learning difficulties: the body, coordination, confidence.",
    lead: "I work with people affected by specific learning difficulties. Beyond the learning itself, psychomotor therapy focuses on the body that learns: coordination, fine motor skills, bearings in time and space, and the self-esteem that comes with them.",
    sections: [
      {
        heading: "What are we talking about?",
        paragraphs: [
          "Under the term “specific learning difficulties” several lasting difficulties in learning are grouped: dyspraxia (also called developmental coordination disorder, DCD), dyslexia, dysgraphia, dyscalculia, dysorthographia, dysphasia… They say nothing about intelligence, but they make certain gestures or certain learning demanding.",
          "The body is very present in them: an awkward gesture, difficult handwriting, finding one's bearings in space or time that takes a lot of effort, significant fatigability.",
          "After making invisible efforts for so long, self-esteem can wear away. Psychomotor therapy takes this dimension into account as much as motor skills.",
        ],
      },
      {
        heading: "When to consult?",
        paragraphs: [
          "A psychomotor assessment can help to understand what is going on, and to open up concrete possibilities.",
        ],
        items: [
          "clumsiness, a “clumsy” child who bumps into things or often spills things",
          "difficulty with coordination or balance",
          "laborious or illegible handwriting, an effortful handwriting movement",
          "bearings in time and space that are hard to build",
          "significant fatigability in learning situations",
          "avoidance, a loss of confidence, a feeling of failure",
          "the need for concrete supports in order to inhabit one's body differently",
        ],
      },
      {
        heading: "What psychomotor therapy offers",
        paragraphs: [
          "The psychomotor assessment makes it possible to understand where the difficulties lie, and where the resources are. It gives a first picture of the relationship to the body, to space, to time, to sensory experience.",
          "Then the session works on coordination, fine and gross motor skills, the organisation of space, through play, movement and materials.",
          "The aim is also to restore confidence: to succeed at things with your body, to take pleasure in doing, because self-esteem supports learning.",
        ],
      },
    ],
    note: {
      title: "Alongside the other professionals",
      text: "Specific learning difficulties are usually diagnosed by a specialist doctor. Psychomotor therapy comes as support, often alongside other professionals: speech therapist, occupational therapist, psychologist…",
      tone: "blue",
    },
    faq: [
      {
        question: "Do I need a diagnosis to consult?",
        answer:
          "A diagnosis helps guide the work, but it is not essential to begin. The psychomotor assessment already allows us to understand your situation.",
      },
      {
        question: "Do you work with children?",
        answer:
          "I mostly see teenagers and adults; for children, it depends on the situation, do not hesitate to contact me.",
      },
      {
        question: "What does the psychomotor assessment involve?",
        answer:
          "It makes it possible to draw up a first framework of understanding: fine and gross motor skills, relationship to time and space, bodily experience, sensory experience. It brings the difficulties into view, and the resources too.",
      },
    ],
    related: ["the-psychomotor-assessment"],
  },

  {
    slug: "older-adults",
    label: "Older adults",
    metaTitle: "Older adults",
    metaDescription:
      "Psychomotor therapy sessions are for anyone, from babies to older people. Balance, fall prevention, autonomy and confidence: support in Nantes.",
    title: "Later life: continuing to inhabit one's body.",
    lead: "Psychomotor therapy sessions are for anyone, from babies to older people. As we grow older, the body changes, and with it, sometimes, balance, the memory of a gesture, confidence. The session is a space to keep moving, to feel, to reassure oneself.",
    sections: [
      {
        heading: "What are we talking about?",
        paragraphs: [
          "Ageing is a stage of life, one movement of the body among others. It can come with changes: more fragile balance, less assured motor skills, fatigability, fear of falling, loss of autonomy.",
          "After a fall, fear can settle in and limit movements, which in turn maintains the loss of confidence. Certain neurological illnesses or chronic pain also change the relationship to the body.",
          "The psychomotor therapy session offers a gentle, safe time, where the body remains a place of exploration and of pleasure, whatever the age.",
        ],
      },
      {
        heading: "When to consult?",
        paragraphs: [
          "The session can be a space of reassurance and support during a period of particular sensitivity.",
        ],
        items: [
          "more fragile balance, a fear of falling",
          "after a fall (post-fall syndrome), a loss of confidence in one's footing",
          "difficulties related to ageing or to a neurological illness",
          "chronic pain that changes the relationship to the body",
          "a movement or a gesture that demands more attention",
          "the need for reassurance during a sensitive period",
        ],
      },
      {
        heading: "What psychomotor therapy offers",
        paragraphs: [
          "The session adapts to what you can do that day. It can take place sitting or standing, starting from simple movements, breathing, touch and relaxation.",
          "The aim is to maintain mobility, balance, proprioception and bearings in space, but also to recover inner security and the pleasure of movement.",
          "In certain situations I can come to your home (as part of a home support scheme) or to a care facility (nursing home or residence).",
        ],
      },
    ],
    note: {
      title: "In addition to medical follow-up",
      text: "Psychomotor therapy comes in addition to medical follow-up (doctor, physiotherapist, occupational therapist…). It is not meant to replace it.",
      tone: "peach",
    },
    faq: [
      {
        question: "Do I need a prescription?",
        answer:
          "Psychomotor therapy is a paramedical profession: a medical prescription is required to start an assessment or follow-up, but it is not asked for at a first appointment. Do not hesitate to mention it to your doctor.",
      },
      {
        question: "Do you make home visits?",
        answer:
          "Exceptionally, for specific situations. Let us talk about it.",
      },
      {
        question: "Is the session suitable if I tire easily?",
        answer:
          "Yes. The session adjusts to your pace and to what you can manage that day.",
      },
    ],
  },
];

export function getMotif(slug: string): Motif | undefined {
  return motifs.find((m) => m.slug === slug);
}
