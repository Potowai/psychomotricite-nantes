import type { Copy } from "./sessions.fr";

export const es: Copy = {
  meta: {
    title: "Sesiones, tarifas y ayudas a la financiación",
    description:
      "Sesiones de psicomotricidad en Nantes: cómo sedevelopan, mediaciones corporales, duración (40 min), tarifas (47 € seguimiento, 200 € balance en 4 sesiones) y las ayudas que pueden existir — mutuas, CPAM, MDPH (PCH, AEEH).",
  },
  breadcrumb: {
    home: "Inicio",
    current: "Sesiones y tarifas",
  },
  hero: {
    eyebrow: "Sesiones y tarifas",
    title: "El seguimiento en psicomotricidad.",
    lead: "El ritmo de las sesiones es lo más habitual de una sesión por semana o cada quince días, pero puede variar, igual que la duración del acompañamiento.",
  },
  course: {
    eyebrow: "Cómo es",
    title: "Conocerse, después entender dónde está el cuerpo.",
    paragraphs: [
      {
        before:
          "Las primeras citas permiten precisar la demanda y conocerse. Si hace falta, se puede realizar un ",
        emphasis: "balance psicomotor",
        after:
          "; no es un paso obligatorio para dar curso a sesiones. Permite dibujar un primer marco de comprensión: una primera fotografía de dónde está la persona en su cuerpo: motricidad fina, motricidad global, relación con el tiempo y el espacio, vivencia corporal, relación con el cuerpo, sensorialidad.",
      },
      {
        before:
          "Esto permite ver cuáles son las dificultades, pero también los ",
        emphasis: "recursos",
        after: ".",
      },
    ],
  },
  sessions: {
    eyebrow: "Las sesiones",
    title: "Mediaciones corporales, e intercambios.",
    intro:
      "Cuando se decide un seguimiento, las sesiones de psicomotricidad se articulan en torno a mediaciones corporales e intercambios. Las mediaciones utilizadas pueden ser:",
    mediations: [
      "relajación",
      "canto",
      "danza",
      "música",
      "dibujo",
      "arcilla",
      "toque terapéutico",
      "automasaje",
      "ejercicios de respiración",
    ],
  },
  place: {
    eyebrow: "El lugar",
    title: "Las sesiones tienen lugar en un consultorio multidisciplinario.",
    body: "Las sesiones se desarrollan lo más habitualmente en mi consultorio, en un consultorio multidisciplinario que reúne una psicomotricista, dos psicólogas clínicas y una médica generalista. Puedo desplazarme excepcionalmente a domicilio y/o a los lugares de vida, para situaciones específicas.",
    opening: {
      before: "La consulta tiene lugar ",
      emphasis: "de lunes a viernes",
      after: ", con cita previa. ",
    },
    accessLink: "Ver el plano de acceso y los transportes",
  },
  fees: {
    eyebrow: "Tarifas",
    suiviLabel: "Sesión de seguimiento",
    bilanLabel: "Balance psicomotor",
    bilanNote: "(prever {sessions} sesiones · {amount} €/sesión)",
    durationLabel: "Duración de una sesión",
    note: "Si tiene dificultades económicas, podemos hablarlo.",
  },
  callouts: {
    reimbursement: {
      title: "Reembolso",
      text: "Las psicomotricistas son auxiliares de la medicina; a diferencia de los fisioterapeutas y los logopedas, sus cuidados todavía no se reembolsa por la seguridad social. Sí existen ayudas: véase más abajo.",
    },
    prescription: {
      title: "Prescripción",
      text: "La psicomotricidad es una profesión paramédical: es obligatoria una prescripción médica para iniciar un balance o un seguimiento.",
    },
  },
  funding: {
    eyebrow: "Ayudas a la financiación",
    title: "No se quede solo.a frente a las trámites.",
    intro:
      "Varios dispositivos pueden participar en la financiación de las sesiones. Aquí lo esencial — y para el detalle del expediente, puedo acompañarle.",
    items: [
      {
        question: "Las mutuas",
        answer: {
          paragraphs: [
            {
              before:
                "Cada vez más mutuas reembolsan la psicomotricidad (50 % de los gastos, o 10 sesiones…), a menudo a través del ",
              emphasis: "paquete de bienestar",
              after: ".",
            },
            {
              before:
                "En caso de rechazo: todas las mutuas disponen de una ",
              emphasis: "comisión de recursos amistosa",
              after:
                " para los gastos que superan la cobertura. Entonces se constituye un expediente: carta de solicitud de ayuda excepcional, prescripción médica del balance y/o de las sesiones, facturas pagadas, presupuesto de las sesiones, dirigido al servicio social o a la comisión de prestaciones sociales. Si se acepta el expediente, la mutua puede conceder un paquete.",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "Las prestaciones no legales de la CPAM",
        answer: {
          paragraphs: [
            {
              before:
                "Se trata de una ayuda concedida a título excepcional. Se dirige al servicio social de su ayuntamiento (CCAS) o a un.a asistente social de la Seguridad Social, con un expediente «ayuda para prestación no legal». Se aplican criterios de ingresos, y la solicitud se justifica con un balance. Es posible sin la MDPH, pero un expediente MDPH en curso puede facilitar la tramitació.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "La MDPH — PCH y complemento de la AEEH",
        answer: {
          paragraphs: [
            {
              before:
                "La MDPH también concerne a personas sin discapacidad grave. El reembolso total o parcial es un derecho ante una discapacidad acreditada y diagnosticada (autismo, dispraxia, TDAH…) por un médico especialista (psiquiatra infantil, neuropediatra…).",
              emphasis: "",
              after: "",
            },
          ],
          list: [
            {
              before: "",
              emphasis: "Personas adultas beneficiarias de la MDPH:",
              after:
                " la psicomotricidad puede entrar en la PCH (cobertura integral o parcial). Se hace primero el balance y después se envía a la MDPH.",
            },
            {
              before: "",
              emphasis: "Niños y adolescentes beneficiarios de la MDPH:",
              after:
                " puede añadirse un complemento a la AEEH (Asignación de Educación del Niño Discapacitado), cuya cuantía depende de 6 categorías. El pago de las sesiones sigue en su cargo, pero la AEEH lo compensa.",
            },
          ],
          closing: {
            before:
              "Estos expedientes son largos; los facilita un.a asistente social del CCAS o del espacio departamental de solidaridades.",
            emphasis: "",
            after: "",
          },
        },
      },
      {
        question: "Cajas de pensiones y comités de empresa",
        answer: {
          paragraphs: [
            {
              before:
                "Las cajas de pensiones y los comités de empresa pueden participar con ayudas económicas. Infórmese en su entidad.",
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
    extra: [
      {
        question: "¿Qué documentos suelen ser necesarios?",
        answer: {
          paragraphs: [
            {
              before:
                "Balance, presupuesto y factura: no dude en pedírmelos, se los facilitaré.",
              emphasis: "",
              after: "",
            },
          ],
          list: null,
          closing: null,
        },
      },
      {
        question: "¿Cuál es la diferencia entre un balance y un seguimiento?",
        answer: {
          paragraphs: [
            {
              before:
                "El balance psicomotor es un tiempo de evaluación: unas citas para precisar la demanda, observar la motricidad fina y global, la relación con el tiempo y el espacio, la vivencia corporal y la sensorialidad, y dibujar un primer marco de comprensión, con las dificultades y también los recursos. El seguimiento puede venir después: sesiones regulares, lo más habitualmente una vez por semana o cada quince días, en torno a mediaciones corporales e intercambios.",
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
      "Véase el detalle en la página Sesiones y tarifas de {name}, psicomotricista en Nantes.",
  },
  cta: {
    title: "¿Una pregunta sobre las tarifas o las ayudas?",
    text: "Llámeme o envíeme un SMS: lo hablaremos con claridad. Si tiene dificultades económicas, dígalo, podemos hablarlo.",
  },
};
