export const privacy = {
  meta: {
    title: "Politique de confidentialité",
    description:
      "Comment Manuela Edom, psychomotricienne diplômée d'État à Nantes, traite vos données personnelles (RGPD).",
  },
  breadcrumb: {
    home: "Accueil",
    current: "Politique de confidentialité",
  },
  hero: {
    eyebrow: "Vos données",
    title: "Politique de confidentialité.",
    lead: "Cette page explique quelles données sont collectées sur ce site, pourquoi, et quels sont vos droits.",
  },
  controller: {
    title: "Responsable du traitement",
    contactLabel: "Contact :",
  },
  collected: {
    title: "Quelles données sont collectées ?",
    body: "Le formulaire de contact n’envoie rien par le site : il prépare un message dans votre propre application de messagerie, avec votre nom, votre adresse e-mail, votre numéro de téléphone (facultatif), l’âge de la personne concernée (facultatif), le motif de la demande (facultatif), votre préférence de contact et votre message. Rien n’est enregistré sur le site tant que vous n’avez pas cliqué sur « Envoyer » dans votre messagerie.",
    bodyAfter:
      "Aucune donnée de santé n’est demandée par le formulaire. Si vous choisissez d’en mentionner dans votre message, elles ne sont traitées que pour répondre à votre demande.",
  },
  basis: {
    title: "Pourquoi et sur quelle base ?",
    body: "Les données que vous m’adressez servent uniquement à répondre à votre demande et à organiser, le cas échéant, un rendez-vous. Le traitement repose sur votre consentement, recueilli au moment où vous cliquez sur « Envoyer » dans votre messagerie.",
  },
  retention: {
    title: "Combien de temps sont-elles conservées ?",
    body: "Les messages reçus sont conservés le temps nécessaire au traitement de votre demande, puis supprimés, en principe sous 12 mois, sauf relation de soin en cours, pour laquelle la conservation suit les obligations professionnelles applicables.",
  },
  access: {
    title: "Qui y a accès ?",
    body: "Vos données ne sont ni vendues, ni cédées à des tiers. Elles peuvent être traitées par les prestataires techniques nécessaires au fonctionnement du site (hébergement, envoi d’e-mails), dans le respect du RGPD.",
  },
  cookies: {
    title: "Cookies",
    body: "Ce site ne dépose pas de cookie publicitaire ni de traceur de suivi à des fins commerciales. La mesure d’audience repose sur {tools}, des outils sans cookie qui n’enregistrent aucune donnée personnelle : les statistiques sont agrégées et anonymes (pages consultées, provenance, type d’appareil, durée de chargement).",
  },
  rights: {
    title: "Vos droits",
    before: "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur vos données. Pour l’exercer, écrivez-moi à ",
    orCall: " ou appelez-moi au ",
    end: ". Vous pouvez également introduire une réclamation auprès de la CNIL (",
    cnil: "cnil.fr",
    cnilEnd: ").",
  },
  legalLink: {
    before: "Pour en savoir plus sur l’éditeur du site, consultez les ",
    link: "mentions légales",
    end: ".",
  },
};

export type Copy = typeof privacy;
