export type Block =
  | { type: "lead"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "note"; title?: string; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  tags: string[];
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "douance-hqi-thqi-et-psychomotricite",
    title: "Douance (HPI, HQI/THQI) et psychomotricité : quand le corps pense aussi",
    description:
      "Chez les personnes à haut potentiel, le corps porte souvent une part du trop-plein. Ce que la psychomotricité vient écouter, et comment se déroule un accompagnement.",
    date: "2026-03-04",
    updated: "2026-10-02",
    readingMinutes: 6,
    tags: ["Douance", "HPI, HQI/THQI", "Adolescents", "Adultes"],
    blocks: [
      {
        type: "lead",
        text: "Ayant développé une connaissance fine de la douance, je reçois très fréquemment des personnes HPI, HQI/THQI. Ce n’est pas un hasard : chez elles, le corps est souvent le premier lieu où l’intensité se manifeste — et le dernier que l’on pense à écouter.",
      },
      {
        type: "p",
        text: "On résume parfois la douance à la vitesse d’un raisonnement. Mais un haut potentiel ne se joue pas seulement dans la tête. Il se vit dans un corps qui bouge, qui réagit, qui s’épuise, qui cherche à contenir une intensité que l’esprit, lui, peut nommer.",
      },
      { type: "h2", text: "La douance ne se joue pas que dans la tête" },
      {
        type: "p",
        text: "Une personne à haut potentiel peut penser plus vite, ressentir plus fort, percevoir plus finement. Cette hyper-esthésie — cette réceptivité aux ambiances, aux textures, aux sons, aux autres — a une traduction corporelle directe. Il arrive qu’on l’appelle maladresse, agitation, tension, ou fatigue. Il arrive aussi qu’aucun mot n’ait encore trouvé sa place.",
      },
      {
        type: "p",
        text: "Le corps garde la trace de ce qui n’a pas pu être dit. Un souffle court, une nuque verrouillée, une difficulté à se poser, une émotivité qui déborde : ce sont des informations précieuses, pas des défauts.",
      },
      { type: "h2", text: "Ce que la psychomotricité vient écouter" },
      {
        type: "ul",
        items: [
          "Le lien entre l’agitation mentale et l’ancrage corporel : trouver de la stabilité sans ralentir la pensée.",
          "La sensorialité : mieux doser les stimulations, repérer ce qui apaise et ce qui sature.",
          "La régulation émotionnelle : donner au corps des appuis pour traverser ce qui déborde.",
          "La confiance en soi : habiter un corps vécu parfois comme encombrant ou étranger.",
        ],
      },
      {
        type: "quote",
        text: "Passer par le corps permet de faire un pas de côté tout en allant explorer en profondeur.",
      },
      { type: "h2", text: "Comment se passe l’accompagnement" },
      {
        type: "p",
        text: "Les premiers rendez-vous permettent de préciser la demande et de se rencontrer. C’est aussi le temps du bilan psychomoteur, afin de dégager une première grille de compréhension — une première photographie de là où en est la personne dans son corps : motricité fine et globale, rapport au temps et à l’espace, vécu corporel, sensorialité.",
      },
      {
        type: "p",
        text: "Après le bilan, les séances s’articulent autour de médiations corporelles et d’échanges : relaxation, chant, danse, musique, dessin, argile, toucher thérapeutique, auto-massages, exercices de respiration. Une séance dure environ 40 minutes, le plus souvent une fois par semaine ou tous les 15 jours.",
      },
      { type: "h2", text: "Quand consulter ?" },
      {
        type: "p",
        text: "Il n’y a pas de seuil objectif. Une simple volonté d’introspection, une gêne quotidienne, une fatigue qui revient, un sentiment d’être « trop » ou « à côté » : autant de raisons légitimes de pousser la porte. Un haut potentiel n’est pas un trouble — mais il demande parfois un espace pour se déposer.",
      },
      {
        type: "note",
        title: "En résumé",
        text: "La psychomotricité ne « corrige » pas la douance. Elle aide la personne à habiter son corps, à réguler l’intensité et à s’appuyer sur ses ressources, souvent immenses.",
      },
    ],
  },
  {
    slug: "anxiete-burn-out-pourquoi-passer-par-le-corps",
    title: "Anxiété, burn out : pourquoi passer par le corps ?",
    description:
      "Quand l’esprit tourne en boucle, le corps est un chemin possible. Comment la psychomotricité aide à retrouver de l’ancrage, de la respiration et de la marge.",
    date: "2026-04-18",
    readingMinutes: 5,
    tags: ["Anxiété", "Burn out", "Adultes"],
    blocks: [
      {
        type: "lead",
        text: "Quand l’anxiété s’installe, elle occupe tout : les pensées, le sommeil, les relations, et le corps. La psychomotricité propose de ne pas commencer par lutter contre les pensées, mais par redonner au corps de l’espace et de la respiration.",
      },
      {
        type: "p",
        text: "On consulte souvent pour l’esprit : ruminations, peur de mal faire, sensation d’être débordé. Mais l’esprit n’est pas seul. L’anxiété s’inscrit dans le corps — dans une respiration haute, des épaules remontées, une mâchoire serrée, un sommeil haché.",
      },
      { type: "h2", text: "Quand le corps est en alerte" },
      {
        type: "p",
        text: "Le corps est fait pour répondre au danger : se tendre, accélérer, se préparer. Le problème survient quand cette réponse reste allumée sans menace réelle. À force, on ne remarque plus l’alerte — on la vit comme un état normal. L’épuisement professionnel est souvent le point où cet état devient intenable.",
      },
      {
        type: "quote",
        text: "Passer par le corps permet de faire un pas de côté tout en allant explorer en profondeur. C’est aussi un moyen de chercher à établir des fondations solides et cultiver ses ressources internes.",
      },
      { type: "h2", text: "Ce que l’on travaille en séance" },
      {
        type: "ul",
        items: [
          "La respiration : repérer une respiration haute et apprendre à l’abaisser, simplement.",
          "L’ancrage : retrouver des appuis, se sentir porté, retrouver du poids.",
          "La décharge : bouger ce qui est retenu, sans se forcer.",
          "L’auto-massage et le toucher thérapeutique : se redonner une présence.",
          "Le temps : retrouver un rythme, sortir de l’accélération permanente.",
        ],
      },
      { type: "h2", text: "Une séance, à quoi ça ressemble ?" },
      {
        type: "p",
        text: "Il n’y a pas de séance type. On peut parler, respirer, marcher, dessiner, modeler, danser un peu, ou ne rien faire d’autre que s’arrêter. Ce qui compte, c’est l’ajustement : aller assez loin pour que quelque chose bouge, pas trop loin pour ne pas se brutaliser.",
      },
      {
        type: "p",
        text: "Une séance dure environ 40 minutes. Le rythme le plus fréquent est d’une séance par semaine ou tous les 15 jours, mais cela peut varier selon les situations et la durée de l’accompagnement est décidée ensemble.",
      },
      {
        type: "note",
        title: "Si vous êtes en situation d’urgence",
        text: "La psychomotricité n’est pas un service d’urgence. En cas de détresse immédiate, contactez le 3114 (numéro national de prévention du suicide, gratuit, 24h/24) ou le 15. Un médecin traitant peut aussi vous orienter.",
      },
    ],
  },
  {
    slug: "le-bilan-psychomoteur",
    title: "Le bilan psychomoteur : à quoi faut-il s’attendre ?",
    description:
      "Durée, contenu, déroulé, tarif : ce que le bilan psychomoteur permet de comprendre, et comment il prépare les séances qui suivent.",
    date: "2026-05-27",
    readingMinutes: 4,
    tags: ["Bilan", "Premiers rendez-vous"],
    blocks: [
      {
        type: "lead",
        text: "Le bilan psychomoteur n’est pas un examen scolaire, ni un test dont on sortirait noté. C’est une photographie — la vôtre — à un moment donné.",
      },
      {
        type: "p",
        text: "Les premiers rendez-vous permettent de préciser la demande et de se rencontrer. C’est aussi le temps du bilan psychomoteur, afin de dégager une première grille de compréhension, une première photographie de là où en est la personne dans son corps.",
      },
      { type: "h2", text: "Ce que l’on observe" },
      {
        type: "ul",
        items: [
          "La motricité fine et la motricité globale.",
          "Le rapport au temps et à l’espace.",
          "Le vécu corporel et le rapport au corps.",
          "La sensorialité, les réactions aux stimulations.",
          "Les ressources, les appuis, les élans.",
        ],
      },
      {
        type: "p",
        text: "L’objectif n’est pas de mesurer pour mesurer. C’est de voir quelles sont les difficultés, mais aussi les ressources. Le bilan sert à comprendre, pas à juger.",
      },
      {
        type: "quote",
        text: "Cela permet de voir quelles sont les difficultés, mais aussi les ressources.",
      },
      { type: "h2", text: "Après le bilan" },
      {
        type: "p",
        text: "Nous décidons ensemble de la suite : commencer un accompagnement, espacer, réorienter, ou simplement repartir avec une compréhension nouvelle. Il arrive aussi que le bilan suffise à remettre du sens, et que la personne n’ait pas besoin de séances régulières.",
      },
      { type: "h2", text: "Questions pratiques" },
      {
        type: "ul",
        items: [
          "Une séance dure environ 40 minutes. Une séance de suivi coûte 47 €.",
          "Le bilan psychomoteur se déroule en 4 séances, soit 200 € au total (50 € par séance).",
          "Une prescription médicale est donc obligatoire pour engager un bilan ou un suivi.",
          "Cette prescription peut aussi faciliter certaines démarches (mutuelle, MDPH).",
        ],
      },
      {
        type: "note",
        title: "Difficultés financières",
        text: "Si vous rencontrez des difficultés financières, nous pouvons en parler. Des aides existent : mutuelles, prestations extra-légales de la CPAM, MDPH (PCH, complément d’AEEH), caisses de retraite et comités d’entreprise.",
      },
    ],
  },
  {
    slug: "psychomotricite-adulte-nantes",
    title: "Psychomotricité pour adultes à Nantes : pour qui, pour quoi ?",
    description:
      "Beaucoup croient la psychomotricité réservée aux enfants. À Nantes, Manuela Edom reçoit aussi les adolescent.es et les adultes. Voici pour quoi, et où.",
    date: "2026-06-15",
    readingMinutes: 5,
    tags: ["Nantes", "Adultes", "Cabinet"],
    blocks: [
      {
        type: "lead",
        text: "« La psychomotricité, c’est pour les enfants ? » La question revient souvent. La réponse est non : les séances s’adressent à toute personne, du bébé à la personne âgée. À Nantes, je reçois principalement des adolescent.es et des adultes.",
      },
      { type: "h2", text: "Pourquoi consulter à l’âge adulte" },
      {
        type: "p",
        text: "Les raisons sont multiples : une anxiété qui s’est installée, un épuisement professionnel, un psychotraumatisme, un rapport au corps devenu difficile, une maladie chronique, un trouble neurologique, une période de vie où l’on ne se reconnaît plus. Souvent aussi, une simple envie de se comprendre autrement.",
      },
      {
        type: "p",
        text: "Beaucoup de personnes que je reçois ont l’impression d’avoir « tout essayé par la tête ». Passer par le corps ouvre souvent un autre chemin.",
      },
      { type: "h2", text: "Ce que la psychomotricité n’est pas" },
      {
        type: "ul",
        items: [
          "Ce n’est pas de la kinésithérapie : on ne travaille pas la rééducation musculaire, mais le lien corps-esprit.",
          "Ce n’est pas de la psychothérapie : la parole y a une place, mais le corps est le fil conducteur.",
          "Ce n’est pas une activité sportive : il n’y a pas de performance à atteindre.",
        ],
      },
      { type: "h2", text: "Au cabinet, à Nantes" },
      {
        type: "p",
        text: "Je vous reçois au cabinet pluridisciplinaire, 4 rue de la Mitrie, 44000 Nantes, du lundi au vendredi, sur rendez-vous. Le cabinet se situe à proximité du centre-ville, quartier Malakoff – Saint-Donatien.",
      },
      {
        type: "ul",
        items: [
          "Bus 11 et 12 — arrêt Casterneau, 1 min à pied",
          "C1 — arrêt Chalâtres, 10 min à pied",
          "Tramway ligne 1 — arrêt Moutonnerie, 20 min à pied",
          "Parking du Super U Dalby — 2 h gratuites, 8 min à pied",
        ],
      },
      {
        type: "p",
        text: "Les séances ont lieu de préférence au cabinet. Je peux me déplacer exceptionnellement à domicile ou sur les lieux de vie, pour des situations spécifiques.",
      },
      {
        type: "note",
        title: "Douance et neuroatypies",
        text: "J’accompagne régulièrement des personnes HPI, HQI/THQI, ainsi que des personnes concernées par les TSA, le TDA-H et/ou les troubles dys.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function sortedArticles(): Article[] {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function articlesFor(limit?: number): Article[] {
  const list = sortedArticles();
  return typeof limit === "number" ? list.slice(0, limit) : list;
}
