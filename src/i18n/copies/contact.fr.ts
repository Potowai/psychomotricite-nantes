export const contact = {
  meta: {
    title: "Contact & plan d’accès à Nantes",
    description:
      "Prendre rendez-vous avec Manuela Edom, psychomotricienne à Nantes : 06 84 74 96 70 (appel ou SMS), medom@psychomotricite.com. Cabinet pluridisciplinaire, 4 rue de la Mitrie, 44000 Nantes, du lundi au vendredi, sur rendez-vous.",
  },
  breadcrumb: {
    home: "Accueil",
    current: "Contact",
  },
  hero: {
    eyebrow: "Contact & rendez-vous",
    title: "Prendre rendez-vous.",
    lead: "Vous pouvez me contacter par mail, SMS ou appel. Le formulaire prépare votre message dans votre propre messagerie : il ne reste plus qu’à l’envoyer. Je réponds en général sous 24 à 48 h ouvrées.",
  },
  contactCards: {
    phone: {
      label: "Téléphone",
      note: "Appel ou SMS",
    },
    sms: {
      label: "Envoyer un SMS",
      value: "Message direct",
    },
    email: {
      label: "E-mail",
    },
  },
  practice: {
    title: "Le cabinet",
    neighbourhood:
      "Situé à proximité du centre-ville, quartier Malakoff – Saint-Donatien.",
    placeholder: {
      label: "Photo à venir",
      title: "Façade du nouveau cabinet, au 4 rue de la Mitrie",
      note: "Photo couleur de la nouvelle façade à venir.",
    },
  },
  practical: {
    hours: {
      title: "Horaires",
      before: "Consultations au cabinet ",
      emphasis: "du lundi au vendredi",
      after: ", sur rendez-vous.",
    },
    parking: {
      title: "Stationnement",
      text: "À proximité : parking du Super U Dalby — 2 h gratuites, 8 min à pied",
    },
    transit: {
      title: "Transports en commun",
      items: [
        { line: "Bus 11 et 12", stop: "Casterneau", walk: "1 min à pied" },
        { line: "C1", stop: "Chalâtres", walk: "10 min à pied" },
        { line: "Tramway ligne 1", stop: "Moutonnerie", walk: "20 min à pied" },
      ],
      stopLabel: "arrêt",
    },
  },
  otherSite: {
    title: "Autre site",
    before: "Mon autre site internet, pour les parents et les enfants : ",
    after: ".",
  },
  form: {
    title: "Écrivez-moi",
    intro:
      "Expliquez-moi votre demande en quelques mots : je vous proposerai un rendez-vous, ou je vous orienterai vers la personne la plus juste si ce n’est pas moi.",
    prescription:
      "Une prescription médicale est obligatoire pour engager un bilan ou un suivi.",
  },
  jsonLd: {
    breadcrumbCurrent: "Contact",
  },
};

export type Copy = typeof contact;
