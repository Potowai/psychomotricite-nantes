import type { Copy } from "./sessions.fr";

/**
 * Textele paginii «Ședințe și tarife», în română.
 *
 * Româna pune în evidență anumite cuvinte («bilanț psihomotor»,
 * «resurse», «pachet de bunăstare»…). Aceste accente sunt păstrate:
 * `emphasis` conține fragmentul îngroșat, `before` și `after` textul din
 * jurul lui. Un paragraf fără accent are un șir gol.
 */

/** Paragraf: un fragment poate fi pus în evidență. */
export type RichText = {
  before: string;
  emphasis: string;
  after: string;
};

/** Răspunsul din FAQ: paragrafe, o listă, un paragraf de final. */
export type FaqAnswer = {
  paragraphs: RichText[];
  list: RichText[] | null;
  closing: RichText | null;
};

/** Întrebarea din FAQ și răspunsul ei. */
export type FaqItem = {
  question: string;
  answer: FaqAnswer;
};

export const ro: Copy = {
  meta: {
    title: "Ședințe, tarife și ajutoare pentru finanțare",
    description:
      "Ședințe de psihomotricitate în Nantes: desfășurare, medieri corporale, durată (40 min), tarife (47 € acompaniere, 200 € bilanț în 4 ședințe) și ajutoare posibile: asigurări private de sănătate, CPAM, MDPH (PCH, AEEH).",
  },
  breadcrumb: {
    home: "Acasă",
    current: "Ședințe și tarife",
  },
  hero: {
    eyebrow: "Ședințe și tarife",
    title: "Acompanierea în psihomotricitate.",
    lead: "Ritmul ședințelor este cel mai adesea o ședință pe săptămână sau la două săptămâni, dar acesta poate varia, la fel ca durata acompanierii.",
  },
  course: {
    eyebrow: "Desfășurarea",
    title: "Să ne cunoaștem, apoi să înțelegem unde se află corpul.",
    paragraphs: [
      {
        before:
          "Primele întâlniri permit să precizăm cererea și să ne cunoaștem. Dacă este nevoie, un ",
        emphasis: "bilanț psihomotor",
        after:
          " poate fi realizat; nu este o etapă obligatorie pentru a continua cu ședințe. El permite să degajăm o primă grilă de înțelegere, o primă fotografie a locului în care se află persoana în corpul ei: motricitate fină, motricitate globală, raportul cu timpul și spațiul, trăirea corporală, raportul cu corpul, sensorialitate.",
      },
      {
        before:
          "Aceasta permite să vedem care sunt dificultățile, dar și ",
        emphasis: "resursele",
        after: ".",
      },
    ],
  },
  sessions: {
    eyebrow: "Ședințele",
    title: "Medieri corporale și schimburi.",
    intro:
      "Când se decide o acompaniere, ședințele de psihomotricitate se articulează în jurul medierilor corporale și al schimburilor. Medierile utilizate pot fi:",
    mediations: [
      "relaxare",
      "cânt",
      "dans",
      "muzică",
      "desen",
      "argilă",
      "atingere terapeutică",
      "automasaj",
      "exerciții de respirație",
    ],
  },
  place: {
    eyebrow: "Locul",
    title: "Ședințele au loc într-un cabinet pluridisciplinar.",
    body: "Ședințele se desfășoară cel mai adesea în cabinetul meu, într-un cabinet pluridisciplinar care reunește o psihomotricistă, două psiholoage cliniciene și o medic de familie. Mă pot deplasa în mod excepțional la domiciliu și/sau la locurile de viață, pentru situații specifice.",
    opening: {
      before: "Consultația are loc ",
      emphasis: "de luni până joi",
      after: ", cu programare. ",
    },
    accessLink: "Vedeți harta de acces și transportul",
  },
  fees: {
    eyebrow: "Tarife",
    suiviLabel: "Ședință de acompaniere",
    bilanLabel: "Bilanț psihomotor",
    bilanNote: "(se prevăd {sessions} ședințe · {amount} €/ședință)",
    durationLabel: "Durata unei ședințe",
    durationUnit: "min",
    note: "Dacă întâmpinați dificultăți financiare, putem vorbi despre asta.",
  },
  callouts: {
    reimbursement: {
      title: "Rambursare",
      text: "Psihomotriciștii sunt auxiliari ai medicinei; spre deosebire de kinetoterapeuți și logopezi, îngrijirile lor nu beneficiază încă de rambursare de către Asigurările Sociale. Există ajutoare (a se vedea mai jos).",
    },
    prescription: {
      title: "Rețetă",
      text: "Psihomotricitatea este o profesie paramedicală: o prescripție medicală este necesară pentru a începe un bilanț sau un acompaniament, dar nu este cerută la prima întâlnire.",
    },
  },
  funding: {
    eyebrow: "Ajutoare pentru finanțare",
    title: "Nu rămâneți singur sau singură în fața demersurilor.",
    intro:
      "Mai multe dispozitive pot participa la finanțarea ședințelor. Iată esențialul. Pentru detaliile dosarului, vă pot însoți.",
    items: [
      {
        question: "Asigurările private de sănătate",
        answer: {
          paragraphs: [
            {
              before:
                "Tot mai multe asigurări private de sănătate rambursează psihomotricitatea (50 % din cheltuieli, sau 10 ședințe…), adesea prin ",
              emphasis: "pachetul de bunăstare",
              after: ".",
            },
            {
              before:
                "În caz de refuz: toate asigurările private de sănătate dispun de o ",
              emphasis: "comisie de recurs amiabil",
              after:
                " pentru depășirile de onorarii. Se constituie atunci un dosar (scrisoare de cerere de ajutor excepțional, prescripție medicală pentru bilanț și/sau ședințe, facturi achitate, deviz al ședințelor) adresat serviciului social sau comisiei de prestații sociale. Dacă dosarul este acceptat, asigurarea poate acorda un pachet.",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "Prestațiile extra-legale ale CPAM",
        answer: {
          paragraphs: [
            {
              before:
                "Este vorba de un ajutor acordat cu titlu excepțional. Ne adresăm serviciului social al primăriei (CCAS) sau unui asistent social al Asigurărilor Sociale, cu un dosar «ajutor pentru prestație extra-legală». Se aplică criterii de venit, iar cererea este justificată printr-un bilanț. Este posibil fără MDPH, dar un dosar MDPH în curs poate facilita demersul.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "MDPH: PCH și completarea AEEH",
        answer: {
          paragraphs: [
            {
              before:
                "MDPH privește și persoane fără handicap grav. Rambursarea totală sau parțială este un drept pentru un handicap dovedit și diagnosticat (autism, dispraxie, TDAH…) de către un medic specialist (pedopsihiatru, neuropediatru…).",
              emphasis: "",
              after: "",
            },
          ],
          list: [
            {
              before: "",
              emphasis: "Adulți beneficiari MDPH:",
              after:
                " psihomotricitatea poate ține de PCH (luare în sarcină integrală sau parțială). Se face mai întâi bilanțul, apoi se trimite la MDPH.",
            },
            {
              before: "",
              emphasis: "Copii și adolescenți beneficiari MDPH:",
              after:
                " o completare se poate adăuga la AEEH (Alocația de Educație pentru Copilul cu Handicap), al cărei cuantum depinde de 6 categorii. Plata ședințelor rămâne în sarcina familiei, dar AEEH o compensează.",
            },
          ],
          closing: {
            before:
              "Aceste dosare sunt lungi; ele sunt facilitate de un asistent social al CCAS sau al spațiului departamental al solidarităților.",
            emphasis: "",
            after: "",
          },
        },
      },
      {
        question: "Case de pensii și comitete de întreprindere",
        answer: {
          paragraphs: [
            {
              before:
                "Casele de pensii și comitetele de întreprindere pot participa prin ajutoare financiare. Informați-vă la organismul dumneavoastră.",
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
     * Aceste două întrebări nu sunt afișate în FAQ-ul paginii:
     * ele alimentează marcarea FAQ a Google.
     */
    extra: [
      {
        question: "Ce documente sunt adesea necesare?",
        answer: {
          paragraphs: [
            {
              before:
                "Bilanț, deviz și factură: nu ezitați să mi le cereți, vi le voi pune la dispoziție.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "Care este diferența dintre un bilanț și o acompaniere?",
        answer: {
          paragraphs: [
            {
              before:
                "Bilanțul psihomotor este un timp de evaluare: câteva întâlniri pentru a preciza cererea, a observa motricitatea fină și globală, raportul cu timpul și spațiul, trăirea corporală și sensorialitatea, și a degaja o primă grilă de înțelegere, cu dificultățile ca și cu resursele. Acompanierea poate veni apoi: ședințe regulate, cel mai adesea o dată pe săptămână sau la două săptămâni, în jurul medierilor corporale și al schimburilor.",
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
      "Vedeți detaliile pe pagina Ședințe și tarife a {name}, psihomotricistă în Nantes.",
  },
  cta: {
    title: "O întrebare despre tarife sau ajutoare?",
    text: "Sunați-mă sau trimiteți-mi un SMS: vom vorbi despre asta simplu. Dacă întâmpinați dificultăți financiare, spuneți-mi, putem vorbi despre asta.",
  },
};
