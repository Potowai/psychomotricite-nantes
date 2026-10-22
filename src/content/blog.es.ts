import type { Article, Block } from "./blog";

export type { Article, Block };

export const articles: Article[] = [
  {
    slug: "altas-capacidades-y-psicomotricidad",
    title: "Altas capacidades (HPI, HQI/THQI) y psicomotricidad: cuando el cuerpo también piensa",
    description:
      "En las personas con alto potencial, el cuerpo suele cargar con una parte del exceso. Qué viene a escuchar la psicomotricidad, y cómo se desarrolla el acompañamiento.",
    date: "2026-03-04",
    updated: "2026-10-02",
    readingMinutes: 6,
    tags: ["Altas capacidades", "HPI, HQI/THQI", "Adolescentes", "Personas adultas"],
    blocks: [
      {
        type: "lead",
        text: "Tras haber desarrollado un conocimiento fino de las altas capacidades, recibo con mucha frecuencia a personas HPI, HQI/THQI. No es casualidad: en ellas, el cuerpo es a menudo el primer lugar donde se manifiesta la intensidad, y el último al que se piensa escuchar.",
      },
      {
        type: "p",
        text: "A veces se resume el alto potencial en la rapidez de un razonamiento. Pero un alto potencial no se juega solo en la cabeza. Se vive en un cuerpo que se mueve, que reacciona, que se agota, que busca contener una intensidad que la mente, en cambio, sí puede nombrar.",
      },
      { type: "h2", text: "El alto potencial no se juega solo en la cabeza" },
      {
        type: "p",
        text: "Una persona con alto potencial puede pensar más rápido, sentir con más intensidad, percibir con más finura. Esta hiperestesia —esta receptividad a los ambientes, las texturas, los sonidos, los demás— tiene una traducción corporal directa. A veces se le llama torpeza, agitación, tensión o cansancio. También ocurre que ninguna palabra ha encontrado todavía su lugar.",
      },
      {
        type: "p",
        text: "El cuerpo guarda la huella de lo que no se ha podido decir. Una respiración corta, una nuca bloqueada, una dificultad para asentarse, una emotividad que desborda: son información valiosa, no defectos.",
      },
      { type: "h2", text: "Qué viene a escuchar la psicomotricidad" },
      {
        type: "ul",
        items: [
          "El vínculo entre la agitación mental y el anclaje corporal: encontrar estabilidad sin ralentizar el pensamiento.",
          "La sensorialidad: dosificar mejor los estímulos, distinguir lo que calma y lo que satura.",
          "La regulación emocional: dar al cuerpo apoyos para atravesar lo que desborda.",
          "La confianza en uno mismo: habitar un cuerpo que a veces se vive como engorroso o ajeno.",
        ],
      },
      {
        type: "quote",
        text: "Pasar por el cuerpo permite dar un paso al lado mientras se explora en profundidad.",
      },
      { type: "h2", text: "Cómo se desarrolla el acompañamiento" },
      {
        type: "p",
        text: "Las primeras citas permiten precisar la solicitud y conocerse. Si hace falta, se puede realizar un balance psicomotor, con el fin de obtener una primera cuadrícula de comprensión: una primera fotografía de dónde está la persona en su cuerpo — motricidad fina y global, relación con el tiempo y el espacio, vivencia corporal, sensorialidad. No es un paso obligatorio para empezar las sesiones.",
      },
      {
        type: "p",
        text: "Cuando se pone en marcha un seguimiento, las sesiones se articulan en torno a mediaciones corporales e intercambios: relajación, canto, danza, música, dibujo, arcilla, toque terapéutico, automasaje, ejercicios de respiración. Una sesión dura unos 40 minutos, normalmente una vez por semana o cada quince días.",
      },
      { type: "h2", text: "¿Cuándo consultar?" },
      {
        type: "p",
        text: "No hay un umbral objetivo. Un simple deseo de introspección, una incomodidad cotidiana, un cansancio que vuelve, la sensación de ser «demasiado» o «al margen»: tantas razones legítimas para empujar la puerta. El alto potencial no es un trastorno, pero a veces necesita un espacio donde depositarse.",
      },
      {
        type: "note",
        title: "En resumen",
        text: "La psicomotricidad no «corrige» las altas capacidades. Ayuda a la persona a habitar su cuerpo, a regular la intensidad y a apoyarse en sus recursos, a menudo enormes.",
      },
    ],
  },
  {
    slug: "ansiedad-y-burnout-por-que-pasar-por-el-cuerpo",
    title: "Ansiedad, burnout: ¿por qué pasar por el cuerpo?",
    description:
      "Cuando la mente da vueltas, el cuerpo es un camino posible. Cómo ayuda la psicomotricidad a recuperar el anclaje, la respiración y el margen.",
    date: "2026-04-18",
    readingMinutes: 5,
    tags: ["Ansiedad", "Burnout", "Personas adultas"],
    blocks: [
      {
        type: "lead",
        text: "Cuando la ansiedad se instala, lo ocupa todo: los pensamientos, el sueño, las relaciones y el cuerpo. La psicomotricidad propone no empezar por luchar contra los pensamientos, sino por devolverle al cuerpo espacio y respiración.",
      },
      {
        type: "p",
        text: "Se consulta a menudo por la mente: rumiaciones, miedo a hacerlo mal, sensación de estar desbordado. Pero la mente no está sola. La ansiedad se inscribe en el cuerpo — en una respiración alta, los hombros levantados, la mandíbula apretada, un sueño entrecortado.",
      },
      { type: "h2", text: "Cuando el cuerpo está en alerta" },
      {
        type: "p",
        text: "El cuerpo está hecho para responder al peligro: tensarse, acelerar, prepararse. El problema aparece cuando esa respuesta sigue encendida sin amenaza real. Con el tiempo, ya no se repara la alerta: se vive como un estado normal. El agotamiento profesional es a menudo el punto en que ese estado se vuelve insostenible.",
      },
      {
        type: "quote",
        text: "Pasar por el cuerpo permite dar un paso al lado mientras se explora en profundidad. Es también una forma de buscar unas bases sólidas y cultivar los recursos interiores.",
      },
      { type: "h2", text: "Qué trabajamos en sesión" },
      {
        type: "ul",
        items: [
          "La respiración: reconocer una respiración alta y aprender a bajarla, simplemente.",
          "El anclaje: recuperar apoyos, sentirse sostenido, recuperar peso.",
          "La descarga: mover lo que está retenido, sin forzarse.",
          "El automasaje y el toque terapéutico: darse presencia a uno mismo.",
          "El tiempo: recuperar un ritmo, salir de la aceleración permanente.",
        ],
      },
      { type: "h2", text: "¿Cómo es una sesión?" },
      {
        type: "p",
        text: "No hay una sesión tipo. Se puede hablar, respirar, caminar, dibujar, modelar, bailar un poco, o no hacer nada más que parar. Lo importante es el ajuste: ir lo bastante lejos para que algo se mueva, no tan lejos como para no dañarse.",
      },
      {
        type: "p",
        text: "Una sesión dura unos 40 minutos. El ritmo más habitual es de una sesión por semana o cada quince días, pero puede variar según la situación, y la duración del acompañamiento se decide de común acuerdo.",
      },
      {
        type: "note",
        title: "Si se encuentra en una situación de urgencia",
        text: "La psicomotricidad no es un servicio de urgencias. En caso de malestar inmediato, llame al 3114 (número nacional de prevención del suicidio, gratuito, 24 h/24) o al 15. Su médico de cabecera también puede orientarle.",
      },
    ],
  },
  {
    slug: "el-balance-psicomotor",
    title: "El balance psicomotor: ¿qué esperar?",
    description:
      "Duración, contenido, desarrollo, tarifa: lo que el balance psicomotor permite comprender, y cómo prepara las sesiones que vienen después.",
    date: "2026-05-27",
    readingMinutes: 4,
    tags: ["Balance", "Primeras citas"],
    blocks: [
      {
        type: "lead",
        text: "El balance psicomotor no es un examen escolar, ni una prueba de la que se sale con una nota. Es una fotografía —la suya— en un momento dado.",
      },
      {
        type: "p",
        text: "Las primeras citas permiten precisar la solicitud y conocerse. Si hace falta, se puede realizar un balance psicomotor, con el fin de obtener una primera cuadrícula de comprensión, una primera fotografía de dónde está la persona en su cuerpo. No es obligatorio para iniciar un seguimiento.",
      },
      { type: "h2", text: "Qué observamos" },
      {
        type: "ul",
        items: [
          "La motricidad fina y la motricidad global.",
          "La relación con el tiempo y con el espacio.",
          "La vivencia corporal y la relación con el cuerpo.",
          "La sensorialidad, las reacciones a la estimulación.",
          "Los recursos, los apoyos, los impulsos.",
        ],
      },
      {
        type: "p",
        text: "El objetivo no es medir por medir. Es ver cuáles son las dificultades, y también los recursos. El balance sirve para comprender, no para juzgar.",
      },
      {
        type: "quote",
        text: "Esto permite ver cuáles son las dificultades, y también los recursos.",
      },
      { type: "h2", text: "Después del balance" },
      {
        type: "p",
        text: "Decidimos juntos cómo seguir: empezar un acompañamiento, espaciar las citas, reorientar, o sencillamente salir con una comprensión nueva. También ocurre que el balance basta para devolver el sentido, y que la persona no necesite sesiones regulares.",
      },
      { type: "h2", text: "Preguntas prácticas" },
      {
        type: "ul",
        items: [
          "Una sesión dura unos 40 minutos. Una sesión de seguimiento cuesta 47 €.",
          "El balance psicomotor se desarrolla en 4 sesiones, es decir, 200 € en total (50 € por sesión).",
          "Por tanto, es obligatoria una prescripción médica para iniciar un balance o un seguimiento.",
          "Esta prescripción también puede facilitar ciertas gestas (mutua, MDPH).",
        ],
      },
      {
        type: "note",
        title: "Dificultades económicas",
        text: "Si tiene dificultades económicas, podemos hablarlo. Existen ayudas: mutuas, prestaciones no legales del centro de salud, la MDPH (PCH, complemento de la AEEH), mutualidades de pensiones y comités de empresa.",
      },
    ],
  },
  {
    slug: "psicomotricidad-para-adultos-en-nantes",
    title: "Psicomotricidad para personas adultas en Nantes: ¿para quién y para qué?",
    description:
      "Mucha gente cree que la psicomotricidad es solo para niños. En Nantes, Manuela Edom recibe también a adolescentes y personas adultas. Aquí, para qué, y dónde.",
    date: "2026-06-15",
    readingMinutes: 5,
    tags: ["Nantes", "Personas adultas", "Consultorio"],
    blocks: [
      {
        type: "lead",
        text: "«¿La psicomotricidad es para niños?» La pregunta vuelve a menudo. La respuesta es no: las sesiones se dirigen a cualquier persona, desde el bebé hasta la persona mayor. En Nantes, recibo sobre todo a adolescentes y personas adultas.",
      },
      { type: "h2", text: "Por qué consultar en la edad adulta" },
      {
        type: "p",
        text: "Los motivos son múltiples: una ansiedad que se ha instalado, un agotamiento profesional, un traumatismo, una relación con el cuerpo que se ha vuelto difícil, una enfermedad crónica, un trastorno neurológico, un período de vida en el que ya no se reconoce. A menudo también, un simple deseo de entenderse de otra manera.",
      },
      {
        type: "p",
        text: "Muchas de las personas que recibo tienen la impresión de haber «probado todo con la cabeza». Pasar por el cuerpo abre a menudo otro camino.",
      },
      { type: "h2", text: "Lo que la psicomotricidad no es" },
      {
        type: "ul",
        items: [
          "No es fisioterapia: no trabajamos la rehabilitación muscular, sino el vínculo cuerpo-mente.",
          "No es psicoterapia: la palabra tiene su lugar, pero el cuerpo es el hilo conductor.",
          "No es una actividad deportiva: no hay ninguna marca que alcanzar.",
        ],
      },
      { type: "h2", text: "En el consultorio, en Nantes" },
      {
        type: "p",
        text: "Les recibo en el consultorio multidisciplinario, calle de la Mitrie 4, 44000 Nantes, de lunes a viernes, con cita previa. El consultorio está cerca del centro de la ciudad, en el barrio Malakoff – Saint-Donatien.",
      },
      {
        type: "ul",
        items: [
          "Autobús 11 y 12 — parada Casterneau, 1 min a pie",
          "C1 — parada Chalâtres, 10 min a pie",
          "Tranvía línea 1 — parada Moutonnerie, 20 min a pie",
          "Aparcamiento del Super U Dalby — 2 h gratuitas, 8 min a pie",
        ],
      },
      {
        type: "p",
        text: "Las sesiones tienen lugar preferentemente en el consultorio. En situaciones específicas, puedo desplazarme excepcionalmente a su domicilio o a su entorno de vida.",
      },
      {
        type: "note",
        title: "Altas capacidades y neurodivergencias",
        text: "Acompaño con regularidad a personas HPI, HQI/THQI, así como a personas afectadas por el TEA, el TDAH y/o las dificultades específicas del aprendizaje.",
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
