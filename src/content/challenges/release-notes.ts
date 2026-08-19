import type { Challenge } from "../types";

export const releaseNotes: Challenge = {
  id: "release-notes",
  mode: "quick",
  level: "intermediate",
  category: "software-dev",
  estimatedMinutes: 45,
  title: {
    en: "The Release Note Nobody Writes",
    it: "La release note che nessuno scrive",
  },
  scenario: {
    en: "Every fortnight Sofia ships a release with 40 to 70 merged pull requests behind it, and writes the customer-facing changelog by hand. She reads every PR title, throws out the refactors and dependency bumps, and rewrites the six or seven a customer would actually notice into language that is not commit-speak. It is the last thing before release and it is always rushed.",
    it: "Ogni due settimane Sofia rilascia una versione con dietro dai 40 ai 70 pull request mergiati, e scrive a mano il changelog rivolto ai clienti. Legge ogni titolo di PR, butta via refactor e bump di dipendenze, e riscrive i sei o sette che un cliente noterebbe davvero in una lingua che non sia commit-speak. È l'ultima cosa prima del rilascio ed è sempre di corsa.",
  },
  constraints: [
    {
      en: "PR titles are written for other engineers. \"fix: null guard in resolver\" might be the most user-visible change in the release, or might be nothing at all.",
      it: "I titoli dei PR sono scritti per altri sviluppatori. «fix: null guard in resolver» può essere il cambiamento più visibile del rilascio, oppure non essere niente.",
    },
    {
      en: "Whether something is customer-visible is not in the diff. It depends on whether that code path is behind a feature flag, and about half of them are.",
      it: "Se una cosa sia visibile al cliente non sta nel diff: dipende da se quel percorso di codice è dietro un feature flag, e circa metà lo sono.",
    },
    {
      en: "The changelog gets published. A described feature that did not actually ship is a support ticket and an apology.",
      it: "Il changelog viene pubblicato. Una feature descritta che non è davvero uscita è un ticket di supporto e delle scuse.",
    },
  ],
  nudge: {
    en: "You are about to ask the model a question that the pull requests cannot answer. Where does the missing fact actually live — and once you find it, is retrieving it a job for a model at all?",
    it: "Stai per fare al model una domanda a cui i pull request non possono rispondere. Dove vive davvero il fatto che manca, e una volta trovato, recuperarlo è un lavoro da model?",
  },
  approach: {
    summary: {
      en: "Filter deterministically on metadata you already have, then spend one model call on the only part that is genuinely a writing task.",
      it: "Filtra in modo deterministico sui metadati che hai già, poi spendi una sola chiamata al model per l'unica parte che è davvero un lavoro di scrittura.",
    },
    steps: [
      {
        en: "Pull the merged PRs with their labels, linked issues and any flag references. Most of the \"is this customer-visible\" signal is already structured data that nobody is reading.",
        it: "Prendi i PR mergiati con le loro label, le issue collegate e i riferimenti ai flag. Gran parte del segnale «è visibile al cliente» è già dato strutturato che nessuno legge.",
      },
      {
        en: "Drop the obvious non-entries with rules rather than a model: dependency bumps, CI changes, anything labelled internal. This costs nothing and removes most of the list.",
        it: "Scarta le non-voci ovvie con delle regole invece che con un model: bump di dipendenze, modifiche alla CI, tutto ciò che è etichettato come interno. Non costa niente e toglie la maggior parte della lista.",
      },
      {
        en: "For what survives, one call that returns each entry as a customer-facing line plus a judgement on whether it looks user-visible at all — and require it to cite the PR it came from.",
        it: "Per ciò che sopravvive, una chiamata che restituisce ogni voce come riga rivolta al cliente più un giudizio su se sembri visibile all'utente, e pretendi che citi il PR da cui viene.",
      },
      {
        en: "Route everything behind a feature flag into a separate \"confirm before publishing\" list. That is a question about your deployment state, and no amount of prompting turns it into a question about text.",
        it: "Manda tutto ciò che sta dietro un feature flag in una lista separata «da confermare prima di pubblicare». Quella è una domanda sullo stato del tuo deploy, e nessun prompt la trasforma in una domanda sul testo.",
      },
      {
        en: "Sofia edits and publishes. The tool's job is to hand her a draft with its sources attached, not to publish anything itself.",
        it: "Sofia modifica e pubblica. Il compito del tool è consegnarle una bozza con le fonti allegate, non pubblicare niente da solo.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Given 60 PR titles and asked for a changelog, a model will write a changelog for all 60 — dependency bumps included, described as improvements.",
      it: "Dati 60 titoli di PR e chiesto un changelog, un model scriverà un changelog per tutti e 60, bump di dipendenze compresi, descritti come miglioramenti.",
    },
    {
      en: "Terse commit messages leave a gap, and the model fills it with the feature it assumes was being built. It reads well, and it is exactly the failure that reaches customers.",
      it: "I messaggi di commit stringati lasciano un buco, e il model lo riempie con la feature che presume si stesse costruendo. Si legge bene, ed è esattamente il fallimento che arriva ai clienti.",
    },
    {
      en: "Feature-flag state is the single fact that decides whether an entry is true, and it is the one fact absent from everything you are sending. Fetch it or gate on it — do not ask for it.",
      it: "Lo stato dei feature flag è l'unico fatto che decide se una voce è vera, ed è l'unico fatto assente da tutto ciò che stai mandando. Recuperalo o mettici un gate sopra: non chiederlo.",
    },
  ],
  starterPrompt: {
    en: "Help me build a release-notes drafter that works from merged pull requests. Design constraint: rule-based filtering removes internal and dependency PRs before any model call, and anything behind a feature flag is routed to a separate confirm-before-publish list rather than drafted as if it shipped. Start by asking what PR metadata I actually have access to.",
    it: "Aiutami a costruire un generatore di bozze di release notes che parta dai pull request mergiati. Vincolo di design: un filtro a regole toglie i PR interni e di dipendenze prima di qualunque chiamata al model, e tutto ciò che sta dietro un feature flag finisce in una lista separata da confermare prima di pubblicare, invece di essere scritto come se fosse uscito. Parti chiedendomi a quali metadati dei PR ho davvero accesso.",
  },
};
