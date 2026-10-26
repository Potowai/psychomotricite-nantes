/**
 * Textes de la page « Séances & tarifs » — français.
 *
 * Le français met en avant certains mots (« bilan psychomoteur »,
 * « ressources », « forfait bien-être »…). Ces emphases sont conservées :
 * `emphasis` porte le fragment en gras, `before` et `after` le texte qui
 * l'entoure. Un paragraphe sans emphase porte une chaîne vide.
 */

/** Paragraphe : un fragment peut être mis en avant. */
export type RichText = {
  before: string;
  emphasis: string;
  after: string;
};

/** Réponse de la FAQ : des paragraphes, une liste, un paragraphe de fin. */
export type FaqAnswer = {
  paragraphs: RichText[];
  list: RichText[] | null;
  closing: RichText | null;
};

/** Question de la FAQ et sa réponse. */
export type FaqItem = {
  question: string;
  answer: FaqAnswer;
};

export const sessions = {
  meta: {
    title: "Séances, tarifs et aides au financement",
    description:
      "Séances de psychomotricité à Nantes : déroulé, médiations corporelles, durée (40 min), tarifs (47 € suivi, 200 € bilan en 4 séances) et aides possibles : mutuelles, CPAM, MDPH (PCH, AEEH).",
  },
  breadcrumb: {
    home: "Accueil",
    current: "Séances & tarifs",
  },
  hero: {
    eyebrow: "Séances & tarifs",
    title: "Le suivi en psychomotricité.",
    lead: "Le rythme des séances est le plus souvent 1 séance par semaine ou tous les 15 jours, mais cela peut varier, tout comme la durée de l’accompagnement.",
  },
  course: {
    eyebrow: "Le déroulé",
    title: "Se rencontrer, puis comprendre où en est le corps.",
    paragraphs: [
      {
        before:
          "Les premiers rendez-vous permettent de préciser la demande et de se rencontrer. Si besoin, un ",
        emphasis: "bilan psychomoteur",
        after:
          " peut être réalisé ; ce n’est pas une étape obligatoire pour donner suite à des séances. Il permet de dégager une première grille de compréhension, une première photographie de là où en est la personne dans son corps : motricité fine, motricité globale, rapport au temps et à l’espace, vécu corporel, rapport au corps, sensorialité.",
      },
      {
        before:
          "Cela permet de voir quelles sont les difficultés, mais aussi les ",
        emphasis: "ressources",
        after: ".",
      },
    ],
  },
  sessions: {
    eyebrow: "Les séances",
    title: "Des médiations corporelles, et des échanges.",
    intro:
      "Lorsqu’un suivi est décidé, les séances de psychomotricité s’articulent autour de médiations corporelles et d’échanges. Les médiations utilisées peuvent être :",
    mediations: [
      "relaxation",
      "chant",
      "danse",
      "musique",
      "dessin",
      "argile",
      "toucher thérapeutique",
      "auto-massages",
      "exercices de respiration",
    ],
  },
  place: {
    eyebrow: "Le lieu",
    title: "Les séances ont lieu au sein d’un cabinet pluridisciplinaire.",
    body: "Les séances se déroulent le plus souvent à mon cabinet, au sein d’un cabinet pluridisciplinaire qui réunit une psychomotricienne, deux psychologues cliniciennes et une médecin généraliste. Je peux me déplacer exceptionnellement à domicile et/ou sur les lieux de vie, pour des situations spécifiques.",
    opening: {
      before: "La consultation a lieu ",
      emphasis: "du lundi au jeudi",
      after: ", sur rendez-vous. ",
    },
    accessLink: "Voir le plan d’accès et les transports",
  },
  fees: {
    eyebrow: "Tarifs",
    suiviLabel: "Séance de suivi",
    bilanLabel: "Bilan psychomoteur",
    bilanNote: "(prévoir {sessions} séances · {amount} €/séance)",
    durationLabel: "Durée d’une séance",
    durationUnit: "min",
    note: "Si vous rencontrez des difficultés financières, nous pouvons en parler.",
  },
  callouts: {
    reimbursement: {
      title: "Remboursement",
      text: "Les psychomotricien.nes sont auxiliaires de la médecine ; à la différence des kinés et des orthophonistes, leurs soins ne bénéficient pas encore d’un remboursement par la Sécurité sociale. Des aides existent (voir ci-dessous).",
    },
    prescription: {
      title: "Ordonnance",
      text: "La psychomotricité est une profession paramédicale : Une prescription médicale est nécessaire pour engager un bilan ou un suivi, mais elle n’est pas demandée lors d’un premier rendez-vous.",
    },
  },
  funding: {
    eyebrow: "Aides au financement",
    title: "Ne restez pas seul.e face aux démarches.",
    intro:
      "Plusieurs dispositifs peuvent participer au financement des séances. Voici l’essentiel. Pour le détail du dossier, je peux vous accompagner.",
    items: [
      {
        question: "Les mutuelles",
        answer: {
          paragraphs: [
            {
              before:
                "De plus en plus de mutuelles remboursent la psychomotricité (50 % des frais, ou 10 séances…), souvent via le ",
              emphasis: "forfait bien-être",
              after: ".",
            },
            {
              before:
                "En cas de refus : toutes les mutuelles disposent d’une ",
              emphasis: "commission de recours amiable",
              after:
                " pour les dépassements d’honoraires. On constitue alors un dossier (lettre de demande d’aide exceptionnelle, prescription médicale du bilan et/ou des séances, factures acquittées, devis des séances) adressé au service social ou à la commission des prestations sociales. Si le dossier est accepté, la mutuelle peut octroyer un forfait.",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "Les prestations extra-légales de la CPAM",
        answer: {
          paragraphs: [
            {
              before:
                "Il s’agit d’une aide accordée à titre exceptionnel. On s’adresse au service social de sa mairie (CCAS) ou à un.e assistant.e social.e de la Sécurité sociale, avec un dossier « aide pour prestation extra-légale ». Des critères de revenus s’appliquent, et la demande est justifiée par un bilan. C’est possible sans MDPH, mais un dossier MDPH en cours peut faciliter la démarche.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "La MDPH : PCH et complément d’AEEH",
        answer: {
          paragraphs: [
            {
              before:
                "La MDPH concerne aussi des personnes sans handicap lourd. Le remboursement total ou partiel est un droit pour un handicap avéré et diagnostiqué (autisme, dyspraxie, TDAH…) par un médecin spécialisé (pédopsychiatre, neuropédiatre…).",
              emphasis: "",
              after: "",
            },
          ],
          list: [
            {
              before: "",
              emphasis: "Adultes bénéficiaires MDPH :",
              after:
                " la psychomotricité peut relever de la PCH (prise en charge intégrale ou partielle). On fait le bilan d’abord, puis on l’envoie à la MDPH.",
            },
            {
              before: "",
              emphasis: "Enfants et adolescents bénéficiaires MDPH :",
              after:
                " un complément peut s’ajouter à l’AEEH (Allocation d’Éducation de l’Enfant Handicapé), dont le montant dépend de 6 catégories. Le règlement des séances reste à charge, mais l’AEEH le compense.",
            },
          ],
          closing: {
            before:
              "Ces dossiers sont longs ; ils sont facilités par un.e assistant.e social.e du CCAS ou de l’espace départemental des solidarités.",
            emphasis: "",
            after: "",
          },
        },
      },
      {
        question: "Caisses de retraite et comités d’entreprise",
        answer: {
          paragraphs: [
            {
              before:
                "Les caisses de retraite et les comités d’entreprise peuvent participer par des aides financières. Renseignez-vous auprès de votre organisme.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
    ],
  },
  faq: {
    /**
     * Ces deux questions ne sont pas affichées dans la FAQ de la page :
     * elles alimentent le balisage FAQ de Google.
     */
    extra: [
      {
        question: "Quels documents sont souvent nécessaires ?",
        answer: {
          paragraphs: [
            {
              before:
                "Bilan, devis et facture : n’hésitez pas à m’en faire la demande, je vous les fournirai.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "Quelle est la différence entre un bilan et un suivi ?",
        answer: {
          paragraphs: [
            {
              before:
                "Le bilan psychomoteur est un temps d’évaluation : quelques rendez-vous pour préciser la demande, observer la motricité fine et globale, le rapport au temps et à l’espace, le vécu corporel et la sensorialité, et dégager une première grille de compréhension, avec les difficultés comme les ressources. Le suivi peut venir ensuite : des séances régulières, le plus souvent une fois par semaine ou tous les quinze jours, autour de médiations corporelles et d’échanges.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
    ],
    jsonLdAnswer:
      "Voir le détail sur la page Séances et tarifs de {name}, psychomotricienne à Nantes.",
  },
  cta: {
    title: "Une question sur les tarifs ou les aides ?",
    text: "Appelez-moi ou envoyez-moi un SMS : nous en parlerons simplement. Si vous rencontrez des difficultés financières, dites-le moi, nous pouvons en parler.",
  },
};

export type Copy = typeof sessions;
