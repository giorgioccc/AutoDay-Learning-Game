import type { Challenge } from "../types";

export const inboxRouting: Challenge = {
  id: "inbox-routing",
  mode: "quick",
  level: "beginner",
  category: "work-admin",
  estimatedMinutes: 30,
  title: {
    en: "Who Owns This One",
    it: "Di chi è questa",
  },
  scenario: {
    en: "Greta opens the shared support@ mailbox every morning and drags about sixty overnight messages into four colleagues' folders. Billing to Paolo, integrations to Ana, anything about the mobile app to Yusuf, everything else to herself. It takes forty minutes and she does it again after lunch, because by then another thirty have landed.",
    it: "Greta apre ogni mattina la casella condivisa support@ e smista una sessantina di messaggi notturni nelle cartelle di quattro colleghi. La fatturazione a Paolo, le integrazioni ad Ana, tutto quello che riguarda l'app mobile a Yusuf, il resto a sé stessa. Ci mette quaranta minuti, e lo rifà dopo pranzo, perché nel frattempo ne sono arrivati altri trenta.",
  },
  constraints: [
    {
      en: "The four remits overlap. A message about a failed card payment inside the mobile app belongs to two people, and the sender does not know or care which.",
      it: "Le quattro competenze si sovrappongono. Un messaggio su un pagamento con carta fallito dentro l'app mobile riguarda due persone, e chi scrive non sa né gli interessa quale.",
    },
    {
      en: "Messages arrive all day, not in a batch. Something waiting in the wrong folder until tomorrow morning has already failed.",
      it: "I messaggi arrivano tutto il giorno, non in blocco. Una richiesta che resta nella cartella sbagliata fino a domattina ha già fallito.",
    },
    {
      en: "A misroute is invisible. It sits in a colleague's folder while everyone assumes someone else has it, and surfaces days later as an angry follow-up.",
      it: "Uno smistamento sbagliato è invisibile. Resta nella cartella di un collega mentre tutti danno per scontato che se ne stia occupando qualcun altro, e riemerge giorni dopo come un sollecito arrabbiato.",
    },
  ],
  nudge: {
    en: "Sending a message to the wrong person and sending it to two people are both mistakes, but they do not cost the same thing. Once you know which one you can afford, you know what the output has to be.",
    it: "Mandare un messaggio alla persona sbagliata e mandarlo a due persone sono entrambi errori, ma non costano la stessa cosa. Quando sai quale dei due ti puoi permettere, sai anche che forma deve avere l'output.",
  },
  approach: {
    summary: {
      en: "One classification call per message, against owner descriptions written from real history — with an explicit place for the messages it cannot decide.",
      it: "Una chiamata di classificazione per messaggio, contro descrizioni degli owner scritte a partire dalla storia reale, con un posto esplicito per i messaggi che non riesce a decidere.",
    },
    steps: [
      {
        en: "Describe each owner by what they actually handle, taken from a month of Greta's past routing — not from the org chart. The org chart says what people are responsible for; the folders say what they receive.",
        it: "Descrivi ogni owner in base a ciò di cui si occupa davvero, ricavandolo da un mese di smistamenti passati di Greta, non dall'organigramma. L'organigramma dice di cosa le persone sono responsabili; le cartelle dicono cosa ricevono.",
      },
      {
        en: "Classify one message at a time with structured output: an owner, a confidence, and the sentence from the message that decided it. That quoted sentence is what makes a wrong routing reviewable in two seconds.",
        it: "Classifica un messaggio alla volta con structured output: un owner, una confidenza e la frase del messaggio che ha deciso. Quella frase citata è ciò che rende uno smistamento sbagliato verificabile in due secondi.",
      },
      {
        en: "Give the schema somewhere to put uncertainty — an unassigned bucket, or a second owner — and decide up front who empties it. A category list with no escape hatch turns every ambiguous message into a confident mistake.",
        it: "Dai allo schema un posto dove mettere l'incertezza: un bucket non assegnato, oppure un secondo owner. E decidi da subito chi lo svuota. Una lista di categorie senza via d'uscita trasforma ogni messaggio ambiguo in un errore sicuro di sé.",
      },
      {
        en: "Log every decision with its confidence and let a person correct it with one click. Those corrections are the only training signal you will ever get, and they are worthless if they are not written down.",
        it: "Registra ogni decisione con la sua confidenza e permetti a una persona di correggerla con un clic. Quelle correzioni sono l'unico segnale di apprendimento che avrai mai, e non valgono niente se non vengono scritte da qualche parte.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A fixed list of four owners with no way to abstain means the model must always pick one. It will pick, fluently, on the messages where a person would have hesitated — which are exactly the ones that matter.",
      it: "Una lista fissa di quattro owner senza possibilità di astenersi obbliga il model a sceglierne sempre uno. E sceglierà, con scioltezza, proprio nei messaggi in cui una persona avrebbe esitato: cioè quelli che contano.",
    },
    {
      en: "Nothing in the system notices a misroute. Accuracy looks fine because you only ever hear about the failures that escalate, and those arrive too late to be attributed to a routing decision.",
      it: "Niente nel sistema si accorge di uno smistamento sbagliato. L'accuratezza sembra ottima perché vieni a sapere solo dei casi che degenerano, e arrivano troppo tardi per essere ricondotti a una decisione di smistamento.",
    },
    {
      en: "Remits drift. Yusuf picks up payments in March and nobody updates his description, so the system keeps routing correctly according to a world that no longer exists.",
      it: "Le competenze cambiano. A marzo Yusuf inizia a occuparsi anche di pagamenti e nessuno aggiorna la sua descrizione, quindi il sistema continua a smistare correttamente secondo un mondo che non esiste più.",
    },
  ],
  starterPrompt: {
    en: "I want to auto-route messages from a shared support inbox to one of four colleagues. Each decision should return the owner, a confidence and the sentence that justified it, and there needs to be a real option for \"I can't tell\". Start by asking me how I'd build the owner descriptions and what should happen to the uncertain ones — don't write the classifier yet.",
    it: "Voglio smistare automaticamente i messaggi di una casella di supporto condivisa verso quattro colleghi. Ogni decisione deve restituire l'owner, una confidenza e la frase che l'ha motivata, e serve una vera opzione «non riesco a stabilirlo». Parti chiedendomi come costruirei le descrizioni degli owner e cosa deve succedere ai casi incerti: non scrivere ancora il classificatore.",
  },
};
