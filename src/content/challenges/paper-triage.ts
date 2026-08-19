import type { Challenge } from "../types";

export const paperTriage: Challenge = {
  id: "paper-triage",
  mode: "quick",
  level: "beginner",
  category: "data-research",
  estimatedMinutes: 30,
  title: {
    en: "The Paper You Cannot Afford to Miss",
    it: "Il paper che non puoi permetterti di perdere",
  },
  scenario: {
    en: "About a hundred and twenty new preprints appear in Elif's field every week. Six of them, on a good week, are worth her time. She has a saved search that returns all hundred and twenty, she skims titles on the train, and last spring somebody published the thing she had been working on for eight months.",
    it: "Nel campo di Elif escono circa centoventi nuovi preprint a settimana. Sei, in una buona settimana, meritano il suo tempo. Ha una ricerca salvata che gliene restituisce centoventi, scorre i titoli in treno, e la primavera scorsa qualcuno ha pubblicato la cosa su cui lavorava da otto mesi.",
  },
  constraints: [
    {
      en: "Missing the one paper that overlaps your work costs months. Reading a paper that turns out to be irrelevant costs ten minutes.",
      it: "Perdere l'unico paper che si sovrappone al tuo lavoro costa mesi. Leggere un paper che si rivela irrilevante costa dieci minuti.",
    },
    {
      en: "Abstracts are written to sound relevant to as many people as possible. That is what they are for.",
      it: "Gli abstract sono scritti per sembrare rilevanti al maggior numero possibile di persone. Servono a quello.",
    },
    {
      en: "What counts as relevant moves as the project moves. A definition written in January is wrong by June and nothing announces it.",
      it: "Cosa sia rilevante cambia man mano che il progetto avanza. Una definizione scritta a gennaio è sbagliata a giugno e niente lo segnala.",
    },
  ],
  nudge: {
    en: "This system can make two kinds of mistake, and one of them will tell you about itself while the other never will. Work out which is which, and what a design that takes that asymmetry seriously would look like.",
    it: "Questo sistema può sbagliare in due modi, e uno dei due si farà notare mentre l'altro non lo farà mai. Capisci qual è quale, e come sarebbe un design che prende sul serio quell'asimmetria.",
  },
  approach: {
    summary: {
      en: "Aim explicitly for high recall over precision, run a cheap wide screen before an expensive narrow one, and seed known-relevant papers so the misses become measurable.",
      it: "Punta esplicitamente all'esaustività più che alla precisione, fai passare uno screening ampio ed economico prima di uno stretto e costoso, e infila nel lotto paper di rilevanza nota così che le esclusioni diventino misurabili.",
    },
    steps: [
      {
        en: "State the target before designing anything: it is acceptable for the shortlist to contain things Elif does not want, and it is not acceptable for it to drop something she did. That single decision determines everything else.",
        it: "Dichiara l'obiettivo prima di progettare: è accettabile che la lista contenga cose che a Elif non servono, non è accettabile che ne lasci fuori una che le serviva. Quella singola decisione determina tutto il resto.",
      },
      {
        en: "Screen in two stages. The first pass only has to be confident about \"definitely not\", and it runs over titles and abstracts. The second reads properly, and only sees what survived.",
        it: "Fai lo screening in due fasi. Il primo passaggio deve essere sicuro solo dei «sicuramente no», e gira su titoli e abstract. Il secondo legge sul serio, e vede solo ciò che è sopravvissuto.",
      },
      {
        en: "Slip papers you already know are relevant into each week's batch. If the screen drops one, you have measured your recall — and there is no other way to measure the thing that matters most here.",
        it: "Infila in ogni lotto settimanale paper che sai già essere rilevanti. Se lo screening ne scarta uno, hai misurato la tua esaustività — e non c'è nessun altro modo di misurare la cosa che qui conta di più.",
      },
      {
        en: "Keep the relevance criteria as an editable profile with a date on it, and make the tool ask Elif to revisit it periodically rather than waiting for her to notice it has gone stale.",
        it: "Tieni i criteri di rilevanza come profilo modificabile con una data sopra, e fai in modo che il tool chieda periodicamente a Elif di rivederlo, invece di aspettare che si accorga da sola che è invecchiato.",
      },
      {
        en: "Have every kept paper come with the reason it was kept, so that when Elif disagrees she corrects the profile rather than just discarding the paper.",
        it: "Fai in modo che ogni paper trattenuto arrivi con il motivo per cui è stato trattenuto, così che quando Elif non è d'accordo corregga il profilo invece di limitarsi a scartare il paper.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Asked for \"this week's six most relevant papers\", it returns six every week, including the weeks when two were relevant and the weeks when none were. Elif reads them because they are on the list, and the tool has invented four papers' worth of work.",
      it: "Se gli chiedi «i sei paper più rilevanti della settimana», ne restituisce sei ogni settimana, comprese quelle in cui erano rilevanti in due e quelle in cui non lo era nessuno. Elif li legge perché sono in lista, e il tool si è inventato quattro paper di lavoro.",
    },
    {
      en: "Tuning on precision because precision is the number you can see. Everything on the shortlist can be inspected; everything that was dropped is gone, and without a seeded set you will never learn your miss rate.",
      it: "Tarare sulla precisione perché la precisione è il numero che puoi vedere. Tutto ciò che è in lista è ispezionabile; tutto ciò che è stato scartato è sparito, e senza un insieme di controllo non conoscerai mai il tuo tasso di esclusioni sbagliate.",
    },
    {
      en: "Judging the work by the abstract's own framing. A carefully hedged abstract on a paper that does exactly what Elif is doing scores low, and a bold abstract on a thin paper scores high.",
      it: "Giudicare il lavoro dall'inquadramento dato dall'abstract. Un abstract prudente su un paper che fa esattamente ciò che sta facendo Elif prende un punteggio basso, e un abstract ambizioso su un paper esile prende un punteggio alto.",
    },
  ],
  starterPrompt: {
    en: "I want to triage ~120 new preprints a week down to the handful worth reading. Missing a relevant one is far more expensive than including an irrelevant one. Start by asking me how I'd measure the papers the filter wrongly threw away, since I never see those — that's the number I'm actually worried about.",
    it: "Voglio filtrare ~120 nuovi preprint a settimana per arrivare alla manciata che vale la pena leggere. Perderne uno rilevante costa molto più che includerne uno irrilevante. Parti chiedendomi come misurerei i paper che il filtro ha scartato per sbaglio, visto che quelli non li vedo mai: è quello il numero che mi preoccupa davvero.",
  },
};
