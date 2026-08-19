import type { Challenge } from "../types";

export const receiptShoebox: Challenge = {
  id: "receipt-shoebox",
  mode: "deep",
  level: "intermediate",
  category: "personal",
  estimatedMinutes: 240,
  title: {
    en: "The Shoebox",
    it: "La scatola delle ricevute",
  },
  scenario: {
    en: "Kwame photographs every receipt and lets them pile up on his phone. Once a month he sits down with ninety-odd photos and types each one into a budget sheet: date, merchant, total, category. It takes most of a Sunday afternoon, and he has given up on the habit twice already.",
    it: "Kwame fotografa ogni scontrino e li lascia accumulare sul telefono. Una volta al mese si siede con novanta e passa foto e le batte a mano nel foglio del budget: data, negozio, totale, categoria. Ci va quasi tutto un pomeriggio di domenica, e ha già mollato due volte.",
  },
  constraints: [
    {
      en: "The photos are what phone photos are: crumpled thermal paper, glare, a fifth of them at an angle, a few too dark to read at all.",
      it: "Le foto sono quello che sono le foto da telefono: carta termica spiegazzata, riflessi, un quinto storte, qualcuna troppo scura per leggerci qualcosa.",
    },
    {
      en: "The totals have to add up. A budget that is approximately right is a budget Kwame will not trust, and will not use.",
      it: "I totali devono tornare. Un budget approssimativamente giusto è un budget di cui Kwame non si fiderà, e che non userà.",
    },
    {
      en: "The categories are his, not generic. He splits groceries from household, and the corner shop lands in either one depending on what he bought that day.",
      it: "Le categorie sono le sue, non generiche. Separa spesa alimentare da casa, e il negozio sotto casa finisce nell'una o nell'altra a seconda di cosa ha comprato quel giorno.",
    },
    {
      en: "These records sit next to his bank statements. He would rather the unreadable ones stayed his problem than have the system quietly smooth them over.",
      it: "Questi documenti stanno accanto ai suoi estratti conto. Preferisce che quelli illeggibili restino un problema suo, piuttosto che il sistema li appiani in silenzio.",
    },
  ],
  nudge: {
    en: "Ninety photos will not all work, and you know that before you write a line of it. So the design question is not how to read a receipt — it is what the batch does with the ones it cannot read.",
    it: "Novanta foto non funzioneranno tutte, e lo sai prima di scriverne una riga. Quindi la domanda di design non è come leggere uno scontrino, ma cosa fa il batch con quelli che non riesce a leggere.",
  },
  approach: {
    summary: {
      en: "A per-receipt pipeline with a confidence gate, an arithmetic check the model gets no vote in, and a review queue that is a normal part of the run rather than an error path.",
      it: "Una pipeline per singolo scontrino con un gate di confidenza, un controllo aritmetico su cui il model non ha voce in capitolo, e una coda di revisione che è parte normale dell'esecuzione, non un percorso d'errore.",
    },
    steps: [
      {
        en: "Process one receipt per call and return typed fields plus, critically, the individual line items and a per-field readability flag. That flag is what makes the rest of the design possible.",
        it: "Elabora uno scontrino per chiamata e restituisci campi tipizzati più, cosa cruciale, le singole voci e un flag di leggibilità per ogni campo. È quel flag a rendere possibile tutto il resto del design.",
      },
      {
        en: "Check the arithmetic outside the model: do the line items plus tax equal the stated total? A receipt that does not add up goes to review no matter how confident the extraction was.",
        it: "Verifica l'aritmetica fuori dal model: le singole voci più le tasse fanno il totale dichiarato? Uno scontrino che non torna va in revisione per quanto sicura fosse l'estrazione.",
      },
      {
        en: "Categorise as a second step, with Kwame's own category definitions and a handful of his past decisions as context. A merchant name alone will not tell you which side of his groceries-versus-household line a shop falls on.",
        it: "Categorizza in un secondo passaggio, con le definizioni di categoria di Kwame e una manciata delle sue decisioni passate come contesto. Il nome del negozio da solo non ti dirà da che parte della sua linea fra spesa e casa cade.",
      },
      {
        en: "Send anything flagged, anything failing the arithmetic and anything below the confidence bar to a single review pass at the end — the receipt image next to the extracted fields, editable.",
        it: "Manda tutto ciò che è flaggato, tutto ciò che non supera l'aritmetica e tutto ciò che sta sotto la soglia di confidenza a un'unica passata di revisione finale: l'immagine dello scontrino accanto ai campi estratti, modificabili.",
      },
      {
        en: "Make the run resumable and idempotent. Ninety images will fail somewhere in the middle, and re-running must not double-count the sixty that already worked.",
        it: "Rendi l'esecuzione ripartibile e idempotente. Novanta immagini falliranno da qualche parte a metà, e rilanciare non deve contare due volte le sessanta che avevano già funzionato.",
      },
      {
        en: "Report the split at the end: clean, reviewed, unreadable. Kwame needs to know what the month's number is actually made of.",
        it: "Riporta la suddivisione alla fine: puliti, rivisti, illeggibili. Kwame deve sapere di cosa è fatto davvero il numero del mese.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A dark, half-unreadable receipt does not produce an error. It produces a complete, plausible, wrong set of fields — which is exactly why the readability flag has to come from the same call that does the reading.",
      it: "Uno scontrino scuro e mezzo illeggibile non produce un errore. Produce un insieme di campi completo, plausibile e sbagliato: ed è esattamente per questo che il flag di leggibilità deve arrivare dalla stessa chiamata che legge.",
    },
    {
      en: "Money in floating point drifts, and a budget that is out by a few cents is a budget Kwame stops trusting. Decide the numeric representation before you write the extractor, not after.",
      it: "I soldi in virgola mobile derivano, e un budget sbagliato di qualche centesimo è un budget di cui Kwame smette di fidarsi. Decidi la rappresentazione numerica prima di scrivere l'estrattore, non dopo.",
    },
    {
      en: "One image per call, ninety times over, is where the cost and the wall-clock time of this thing actually live. Batching changes both — and changes what happens when a single item fails.",
      it: "Un'immagine per chiamata, novanta volte: è lì che stanno davvero il costo e il tempo reale di questa cosa. Il batching cambia entrambi, e cambia cosa succede quando un singolo elemento fallisce.",
    },
    {
      en: "If review is painful, Kwame skips it, and the unreviewed guesses land in the sheet indistinguishable from the good rows. The review queue is the feature, not the fallback.",
      it: "Se la revisione è fastidiosa, Kwame la salta, e le stime non riviste finiscono nel foglio indistinguibili dalle righe buone. La coda di revisione è la feature, non il ripiego.",
    },
  ],
  starterPrompt: {
    en: "I want to design a monthly receipt-to-budget pipeline for around ninety phone photos. Requirements: per-field readability flags coming out of the extraction call, an arithmetic check that lives outside the model, resumable batch processing, and a review queue treated as a normal outcome rather than an error. Ask me about the money representation and the review experience before proposing an architecture.",
    it: "Voglio progettare una pipeline mensile che vada dagli scontrini al budget per un centinaio scarso di foto da telefono. Requisiti: flag di leggibilità per campo in uscita dalla chiamata di estrazione, un controllo aritmetico che vive fuori dal model, elaborazione batch ripartibile, e una coda di revisione trattata come esito normale e non come errore. Chiedimi della rappresentazione dei soldi e dell'esperienza di revisione prima di propormi un'architettura.",
  },
};
