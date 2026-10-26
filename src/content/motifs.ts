/**
 * Pages « motif de consultation » — une page par motif, dans la voix de Manuela.
 * Le contenu est volontairement descriptif et prudent : la psychomotricité est une
 * profession paramédicale, elle complète (ne remplace pas) le suivi médical.
 */

export type MotifSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

export type MotifFaq = { question: string; answer: string };

export type Motif = {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  sections: MotifSection[];
  note?: { title: string; text: string; tone: "blue" | "peach" };
  faq: MotifFaq[];
  related?: string[];
};

export const motifs: Motif[] = [
  {
    slug: "douance-hqi-thqi",
    label: "Douance (HPI, HQI / THQI)",
    metaTitle: "Douance (HPI, HQI / THQI)",
    metaDescription:
      "Psychomotricité et douance à Nantes : un espace pour le corps des personnes HPI, HQI ou THQI, où l’intensité et la sensibilité peuvent se déposer. Manuela Edom, psychomotricienne.",
    title: "Douance, HPI, HQI : quand le corps aussi a besoin de place.",
    lead: "Ayant développé une connaissance fine de la douance, je reçois très fréquemment des personnes HPI, HQI ou THQI. La psychomotricité offre un espace où l’intelligence n’a plus à tout porter, où le corps, lui, peut se déposer.",
    sections: [
      {
        heading: "De quoi parle-t-on ?",
        paragraphs: [
          "La douance (aussi appelée haut potentiel intellectuel (HPI), ou HQI et THQI lorsque le quotient est très élevé) désigne un fonctionnement cognitif particulier, souvent marqué par une grande rapidité de pensée, une intensité émotionnelle et une sensibilité forte.",
          "Ce n’est ni une maladie, ni une supériorité : c’est une manière d’être au monde qui, à certains moments, peut devenir fatigante. Le sentiment de décalage, le besoin de sens, la difficulté à trouver sa place pèsent parfois plus que la pensée elle-même.",
          "Chez beaucoup de personnes HPI, HQI ou THQI, le corps est le premier à le dire : tensions, agitation, somatisations, difficulté à ralentir, à se poser, à se laisser traverser par une émotion sans être débordé.e.",
        ],
      },
      {
        heading: "Quand consulter ?",
        paragraphs: [
          "Il n’y a pas de « bon » moment, ni de « bonne » raison. On consulte souvent parce que quelque chose pèse, sans avoir toujours les mots pour le nommer.",
        ],
        items: [
          "un sentiment de décalage persistant avec les autres",
          "une pensée qui ne s’arrête jamais, des difficultés à trouver le sommeil",
          "une hypersensibilité, une intensité émotionnelle difficile à contenir",
          "une agitation, une tension corporelle, des somatisations",
          "la fatigue d’avoir à se suradapter ou à « se faire plus petit.e »",
          "une difficulté à se repérer dans ses sensations et son corps",
          "une période de vie (études, travail, parentalité) qui bouscule tout",
        ],
      },
      {
        heading: "Ce que la psychomotricité propose",
        paragraphs: [
          "La séance ne cherche pas à « faire taire » cette intensité. Elle propose un espace où l’éprouver autrement, à partir du corps, des sensations, du mouvement et de la matière.",
          "Par la relaxation, le mouvement, la respiration, le dessin, l’argile ou le toucher thérapeutique, il s’agit de retrouver des appuis, d’habiter un corps parfois tenu à distance, et de se donner le droit de ralentir.",
          "Ce travail se fait à votre rythme, en vous laissant la place de penser autant que de ressentir.",
        ],
      },
    ],
    note: {
      title: "Je suis aussi formatrice",
      text: "Je suis formatrice sur la thématique de la douance (HPI, HQI/THQI), ainsi que sur la parentalité, le développement de l’enfant, le portage et la transculturalité.",
      tone: "peach",
    },
    faq: [
      {
        question: "Faut-il un diagnostic de HPI ou de HQI pour consulter ?",
        answer:
          "Non. Un diagnostic n’est pas nécessaire pour venir. Vous pouvez consulter parce que quelque chose vous pèse, sans avoir de mot pour le nommer. Une prescription médicale reste toutefois nécessaire pour engager le bilan ou le suivi, mais elle n’est pas demandée lors d’un premier rendez-vous.",
      },
      {
        question: "La psychomotricité « guérit-elle » la douance ?",
        answer:
          "Non, la douance n’est pas quelque chose à guérir. Le travail porte sur le vécu : les tensions, la fatigue, la place que vous vous autorisez à prendre.",
      },
      {
        question: "Recevez-vous les adolescent.es HPI ou HQI/THQI ?",
        answer:
          "Oui. Je reçois des adolescent.es et des adultes, et des enfants selon les situations.",
      },
    ],
    related: ["douance-hqi-thqi-et-psychomotricite"],
  },

  {
    slug: "tdah",
    label: "TDA-H",
    metaTitle: "TDA-H",
    metaDescription:
      "Psychomotricité et TDA-H (TDAH) à Nantes : régulation, mouvement et appuis concrets pour les adolescent.es et adultes concerné.es. Manuela Edom, psychomotricienne.",
    title: "TDA-H : remettre du corps dans l’équation.",
    lead: "J’accompagne des personnes concernées par d’autres neuroatypies, comme le TDA-H (aussi écrit TDAH). Quand l’attention se disperse, quand le corps s’agite ou se met en pause, la psychomotricité propose des appuis concrets.",
    sections: [
      {
        heading: "De quoi parle-t-on ?",
        paragraphs: [
          "Le TDA-H (trouble du déficit de l’attention, avec ou sans hyperactivité) concerne la manière dont on soutient son attention, dont on régule son agitation et son impulsivité.",
          "Il ne s’agit pas d’un manque d’attention, mais d’une attention difficile à diriger et à maintenir. Le corps y est pleinement engagé : bouger, se lever, se balancer, ou au contraire se figer, sont souvent des façons de tenir.",
          "La fatigue, le sentiment de ne pas y arriver, et les difficultés dans les relations ou au travail s’y ajoutent souvent.",
        ],
      },
      {
        heading: "Quand consulter ?",
        paragraphs: [
          "Le TDA-H est une neuroatypie : il ne relève pas d’un défaut de volonté. On peut consulter pour retrouver des appuis, sans chercher à « se corriger ».",
        ],
        items: [
          "une attention qui part, des tâches commencées et jamais terminées",
          "une agitation corporelle, une difficulté à rester assis.e sans bouger",
          "une impulsivité, des paroles ou des gestes qui débordent",
          "une fatigue constante, un épuisement à « faire tenir » les choses",
          "des difficultés d’organisation, de planification, de gestion du temps",
          "un rapport compliqué à son corps et à ses sensations",
          "des temps de rupture (études, travail) qui font remonter les difficultés",
        ],
      },
      {
        heading: "Ce que la psychomotricité propose",
        paragraphs: [
          "La séance propose d’expérimenter plutôt que de contraindre : bouger, s’appuyer, se poser, sentir, et peu à peu repérer ce qui aide.",
          "Le travail porte sur la régulation tonico-émotionnelle, le repérage des sensations, le rapport au temps et à l’espace, la motricité, ainsi que sur les fonctions exécutives : s’organiser, planifier, commencer et terminer. Autant d’appuis qui peuvent se transférer au quotidien.",
          "Les médiations corporelles (mouvement, respiration, toucher, matière) sont choisies avec vous, selon ce qui vous parle.",
        ],
      },
    ],
    note: {
      title: "En complément, jamais à la place",
      text: "Le TDA-H est une neuroatypie : il ne s’agit pas d’un défaut de volonté. Mon accompagnement se fait en complément, jamais à la place, d’un suivi médical.",
      tone: "peach",
    },
    faq: [
      {
        question: "Un diagnostic de TDA-H est-il nécessaire pour venir ?",
        answer:
          "Non, il n’est pas indispensable pour commencer. Beaucoup de personnes consultent d’abord pour une gêne, sans diagnostic.",
      },
      {
        question: "La psychomotricité remplace-t-elle un suivi médical ?",
        answer:
          "Non. Elle vient en complément d’un suivi médical ou psychologique, jamais à leur place.",
      },
      {
        question: "Recevez-vous les adultes concerné.es par un TDA-H ?",
        answer:
          "Je reçois surtout des adolescent.es et des adultes. Pour les enfants, cela dépend des situations : n’hésitez pas à m’écrire.",
      },
    ],
    related: ["psychomotricite-adulte-nantes"],
  },

  {
    slug: "anxiete-burn-out",
    label: "Anxiété & burn-out",
    metaTitle: "Anxiété & burn-out",
    metaDescription:
      "Anxiété, attaques de panique, stress chronique, burn-out et épuisement professionnel : la psychomotricité offre un autre chemin, par le corps. Séances à Nantes avec Manuela Edom, psychomotricienne.",
    title: "Anxiété, burn-out : passer par le corps pour faire un pas de côté.",
    lead: "Quand la tête tourne en boucle, le corps est un autre chemin. Passer par le corps permet de faire un pas de côté tout en allant explorer en profondeur, c’est aussi un moyen de cultiver ses ressources internes.",
    sections: [
      {
        heading: "De quoi parle-t-on ?",
        paragraphs: [
          "L’anxiété, le stress chronique et l’épuisement professionnel (burn-out) ne sont pas des fragilités : ce sont des signaux. Le corps s’y trouve souvent très engagé : tensions, sommeil, souffle court, douleurs, troubles digestifs, fatigue qui ne passe pas.",
          "On peut avoir « tout ce qu’il faut » et se sentir pourtant vidé.e, ou en alerte permanente. Les mots manquent parfois pour le dire ; le corps, lui, en garde la trace.",
          "La séance de psychomotricité ne se substitue pas à un suivi médical ou psychologique. Elle propose un autre point d’entrée.",
        ],
      },
      {
        heading: "Quand consulter ?",
        paragraphs: [
          "Il n’est pas nécessaire d’être « au fond » pour consulter. Souvent, on vient parce qu’on sent qu’un équilibre s’est déplacé.",
        ],
        items: [
          "une anxiété (généralisée ou ponctuelle) qui occupe beaucoup de place, des pensées en boucle",
          "des attaques de panique, un corps qui s’emballe sans prévenir",
          "un épuisement qui résiste au repos (burn-out)",
          "des tensions, douleurs ou somatisations liées au stress",
          "un sommeil difficile, un corps toujours en alerte",
          "une déconnexion d’avec ses sensations et ses besoins",
          "un événement ou une période de vie difficile à traverser",
          "l’envie de retrouver des appuis et de cultiver ses ressources",
        ],
      },
      {
        heading: "Ce que la psychomotricité propose",
        paragraphs: [
          "La séance offre un temps pour soi, où l’on ralentit. Par la respiration, la relaxation, le mouvement, la matière ou le toucher thérapeutique, il s’agit de redonner au corps sa place.",
          "L’objectif n’est pas d’« évacuer », mais de retrouver la capacité à sentir, à se poser, à reconnaître ce qui apaise, et à en faire des ressources pour la suite.",
          "Le rythme se construit avec vous : une fois par semaine ou tous les quinze jours, selon ce dont vous avez besoin.",
        ],
      },
    ],
    note: {
      title: "Un accompagnement qui complète les soins",
      text: "Si vous traversez une souffrance profonde ou une crise, la psychomotricité ne remplace pas un accompagnement médical ou psychologique : elle peut le compléter. En cas de doute, nous en parlons, et je vous réoriente si besoin.",
      tone: "peach",
    },
    faq: [
      {
        question: "En quoi le corps aide-t-il face à l’anxiété ?",
        answer:
          "L’anxiété se vit aussi dans le corps. Travailler la respiration, les sensations et le mouvement permet souvent de retrouver des appuis concrets, là où le mental tourne en boucle.",
      },
      {
        question: "Est-ce que cela remplace une thérapie ?",
        answer:
          "Non. La psychomotricité est un accompagnement corporel, qui peut se combiner avec un suivi psychologique ou médical.",
      },
      {
        question: "Combien de séances faut-il ?",
        answer:
          "Cela varie selon les personnes et les demandes. Le rythme habituel est d’une séance par semaine ou tous les quinze jours.",
      },
    ],
    related: ["anxiete-burn-out-pourquoi-passer-par-le-corps"],
  },

  {
    slug: "troubles-dys",
    label: "Troubles dys",
    metaTitle: "Troubles dys",
    metaDescription:
      "Dyspraxie, dysgraphie, dyslexie, trouble de la coordination… : la psychomotricité s’intéresse au corps qui apprend. Bilan et séances à Nantes avec Manuela Edom, psychomotricienne D.E.",
    title: "Troubles dys : le corps, la coordination, la confiance.",
    lead: "J’accompagne des personnes concernées par les troubles dys. Au-delà des apprentissages, la psychomotricité s’intéresse au corps qui apprend : coordination, motricité fine, repères dans le temps et l’espace, et l’estime de soi qui va avec.",
    sections: [
      {
        heading: "De quoi parle-t-on ?",
        paragraphs: [
          "On regroupe sous « troubles dys » plusieurs troubles durables des apprentissages : dyspraxie (aussi appelée trouble de la coordination, TDC ou TAC), dyslexie, dysgraphie, dyscalculie, dysorthographie, dysphasie… Ils ne disent rien de l’intelligence, mais rendent certains gestes ou certains apprentissages coûteux.",
          "Le corps y est très présent : un geste maladroit, une écriture difficile, un repérage dans l’espace ou le temps qui demande beaucoup d’efforts, une fatigabilité importante.",
          "À force de fournir des efforts invisibles, la confiance en soi peut s’effriter. La psychomotricité prend en compte cette dimension autant que la motricité.",
        ],
      },
      {
        heading: "Quand consulter ?",
        paragraphs: [
          "Un bilan psychomoteur peut aider à comprendre ce qui se joue, et à ouvrir des pistes concrètes.",
        ],
        items: [
          "une maladresse, un enfant « maladroit » qui se cogne ou renverse souvent",
          "une difficulté de coordination ou d’équilibre",
          "une écriture laborieuse ou illisible, un geste graphique coûteux",
          "des repères dans le temps et l’espace difficiles à construire",
          "une fatigabilité importante dans les apprentissages",
          "un évitement, une perte de confiance, un sentiment d’échec",
          "le besoin d’appuis concrets pour habiter son corps autrement",
        ],
      },
      {
        heading: "Ce que la psychomotricité propose",
        paragraphs: [
          "Le bilan psychomoteur permet de comprendre où se situent les difficultés, et les ressources. Il donne une première photographie du rapport au corps, à l’espace, au temps, à la sensorialité.",
          "Ensuite, la séance travaille la coordination, la motricité fine et globale, l’organisation de l’espace, par le jeu, le mouvement et la matière.",
          "L’objectif est aussi de redonner de la confiance : réussir des choses avec son corps, éprouver du plaisir à faire, car l’estime de soi soutient les apprentissages.",
        ],
      },
    ],
    note: {
      title: "En lien avec les autres professionnel.les",
      text: "Les troubles dys sont généralement diagnostiqués par un médecin spécialisé. La psychomotricité intervient en accompagnement, souvent en lien avec d’autres professionnel.les : orthophoniste, ergothérapeute, psychologue…",
      tone: "blue",
    },
    faq: [
      {
        question: "Faut-il un diagnostic pour consulter ?",
        answer:
          "Un diagnostic aide à orienter le travail, mais il n’est pas indispensable pour commencer. Le bilan psychomoteur permet déjà de comprendre votre situation.",
      },
      {
        question: "Travaillez-vous avec les enfants ?",
        answer:
          "Je reçois surtout des adolescent.es et des adultes ; pour les enfants, cela dépend des situations, n’hésitez pas à me contacter.",
      },
      {
        question: "En quoi consiste le bilan psychomoteur ?",
        answer:
          "Il permet de dégager une première grille de compréhension : motricité fine et globale, rapport au temps et à l’espace, vécu corporel, sensorialité. Il donne à voir les difficultés, mais aussi les ressources.",
      },
    ],
    related: ["le-bilan-psychomoteur"],
  },

  {
    slug: "personne-agee",
    label: "Personnes âgées",
    metaTitle: "Personnes âgées",
    metaDescription:
      "Les séances de psychomotricité s’adressent à toute personne, du bébé à la personne âgée. Équilibre, prévention des chutes, autonomie et confiance : accompagnement à Nantes.",
    title: "Grand âge : continuer d’habiter son corps.",
    lead: "Les séances de psychomotricité s’adressent à toute personne, du bébé à la personne âgée. Avec l’avancée en âge, le corps change, et avec lui, parfois, l’équilibre, la mémoire du geste, la confiance. La séance est un espace pour continuer à bouger, se sentir et se réassurer.",
    sections: [
      {
        heading: "De quoi parle-t-on ?",
        paragraphs: [
          "Le vieillissement est une étape de la vie, un mouvement du corps parmi d’autres. Il peut s’accompagner de changements : équilibre plus fragile, motricité moins assurée, fatigabilité, peur de tomber, perte d’autonomie.",
          "Après une chute, la crainte peut s’installer et limiter les déplacements, ce qui entretient la perte de confiance. Certaines maladies neurologiques ou douleurs chroniques modifient aussi le rapport au corps.",
          "La séance de psychomotricité propose un temps doux et sécurisant, où le corps reste un lieu d’exploration et de plaisir, quel que soit l’âge.",
        ],
      },
      {
        heading: "Quand consulter ?",
        paragraphs: [
          "La séance peut être un espace de réassurance et d’accompagnement dans une période de sensibilité particulière.",
        ],
        items: [
          "un équilibre plus fragile, une peur de tomber",
          "après une chute (syndrome post-chute), une perte de confiance dans ses appuis",
          "des troubles liés au vieillissement ou à une maladie neurologique",
          "des douleurs chroniques qui modifient le rapport au corps",
          "une motricité ou un geste qui demandent plus d’attention",
          "le besoin de réassurance dans une période sensible",
        ],
      },
      {
        heading: "Ce que la psychomotricité propose",
        paragraphs: [
          "La séance s’adapte à vos possibilités du moment. Elle peut se dérouler assis.e ou debout, à partir de mouvements simples, de la respiration, du toucher, de la détente.",
          "Il s’agit d’entretenir la mobilité, l’équilibre, la proprioception et le repérage dans l’espace, mais aussi de retrouver la sécurité intérieure et le plaisir du mouvement.",
          "Je peux, dans certaines situations, me déplacer à domicile (dans le cadre d’un maintien à domicile) ou en établissement (EHPAD, résidence).",
        ],
      },
    ],
    note: {
      title: "En complément du suivi médical",
      text: "La psychomotricité s’inscrit en complément du suivi médical (médecin, kinésithérapeute, ergothérapeute…). Elle n’a pas vocation à le remplacer.",
      tone: "peach",
    },
    faq: [
      {
        question: "Faut-il une prescription ?",
        answer:
          "La psychomotricité est une profession paramédicale : une prescription médicale est nécessaire pour engager un bilan ou un suivi, mais elle n’est pas demandée lors d’un premier rendez-vous. N’hésitez pas à en parler à votre médecin.",
      },
      {
        question: "Recevez-vous à domicile ?",
        answer:
          "Exceptionnellement, pour des situations spécifiques. Parlons-en ensemble.",
      },
      {
        question: "La séance est-elle adaptée si je suis fatigable ?",
        answer:
          "Oui. La séance s’ajuste à votre rythme et à vos possibilités du jour.",
      },
    ],
  },
];

export function getMotif(slug: string): Motif | undefined {
  return motifs.find((m) => m.slug === slug);
}
