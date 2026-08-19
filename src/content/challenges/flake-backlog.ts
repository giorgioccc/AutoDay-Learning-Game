import type { Challenge } from "../types";

export const flakeBacklog: Challenge = {
  id: "flake-backlog",
  mode: "deep",
  level: "advanced",
  category: "software-dev",
  estimatedMinutes: 300,
  title: {
    en: "The Flake Backlog",
    it: "L'arretrato dei test instabili",
  },
  scenario: {
    en: "Tomas looks after CI for a team of forty. The suite runs 3,200 tests on every merge, and roughly nine fail per day without anyone having broken anything. Each morning he opens the overnight failures, decides which are real, and reruns the rest — an hour gone before he starts his own work.",
    it: "Tomas si occupa della CI per un team di quaranta persone. La suite esegue 3.200 test a ogni merge, e circa nove falliscono ogni giorno senza che nessuno abbia rotto niente. Ogni mattina apre i fallimenti della notte, decide quali sono veri e rilancia gli altri: un'ora andata prima di iniziare il suo lavoro.",
  },
  constraints: [
    {
      en: "The only evidence is a stack trace and up to 400 lines of interleaved log from parallel workers. Whether a failure is real often depends on what happened to be running next to it.",
      it: "L'unica prova è uno stack trace e fino a 400 righe di log intrecciati da worker paralleli. Se un fallimento sia reale spesso dipende da cosa stava girando lì accanto.",
    },
    {
      en: "Calling a real failure flaky is how a bug reaches production. The two mistakes are not symmetric, and the system has to reflect that.",
      it: "Chiamare instabile un fallimento reale è il modo in cui un bug arriva in produzione. I due errori non sono simmetrici, e il sistema deve rifletterlo.",
    },
    {
      en: "It runs unattended on every CI failure, so per-run cost and latency are a budget rather than a detail.",
      it: "Gira senza supervisione a ogni fallimento della CI, quindi costo e latenza per esecuzione sono un budget, non un dettaglio.",
    },
    {
      en: "Tomas already has two years of failures that were eventually labelled one way or the other.",
      it: "Tomas ha già due anni di fallimenti che prima o poi sono stati etichettati in un modo o nell'altro.",
    },
  ],
  nudge: {
    en: "The last constraint is the most valuable thing on the list and the easiest to walk straight past. What does two years of labelled history let you build that a prompt on its own never could?",
    it: "L'ultimo vincolo è la cosa più preziosa della lista e la più facile da scavalcare senza vederla. Cosa ti permette di costruire due anni di storico etichettato che un prompt da solo non potrà mai?",
  },
  approach: {
    summary: {
      en: "A cheap deterministic layer in front, a model call only for what survives it, and an asymmetric decision rule that escalates to Tomas instead of guessing.",
      it: "Uno strato deterministico economico davanti, una chiamata al model solo per ciò che lo supera, e una regola di decisione asimmetrica che scala a Tomas invece di tirare a indovinare.",
    },
    steps: [
      {
        en: "Before any model is involved, fingerprint the failure — test id plus normalised stack — and look it up in the labelled history. Most of the nine a day are a flake you have already seen, and that answer costs nothing.",
        it: "Prima di coinvolgere qualunque model, calcola un'impronta del fallimento, ovvero id del test più stack normalizzato, e cercala nello storico etichettato. La maggior parte dei nove al giorno è un flake che hai già visto, e quella risposta non costa niente.",
      },
      {
        en: "Only unrecognised fingerprints reach a model call. Give it the trace, the log window around the failure, and the diff of the merge — the three things Tomas actually reads.",
        it: "Solo le impronte non riconosciute arrivano a una chiamata al model. Dagli il trace, la finestra di log attorno al fallimento e il diff del merge: le tre cose che Tomas legge davvero.",
      },
      {
        en: "Return a verdict, a confidence and the specific evidence behind it. Then make the threshold asymmetric: \"flaky\" has to clear a high bar, \"real\" does not, and anything in between lands in Tomas's queue.",
        it: "Restituisci un verdetto, una confidenza e le prove specifiche che lo sostengono. Poi rendi la soglia asimmetrica: «instabile» deve superare un'asticella alta, «reale» no, e tutto ciò che sta in mezzo finisce nella coda di Tomas.",
      },
      {
        en: "Score the whole thing against the labelled history before it goes anywhere near CI, and look at the two error rates separately. A single accuracy number hides exactly the mistake you care about.",
        it: "Valuta l'intera cosa contro lo storico etichettato prima che si avvicini alla CI, e guarda i due tassi di errore separatamente. Un unico numero di accuratezza nasconde esattamente l'errore che ti interessa.",
      },
      {
        en: "Write every verdict, its evidence and the truth that emerges later back into the same store. The history is the product; the classifier sits downstream of it.",
        it: "Scrivi ogni verdetto, le sue prove e la verità che emerge dopo dentro lo stesso archivio. Lo storico è il prodotto, il classificatore ne sta a valle.",
      },
      {
        en: "Decide what happens when the model call fails or times out. Unavailable has to mean \"ask Tomas\", never \"assume flaky\".",
        it: "Decidi cosa succede quando la chiamata al model fallisce o va in timeout. Non disponibile deve voler dire «chiedi a Tomas», mai «assumi che sia instabile».",
      },
    ],
  },
  pitfalls: [
    {
      en: "Optimising overall accuracy on a stream that is ninety percent flakes rewards a system that answers \"flaky\" to everything. The rare, expensive mistake never shows up in the average.",
      it: "Ottimizzare l'accuratezza complessiva su un flusso che è flake al novanta percento premia un sistema che risponde «instabile» a tutto. L'errore raro e costoso non compare mai nella media.",
    },
    {
      en: "Model-reported confidence is not calibrated. If you put a threshold on it, you have to check against your own history what the number actually means before you trust it.",
      it: "La confidenza dichiarata dal model non è calibrata. Se ci metti sopra una soglia, devi verificare contro il tuo storico cosa significhi davvero quel numero prima di fidartene.",
    },
    {
      en: "400 lines of log on every failure on every merge is a bill that grows with your test suite and your headcount. The deterministic layer is a cost control, not just a speed-up.",
      it: "400 righe di log a ogni fallimento a ogni merge sono una bolletta che cresce con la suite di test e con il numero di persone. Lo strato deterministico è un controllo di costo, non solo un'ottimizzazione.",
    },
    {
      en: "Once the system reruns things silently, nobody notices when it starts being wrong. Whatever you build needs a number Tomas sees every week without having to go and look for it.",
      it: "Nel momento in cui il sistema rilancia i test in silenzio, nessuno si accorge di quando inizia a sbagliare. Qualunque cosa costruisci ha bisogno di un numero che Tomas veda ogni settimana senza doverlo andare a cercare.",
    },
  ],
  starterPrompt: {
    en: "I want to design a CI failure triage system that decides flaky versus real. I have two years of labelled failures to work from. Non-negotiables: a deterministic fingerprint lookup before any model call, asymmetric thresholds because a false \"flaky\" is far worse than a false \"real\", and an offline evaluation against the history that reports both error rates separately. Interrogate the design with me before writing anything.",
    it: "Voglio progettare un sistema di triage dei fallimenti in CI che decida se sono instabili o reali. Ho due anni di fallimenti etichettati da cui partire. Non negoziabili: un lookup deterministico per impronta prima di ogni chiamata al model, soglie asimmetriche perché un falso «instabile» è molto peggio di un falso «reale», e una valutazione offline contro lo storico che riporti i due tassi di errore separatamente. Discuti il design con me prima di scrivere qualsiasi cosa.",
  },
};
