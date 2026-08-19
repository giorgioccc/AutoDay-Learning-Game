import type { Challenge } from "../types";

export const supportReplyDraft: Challenge = {
  id: "support-reply-draft",
  mode: "deep",
  level: "intermediate",
  category: "communication",
  estimatedMinutes: 240,
  title: {
    en: "The Draft Nobody Rewrites",
    it: "La bozza che nessuno riscrive",
  },
  scenario: {
    en: "Emeka's support team of nine handles around four hundred tickets a week. The plan is to have a draft reply waiting in each ticket when an agent opens it, so the job becomes editing rather than writing. In the pilot the agents were fast and happy, and the two replies that went out wrong went out wrong because the draft was wrong in its first sentence and fluent in every one after it.",
    it: "Il team di assistenza di Emeka, nove persone, gestisce circa quattrocento ticket a settimana. L'idea è che dentro ogni ticket ci sia già una bozza di risposta quando l'agente lo apre, così il lavoro diventa correggere invece che scrivere. Nel test gli agenti erano veloci e contenti, e le due risposte partite sbagliate lo erano perché la bozza sbagliava la prima frase ed era scorrevole in tutte le altre.",
  },
  constraints: [
    {
      en: "A draft is an anchor, not a suggestion. People edit what is in front of them, so whatever the draft assumed about the customer's problem tends to survive into what gets sent.",
      it: "Una bozza è un'àncora, non un suggerimento. Le persone correggono ciò che hanno davanti, quindi qualsiasi cosa la bozza abbia dato per scontata sul problema del cliente tende a sopravvivere fino a ciò che viene inviato.",
    },
    {
      en: "The obvious corpus is the archive of resolved tickets. Those resolutions were right when they were written, and some of them are now the wrong advice.",
      it: "Il corpus ovvio è l'archivio dei ticket risolti. Quelle risoluzioni erano giuste quando sono state scritte, e alcune ora sono il consiglio sbagliato.",
    },
    {
      en: "A reply that offers a refund, an extension or an exception is a commitment. The company honours what its support said, whoever typed it.",
      it: "Una risposta che offre un rimborso, una proroga o un'eccezione è un impegno. L'azienda tiene fede a ciò che ha detto la sua assistenza, chiunque l'abbia scritto.",
    },
    {
      en: "When the queue is long the edit shrinks. By Friday afternoon it is a changed greeting and a send.",
      it: "Quando la coda è lunga, la correzione si accorcia. Il venerdì pomeriggio si riduce a cambiare il saluto e premere invia.",
    },
  ],
  nudge: {
    en: "What you are producing is not a reply. It is the starting point somebody works from while under time pressure. Work out what that changes about which mistakes are still recoverable.",
    it: "Ciò che stai producendo non è una risposta. È il punto di partenza da cui qualcuno lavora sotto pressione. Capisci cosa cambia questo rispetto a quali errori restano recuperabili.",
  },
  approach: {
    summary: {
      en: "Separate what a draft may assert from what only a person may commit to, and design the draft so that being wrong is visible rather than smooth.",
      it: "Separa ciò che una bozza può affermare da ciò a cui solo una persona può impegnarsi, e progetta la bozza in modo che sbagliare si veda, invece di scivolare via liscio.",
    },
    steps: [
      {
        en: "Split the reply into a factual half and a commercial half. Anything that grants, promises or excepts should be a slot an agent fills deliberately, never a sentence the model already wrote.",
        it: "Dividi la risposta in una metà fattuale e una metà commerciale. Tutto ciò che concede, promette o fa eccezione dev'essere uno spazio che l'agente riempie di proposito, mai una frase che il model ha già scritto.",
      },
      {
        en: "Retrieve from current policy and current documentation, not from how a similar ticket was answered before. Past resolutions tell you what the answer used to be, wrapped in the confidence of having actually worked.",
        it: "Recupera dalle policy attuali e dalla documentazione attuale, non da come è stato risposto a un ticket simile. Le risoluzioni passate ti dicono qual era la risposta di allora, avvolte nella sicurezza di aver davvero funzionato.",
      },
      {
        en: "Put the draft's reading of the problem in one line above the reply. A misread ticket then becomes obvious in a second, instead of hiding inside a well-written paragraph.",
        it: "Metti in una riga sopra la risposta come la bozza ha interpretato il problema. Un ticket frainteso diventa così evidente in un secondo, invece di nascondersi dentro un paragrafo scritto bene.",
      },
      {
        en: "Leave what it does not know as a literal gap. A visible blank the agent has to fill beats a smooth sentence that reads as though somebody already checked.",
        it: "Lascia ciò che non sa come uno spazio vuoto vero. Una lacuna visibile che l'agente deve riempire vale più di una frase liscia che sembra già verificata da qualcuno.",
      },
      {
        en: "Measure how much the sent reply differs from the draft, per agent, over time. When that number falls, the review has stopped happening — and that is a fact about the process, not about the model.",
        it: "Misura quanto la risposta inviata differisce dalla bozza, per agente, nel tempo. Quando quel numero cala, la revisione ha smesso di avvenire, ed è un fatto sul processo, non sul model.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A draft that misreads the ticket in its first sentence and is fluent in every one after it. The agent reads for tone, fixes a word, and sends a confident answer to a question the customer never asked.",
      it: "Una bozza che fraintende il ticket nella prima frase ed è scorrevole in tutte le successive. L'agente legge per il tono, sistema una parola, e manda una risposta sicura di sé a una domanda che il cliente non ha mai fatto.",
    },
    {
      en: "Retrieval from the ticket archive. Something answered correctly in March under a policy that changed in June, restated to a customer in November with a citation attached to prove it.",
      it: "Il recupero dall'archivio dei ticket. Qualcosa a cui si era risposto correttamente a marzo con una policy cambiata a giugno, ripetuto a un cliente a novembre con tanto di citazione allegata a dimostrarlo.",
    },
    {
      en: "The model writes the refund offer. Nobody decided to give a refund — a sentence appeared, an agent approved it in four seconds, and it is now what the company said.",
      it: "È il model a scrivere l'offerta di rimborso. Nessuno ha deciso di rimborsare: è comparsa una frase, un agente l'ha approvata in quattro secondi, e ora è ciò che l'azienda ha detto.",
    },
    {
      en: "Judging the tool by how little agents change it. That number falls for two opposite reasons — the drafts got better, or nobody is reading them — and on its own it cannot tell you which.",
      it: "Giudicare il tool da quanto poco gli agenti lo modificano. Quel numero cala per due ragioni opposte — le bozze sono migliorate, oppure nessuno le legge — e da solo non può dirti quale delle due.",
    },
  ],
  starterPrompt: {
    en: "I want to pre-draft support replies for a team of nine handling ~400 tickets a week. What worries me is that a draft anchors the agent — they edit rather than rewrite, so a wrong assumption in it tends to survive into what's sent. Help me work out which parts of a reply a model should be allowed to write at all, and which have to stay a human decision.",
    it: "Voglio precompilare le risposte dell'assistenza per un team di nove persone che gestisce ~400 ticket a settimana. Quello che mi preoccupa è che una bozza fa da àncora: l'agente corregge invece di riscrivere, quindi un presupposto sbagliato tende a sopravvivere fino all'invio. Aiutami a capire quali parti di una risposta un model può davvero scrivere, e quali devono restare una decisione umana.",
  },
};
