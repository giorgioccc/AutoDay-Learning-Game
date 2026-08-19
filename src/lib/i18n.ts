import type { Category, Lang, Level, Localized, Mode } from "@/content/types";

export const LANG_STORAGE_KEY = "autoday.lang";

export const DEFAULT_LANG: Lang = "en";

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "it";
}

type UiStrings = {
  tagline: Localized;
  intro: Localized;
  chooseMode: Localized;
  spin: Localized;
  spinAgain: Localized;
  spinning: Localized;
  modeNames: Record<Mode, Localized>;
  modeDescriptions: Record<Mode, Localized>;
  scenario: Localized;
  constraints: Localized;
  nudge: Localized;
  approach: Localized;
  pitfalls: Localized;
  revealHints: Record<"nudge" | "approach" | "pitfalls", Localized>;
  starterPromptToggle: Localized;
  starterPromptCaption: Localized;
  copy: Localized;
  copied: Localized;
  minutesShort: Localized;
  languageLabel: Localized;
  howItWorksTitle: Localized;
  howItWorks: Localized[];
  noAnswersTitle: Localized;
  noAnswers: Localized;
  levels: Record<Level, Localized>;
  categories: Record<Category, Localized>;
  narrowTitle: Localized;
  narrowHint: Localized;
  filterCategory: Localized;
  filterLevel: Localized;
  filterReset: Localized;
  filterEmpty: Localized;
  filterNarrowed: Localized;
  timerTitle: Localized;
  timerCaption: Localized;
  timerStart: Localized;
  timerSuggested: Localized;
  timerCustomLabel: Localized;
  timerRemaining: Localized;
  timerExtend: Localized;
  timerStop: Localized;
  timerElapsedPrefix: Localized;
  timerDone: Localized;
  permalink: Localized;
  backToSpin: Localized;
  notFoundTitle: Localized;
  notFoundBody: Localized;
};

