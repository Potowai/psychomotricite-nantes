import { addressName, pages, roleLabel, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type Copy = {
  title: string;
  intro: string;
  practical: string;
  name: string;
  address: string;
  coordinates: string;
  phone: string;
  email: string;
  hours: string;
  access: string;
  transport: string;
  fees: string;
  languages: string;
  audience: string;
  reimbursement: string;
  details: {
    phoneNote: string;
    hours: string;
    access: string;
    transport: string;
    fees: string;
    languages: string;
    audience: string;
    reimbursement: string;
  };
  pageDescriptions: {
    home: string;
    psychomotricite: string;
    about: string;
    sessions: string;
    contact: string;
    faq: string;
  };
  pagesTitle: string;
  linksTitle: string;
  otherSite: string;
  readMore: string;
};

const copies: Record<Locale, Copy> = {
  fr: {
    title: `${site.name} · ${roleLabel.fr} à Nantes`,
    intro: `Cabinet de psychomotricité à Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, psychomotricienne diplômée d’État (D.E.) depuis ${site.practitioner.since}, reçoit adolescent.es et adultes au ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Spécialités : douance (HPI, HQI/THQI), TSA, TDA-H, troubles dys. Consultations du lundi au jeudi, sur rendez-vous.`,
    practical: "Informations pratiques",
    name: "Nom",
    address: "Adresse",
    coordinates: "Coordonnées",
    phone: "Téléphone",
    email: "E-mail",
    hours: "Horaires",
    access: "Accès",
    transport: "Transports",
    fees: "Tarifs",
    languages: "Langues",
    audience: "Public",
    reimbursement: "Remboursement",
    pagesTitle: "Pages",
    linksTitle: "Liens",
    otherSite: "Site parents/enfants",
    details: {
      phoneNote: "Appel ou SMS",
      hours: "du lundi au jeudi, sur rendez-vous",
      access:
        "à proximité du centre-ville, quartier Saint Donatien, Dalby, Malakoff ; parking du Super U Dalby, 2 h gratuites, 8 min à pied ; cabinet accessible PMR",
      transport:
        "Bus 11 et 12 (Casterneau, 1 min à pied) ; C1 (Chalâtres, 10 min à pied) ; Tramway ligne 1 (Moutonnerie, 20 min à pied)",
      fees:
        "47 € la séance de suivi ; bilan 200 € (4 séances, 50 €/séance) ; séance d’environ 40 minutes",
      languages:
        "séances en français et en anglais ; français (langue maternelle), anglais (B2), espagnol (B1), notions d’arabe et de roumain ; interprétariat possible à étudier",
      audience:
        "adolescent.es et adultes (également enfants sur demande) ; toute personne, du bébé à la personne âgée",
      reimbursement:
        "pas de remboursement Sécurité sociale ; aides possibles via mutuelles, prestations extra-légales de la CPAM, MDPH (PCH, complément d’AEEH), caisses de retraite et comités d’entreprise",
    },
    pageDescriptions: {
      home: "présentation du cabinet et des motifs de consultation",
      psychomotricite:
        "définition, profession paramédicale (décret n°88-659 du 6 mai 1988), motifs de consultation",
      about:
        "parcours, douance (HPI, HQI/THQI), TSA, TDA-H, troubles dys, transculturalité, formations",
      sessions:
        "déroulé, bilan psychomoteur, médiations, tarifs, aides au financement",
      contact: "coordonnées, plan d’accès, formulaire",
      faq: "ordonnance, remboursement, tarifs, accès",
    },
    readMore: "",
  },
  en: {
    title: `${site.name} · psychomotor therapist in Nantes`,
    intro: `Psychomotor therapy practice in Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, state-certified psychomotor therapist since ${site.practitioner.since}, sees teenagers and adults at ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Specialities: giftedness (HPI, HQI/THQI), ASD, ADHD, specific learning difficulties. Consultations Monday to Thursday, by appointment.`,
    practical: "Practical information",
    name: "Name",
    address: "Address",
    coordinates: "Coordinates",
    phone: "Phone",
    email: "E-mail",
    hours: "Opening times",
    access: "Access",
    transport: "Public transport",
    fees: "Fees",
    languages: "Languages",
    audience: "Who I work with",
    reimbursement: "Reimbursement",
    pagesTitle: "Pages",
    linksTitle: "Links",
    otherSite: "Website for parents and children",
    details: {
      phoneNote: "Call or SMS",
      hours: "Monday to Thursday, by appointment",
      access:
        "close to the city centre, Saint Donatien, Dalby and Malakoff neighbourhood ; Super U Dalby car park, 2 hours free, 8 minutes on foot ; wheelchair accessible",
      transport:
        "Bus 11 and 12 (Casterneau, 1 minute on foot) ; C1 (Chalâtres, 10 minutes on foot) ; Tram line 1 (Moutonnerie, 20 minutes on foot)",
      fees:
        "€47 per follow-up session ; assessment €200 (4 sessions, €50 each) ; sessions last about 40 minutes",
      languages:
        "sessions in French and English ; French (native), English (B2), Spanish (B1), some Arabic and Romanian ; interpreting can be considered",
      audience:
        "teenagers and adults (children on request) ; anyone, from babies to older adults",
      reimbursement:
        "no French social security reimbursement ; possible help from private insurers, CPAM extra-statutory benefits, MDPH (PCH, AEEH supplement), pension funds and works councils",
    },
    pageDescriptions: {
      home: "practice presentation and reasons for consultation",
      psychomotricite:
        "definition, paramedical profession (decree no. 88-659 of 6 May 1988), reasons for consultation",
      about:
        "background, giftedness (HPI, HQI/THQI), ASD, ADHD, specific learning difficulties, transculturality, training",
      sessions:
        "how sessions work, psychomotor assessment, mediations, fees, funding support",
      contact: "contact details, directions, form",
      faq: "prescription, reimbursement, fees, access",
    },
    readMore: "",
  },
  es: {
    title: `${site.name} · psicomotricista en Nantes`,
    intro: `Consultorio de psicomotricidad en Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, psicomotricista diplomada de Estado desde ${site.practitioner.since}, recibe a adolescentes y personas adultas en la calle de la Mitrie 4, ${site.address.postalCode} ${site.address.city}. Especialidades: altas capacidades (HPI, HQI/THQI), TEA, TDAH, dificultades específicas del aprendizaje. Consultas de lunes a jueves, con cita previa.`,
    practical: "Información práctica",
    name: "Nombre",
    address: "Dirección",
    coordinates: "Coordenadas",
    phone: "Teléfono",
    email: "Correo electrónico",
    hours: "Horarios",
    access: "Acceso",
    transport: "Transportes",
    fees: "Tarifas",
    languages: "Idiomas",
    audience: "A quién acompaño",
    reimbursement: "Cobertura",
    pagesTitle: "Páginas",
    linksTitle: "Enlaces",
    otherSite: "Sitio para familias con hijos",
    details: {
      phoneNote: "Llamada o SMS",
      hours: "de lunes a jueves, con cita previa",
      access:
        "cerca del centro, barrio Saint Donatien, Dalby, Malakoff ; aparcamiento Super U Dalby, 2 h gratis, 8 min a pie ; consultorio accesible para personas con movilidad reducida",
      transport:
        "Autobús 11 y 12 (Casterneau, 1 min a pie) ; C1 (Chalâtres, 10 min a pie) ; Tranvía línea 1 (Moutonnerie, 20 min a pie)",
      fees:
        "47 € la sesión de seguimiento ; balance 200 € (4 sesiones, 50 €/sesión) ; sesión de unos 40 minutos",
      languages:
        "sesiones en francés e inglés ; francés (lengua materna), inglés (B2), español (B1), nociones de árabe y rumano ; interpretación posible a estudiar",
      audience:
        "adolescentes y adultos (también niños por petición) ; cualquier persona, desde bebés hasta personas mayores",
      reimbursement:
        "sin reembolso de la Seguridad Social francesa ; ayudas posibles a través de mutuas, prestaciones extra-legales de la CPAM, MDPH (PCH, complemento AEEH), cajas de pensiones y comités de empresa",
    },
    pageDescriptions: {
      home: "presentación del consultorio y motivos de consulta",
      psychomotricite:
        "definición, profesión paramédica (decreto n.º 88-659 de 6 de mayo de 1988), motivos de consulta",
      about:
        "trayectoria, altas capacidades (HPI, HQI/THQI), TEA, TDAH, dificultades específicas del aprendizaje, transculturalidad, formación",
      sessions:
        "desarrollo, balance psicomotor, mediaciones, tarifas, ayudas a la financiación",
      contact: "datos de contacto, plano de acceso, formulario",
      faq: "receta, reembolso, tarifas, acceso",
    },
    readMore: "",
  },
  ro: {
    title: `${site.name} · psihomotricistă în Nantes`,
    intro: `Cabinet de psihomotricitate în Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, psihomotricistă diplomata de stat din ${site.practitioner.since}, primește adolescenți și adulți la ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Specialități: supradotare (HPI, HQI/THQI), TSA, TDAH, tulburări specifice de învățare. Consultații de luni până joi, cu programare.`,
    practical: "Informații practice",
    name: "Nume",
    address: "Adresă",
    coordinates: "Coordonate",
    phone: "Telefon",
    email: "E-mail",
    hours: "Program",
    access: "Acces",
    transport: "Transport",
    fees: "Tarife",
    languages: "Limbi",
    audience: "Public",
    reimbursement: "Rambursare",
    pagesTitle: "Pagini",
    linksTitle: "Linkuri",
    otherSite: "Site pentru părinți și copii",
    details: {
      phoneNote: "Apel sau SMS",
      hours: "de luni până joi, cu programare",
      access:
        "aproape de centrul orașului, cartierul Saint Donatien, Dalby, Malakoff ; parcarea Super U Dalby, 2 h gratuit, 8 minute pe jos ; cabinet accesibil PMR",
      transport:
        "autobuzele 11 și 12 (Casterneau, 1 minut pe jos) ; C1 (Chalâtres, 10 minute pe jos) ; tramvaiul linia 1 (Moutonnerie, 20 de minute pe jos)",
      fees:
        "47 € ședința de urmărire ; bilanț 200 € (4 ședințe, 50 €/ședință) ; ședință de aproximativ 40 de minute",
      languages:
        "ședințe în franceză și engleză ; franceză (limba maternă), engleză (B2), spaniolă (B1), noțiuni de arabă și română ; interpretariat posibil de studiat",
      audience:
        "adolescenți și adulți (și copii la cerere) ; orice persoană, de la bebeluși la vârstnici",
      reimbursement:
        "fără rambursare de la asigurările sociale franceze ; ajutoare posibile prin asigurări private, prestații extra-legale CPAM, MDPH (PCH, supliment AEEH), case de pensii și comitete de întreprindere",
    },
    pageDescriptions: {
      home: "prezentarea cabinetului și motivele de consultare",
      psychomotricite:
        "definiție, profesie paramedicală (decretul nr. 88-659 din 6 mai 1988), motive de consultare",
      about:
        "parcurs, supradotare (HPI, HQI/THQI), TSA, TDAH, tulburări specifice de învățare, transculturalitate, formări",
      sessions:
        "desfășurare, bilanț psihomotor, medieri, tarife, ajutoare pentru finanțare",
      contact: "date de contact, hartă de acces, formular",
      faq: "prescripție, rambursare, tarife, acces",
    },
    readMore: "",
  },
  ar: {
    title: `${site.name} · أخصائية علاج نفسي حركي في نانت`,
    intro: `عيادة للعلاج النفسي الحركي في نانت. مانويلا إيدوم، أخصائية علاج نفسي حركي حاصلة على دبلوم الدولة منذ ${site.practitioner.since}، تستقبل المراهقين والبالغين في ${site.address.street}، ${site.address.postalCode} ${site.address.city}. التخصصات: الاستعداد العالي (HPI، HQI/THQI)، اضطراب طيف التوحد، اضطراب نقص الانتباه وفرط النشاط، صعوبات التعلم المحددة. الاستشارات من الاثنين إلى الخميس، بموعد مسبق.`,
    practical: "معلومات عملية",
    name: "الاسم",
    address: "العنوان",
    coordinates: "الإحداثيات",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    hours: "أوقات الاستقبال",
    access: "الوصول",
    transport: "النقل",
    fees: "الأسعار",
    languages: "اللغات",
    audience: "الجمهور",
    reimbursement: "التغطية",
    pagesTitle: "الصفحات",
    linksTitle: "روابط",
    otherSite: "موقع للآباء والأطفال",
    details: {
      phoneNote: "مكالمة أو رسالة نصية",
      hours: "من الاثنين إلى الخميس، بموعد مسبق",
      access:
        "قرب وسط المدينة، حي سان دوناتيان ودالبي ومالاكوف ؛ موقف سوبر يو دالبي، ساعتان مجانًا، 8 دقائق سيرًا على الأقدام ؛ العيادة مهيأة لاستقبال الأشخاص ذوي الحركة المحدودة",
      transport:
        "الحافلة 11 و12 (Casterneau، دقيقة واحدة سيرًا) ؛ C1 (Chalâtres، 10 دقائق سيرًا) ؛ الترامواي الخط 1 (Moutonnerie، 20 دقيقة سيرًا)",
      fees:
        "47 € لجلسة المتابعة ؛ التقييم 200 € (4 جلسات، 50 € لكل جلسة) ؛ الجلسة نحو 40 دقيقة",
      languages:
        "الجلسات بالفرنسية والإنجليزية ؛ الفرنسية (اللغة الأم)، الإنجليزية (B2)، الإسبانية (B1)، مبادئ العربية والرومانية ؛ يمكن دراسة الترجمة الشفهية",
      audience:
        "المراهقون والبالغون (والأطفال عند الطلب) ؛ كل شخص، من الرضيع إلى المسن",
      reimbursement:
        "لا تغطية من الضمان الاجتماعي الفرنسي ؛ مساعدات ممكنة عبر التأمينات الخاصة، والمزايا الإضافية من CPAM، وMDPH (PCH، ملحق AEEH)، وصناديق التقاعد ولجان المؤسسات",
    },
    pageDescriptions: {
      home: "تقديم العيادة ودوافع الاستشارة",
      psychomotricite:
        "التعريف، مهنة شبه طبية (المرسوم رقم 88-659 المؤرخ 6 مايو 1988)، دوافع الاستشارة",
      about:
        "المسار، الاستعداد العالي (HPI، HQI/THQI)، اضطراب طيف التوحد، اضطراب نقص الانتباه وفرط النشاط، صعوبات التعلم المحددة، التعددية الثقافية، التكوينات",
      sessions:
        "سير الجلسات، التقييم النفسي الحركي، الوسائط، الأسعار، مساعدات التمويل",
      contact: "معلومات الاتصال، خريطة الوصول، النموذج",
      faq: "الوصفة الطبية، التغطية، الأسعار، الوصول",
    },
    readMore: "",
  },
};

export function buildLlms(locale: Locale): string {
  const t = copies[locale];
  const lines: string[] = [];

  lines.push(`# ${t.title}`);
  lines.push("");
  lines.push(`> ${t.intro}`);
  lines.push("");

  lines.push(`## ${t.practical}`);
  lines.push(`- ${t.name} : ${site.name} · ${roleLabel[locale]}`);
  lines.push(`- ${t.address} : ${addressName[locale]}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`);
  lines.push(
    `- ${t.coordinates} : ${site.address.geo.latitude}, ${site.address.geo.longitude}`,
  );
  lines.push(
    `- ${t.phone} : ${site.contact.phoneDisplay} (${t.details.phoneNote}) · ${site.contact.phoneHref}`,
  );
  lines.push(`- ${t.email} : ${site.contact.email}`);
  lines.push(`- ${t.hours} : ${t.details.hours}`);
  lines.push(`- ${t.access} : ${t.details.access}`);
  lines.push(`- ${t.transport} : ${t.details.transport}`);
  lines.push(`- ${t.fees} : ${t.details.fees}`);
  lines.push(`- ${t.languages} : ${t.details.languages}`);
  lines.push(`- ${t.audience} : ${t.details.audience}`);
  lines.push(`- ${t.reimbursement} : ${t.details.reimbursement}`);
  lines.push("");

  lines.push(`## ${t.pagesTitle}`);
  const pageList: [string, string][] = [
    [pages.home[locale], t.pageDescriptions.home],
    [pages.psychomotricite[locale], t.pageDescriptions.psychomotricite],
    [pages.about[locale], t.pageDescriptions.about],
    [pages.sessions[locale], t.pageDescriptions.sessions],
    [pages.contact[locale], t.pageDescriptions.contact],
    [pages.faq[locale], t.pageDescriptions.faq],
  ];
  for (const [path, description] of pageList) {
    lines.push(`- [${path}](${site.url}${path}) : ${description}`);
  }
  lines.push("");

  lines.push(`## ${t.linksTitle}`);
  lines.push(`- ${t.otherSite} : ${site.otherSite.url}`);
  lines.push("");

  return lines.join("\n");
}
