import type { Challenge } from "../types";

export const listingWriter: Challenge = {
  id: "listing-writer",
  mode: "quick",
  level: "intermediate",
  category: "personal",
  estimatedMinutes: 40,
  title: {
    en: "Sixty Things to Sell",
    it: "Sessanta cose da vendere",
  },
  scenario: {
    en: "Fabio is emptying a flat and has about sixty things worth listing on a marketplace. Each listing takes him fifteen minutes, almost all of it spent on the description and on deciding the price. He has photographed everything already and stalled there three weekends running.",
    it: "Fabio sta svuotando un appartamento e ha una sessantina di cose che vale la pena mettere in vendita su un marketplace. Ogni annuncio gli porta via un quarto d'ora, quasi tutto speso sulla descrizione e sul decidere il prezzo. Ha già fotografato tutto e si è bloccato lì per tre fine settimana di fila.",
  },
  constraints: [
    {
      en: "A photo shows what an object looks like. It does not show whether it works, what is missing from the box, or that the cable with it is the wrong one.",
      it: "Una foto mostra che aspetto ha un oggetto. Non mostra se funziona, cosa manca nella scatola, o che il cavo che c'è dentro è quello sbagliato.",
    },
    {
      en: "The price is what decides whether it sells, and it depends on what identical items went for last week.",
      it: "È il prezzo a decidere se si vende, e dipende da quanto sono andati via oggetti identici la settimana scorsa.",
    },
    {
      en: "A description is an offer. \"Excellent condition\" on something with a chip in it is a refund and a bad rating.",
      it: "Una descrizione è un'offerta. «Ottime condizioni» su una cosa scheggiata è un rimborso e una recensione negativa.",
    },
  ],
  nudge: {
    en: "Half of what a good listing contains is not in the photograph. Sort the fields by whether the picture could possibly answer them.",
    it: "Metà di ciò che contiene un buon annuncio non è nella fotografia. Ordina i campi in base a se la foto possa anche solo rispondere.",
  },
  approach: {
    summary: {
      en: "Split the listing by what a photo can support, ask him the three questions that cover the rest, and get the price from completed sales.",
      it: "Dividi l'annuncio in base a cosa una foto può sostenere, fagli le tre domande che coprono il resto, e prendi il prezzo dalle vendite concluse.",
    },
    steps: [
      {
        en: "Separate what the photo can support — shape, colour, visible wear, a legible brand mark — from what only he knows, and be strict about which side each field is on.",
        it: "Separa ciò che la foto può sostenere — forma, colore, usura visibile, un marchio leggibile — da ciò che sa solo lui, e sii rigido su da che parte stia ogni campo.",
      },
      {
        en: "Ask exactly the questions a description needs and no more: does it work, what is included, any damage. Three answers is thirty seconds, and it is the whole difference between a listing and a dispute.",
        it: "Fagli esattamente le domande che servono a una descrizione e non una di più: funziona, cosa c'è incluso, ci sono danni. Tre risposte sono trenta secondi, e sono tutta la differenza fra un annuncio e una contestazione.",
      },
      {
        en: "Never let the model assert condition or completeness. If he did not say it, it does not appear, even in the places where saying it would obviously make the listing sell better.",
        it: "Non lasciare mai che sia il model ad affermare condizioni o completezza. Se non l'ha detto lui, non compare, nemmeno nei punti in cui dirlo farebbe chiaramente vendere di più.",
      },
      {
        en: "Take the price from completed sales of the same item, not from the model. What something is worth is a market fact with a date on it, and a model has neither the market nor the date.",
        it: "Prendi il prezzo dalle vendite concluse dello stesso oggetto, non dal model. Quanto vale una cosa è un fatto di mercato con sopra una data, e un model non ha né il mercato né la data.",
      },
      {
        en: "Generate the title from identifiable attributes and let him correct it. Search is the entire game on a marketplace, and he knows what he would have typed to find it.",
        it: "Genera il titolo dagli attributi identificabili e lascia che lo corregga lui. Su un marketplace la ricerca è tutto, e lui sa cosa avrebbe digitato per trovarlo.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A photo of a camera produces \"fully working, all original accessories included\". Nothing in the image says either thing, both read as description rather than as claims, and the buyer treats them as promises.",
      it: "La foto di una macchina fotografica produce «perfettamente funzionante, tutti gli accessori originali inclusi». Nell'immagine non c'è niente che dica né l'una né l'altra cosa, entrambe si leggono come descrizione e non come affermazioni, e chi compra le prende per promesse.",
    },
    {
      en: "Pricing from a model's sense of what things cost. It is a recollection of prices with no date attached, in a currency and a local market it has no way to check.",
      it: "Fissare il prezzo in base al senso che un model ha di quanto costano le cose. È un ricordo di prezzi senza data attaccata, in una valuta e in un mercato locale che non ha modo di verificare.",
    },
    {
      en: "Sixty beautiful, generic descriptions in one voice with the same three adjectives. They read as a dealer, and a good half of the buyers on the platform are specifically trying to avoid dealers.",
      it: "Sessanta descrizioni belle, generiche, tutte con la stessa voce e gli stessi tre aggettivi. Si leggono come un commerciante, e una buona metà di chi compra su quelle piattaforme sta cercando apposta di evitare i commercianti.",
    },
    {
      en: "Confident model identification from a blurry photo. The wrong model number in the title brings the wrong buyers, and they turn up already annoyed.",
      it: "Identificazione sicura del modello da una foto sfocata. Il numero di modello sbagliato nel titolo porta i compratori sbagliati, e quelli arrivano già seccati.",
    },
  ],
  starterPrompt: {
    en: "I've got ~60 things to sell on a marketplace and I want listings generated from photos. What I keep coming back to is that a photo can't tell you whether something works or what's missing from the box, and the price isn't a writing problem at all. Help me sort out which fields a photo can actually support and which have to come from me or from somewhere else.",
    it: "Ho ~60 cose da vendere su un marketplace e vorrei generare gli annunci dalle foto. Quello su cui continuo a tornare è che una foto non può dirti se una cosa funziona o cosa manca nella scatola, e il prezzo non è affatto un problema di scrittura. Aiutami a capire quali campi una foto può davvero sostenere e quali devono arrivare da me o da qualche altra parte.",
  },
};
