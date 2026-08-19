import type { Challenge } from "../types";

export const boardDeckNumbers: Challenge = {
  id: "board-deck-numbers",
  mode: "deep",
  level: "intermediate",
  category: "work-admin",
  estimatedMinutes: 240,
  title: {
    en: "The Monthly Board Pack",
    it: "Il pacchetto mensile per il consiglio",
  },
  scenario: {
    en: "On the first Tuesday of every month Marco rebuilds the same twelve slides. Figures come out of five systems, each with its own export quirks and its own idea of when the month ended, and next to every chart there is a paragraph of commentary that has to say something the chart does not. It takes him a day and a half and he has twice sent a wrong number.",
    it: "Il primo martedì di ogni mese Marco ricostruisce le stesse dodici slide. I numeri escono da cinque sistemi, ognuno con le sue stranezze di esportazione e la sua idea di quando finisca il mese, e accanto a ogni grafico c'è un paragrafo di commento che deve dire qualcosa che il grafico non dice. Ci mette un giorno e mezzo, e due volte ha mandato un numero sbagliato.",
  },
  constraints: [
    {
      en: "A wrong figure in a board pack is not a bug report, it is a meeting about how it happened.",
      it: "Un numero sbagliato in un pacchetto per il consiglio non è una segnalazione di bug, è una riunione su come sia potuto succedere.",
    },
    {
      en: "The systems disagree with each other. Two of them count active customers, and they have never agreed on what active means.",
      it: "I sistemi non concordano fra loro. Due contano i clienti attivi, e non si sono mai messi d'accordo su cosa voglia dire attivo.",
    },
    {
      en: "One export is late roughly one month in three, and the board meets whether it arrived or not.",
      it: "Un'esportazione arriva in ritardo circa un mese su tre, e il consiglio si riunisce comunque.",
    },
    {
      en: "The pack is assembled the afternoon before the meeting. There is no time to go back to a system and ask why it produced a number that looks odd.",
      it: "Il pacchetto viene assemblato il pomeriggio prima della riunione. Non c'è tempo per tornare da un sistema e chiedergli perché ha prodotto un numero che sembra strano.",
    },
  ],
  nudge: {
    en: "Two things in this pack fail in completely different ways: one must never be wrong, the other only has to be useful. Building them as one system means they share the worse of the two failure modes.",
    it: "In questo pacchetto ci sono due cose che sbagliano in modi completamente diversi: una non deve mai essere sbagliata, l'altra deve solo essere utile. Costruirle come un unico sistema significa far loro condividere il peggiore dei due modi di sbagliare.",
  },
  approach: {
    summary: {
      en: "A deterministic pipeline moves and reconciles every number; a model is used only for the commentary layer, and only after the numbers are final.",
      it: "Una pipeline deterministica sposta e riconcilia tutti i numeri; il model si usa solo per il livello di commento, e solo dopo che i numeri sono definitivi.",
    },
    steps: [
      {
        en: "Keep the model away from arithmetic and from moving values between places entirely. Extraction, totals and period alignment are code, and code can be tested against last month's known-good pack.",
        it: "Tieni il model completamente lontano dall'aritmetica e dallo spostamento di valori da un posto a un altro. Estrazione, totali e allineamento dei periodi sono codice, e il codice si può testare contro il pacchetto corretto del mese scorso.",
      },
      {
        en: "Write the definition of every metric down as visible configuration — which system is authoritative, what window, what counts as active — and reconcile against it as an explicit step rather than in someone's head.",
        it: "Metti per iscritto la definizione di ogni metrica come configurazione visibile: quale sistema fa fede, quale finestra temporale, cosa conta come attivo. E riconcilia rispetto a quella definizione come passaggio esplicito, non nella testa di qualcuno.",
      },
      {
        en: "Assert invariants before anything renders — segments summing to the total, this month's opening matching last month's closing — and stop the build when one fails.",
        it: "Verifica gli invarianti prima che venga generato qualsiasi output — i segmenti che sommano al totale, l'apertura di questo mese che coincide con la chiusura di quello scorso — e blocca la generazione quando uno salta.",
      },
      {
        en: "Make a missing source render as a visible gap with the reason printed on the slide. It must be structurally impossible for an unavailable number to become an estimate.",
        it: "Fai in modo che una fonte mancante venga mostrata come un buco visibile, con il motivo stampato sulla slide. Deve essere strutturalmente impossibile che un numero non disponibile diventi una stima.",
      },
      {
        en: "Give the model the final figures plus the last six months of the same figures, and ask it for what a reader would want explained — what moved, what broke a trend, what a director would ask about first.",
        it: "Passa al model i numeri definitivi più gli stessi numeri degli ultimi sei mesi, e chiedigli cosa un lettore vorrebbe si spiegasse: cosa si è mosso, cosa ha rotto un andamento, su cosa un consigliere farebbe la prima domanda.",
      },
      {
        en: "Judge the commentary on whether it adds anything. A sentence that can be derived from reading the chart is filler, and there is a cheap test for that: cover the number and see if the sentence still says anything.",
        it: "Giudica il commento in base a cosa aggiunge. Una frase ricavabile guardando il grafico è riempitivo, e c'è un test economico per accorgersene: copri il numero e verifica se la frase dice ancora qualcosa.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The late export is the dangerous month. Asked to produce a complete pack from incomplete inputs, a model fills the hole with something the right shape, and an estimate in a board pack is indistinguishable from a fact.",
      it: "Il mese con l'esportazione in ritardo è quello pericoloso. Se gli chiedi di produrre un pacchetto completo da input incompleti, il model riempie il buco con qualcosa della forma giusta, e una stima in un pacchetto per il consiglio è indistinguibile da un fatto.",
    },
    {
      en: "Asking a model to \"pull the figures into the summary\" and getting 4.2% where the source says 4.17%, or the wrong month's value, stated with total composure.",
      it: "Chiedere al model di «riportare i numeri nel riepilogo» e ottenere 4,2% dove la fonte dice 4,17%, o il valore del mese sbagliato, enunciato con la massima tranquillità.",
    },
    {
      en: "Commentary that narrates the chart. \"Revenue grew 4%\" printed next to a chart showing revenue growing 4% is text that costs money to generate and adds nothing.",
      it: "Un commento che racconta il grafico. «I ricavi sono cresciuti del 4%» stampato accanto a un grafico che mostra i ricavi crescere del 4% è testo che costa soldi da generare e non aggiunge niente.",
    },
    {
      en: "The same metric computed two ways on two slides. Nobody notices for months, and when someone does the credibility hit lands on the whole pack, not on the one slide.",
      it: "La stessa metrica calcolata in due modi su due slide diverse. Nessuno se ne accorge per mesi, e quando qualcuno se ne accorge il colpo di credibilità lo prende tutto il pacchetto, non quella singola slide.",
    },
  ],
  starterPrompt: {
    en: "Every month I rebuild a twelve-slide board pack: figures from five systems that don't agree with each other, plus written commentary next to each chart. Before we build anything, help me split this into the part where being wrong is unacceptable and the part where being merely useful is fine — and ask me what should happen in the months when one system's export doesn't arrive.",
    it: "Ogni mese ricostruisco un pacchetto di dodici slide per il consiglio: numeri da cinque sistemi che non concordano fra loro, più un commento scritto accanto a ogni grafico. Prima di costruire qualsiasi cosa, aiutami a separare la parte in cui sbagliare è inaccettabile da quella in cui basta essere utili, e chiedimi cosa dovrebbe succedere nei mesi in cui l'esportazione di un sistema non arriva.",
  },
};
