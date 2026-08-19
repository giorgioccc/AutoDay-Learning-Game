import type { Challenge } from "../types";

export const execRollup: Challenge = {
  id: "exec-rollup",
  mode: "quick",
  level: "beginner",
  category: "work-admin",
  estimatedMinutes: 35,
  title: {
    en: "Five Sentences for the Board",
    it: "Cinque frasi per la direzione",
  },
  scenario: {
    en: "Six team leads send Karim a weekly written update every Thursday. Together they run to about four thousand words. The managing director reads five sentences on Friday morning and asks the same three questions every time. Karim spends his Thursday evening turning one into the other.",
    it: "Sei team lead mandano a Karim un aggiornamento scritto ogni giovedì. Messi insieme fanno circa quattromila parole. L'amministratore delegato venerdì mattina ne legge cinque frasi e fa sempre le stesse tre domande. Karim passa il giovedì sera a trasformare la prima cosa nella seconda.",
  },
  constraints: [
    {
      en: "The three questions the director actually cares about are never the questions the teams answered.",
      it: "Le tre domande che interessano davvero all'amministratore delegato non sono mai le domande a cui i team hanno risposto.",
    },
    {
      en: "Two teams are often blocked on each other without either of them saying so. That fact exists nowhere in either update on its own.",
      it: "Spesso due team sono bloccati l'uno sull'altro senza che nessuno dei due lo dica. Quel fatto non esiste in nessuno dei due aggiornamenti presi singolarmente.",
    },
    {
      en: "If a piece of bad news gets compressed out, the tool has not saved time — it has actively made the company worse informed than before.",
      it: "Se una brutta notizia viene persa nella compressione, il tool non ha fatto risparmiare tempo: ha reso l'azienda meno informata di prima.",
    },
  ],
  nudge: {
    en: "Shortening the text is the easy half and it is not what is being asked for. What is being asked for is a judgement about what matters — and importance is always importance to somebody in particular.",
    it: "Accorciare il testo è la metà facile e non è quello che viene chiesto. Quello che viene chiesto è un giudizio su cosa conta — e l'importanza è sempre importanza per qualcuno in particolare.",
  },
  approach: {
    summary: {
      en: "A single call over all six updates at once, writing into fixed slots derived from the reader's standing questions, with a rule that protects bad news from compression.",
      it: "Una sola chiamata su tutti e sei gli aggiornamenti insieme, che scrive dentro slot fissi ricavati dalle domande ricorrenti del lettore, con una regola che protegge le brutte notizie dalla compressione.",
    },
    steps: [
      {
        en: "Write the director's three standing questions down as durable configuration. They are the specification of the output; without them you are just shortening prose.",
        it: "Metti per iscritto le tre domande ricorrenti dell'amministratore delegato come configurazione durevole. Sono la specifica dell'output; senza di esse stai solo accorciando del testo.",
      },
      {
        en: "Give the model all six updates in one call. Handling them one at a time makes the cross-team conflict structurally impossible to find, no matter how good the prompt is.",
        it: "Dai al model tutti e sei gli aggiornamenti in una sola chiamata. Trattarli uno alla volta rende il conflitto fra team strutturalmente impossibile da trovare, per quanto buono sia il prompt.",
      },
      {
        en: "Shape the output as named slots rather than free prose: one answer per standing question, plus a separate list for anything a team flagged as at risk.",
        it: "Dai all'output la forma di slot con un nome invece che di prosa libera: una risposta per ogni domanda ricorrente, più una lista separata per tutto ciò che un team ha segnalato come a rischio.",
      },
      {
        en: "Make the risk list carry the team's own words verbatim and exempt it from the length limit. Compression is a policy you apply to good news.",
        it: "Fai in modo che la lista dei rischi riporti le parole dei team alla lettera, e escludila dal limite di lunghezza. La compressione è una politica che si applica alle buone notizie.",
      },
      {
        en: "Keep ten past Thursdays with the summary Karim actually sent. It is the only way to tell whether a change to the instructions improved the output or just changed it.",
        it: "Conserva dieci giovedì passati con il riepilogo che Karim ha davvero mandato. È l'unico modo per capire se una modifica alle istruzioni ha migliorato l'output o l'ha solo cambiato.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Summarising each update separately and concatenating the results. It is the obvious design and it destroys the one thing a rollup is for, which is noticing that two teams are describing the same problem from opposite sides.",
      it: "Riassumere ogni aggiornamento separatamente e concatenare i risultati. È il design ovvio e distrugge l'unica cosa per cui esiste un riepilogo: accorgersi che due team stanno descrivendo lo stesso problema da lati opposti.",
    },
    {
      en: "Tone averaging. Five teams saying \"on track\" and one saying \"we will miss the date\" comes out as \"broadly on track\", which is the single most expensive sentence the tool could produce.",
      it: "La media del tono. Cinque team che dicono «in linea» e uno che dice «non ce la faremo per la data» diventano «sostanzialmente in linea», che è la frase più costosa che il tool possa produrre.",
    },
    {
      en: "There is no single correct summary, so \"does this read well\" becomes the only test — and every version reads well. The usable signal is narrower and nobody thinks to capture it: which follow-up questions the director asked, because each one names something the summary should have contained.",
      it: "Non esiste un unico riepilogo corretto, quindi «si legge bene?» diventa l'unico test — e ogni versione si legge bene. Il segnale utilizzabile è più stretto e non viene in mente a nessuno di registrarlo: quali domande di chiarimento ha fatto il direttore, perché ognuna indica qualcosa che il riepilogo avrebbe dovuto contenere.",
    },
  ],
  starterPrompt: {
    en: "Every week I turn six team updates (~4,000 words) into a five-sentence summary for a director who always asks the same three questions. I want the output to fill fixed slots rather than being free prose, and I never want bad news to be compressed away. Ask me what those three questions are and how I'd define \"bad news\" precisely enough to protect it — then we'll design the output shape.",
    it: "Ogni settimana trasformo sei aggiornamenti di team (~4.000 parole) in un riepilogo di cinque frasi per un direttore che fa sempre le stesse tre domande. Voglio che l'output riempia slot fissi invece di essere prosa libera, e non voglio mai che le brutte notizie spariscano nella compressione. Chiedimi quali sono quelle tre domande e come definirei «brutta notizia» in modo abbastanza preciso da poterla proteggere: poi progettiamo la forma dell'output.",
  },
};
