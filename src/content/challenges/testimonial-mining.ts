import type { Challenge } from "../types";

export const testimonialMining: Challenge = {
  id: "testimonial-mining",
  mode: "quick",
  level: "intermediate",
  category: "marketing-content",
  estimatedMinutes: 45,
  title: {
    en: "The Quotable Sentence",
    it: "La frase citabile",
  },
  scenario: {
    en: "Bea has four hundred customer reviews spread across two platforms and a landing page with six empty testimonial slots. Somewhere in there are the six sentences that would sell the product better than anything she could write. She has read about eighty reviews, found two she likes, and lost the will to continue.",
    it: "Bea ha quattrocento recensioni di clienti sparse su due piattaforme e una landing page con sei spazi vuoti per le testimonianze. Da qualche parte lì dentro ci sono le sei frasi che venderebbero il prodotto meglio di qualsiasi cosa possa scrivere lei. Ne ha lette un'ottantina, ne ha trovate due che le piacciono, e ha perso la voglia di andare avanti.",
  },
  constraints: [
    {
      en: "A published quote has to be verbatim and traceable to the review it came from. Somebody will eventually ask to see the original.",
      it: "Una citazione pubblicata deve essere alla lettera e riconducibile alla recensione da cui viene. Prima o poi qualcuno chiederà di vedere l'originale.",
    },
    {
      en: "Some of the best-sounding sentences sit inside reviews that are negative overall.",
      it: "Alcune delle frasi che suonano meglio stanno dentro recensioni che nel complesso sono negative.",
    },
    {
      en: "Reviews mention prices that have since changed, competitors by name, and a support agent who left last year.",
      it: "Le recensioni citano prezzi nel frattempo cambiati, concorrenti per nome, e un addetto all'assistenza che se n'è andato l'anno scorso.",
    },
    {
      en: "Only some reviewers agreed to be identified. The rest can be quoted, but not named.",
      it: "Solo alcuni recensori hanno acconsentito a essere identificati. Gli altri si possono citare, ma non nominare.",
    },
  ],
  nudge: {
    en: "A sentence lifted out of a review is a different statement from the same sentence sitting inside it. Work out what has to travel alongside the words for the quote to still be true, and you will have designed the record.",
    it: "Una frase estratta da una recensione è un'affermazione diversa dalla stessa frase lasciata dentro la recensione. Capisci cosa deve viaggiare insieme alle parole perché la citazione resti vera, e avrai progettato il record.",
  },
  approach: {
    summary: {
      en: "Extraction, not generation: the model selects spans and never writes them, and every span comes back as a record carrying the context that makes it honest.",
      it: "Estrazione, non generazione: il model seleziona passaggi e non li scrive mai, e ogni passaggio torna come record che porta con sé il contesto che lo rende onesto.",
    },
    steps: [
      {
        en: "Define the output as a record per candidate quote: the exact span, the review it came from, the star rating, the date, and whether that reviewer consented to be named.",
        it: "Definisci l'output come un record per ogni citazione candidata: il passaggio esatto, la recensione da cui viene, la valutazione in stelle, la data, e se quel recensore ha acconsentito a essere nominato.",
      },
      {
        en: "Carry the sentences either side of the span in the record too. A glowing sentence that is followed by \"…but\" has to arrive with its own contradiction attached.",
        it: "Porta nel record anche le frasi che stanno prima e dopo il passaggio. Una frase entusiasta seguita da «…però» deve arrivare con la sua contraddizione allegata.",
      },
      {
        en: "Classify what each quote is about — setup, support, price, durability — because six testimonials need to cover six objections, not repeat the strongest one six times.",
        it: "Classifica di cosa parla ogni citazione — installazione, assistenza, prezzo, durata — perché sei testimonianze devono coprire sei obiezioni, non ripetere sei volte la più forte.",
      },
      {
        en: "Run a separate disqualification pass over the candidates: stale prices, named competitors, named staff, medical or legal claims. This is a different question from \"is it a good quote\" and mixing the two makes both worse.",
        it: "Fai un passaggio separato di squalifica sui candidati: prezzi superati, concorrenti nominati, personale nominato, affermazioni mediche o legali. È una domanda diversa da «è una buona citazione», e mescolare le due cose peggiora entrambe.",
      },
      {
        en: "Verify every returned span against the source text before it reaches a human. If it is not character-for-character present in the original, it is not a quote and it must be dropped, not corrected.",
        it: "Verifica ogni passaggio restituito contro il testo originale prima che arrivi a una persona. Se non è presente carattere per carattere nell'originale, non è una citazione e va scartato, non corretto.",
      },
    ],
  },
  pitfalls: [
    {
      en: "\"Setup was effortless once support finally got back to me\" published as \"Setup was effortless\". Both halves are the customer's words and the published version is a lie, and no reviewer of the output will catch it without the original in front of them.",
      it: "«L'installazione è stata semplicissima una volta che l'assistenza si è finalmente fatta viva» pubblicato come «L'installazione è stata semplicissima». Entrambe le metà sono parole del cliente e la versione pubblicata è una bugia, e nessuno che riveda l'output se ne accorgerà senza l'originale davanti.",
    },
    {
      en: "Tidied punctuation, a corrected typo, a dropped filler word. The model is helping, and the result is no longer something you can put in quotation marks next to a person's name.",
      it: "Punteggiatura sistemata, un refuso corretto, una parola di riempimento tolta. Il model sta aiutando, e il risultato non è più qualcosa che puoi mettere fra virgolette accanto al nome di una persona.",
    },
    {
      en: "Selecting on eloquence gives you six beautifully written quotes that all praise the same feature, and a landing page that answers one objection six times.",
      it: "Selezionare in base all'eloquenza ti dà sei citazioni scritte benissimo che lodano tutte la stessa cosa, e una landing page che risponde sei volte alla stessa obiezione.",
    },
  ],
  starterPrompt: {
    en: "I want to mine 400 customer reviews for six publishable testimonial quotes. They must be verbatim, traceable to the source review, and safe to publish — no stale prices, no named competitors, no naming reviewers who didn't consent. Start by asking me what has to be stored alongside each quote for it to stay honest out of context, then we'll design the record.",
    it: "Voglio setacciare 400 recensioni di clienti per trovare sei citazioni pubblicabili. Devono essere alla lettera, riconducibili alla recensione d'origine e sicure da pubblicare: niente prezzi superati, niente concorrenti nominati, niente nomi di recensori che non hanno acconsentito. Parti chiedendomi cosa va conservato insieme a ogni citazione perché resti onesta fuori dal suo contesto: poi progettiamo il record.",
  },
};
