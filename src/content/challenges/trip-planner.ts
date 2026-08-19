import type { Challenge } from "../types";

export const tripPlanner: Challenge = {
  id: "trip-planner",
  mode: "deep",
  level: "advanced",
  category: "personal",
  estimatedMinutes: 360,
  title: {
    en: "The Ferry That Stopped Running",
    it: "Il traghetto che non fa più quella tratta",
  },
  scenario: {
    en: "Léa is planning three weeks and seven stops, where every leg constrains the next one. She wants something that assembles the whole thing instead of the eleven browser tabs she currently keeps open, and she will book from whatever it produces.",
    it: "Léa sta organizzando tre settimane e sette tappe, dove ogni tratta vincola la successiva. Vorrebbe qualcosa che metta insieme il tutto al posto delle undici schede del browser che tiene aperte adesso, e prenoterà a partire da quello che ne esce.",
  },
  constraints: [
    {
      en: "Every leg depends on the one before it. Move a single date and four other things become wrong.",
      it: "Ogni tratta dipende da quella precedente. Sposta una sola data e altre quattro cose diventano sbagliate.",
    },
    {
      en: "The facts that break a plan are exactly the ones that change: a ferry that only runs from June, an entry rule amended in March, a line closed for works.",
      it: "I fatti che rompono un piano sono esattamente quelli che cambiano: un traghetto che parte solo da giugno, una regola d'ingresso modificata a marzo, una linea chiusa per lavori.",
    },
    {
      en: "She will book from it. A plan stops being a suggestion the moment money moves.",
      it: "Ci prenoterà sopra. Un piano smette di essere un suggerimento nel momento in cui si muovono dei soldi.",
    },
    {
      en: "The itinerary reads exactly as confident whether the ferry exists or not.",
      it: "L'itinerario si legge esattamente con la stessa sicurezza sia che il traghetto esista sia che non esista.",
    },
  ],
  nudge: {
    en: "This will be right about the things that never change and wrong about the things that do. Work out which of its statements you are going to bet money on, and where each of those has to come from.",
    it: "Questa cosa avrà ragione sulle cose che non cambiano mai e torto su quelle che cambiano. Capisci su quali delle sue affermazioni scommetterai dei soldi, e da dove deve arrivare ognuna di quelle.",
  },
  approach: {
    summary: {
      en: "Separate the shape of the trip from the facts that make it possible, and let no bookable claim exist without a source and a date it was checked.",
      it: "Separa la forma del viaggio dai fatti che lo rendono possibile, e non lasciare esistere nessuna affermazione prenotabile senza una fonte e una data di verifica.",
    },
    steps: [
      {
        en: "Split sequencing from verification. Ordering seven stops sensibly is something a model does well; whether a train runs on a Tuesday in October is a lookup with an answer.",
        it: "Separa la messa in sequenza dalla verifica. Ordinare sette tappe in modo sensato è una cosa che un model fa bene; se un treno circoli di martedì a ottobre è una consultazione con una risposta.",
      },
      {
        en: "Require every bookable claim to carry a source and the date it was checked. Anything without one is a suggestion, and it should be visibly labelled as a suggestion on the page.",
        it: "Pretendi che ogni affermazione prenotabile porti una fonte e la data in cui è stata verificata. Ciò che non ce l'ha è un suggerimento, e sulla pagina dev'essere etichettato come tale in modo visibile.",
      },
      {
        en: "Fetch the volatile facts at planning time from the operators and the official sources. Treat a missing source as a failure to be shown, not as an invitation to fall back on what the model recalls.",
        it: "Recupera i fatti volatili al momento della pianificazione dagli operatori e dalle fonti ufficiali. Tratta una fonte mancante come un errore da mostrare, non come un invito a ripiegare su ciò che il model ricorda.",
      },
      {
        en: "Make the dependency chain explicit, so that changing one date shows exactly what it invalidates. That is the thing a document cannot do, and it is the reason to build software rather than write a list.",
        it: "Rendi esplicita la catena di dipendenze, così che cambiare una data mostri esattamente cosa invalida. È la cosa che un documento non può fare, ed è il motivo per cui costruire un software invece di scrivere una lista.",
      },
      {
        en: "Stop at a checked, sourced plan she executes herself. Keeping the irreversible step with the person who bears the consequences is a design decision, not a limitation.",
        it: "Fermati a un piano verificato e con le fonti che esegue lei. Tenere il passaggio irreversibile in mano a chi ne subisce le conseguenze è una scelta di progetto, non un limite.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A ferry that ran until 2022 appears with a plausible departure time. Two nights, a train and a non-refundable room are all built downstream of a service that no longer exists.",
      it: "Un traghetto che ha operato fino al 2022 compare con un orario di partenza plausibile. Due notti, un treno e una stanza non rimborsabile sono tutti costruiti a valle di un servizio che non esiste più.",
    },
    {
      en: "Entry and visa requirements taken from a model's recollection. They change without notice, they are the highest-consequence facts in the whole plan, and they are the ones it will state most fluently.",
      it: "Requisiti d'ingresso e di visto presi da ciò che il model ricorda. Cambiano senza preavviso, sono i fatti dalle conseguenze più gravi di tutto il piano, e sono quelli che enuncerà con maggiore scioltezza.",
    },
    {
      en: "A plan with no dependency structure. She shifts one day and has to re-verify all seven stops by hand, which is precisely the work she was trying to stop doing.",
      it: "Un piano senza struttura di dipendenze. Sposta un giorno e deve riverificare a mano tutte e sette le tappe, che è esattamente il lavoro che stava cercando di smettere di fare.",
    },
    {
      en: "An agent given the ability to book. What used to be a wasted afternoon becomes a non-refundable mistake, and the day that happens is the day she stops using it.",
      it: "Un agente a cui viene data la facoltà di prenotare. Quello che prima era un pomeriggio buttato diventa un errore non rimborsabile, e il giorno in cui succede è il giorno in cui smette di usarlo.",
    },
  ],
  starterPrompt: {
    en: "I want help planning a three-week, seven-stop trip where each leg constrains the next, and I'll actually book from the result. What worries me is that it'll state a ferry schedule or an entry rule with total confidence and be two years out of date. Ask me which claims in a plan I'd bet money on, and where each of those should have to come from.",
    it: "Voglio un aiuto per organizzare un viaggio di tre settimane e sette tappe, dove ogni tratta vincola la successiva, e prenoterò davvero a partire dal risultato. Quello che mi preoccupa è che dichiari l'orario di un traghetto o una regola d'ingresso con assoluta sicurezza essendo vecchio di due anni. Chiedimi su quali affermazioni di un piano scommetterei dei soldi, e da dove dovrebbe arrivare ciascuna.",
  },
};
