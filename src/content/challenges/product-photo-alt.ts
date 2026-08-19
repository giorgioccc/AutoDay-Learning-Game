import type { Challenge } from "../types";

export const productPhotoAlt: Challenge = {
  id: "product-photo-alt",
  mode: "quick",
  level: "beginner",
  category: "marketing-content",
  estimatedMinutes: 35,
  title: {
    en: "Two Hundred Photos Called IMG_4471",
    it: "Duecento foto che si chiamano IMG_4471",
  },
  scenario: {
    en: "Renzo runs the website for a shop with two thousand products. A supplier has just sent two hundred new photographs in a folder, every filename a camera number, and every one of them needs alt text before the products can go live. He has done thirty by hand and they are already getting worse.",
    it: "Renzo gestisce il sito di un negozio con duemila prodotti. Un fornitore ha appena mandato duecento nuove fotografie in una cartella, con nomi di file che sono numeri di macchina fotografica, e ognuna ha bisogno di un testo alternativo prima che i prodotti vadano online. Ne ha fatte trenta a mano e stanno già peggiorando.",
  },
  constraints: [
    {
      en: "Alt text is read aloud by a screen reader and indexed by a search engine. \"Product image\" and a forty-word poetic description both fail, in different directions.",
      it: "Il testo alternativo viene letto ad alta voce da uno screen reader e indicizzato da un motore di ricerca. «Immagine del prodotto» e una descrizione poetica di quaranta parole falliscono entrambi, in direzioni opposte.",
    },
    {
      en: "The photograph does not know the product name, the code or the official colour. Those live in a spreadsheet the supplier sent separately.",
      it: "La fotografia non conosce il nome del prodotto, il codice o il nome ufficiale del colore. Quelli stanno in un foglio di calcolo che il fornitore ha mandato separatamente.",
    },
    {
      en: "The folder mixes pack shots, close-ups of a detail, lifestyle scenes where the product occupies a tenth of the frame, and the same item shot from five angles.",
      it: "Nella cartella si mescolano foto in piano, primi piani di un dettaglio, scene di ambientazione in cui il prodotto occupa un decimo dell'inquadratura, e lo stesso articolo ripreso da cinque angolazioni.",
    },
    {
      en: "The wrong colour in alt text is a returned order, paid for in both directions.",
      it: "Un colore sbagliato nel testo alternativo è un reso, pagato in entrambe le direzioni.",
    },
  ],
  nudge: {
    en: "Two different people are on the receiving end of this text and they need slightly different things from it. Neither of them, though, wants a description of the photograph — work out what each one is actually trying to find out.",
    it: "Ci sono due persone diverse all'altro capo di questo testo e ne hanno bisogno per motivi leggermente diversi. Nessuna delle due, però, vuole una descrizione della fotografia: capisci cosa sta cercando di sapere ciascuna.",
  },
  approach: {
    summary: {
      en: "Pair every image with its product record, decide the alt-text contract up front, and let the model describe only the things the record cannot know.",
      it: "Abbina ogni immagine al suo record di prodotto, decidi in anticipo il contratto del testo alternativo, e lascia che il model descriva solo ciò che il record non può sapere.",
    },
    steps: [
      {
        en: "Send the product record along with the image in the same call. The model cannot know the code or the official colour name, and the whole design question is which facts come from which source.",
        it: "Manda il record di prodotto insieme all'immagine nella stessa chiamata. Il model non può conoscere il codice o il nome ufficiale del colore, e tutta la questione di design è quali fatti vengono da quale fonte.",
      },
      {
        en: "Write the contract down before generating anything: what the text must contain, what it must never contain, and a length ceiling. Without it you are grading two hundred outputs on taste.",
        it: "Metti per iscritto il contratto prima di generare qualsiasi cosa: cosa il testo deve contenere, cosa non deve mai contenere, e un tetto di lunghezza. Senza, ti ritrovi a giudicare duecento output a sentimento.",
      },
      {
        en: "Classify the shot type first — pack shot, detail, lifestyle, repeat angle — because the right alt text is different for each, and repeat angles mostly want the shortest possible text rather than a unique paragraph.",
        it: "Classifica prima il tipo di scatto — piano, dettaglio, ambientazione, angolazione ripetuta — perché il testo alternativo giusto è diverso per ciascuno, e le angolazioni ripetute vogliono quasi sempre il testo più breve possibile, non un paragrafo originale.",
      },
      {
        en: "Take names, materials and colours from the record and use the image only for what the record cannot express: what is visible, how it is framed, whether the whole thing is in shot.",
        it: "Prendi nomi, materiali e colori dal record e usa l'immagine solo per ciò che il record non può esprimere: cosa è visibile, com'è inquadrato, se l'oggetto è ripreso per intero.",
      },
      {
        en: "Make disagreement between image and record an output, not something to resolve. The model seeing green where the record says olive is a data-quality signal worth more than the alt text was.",
        it: "Fai in modo che il disaccordo fra immagine e record sia un output, non qualcosa da appianare. Il model che vede verde dove il record dice oliva è un segnale sulla qualità dei dati che vale più del testo alternativo stesso.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The supplier photographs the wrong variant, which happens constantly. The model faithfully describes what it can see, the alt text quietly contradicts the listing on a handful of products, and nothing in the process is looking for that.",
      it: "Il fornitore fotografa la variante sbagliata, cosa che succede di continuo. Il model descrive fedelmente ciò che vede, il testo alternativo contraddice in silenzio la scheda su una manciata di prodotti, e niente nel processo sta cercando quel problema.",
    },
    {
      en: "Attributes guessed from pixels. Material, dimensions and what is included in the box are all things a photograph strongly suggests and does not actually contain.",
      it: "Attributi indovinati dai pixel. Materiale, dimensioni e cosa è incluso nella confezione sono tutte cose che una fotografia suggerisce con forza e in realtà non contiene.",
    },
    {
      en: "Lifestyle shots described as scenes. \"A woman smiling in a sunlit kitchen\" is an accurate caption and tells someone using a screen reader nothing whatsoever about the product they are trying to buy.",
      it: "Le foto di ambientazione descritte come scene. «Una donna che sorride in una cucina illuminata dal sole» è una didascalia accurata e non dice assolutamente nulla, a chi usa uno screen reader, sul prodotto che sta cercando di comprare.",
    },
  ],
  starterPrompt: {
    en: "I have 200 supplier product photos with meaningless filenames and a separate spreadsheet of product data, and every image needs alt text that works for a screen reader and for search. Start by asking me what facts should come from the spreadsheet versus from the image, and what I want to happen when the two disagree — don't generate any alt text yet.",
    it: "Ho 200 foto prodotto del fornitore con nomi di file senza senso e un foglio di calcolo separato con i dati prodotto, e ogni immagine ha bisogno di un testo alternativo che funzioni per uno screen reader e per la ricerca. Parti chiedendomi quali fatti devono venire dal foglio di calcolo e quali dall'immagine, e cosa voglio che succeda quando i due sono in disaccordo: non generare ancora nessun testo alternativo.",
  },
};
