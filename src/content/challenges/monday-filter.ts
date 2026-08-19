import type { Challenge } from "../types";

export const mondayFilter: Challenge = {
  id: "monday-filter",
  mode: "quick",
  level: "beginner",
  category: "work-admin",
  estimatedMinutes: 30,
  title: {
    en: "The Monday Filter",
    it: "Il filtro del lunedì",
  },
  scenario: {
    en: "Every Monday morning the team lead pastes a wall of thirty-odd project updates into the team channel — one line each, no structure, written by twelve different people. Marta reads all of them to find the two or three that touch her work. It takes twenty minutes, and by Wednesday she has forgotten one anyway.",
    it: "Ogni lunedì mattina il team lead incolla nel canale un muro di una trentina di aggiornamenti di progetto: una riga ciascuno, senza struttura, scritti da dodici persone diverse. Marta li legge tutti per trovare i due o tre che toccano il suo lavoro. Ci mette venti minuti, e mercoledì ne ha comunque dimenticato uno.",
  },
  constraints: [
    {
      en: "It runs on demand, when Marta pastes the digest in. There is no schedule and no API to pull the updates from.",
      it: "Si esegue on demand, quando Marta incolla il digest. Non c'è nessuno schedule e nessuna API da cui pescare gli aggiornamenti.",
    },
    {
      en: "\"Relevant to me\" means something different for every person on the team, and nothing in the digest text says who it is relevant to.",
      it: "«Rilevante per me» significa una cosa diversa per ogni persona del team, e nel testo del digest non c'è niente che dica per chi è rilevante.",
    },
    {
      en: "Some Mondays genuinely nothing concerns Marta. The tool has to be able to say so, and be believed when it does.",
      it: "Certi lunedì davvero non c'è niente che riguardi Marta. Il tool deve poterlo dire, ed essere creduto quando lo dice.",
    },
  ],
  nudge: {
    en: "Relevance is not a property of the text. It only exists relative to something the model does not have yet — so what do you have to give it, and where does that thing live between Mondays?",
    it: "La rilevanza non è una proprietà del testo. Esiste solo in relazione a qualcosa che il model ancora non ha: quindi cosa devi dargli, e dove vive quella cosa da un lunedì all'altro?",
  },
  approach: {
    summary: {
      en: "A single model call with structured output. The person is the context, the digest is the input, and a typed list is the contract.",
      it: "Una singola chiamata al model con structured output. La persona è il contesto, il digest è l'input, e una lista tipizzata è il contratto.",
    },
    steps: [
      {
        en: "Write down who Marta is as durable text: her projects, the people she depends on, the systems she owns, what she explicitly does not care about. This is configuration, not a prompt she retypes every week.",
        it: "Metti per iscritto chi è Marta come testo durevole: i suoi progetti, le persone da cui dipende, i sistemi di cui è owner, cosa esplicitamente non le interessa. È configurazione, non un prompt che riscrive ogni settimana.",
      },
      {
        en: "Send that profile as system context and the pasted digest as the user turn. Do not pre-split the digest into lines — the model reads the wall better than your regex will.",
        it: "Manda quel profilo come contesto di sistema e il digest incollato come turno utente. Non spezzare il digest in righe prima: il model legge il muro meglio di quanto farà la tua regex.",
      },
      {
        en: "Define the output as a typed list where each item carries the original update verbatim plus a one-line reason it matters to this person. The verbatim copy is what lets Marta check the model's work in a second.",
        it: "Definisci l'output come lista tipizzata dove ogni elemento porta l'aggiornamento originale alla lettera più una riga sul perché riguarda questa persona. La copia alla lettera è ciò che permette a Marta di verificare il lavoro del model in un secondo.",
      },
      {
        en: "Make the empty list a first-class outcome in the schema and in the instructions, and render it as a calm, real answer rather than an error state.",
        it: "Rendi la lista vuota un esito di prima classe nello schema e nelle istruzioni, e mostrala come una risposta vera e tranquilla, non come uno stato di errore.",
      },
      {
        en: "Keep five past digests alongside the answers Marta would have given. That file is the only thing that will tell you whether your next prompt edit helped.",
        it: "Tieni da parte cinque digest passati insieme alle risposte che Marta avrebbe dato. Quel file è l'unica cosa che ti dirà se la prossima modifica al prompt ha migliorato qualcosa.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Ask for \"the relevant updates\" and a model will manufacture relevance rather than come back empty-handed. Emptiness has to be made explicitly acceptable, or every quiet week produces a plausible-looking wrong answer.",
      it: "Chiedi «gli aggiornamenti rilevanti» e il model fabbricherà rilevanza pur di non tornare a mani vuote. Il vuoto va reso esplicitamente accettabile, altrimenti ogni settimana tranquilla produce una risposta sbagliata dall'aria plausibile.",
    },
    {
      en: "Without saved digests and their correct answers you are tuning blind: every prompt change feels like an improvement and you have no way of knowing.",
      it: "Senza digest salvati e le loro risposte corrette stai tarando alla cieca: ogni modifica al prompt sembra un miglioramento e non hai modo di saperlo.",
    },
    {
      en: "If the model paraphrases the updates instead of quoting them, Marta has to go back to the original wall to trust the summary — and you have saved her nothing.",
      it: "Se il model parafrasa gli aggiornamenti invece di citarli, Marta deve tornare al muro originale per fidarsi del riassunto, e non le hai fatto risparmiare niente.",
    },
  ],
  starterPrompt: {
    en: "Help me build a personal relevance filter for a weekly team digest. I paste in ~30 unstructured update lines and it returns only the ones that matter to one specific person, each with the original line quoted and a one-sentence reason. Start by asking me what belongs in the person profile and how I want an empty result to look — don't write the whole thing yet.",
    it: "Aiutami a costruire un filtro di rilevanza personale per un digest settimanale di team. Io incollo ~30 righe di aggiornamenti non strutturate e il tool restituisce solo quelle che contano per una persona specifica, ognuna con la riga originale citata e una frase sul perché. Parti chiedendomi cosa deve stare nel profilo della persona e come voglio che appaia un risultato vuoto: non scrivere ancora tutto.",
  },
};
