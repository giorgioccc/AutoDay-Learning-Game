import type { Challenge } from "../types";

export const renewalWatch: Challenge = {
  id: "renewal-watch",
  mode: "quick",
  level: "intermediate",
  category: "work-admin",
  estimatedMinutes: 35,
  title: {
    en: "The Quiet Auto-Renewal",
    it: "Il rinnovo silenzioso",
  },
  scenario: {
    en: "Sara keeps eighty supplier contracts in a shared drive as scanned PDFs. Once a month she is supposed to work out which ones need something doing — a notice served, a price review requested, a renewal declined. She has never once got through all eighty, and last year a licence nobody uses renewed itself for another twelve months.",
    it: "Sara tiene ottanta contratti fornitori in una cartella condivisa, come PDF scansionati. Una volta al mese dovrebbe capire quali richiedono un'azione: una disdetta da inviare, una revisione prezzi da chiedere, un rinnovo da rifiutare. Non è mai riuscita ad arrivare in fondo a tutti e ottanta, e l'anno scorso una licenza che non usa nessuno si è rinnovata da sola per altri dodici mesi.",
  },
  constraints: [
    {
      en: "The contracts almost never change. What changes every month is the date you are asking the question on.",
      it: "I contratti non cambiano quasi mai. Quello che cambia ogni mese è la data in cui ti stai facendo la domanda.",
    },
    {
      en: "Notice periods are written relative to something else — ninety days before the anniversary, sixty days before the end of the current term — and the terms roll.",
      it: "I preavvisi sono scritti in relazione a qualcos'altro: novanta giorni prima dell'anniversario, sessanta giorni prima della fine del periodo in corso, e i periodi si rinnovano a catena.",
    },
    {
      en: "Missing one auto-renewal costs a year of a contract nobody wanted. Flagging one that did not need flagging costs Sara five minutes.",
      it: "Mancare un rinnovo automatico costa un anno di un contratto che nessuno voleva. Segnalarne uno che non andava segnalato costa a Sara cinque minuti.",
    },
    {
      en: "A handful of the scans are photographs of signed pages, and two of them are in a language Sara does not read.",
      it: "Una manciata delle scansioni sono fotografie di pagine firmate, e due sono in una lingua che Sara non legge.",
    },
  ],
  nudge: {
    en: "Something in this problem changes every single month and something has not changed since it was signed. If your design cannot tell the two apart, you will be paying for both, forever.",
    it: "In questo problema c'è qualcosa che cambia ogni mese e qualcosa che non cambia dal giorno della firma. Se il tuo design non sa distinguere le due cose, finirai per pagare per entrambe, per sempre.",
  },
  approach: {
    summary: {
      en: "Read each contract once into durable structured facts, then answer the monthly question with ordinary date arithmetic that never touches a model.",
      it: "Leggi ogni contratto una volta sola trasformandolo in fatti strutturati durevoli, poi rispondi alla domanda mensile con normale aritmetica sulle date, senza mai passare da un model.",
    },
    steps: [
      {
        en: "Split the problem in two: an expensive extraction that happens once per document, and a cheap evaluation that happens every month. Almost every design mistake here comes from merging them.",
        it: "Spezza il problema in due: un'estrazione costosa che avviene una volta per documento, e una valutazione economica che avviene ogni mese. Quasi tutti gli errori di design qui nascono dal fondere le due cose.",
      },
      {
        en: "Extract into a typed record — start date, term length, renewal behaviour, notice window, counterparty — and store the quoted sentence each value came from alongside a confidence.",
        it: "Estrai in un record tipizzato: data di decorrenza, durata, comportamento al rinnovo, finestra di preavviso, controparte. E conserva la frase citata da cui viene ogni valore, insieme a una confidenza.",
      },
      {
        en: "Key the extraction to the document itself so a re-uploaded or amended file re-triggers it and an untouched one never does.",
        it: "Lega l'estrazione al documento stesso, così che un file ricaricato o modificato la faccia ripartire e uno intatto non la faccia ripartire mai.",
      },
      {
        en: "Compute the monthly answer deterministically from those records and today's date. It is a calculation, it is testable, and it costs nothing to run daily instead of monthly.",
        it: "Calcola la risposta mensile in modo deterministico a partire da quei record e dalla data di oggi. È un calcolo, è testabile, e non costa niente eseguirlo ogni giorno invece che ogni mese.",
      },
      {
        en: "Send low-confidence extractions to Sara as a one-time review queue, not as part of the monthly output. Verifying eighty records once is a finite task; re-verifying them monthly is not.",
        it: "Manda le estrazioni a bassa confidenza a Sara come coda di revisione una tantum, non come parte dell'output mensile. Verificare ottanta record una volta è un compito finito; riverificarli ogni mese no.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Re-reading all eighty PDFs every month costs the same as the first month, forever, to produce an answer that changed only because the calendar did — and it grows with the archive rather than with the work.",
      it: "Rileggere tutti e ottanta i PDF ogni mese costa quanto il primo mese, per sempre, per produrre una risposta che è cambiata solo perché è cambiato il calendario — e cresce con l'archivio, non con il lavoro.",
    },
    {
      en: "Letting the model do the date arithmetic. \"Ninety days before the third anniversary of a contract that has already rolled twice\" is exactly the kind of chain where a fluent answer and a correct one part company.",
      it: "Lasciare l'aritmetica delle date al model. «Novanta giorni prima del terzo anniversario di un contratto che si è già rinnovato due volte» è esattamente il tipo di catena in cui una risposta fluente e una corretta prendono strade diverse.",
    },
    {
      en: "An extraction that is perfectly accurate about a superseded document. A side letter changed the notice period and it is a separate file nobody linked to the contract.",
      it: "Un'estrazione perfettamente accurata su un documento superato. Una lettera integrativa ha cambiato il preavviso ed è un file separato che nessuno ha collegato al contratto.",
    },
  ],
  starterPrompt: {
    en: "I have ~80 scanned supplier contracts and I need to know each month which ones need action before a notice deadline passes. Before we write anything, help me work out which parts of this only ever need doing once per contract and which parts need doing every month — and what a stored record of a contract would have to contain to make the monthly part free.",
    it: "Ho circa 80 contratti fornitori scansionati e ogni mese devo sapere quali richiedono un'azione prima che scada un termine di preavviso. Prima di scrivere qualsiasi cosa, aiutami a capire quali parti vanno fatte una sola volta per contratto e quali ogni mese, e cosa dovrebbe contenere un record salvato di un contratto per rendere gratuita la parte mensile.",
  },
};
