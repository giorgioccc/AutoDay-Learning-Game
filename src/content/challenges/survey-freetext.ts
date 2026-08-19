import type { Challenge } from "../types";

export const surveyFreetext: Challenge = {
  id: "survey-freetext",
  mode: "quick",
  level: "beginner",
  category: "data-research",
  estimatedMinutes: 40,
  title: {
    en: "Eight Hundred Answers to One Question",
    it: "Ottocento risposte a una domanda",
  },
  scenario: {
    en: "The annual staff survey closed with eight hundred people writing something in the box marked \"what one thing would you change?\". Alessia has to present the findings in a fortnight. The multiple-choice questions took an afternoon. This box is the part everyone will actually want to hear about, and she has read a hundred and forty of them.",
    it: "Il sondaggio annuale interno si è chiuso con ottocento persone che hanno scritto qualcosa nella casella «qual è la prima cosa che cambieresti?». Alessia deve presentare i risultati fra due settimane. Le domande a risposta chiusa le hanno preso un pomeriggio. Questa casella è la parte di cui tutti vorranno davvero sentir parlare, e lei ne ha lette centoquaranta.",
  },
  constraints: [
    {
      en: "The whole point of a free-text box is that it can say something the multiple-choice questions could not. A list of themes decided in advance throws that away.",
      it: "Il senso di una casella di testo libero è che può dire qualcosa che le domande a risposta chiusa non potevano dire. Una lista di temi decisa in anticipo butta via proprio quello.",
    },
    {
      en: "The output ends up on a slide reading \"34% raised workload\". That number will be quoted back for a year.",
      it: "L'output finisce su una slide che dice «il 34% ha sollevato il tema del carico di lavoro». Quel numero verrà ricitato per un anno.",
    },
    {
      en: "Answers run from one word to forty. A lot of them are \"nothing\", and a lot of them raise two unrelated things in one sentence.",
      it: "Le risposte vanno da una parola a quaranta. Molte sono «niente», e molte sollevano due questioni scollegate nella stessa frase.",
    },
  ],
  nudge: {
    en: "Somebody is going to put a percentage on a slide. Work out what has to be true for that percentage to mean anything, and you will have decided where the categories come from and who is allowed to change them mid-way.",
    it: "Qualcuno metterà una percentuale su una slide. Capisci cosa deve essere vero perché quella percentuale significhi qualcosa, e avrai già deciso da dove vengono le categorie e chi può cambiarle a metà strada.",
  },
  approach: {
    summary: {
      en: "Two passes: derive a candidate coding scheme from a sample, let a human freeze it, then classify all eight hundred answers against the frozen version with multiple labels allowed.",
      it: "Due passaggi: ricava uno schema di codifica candidato da un campione, fallo congelare a una persona, poi classifica tutte e ottocento le risposte contro la versione congelata, ammettendo etichette multiple.",
    },
    steps: [
      {
        en: "First pass: read a random sample and propose a set of themes with a definition and real example answers for each. This is a proposal, not an answer.",
        it: "Primo passaggio: leggi un campione casuale e proponi un insieme di temi, ognuno con una definizione e risposte reali di esempio. È una proposta, non un risultato.",
      },
      {
        en: "Alessia edits, merges and freezes that scheme before anything is counted. Freezing is the part that makes the counts mean something — a category that shifts halfway through a run produces numbers that cannot be added up.",
        it: "Alessia modifica, accorpa e congela quello schema prima che si conti qualsiasi cosa. È il congelamento a dare un senso ai conteggi: una categoria che cambia a metà corsa produce numeri che non si possono sommare.",
      },
      {
        en: "Second pass: classify every answer against the frozen scheme, allowing more than one label, and returning the phrase that triggered each label.",
        it: "Secondo passaggio: classifica ogni risposta contro lo schema congelato, ammettendo più di un'etichetta, e restituendo la frase che ha fatto scattare ciascuna.",
      },
      {
        en: "Make \"no substantive content\" one of the codes. Around a fifth of any survey box is \"nothing\", \"n/a\" and \"see above\", and those have to be counted, not distributed.",
        it: "Rendi «nessun contenuto sostanziale» uno dei codici. Circa un quinto di qualsiasi casella di sondaggio è «niente», «n.d.» e «vedi sopra», e vanno contati, non distribuiti.",
      },
      {
        en: "Hand-label a hundred answers independently and compare. The agreement number belongs in the footnote of the slide, and producing it is the difference between a finding and a claim.",
        it: "Etichetta a mano cento risposte in modo indipendente e confronta. Il numero di accordo va nella nota a piè di pagina della slide, e produrlo è ciò che distingue un risultato da un'affermazione.",
      },
    ],
  },
  pitfalls: [
    {
      en: "\"Nothing really, it's fine\" gets filed under the nearest available theme, because the scheme offered no way to say the answer had no content. Every one of those inflates a percentage that goes on a slide.",
      it: "«Niente in particolare, va bene così» viene archiviato sotto il tema più vicino, perché lo schema non offriva un modo per dire che la risposta non aveva contenuto. Ognuna di queste gonfia una percentuale che finisce su una slide.",
    },
    {
      en: "Deriving the themes and applying them in the same pass. The scheme quietly evolves as the run proceeds, the first two hundred answers were coded against a different set of categories than the last two hundred, and nothing in the output reveals it.",
      it: "Ricavare i temi e applicarli nello stesso passaggio. Lo schema si evolve in silenzio man mano che la corsa procede, le prime duecento risposte sono state codificate contro categorie diverse dalle ultime duecento, e niente nell'output lo rivela.",
    },
    {
      en: "Counting mentions and reporting people. If an answer can carry two labels then the labels sum to more than the respondents, and \"34%\" quietly becomes a percentage of something nobody would have agreed to measure.",
      it: "Contare le menzioni e riportare le persone. Se una risposta può portare due etichette, le etichette sommano a più dei rispondenti, e «34%» diventa in silenzio la percentuale di qualcosa che nessuno avrebbe accettato di misurare.",
    },
  ],
  starterPrompt: {
    en: "I have 800 free-text survey answers to \"what one thing would you change?\" and I need themes with defensible counts for a presentation. I don't want to decide the themes in advance, but I also need the numbers to be addable. Ask me how I'd handle answers that mention two things and answers that say nothing at all — then help me plan the two passes.",
    it: "Ho 800 risposte in testo libero alla domanda «qual è la prima cosa che cambieresti?» e mi servono dei temi con conteggi difendibili per una presentazione. Non voglio decidere i temi in anticipo, ma ho anche bisogno che i numeri siano sommabili. Chiedimi come gestirei le risposte che citano due cose e quelle che non dicono niente: poi aiutami a pianificare i due passaggi.",
  },
};
