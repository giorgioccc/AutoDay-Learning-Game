import type { Challenge } from "../types";

export const medicalTimeline: Challenge = {
  id: "medical-timeline",
  mode: "deep",
  level: "advanced",
  category: "personal",
  estimatedMinutes: 300,
  title: {
    en: "Eleven Years in a Folder",
    it: "Undici anni dentro una cartella",
  },
  scenario: {
    en: "Rosa keeps her father's medical records — about two hundred documents from four hospitals over eleven years, some of them scans of letters that were themselves summaries of something else. Before each new consultant appointment she sits down and tries to assemble what happened, and she has twenty minutes in the room with somebody who has read none of it.",
    it: "Rosa conserva la documentazione medica di suo padre: circa duecento documenti di quattro ospedali in undici anni, alcuni scansioni di lettere che erano a loro volta riassunti di qualcos'altro. Prima di ogni nuova visita specialistica si siede e prova a ricostruire cos'è successo, e poi ha venti minuti in ambulatorio con qualcuno che non ha letto niente.",
  },
  constraints: [
    {
      en: "The records contradict each other. A drug listed as stopped in one letter appears in another hospital's list eighteen months later.",
      it: "I documenti si contraddicono. Un farmaco indicato come sospeso in una lettera compare nell'elenco di un altro ospedale diciotto mesi dopo.",
    },
    {
      en: "What is relevant depends entirely on the specialty. The cardiologist and the neurologist need different subsets, and neither of them needs all two hundred documents.",
      it: "Cosa sia rilevante dipende interamente dalla specialità. Il cardiologo e il neurologo hanno bisogno di sottoinsiemi diversi, e nessuno dei due ha bisogno di tutti e duecento i documenti.",
    },
    {
      en: "Leaving something out is not an editing decision here. Whatever is missing from the page is missing from the conversation.",
      it: "Qui lasciare fuori qualcosa non è una decisione di redazione. Ciò che manca dal foglio manca dalla conversazione.",
    },
    {
      en: "Rosa is not a clinician, and nor is anybody who will read what she brings, until the moment it is read by one.",
      it: "Rosa non è un medico, e non lo è nessuno che leggerà ciò che porta, fino al momento in cui lo legge un medico.",
    },
  ],
  nudge: {
    en: "Deciding what to leave out of a medical history is not a summarising decision. Work out who is entitled to make it, and what your tool can put in front of them instead.",
    it: "Decidere cosa lasciare fuori da una storia clinica non è una decisione di sintesi. Capisci a chi spetti farla, e cosa il tuo strumento possa metterle davanti al posto suo.",
  },
  approach: {
    summary: {
      en: "Build a dated, sourced timeline of events rather than a narrative, quote rather than paraphrase, and present contradictions instead of resolving them.",
      it: "Costruisci una cronologia di eventi datata e con le fonti invece di un racconto, cita invece di parafrasare, e presenta le contraddizioni invece di risolverle.",
    },
    steps: [
      {
        en: "Produce a timeline, not a summary: diagnoses, procedures, medications started and stopped, each with a date and the document and page it came from.",
        it: "Produci una cronologia, non un riassunto: diagnosi, procedure, farmaci iniziati e sospesi, ognuno con una data e con il documento e la pagina da cui viene.",
      },
      {
        en: "Quote clinical statements verbatim and never rephrase them. A reworded diagnosis is a different diagnosis, and nobody reading the page can see that it was reworded.",
        it: "Cita le affermazioni cliniche alla lettera e non riformularle mai. Una diagnosi riscritta è una diagnosi diversa, e chi legge il foglio non può vedere che è stata riscritta.",
      },
      {
        en: "Surface contradictions as contradictions. When two records disagree about whether something was stopped, that disagreement is the most useful thing the tool can produce, and reconciling it destroys it.",
        it: "Fa' emergere le contraddizioni come contraddizioni. Quando due documenti non concordano su se qualcosa sia stato sospeso, quel disaccordo è la cosa più utile che lo strumento possa produrre, e conciliarlo lo distrugge.",
      },
      {
        en: "Leave filtering to Rosa, by date range and by keyword, rather than having the tool decide what a cardiologist needs. Selection is the clinical judgement, and it is exactly the part to keep out of the model.",
        it: "Lascia il filtro a Rosa, per intervallo di date e per parola chiave, invece di far decidere allo strumento cosa serve a un cardiologo. La selezione è il giudizio clinico, ed è esattamente la parte da tenere fuori dal model.",
      },
      {
        en: "Output something printable with the references intact, so that any line in the room can be traced back to a page in the folder in seconds.",
        it: "Restituisci qualcosa di stampabile con i riferimenti intatti, così che in ambulatorio qualsiasi riga possa essere ricondotta a una pagina della cartella in pochi secondi.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The summary reads beautifully and has dropped one note from 2019 about an adverse reaction. Nothing on the page indicates that anything is missing, and completeness is the one property a reader cannot check by reading.",
      it: "Il riassunto si legge benissimo e ha perso per strada una nota del 2019 su una reazione avversa. Niente nel foglio segnala che manchi qualcosa, e la completezza è l'unica proprietà che un lettore non può verificare leggendo.",
    },
    {
      en: "Paraphrased clinical language. \"Suspected\" becomes \"diagnosed\", \"resolved\" becomes \"no longer present\", and the shift in certainty is invisible to everyone downstream of it.",
      it: "Il linguaggio clinico parafrasato. «Sospetto» diventa «diagnosticato», «risolto» diventa «non più presente», e lo slittamento di certezza è invisibile a tutti quelli che vengono dopo.",
    },
    {
      en: "Quietly reconciling contradictory records into one clean history. The contradiction was the finding, and now it is a tidy sentence nobody will question.",
      it: "Conciliare in silenzio documenti contraddittori in un'unica storia pulita. La contraddizione era il reperto, e adesso è una frase ordinata che nessuno metterà in dubbio.",
    },
    {
      en: "Producing something that looks like a clinical document. A consultant reads it with the trust owed to a colleague's letter, which is not the trust owed to notes a family member assembled with software.",
      it: "Produrre qualcosa che sembri un documento clinico. Uno specialista lo legge con la fiducia che si deve alla lettera di un collega, che non è la fiducia che si deve ad appunti messi insieme da un familiare con un software.",
    },
  ],
  starterPrompt: {
    en: "I'm assembling my father's medical history from ~200 documents across four hospitals and 11 years, to bring to consultant appointments. The records contradict each other in places. I don't want anything paraphrased or smoothed over. Help me think about what the output should be, given that deciding what's relevant is itself a clinical judgement I'm not qualified to make.",
    it: "Sto ricostruendo la storia clinica di mio padre da ~200 documenti di quattro ospedali in 11 anni, per portarla alle visite specialistiche. In alcuni punti i documenti si contraddicono. Non voglio che niente venga parafrasato o smussato. Aiutami a ragionare su cosa dovrebbe essere l'output, visto che decidere cosa è rilevante è di per sé un giudizio clinico che io non sono in grado di dare.",
  },
};