export const ui: UiStrings = {
  tagline: {
    en: "One thing worth automating. Work out how.",
    it: "Una cosa che vale la pena automatizzare. Trova tu come.",
  },
  intro: {
    en: "AutoDay hands you a real automation problem — someone doing repetitive work by hand — and lets you think before it shows you anything. Help is revealed one layer at a time, and it stops at the architecture. You build the thing.",
    it: "AutoDay ti mette davanti un problema di automazione vero, qualcuno che fa un lavoro ripetitivo a mano, e ti lascia pensare prima di mostrarti qualsiasi cosa. L'aiuto si rivela un livello alla volta, e si ferma all'architettura. La cosa la costruisci tu.",
  },
  chooseMode: {
    en: "Pick a mode",
    it: "Scegli una modalità",
  },
  spin: {
    en: "Spin",
    it: "Gira",
  },
  spinAgain: {
    en: "Spin again",
    it: "Gira di nuovo",
  },
  spinning: {
    en: "Picking a problem",
    it: "Sto scegliendo un problema",
  },
  modeNames: {
    quick: { en: "Quick Build", it: "Quick Build" },
    deep: { en: "Deep Build", it: "Deep Build" },
  },
  modeDescriptions: {
    quick: {
      en: "~30 minutes. One model call or a small loop. Minimal setup.",
      it: "~30 minuti. Una chiamata al model o un piccolo loop. Setup minimo.",
    },
    deep: {
      en: "Half a day or more. State, tool use, failure handling, and working out whether it actually works.",
      it: "Mezza giornata o più. Stato, tool use, gestione dei fallimenti, e capire se la cosa funziona davvero.",
    },
  },
  scenario: { en: "Scenario", it: "Scenario" },
  constraints: { en: "Constraints", it: "Vincoli" },
  nudge: { en: "Nudge", it: "Spinta" },
  approach: { en: "Approach", it: "Approccio" },
  pitfalls: { en: "Pitfalls", it: "Trappole" },
  revealHints: {
    nudge: {
      en: "One push in the right direction",
      it: "Una spinta nella direzione giusta",
    },
    approach: {
      en: "The shape of a solution, not the code",
      it: "La forma di una soluzione, non il codice",
    },
    pitfalls: {
      en: "What usually goes wrong",
      it: "Cosa va storto di solito",
    },
  },
  starterPromptToggle: {
    en: "Show starter prompt",
    it: "Mostra il prompt di partenza",
  },
  starterPromptCaption: {
    en: "A kickoff for Claude Code, not the answer. It sets up the problem and stops.",
    it: "Un punto di partenza per Claude Code, non la risposta. Imposta il problema e si ferma lì.",
  },
  copy: { en: "Copy", it: "Copia" },
  copied: { en: "Copied", it: "Copiato" },
  minutesShort: { en: "min", it: "min" },
  languageLabel: { en: "Language", it: "Lingua" },
  howItWorksTitle: { en: "How it works", it: "Come funziona" },
  howItWorks: [
    {
      en: "Pick Quick Build or Deep Build, then spin. You get a situation where a real person is doing repetitive work by hand, plus the constraints that make it non-trivial.",
      it: "Scegli Quick Build o Deep Build, poi gira. Ottieni una situazione in cui una persona vera fa un lavoro ripetitivo a mano, più i vincoli che lo rendono non banale.",
    },
    {
      en: "Then you think. That is the actual product — the thinking happens before any answer appears on screen.",
      it: "Poi pensi. È questo il prodotto vero: il ragionamento avviene prima che sullo schermo compaia una qualunque risposta.",
    },
    {
      en: "When you want it, reveal help one layer at a time: a conceptual nudge, then an architectural approach, then the pitfalls that bite people building this specific thing.",
      it: "Quando ti serve, riveli l'aiuto un livello alla volta: prima una spinta concettuale, poi un approccio architetturale, poi le trappole in cui cade chi costruisce proprio questa cosa.",
    },
  ],
  noAnswersTitle: {
    en: "No answers handed over",
    it: "Nessuna risposta servita pronta",
  },
  noAnswers: {
    en: "The deepest layer of help is an approach and a list of pitfalls. There is no finished solution and no copy-paste code anywhere in AutoDay, because the part that teaches you anything is the part you build yourself.",
    it: "Il livello di aiuto più profondo è un approccio e una lista di trappole. In AutoDay non c'è nessuna soluzione finita e nessun codice da copiare e incollare, perché la parte che ti insegna qualcosa è quella che costruisci tu.",
  },
  levels: {
    beginner: { en: "beginner", it: "base" },
    intermediate: { en: "intermediate", it: "intermedio" },
    advanced: { en: "advanced", it: "avanzato" },
  },
  categories: {
    "work-admin": { en: "work-admin", it: "lavoro-admin" },
    "marketing-content": { en: "marketing-content", it: "marketing-content" },
    "data-research": { en: "data-research", it: "dati-ricerca" },
    "software-dev": { en: "software-dev", it: "software-dev" },
    communication: { en: "communication", it: "comunicazione" },
    personal: { en: "personal", it: "personale" },
  },
  narrowTitle: {
    en: "Narrow it down",
    it: "Restringi il campo",
  },
  narrowHint: {
    en: "Optional. Leave it alone and you get the whole library.",
    it: "Facoltativo. Se lo lasci stare, ti arriva tutta la libreria.",
  },
  filterCategory: { en: "Category", it: "Categoria" },
  filterLevel: { en: "Level", it: "Livello" },
  filterReset: { en: "Reset", it: "Azzera" },
  filterEmpty: {
    en: "Nothing matches. Widen it back out to spin.",
    it: "Non corrisponde niente. Riallarga per poter girare.",
  },
  filterNarrowed: { en: "narrowed", it: "ristretto" },
  timerTitle: { en: "Session timer", it: "Timer di sessione" },
  timerCaption: {
    en: "Optional. It counts down in the corner and does nothing at all when it runs out.",
    it: "Facoltativo. Scorre in un angolo e quando finisce non fa assolutamente niente.",
  },
  timerStart: { en: "Start a timer", it: "Avvia un timer" },
  timerSuggested: { en: "suggested", it: "consigliato" },
  timerCustomLabel: { en: "Minutes", it: "Minuti" },
  timerRemaining: { en: "Time left", it: "Tempo rimasto" },
  timerExtend: { en: "+10 min", it: "+10 min" },
  timerStop: { en: "Stop", it: "Ferma" },
  timerElapsedPrefix: { en: "over by", it: "sforato di" },
  timerDone: {
    en: "Time is up. Finish the thought — nothing here is going to stop you.",
    it: "Il tempo è finito. Finisci il ragionamento: qui non c'è niente che ti fermi.",
  },
  permalink: { en: "Link to this one", it: "Link a questo" },
  backToSpin: { en: "Spin for another", it: "Gira per un altro" },
  notFoundTitle: { en: "No such problem", it: "Problema inesistente" },
  notFoundBody: {
    en: "That link does not point at a challenge. Spin and you will get a real one.",
    it: "Quel link non punta a nessuna sfida. Gira e ne otterrai una vera.",
  },
};

const PLURALS = {
  match: {
    en: (n: number) => `${n} problem${n === 1 ? "" : "s"} match${n === 1 ? "es" : ""}`,
    it: (n: number) =>
      n === 1 ? "1 problema corrisponde" : `${n} problemi corrispondono`,
  },
} as const;

/** Live count under the filter panel. Kept out of `ui` because it takes a number. */
export function matchCountLabel(count: number, lang: Lang): string {
  return PLURALS.match[lang](count);
}
