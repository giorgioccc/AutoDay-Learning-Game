import type { Challenge } from "../types";

export const handbookAnswers: Challenge = {
  id: "handbook-answers",
  mode: "deep",
  level: "intermediate",
  category: "work-admin",
  estimatedMinutes: 200,
  title: {
    en: "Ask Chiara in HR",
    it: "Chiedi a Chiara delle risorse umane",
  },
  scenario: {
    en: "Two hundred employees ask Chiara the same thirty questions. How much parental leave, can I work from abroad in August, is a train ticket to a client site expensable. The answers are spread across a 2021 handbook, an intranet page, four policy PDFs, a company-wide email from last spring, and — for about a third of the questions — nowhere except Chiara's memory.",
    it: "Duecento dipendenti fanno a Chiara le stesse trenta domande. Quanto congedo parentale spetta, si può lavorare dall'estero ad agosto, un biglietto del treno per andare da un cliente è rimborsabile. Le risposte sono sparse fra un manuale del 2021, una pagina intranet, quattro PDF di policy, una mail a tutta l'azienda della primavera scorsa e — per circa un terzo delle domande — in nessun posto tranne la memoria di Chiara.",
  },
  constraints: [
    {
      en: "The sources contradict each other. The handbook and the policy email say different things about the same benefit and neither one says it supersedes the other.",
      it: "Le fonti si contraddicono. Il manuale e la mail di policy dicono cose diverse sullo stesso benefit e nessuna delle due dice di sostituire l'altra.",
    },
    {
      en: "Several correct answers depend on who is asking — which country, which contract type, how long they have been there.",
      it: "Diverse risposte corrette dipendono da chi fa la domanda: in quale paese, con quale tipo di contratto, da quanto tempo è in azienda.",
    },
    {
      en: "A confident wrong answer about parental leave is not an inconvenience. It is a decision somebody makes about their family.",
      it: "Una risposta sbagliata data con sicurezza sul congedo parentale non è una scocciatura. È una decisione che qualcuno prende sulla propria famiglia.",
    },
    {
      en: "A large share of the real answers are not written down anywhere, and no amount of engineering changes that.",
      it: "Una fetta importante delle risposte vere non è scritta da nessuna parte, e nessuna quantità di ingegneria cambia questo fatto.",
    },
  ],
  nudge: {
    en: "Before you build anything that reads the corpus, find out what fraction of the thirty questions the corpus can actually answer correctly today. That number, not the retrieval design, decides what you are really building.",
    it: "Prima di costruire qualsiasi cosa che legga il corpus, scopri per quale frazione delle trenta domande il corpus sa davvero dare oggi la risposta giusta. È quel numero, non il design del recupero, a decidere cosa stai davvero costruendo.",
  },
  approach: {
    summary: {
      en: "Grade the corpus against real questions first, add the document metadata that makes currency decidable, and make \"I cannot answer this\" a first-class route rather than a failure.",
      it: "Prima valuta il corpus contro domande reali, poi aggiungi i metadati documentali che rendono decidibile cosa è in vigore, e fai di «non posso rispondere» un percorso di prima classe, non un fallimento.",
    },
    steps: [
      {
        en: "Take Chiara's thirty real questions and answer each one by hand from the corpus alone, recording whether the answer was there, wrong, stale, or absent. This audit is the design work; everything after it is consequence.",
        it: "Prendi le trenta domande reali di Chiara e rispondi a ognuna a mano usando solo il corpus, annotando se la risposta c'era, era sbagliata, era vecchia o mancava del tutto. Questa verifica è il vero lavoro di design; tutto ciò che viene dopo ne è la conseguenza.",
      },
      {
        en: "Attach structural metadata to every document: effective date, which population it applies to, and what it replaces. Recency has to be a fact about the document, not something a model infers from a date mentioned in the text.",
        it: "Attacca metadati strutturali a ogni documento: data di decorrenza, a quale popolazione si applica, e cosa sostituisce. L'attualità dev'essere un fatto sul documento, non qualcosa che il model deduce da una data citata nel testo.",
      },
      {
        en: "Require a citation for every claim, and drop any sentence that cannot carry one. An answer stitched together from two documents without saying which said what is the specific thing you are trying to prevent.",
        it: "Pretendi una citazione per ogni affermazione, e scarta qualsiasi frase che non riesca a portarne una. Una risposta cucita insieme da due documenti senza dire quale ha detto cosa è esattamente ciò che stai cercando di evitare.",
      },
      {
        en: "Handle contradiction explicitly rather than resolving it. When two current-looking sources disagree, the honest output shows both with their dates and routes the question to Chiara — it does not pick.",
        it: "Gestisci la contraddizione in modo esplicito invece di risolverla. Quando due fonti apparentemente valide dicono cose diverse, l'output onesto le mostra entrambe con le loro date e gira la domanda a Chiara: non sceglie.",
      },
      {
        en: "Filter by who is asking before answering, and refuse to answer generically when the answer is population-dependent. \"It depends on your contract, ask Chiara\" is a correct answer.",
        it: "Filtra in base a chi sta chiedendo prima di rispondere, e rifiutati di rispondere in modo generico quando la risposta dipende dalla popolazione. «Dipende dal tuo contratto, chiedi a Chiara» è una risposta corretta.",
      },
      {
        en: "Treat the escalated questions as the product roadmap. Each one is a gap in the written corpus, and closing it is a documentation task, not a prompt task.",
        it: "Considera le domande escalate come la roadmap del prodotto. Ognuna è una lacuna del corpus scritto, e colmarla è un lavoro di documentazione, non di prompt.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Two documents disagree and the model produces a smooth answer that is neither — the qualifications from one, the number from the other, and no seam where a reader could notice.",
      it: "Due documenti dicono cose diverse e il model produce una risposta liscia che non corrisponde a nessuno dei due: le condizioni presi da uno, il numero dall'altro, e nessuna cucitura in cui il lettore possa accorgersene.",
    },
    {
      en: "A corpus with no effective dates makes currency structurally undecidable. No prompt fixes this, because the information required to be right is simply not present.",
      it: "Un corpus senza date di decorrenza rende l'attualità strutturalmente indecidibile. Nessun prompt lo risolve, perché l'informazione necessaria per aver ragione semplicemente non c'è.",
    },
    {
      en: "The answer that is true for a full-time Italian employee, given to a contractor in another country, in the same confident voice.",
      it: "La risposta vera per un dipendente italiano a tempo pieno, data a un collaboratore in un altro paese, con lo stesso tono sicuro.",
    },
    {
      en: "Measuring coverage — what share of questions got an answer — instead of correctness. That metric rewards exactly the behaviour you are trying to eliminate.",
      it: "Misurare la copertura — quante domande hanno ricevuto una risposta — invece della correttezza. Quella metrica premia esattamente il comportamento che stai cercando di eliminare.",
    },
  ],
  starterPrompt: {
    en: "I want to answer common HR questions from a corpus that contradicts itself, is partly out of date, and doesn't contain about a third of the real answers. Before designing anything, help me plan the audit: how I'd grade the existing documents against 30 real questions, and what I'd need to record about each document for \"which version is current\" to be answerable at all.",
    it: "Voglio rispondere alle domande HR più frequenti partendo da un corpus che si contraddice, è in parte superato e non contiene circa un terzo delle risposte vere. Prima di progettare qualsiasi cosa, aiutami a pianificare la verifica: come valuterei i documenti esistenti contro 30 domande reali, e cosa dovrei registrare su ogni documento perché «quale versione è in vigore» sia anche solo una domanda a cui si può rispondere.",
  },
};
