import type { Challenge } from "../types";

export const crmWriteback: Challenge = {
  id: "crm-writeback",
  mode: "quick",
  level: "intermediate",
  category: "communication",
  estimatedMinutes: 45,
  title: {
    en: "There Is No Field For That",
    it: "Non c'è un campo per quello",
  },
  scenario: {
    en: "Noor runs eight to ten discovery calls a week and is meant to log each one in the CRM the same day. She logs them on Friday, from memory, into a form of eleven fields and four picklists. The thing she actually learned on Tuesday — that the person who signs is not the person she spoke to — has nowhere to go.",
    it: "Noor fa dagli otto ai dieci primi incontri a settimana e dovrebbe registrarne ognuno nel CRM lo stesso giorno. Li registra il venerdì, a memoria, in un modulo di undici campi e quattro menu a tendina. La cosa che ha davvero capito martedì — che chi firma non è la persona con cui ha parlato — non ha nessun posto dove andare.",
  },
  constraints: [
    {
      en: "The fields were designed so a report could be run, not so a conversation could be described.",
      it: "I campi sono stati progettati perché si potesse tirare fuori un report, non perché si potesse descrivere una conversazione.",
    },
    {
      en: "What decides whether the deal moves is usually one sentence about a person — who signs, what they are afraid of, when their budget unlocks — and there is no picklist value for any of it.",
      it: "Ciò che decide se la trattativa si muove è di solito una frase su una persona — chi firma, di cosa ha paura, quando si sblocca il suo budget — e non c'è nessuna voce di menu per niente di tutto questo.",
    },
    {
      en: "Whatever lands in those fields becomes the forecast. Nobody reads the call notes; everybody reads the pipeline report.",
      it: "Qualunque cosa finisca in quei campi diventa la previsione. I resoconti delle chiamate non li legge nessuno; il report della pipeline lo leggono tutti.",
    },
  ],
  nudge: {
    en: "Ask what each field is for and who reads it downstream. Then ask where the sentence that actually decides the deal is supposed to live.",
    it: "Chiediti a cosa serve ogni campo e chi lo legge a valle. Poi chiediti dove dovrebbe vivere la frase che davvero decide la trattativa.",
  },
  approach: {
    summary: {
      en: "Fill a field only where the call decides it, attach the quote that decided it, and keep somewhere for the thing that has no field.",
      it: "Riempi un campo solo dove la chiamata lo decide, allega la citazione che l'ha deciso, e tieni un posto per la cosa che un campo non ce l'ha.",
    },
    steps: [
      {
        en: "Populate a field only when the call contains something that determines it, and leave it alone otherwise. An empty field is a true statement about what you know; a plausible one is a forecast built on nothing.",
        it: "Compila un campo solo quando la chiamata contiene qualcosa che lo determina, e altrimenti lascialo stare. Un campo vuoto è un'affermazione vera su ciò che sai; uno plausibile è una previsione costruita sul nulla.",
      },
      {
        en: "Attach a verbatim quote and a timestamp to every value it does write. That turns the write-back from an assertion into something anyone can check in ten seconds.",
        it: "Allega una citazione testuale e un minutaggio a ogni valore che scrive. Trasforma la registrazione da affermazione in qualcosa che chiunque può verificare in dieci secondi.",
      },
      {
        en: "Keep one unstructured field for what has no home — the objection, the internal politics, the offhand remark about when money frees up — and do not let it be flattened into the nearest picklist value.",
        it: "Tieni un campo libero per ciò che non ha casa — l'obiezione, le dinamiche interne, la battuta buttata lì su quando si liberano i soldi — e non lasciare che venga appiattito nella voce di menu più vicina.",
      },
      {
        en: "Never overwrite something a person typed. Propose the change with its quote and let Noor accept it, because she was in the room and the transcript was not.",
        it: "Non sovrascrivere mai qualcosa scritto da una persona. Proponi la modifica con la sua citazione e lascia che sia Noor ad accettarla: lei era nella stanza, la trascrizione no.",
      },
      {
        en: "Work out what each field does downstream before automating it. If a picklist value moves a deal in the forecast, then a model choosing that value is a model editing the revenue number.",
        it: "Capisci cosa fa ogni campo a valle prima di automatizzarlo. Se una voce di menu sposta una trattativa nella previsione, allora un model che sceglie quella voce è un model che modifica il numero del fatturato.",
      },
    ],
  },
  pitfalls: [
    {
      en: "\"Budget: not confirmed\" was thirty seconds of the prospect explaining that the money exists but sits with a director who is away until March. The picklist value is not wrong. It is just no longer the fact.",
      it: "«Budget: non confermato» erano trenta secondi in cui il potenziale cliente spiegava che i soldi ci sono ma stanno in mano a un direttore assente fino a marzo. La voce di menu non è sbagliata. Semplicemente non è più il fatto.",
    },
    {
      en: "A model handed a required picklist will always choose a value. The pipeline report gets cleaner and more complete every week, and gradually stops describing anything that happened.",
      it: "Un model a cui dai un menu obbligatorio sceglierà sempre una voce. Il report della pipeline diventa più pulito e più completo ogni settimana, e pian piano smette di descrivere qualsiasi cosa sia successa.",
    },
    {
      en: "Overwriting what the rep typed. She heard the pause before the answer; the transcript recorded only the answer.",
      it: "Sovrascrivere ciò che ha scritto chi era in chiamata. Lei ha sentito la pausa prima della risposta; la trascrizione ha registrato solo la risposta.",
    },
    {
      en: "Automating fields nobody has validated in years. Several of them exist for a report that stopped being run two years ago, and now a model maintains them faithfully every week.",
      it: "Automatizzare campi che nessuno convalida da anni. Diversi esistono per un report che ha smesso di girare due anni fa, e adesso un model li mantiene fedelmente ogni settimana.",
    },
  ],
  starterPrompt: {
    en: "I want call transcripts to fill in my CRM after discovery calls. My worry is that the useful part of a call is never a picklist value — it's one sentence about who actually decides. Ask me what happens downstream to each field before we automate any of them, and what should happen when the call simply doesn't say.",
    it: "Voglio che le trascrizioni delle chiamate compilino il mio CRM dopo i primi incontri. Il mio timore è che la parte utile di una chiamata non sia mai una voce di menu, ma una frase su chi decide davvero. Chiedimi cosa succede a valle a ogni campo prima di automatizzarne qualcuno, e cosa deve succedere quando la chiamata semplicemente non lo dice.",
  },
};
