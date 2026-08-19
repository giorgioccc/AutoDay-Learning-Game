import type { Challenge } from "../types";

export const rotaSwapAgent: Challenge = {
  id: "rota-swap-agent",
  mode: "deep",
  level: "advanced",
  category: "work-admin",
  estimatedMinutes: 300,
  title: {
    en: "Can Anyone Take My Thursday",
    it: "Qualcuno mi copre giovedì",
  },
  scenario: {
    en: "Giulia runs the rota for sixty warehouse staff. Shift swaps reach her as messages — \"can anyone take my Thursday night\", sent at eleven at night, followed an hour later by \"never mind, sorted\". She checks who is qualified for that station, whether the swap breaks anyone's rest hours, updates the schedule, and tells both people. She does this fifteen times a week.",
    it: "Giulia gestisce i turni di sessanta persone in magazzino. Gli scambi le arrivano come messaggi: «qualcuno mi copre giovedì notte», mandato alle undici di sera, seguito un'ora dopo da «lascia stare, risolto». Lei controlla chi è abilitato a quella postazione, se lo scambio viola le ore di riposo di qualcuno, aggiorna il piano turni e avvisa entrambi. Lo fa quindici volte a settimana.",
  },
  constraints: [
    {
      en: "The rota is live and other people are editing it. A swap checked at 23:04 and written at 23:09 may be checked against a rota that no longer exists.",
      it: "Il piano turni è vivo e altre persone lo stanno modificando. Uno scambio verificato alle 23:04 e scritto alle 23:09 può essere stato verificato contro un piano che non esiste più.",
    },
    {
      en: "Some rules are law — minimum rest between shifts, maximum consecutive nights — and some are preference. Breaking the first kind is a regulatory matter.",
      it: "Alcune regole sono di legge — riposo minimo fra turni, numero massimo di notti consecutive — e altre sono preferenze. Violare le prime è una questione normativa.",
    },
    {
      en: "The writing is the point. A swap that is approved but never lands in the schedule is worse than no tool at all, because both people now believe it is handled.",
      it: "La scrittura è il punto. Uno scambio approvato ma mai finito nel piano turni è peggio di nessun tool, perché adesso entrambe le persone credono che sia sistemato.",
    },
    {
      en: "Requests arrive in fragments across hours, get amended, and are sometimes withdrawn without being withdrawn explicitly.",
      it: "Le richieste arrivano a pezzi nell'arco di ore, vengono modificate, e a volte ritirate senza che nessuno dica esplicitamente di averle ritirate.",
    },
  ],
  nudge: {
    en: "This system does not answer questions, it changes the world. Go through everything it might do and sort it by whether you could undo it in five minutes — the two piles need different designs.",
    it: "Questo sistema non risponde a domande: cambia il mondo. Passa in rassegna tutto ciò che potrebbe fare e ordinalo in base a quanto è facile disfarlo in cinque minuti — i due mucchi hanno bisogno di design diversi.",
  },
  approach: {
    summary: {
      en: "An agent loop with tools, where eligibility is a deterministic checker the model calls rather than something it reasons about, and the single irreversible action re-validates at the moment it fires.",
      it: "Un agent loop con tool, in cui l'idoneità è un controllo deterministico che il model invoca invece di qualcosa su cui ragiona, e l'unica azione irreversibile si rivalida nel momento in cui parte.",
    },
    steps: [
      {
        en: "Inventory the actions: read the rota, look up qualifications, check compliance, ask a person a question, write the swap, send the notification. Only two of those change anything, and only one cannot be quietly undone.",
        it: "Fai l'inventario delle azioni: leggere il piano, consultare le abilitazioni, verificare la conformità, fare una domanda a una persona, scrivere lo scambio, mandare la notifica. Solo due cambiano qualcosa, e solo una non si può disfare in silenzio.",
      },
      {
        en: "Implement rest hours and qualification rules as a plain function the model calls and cannot argue with. Legal compliance must not be a token prediction, however reliable the predictions look in testing.",
        it: "Implementa le ore di riposo e le regole di abilitazione come una funzione ordinaria che il model invoca e con cui non può discutere. La conformità normativa non deve essere una predizione di token, per quanto affidabili sembrino le predizioni in fase di test.",
      },
      {
        en: "Give the model the interpretive work it is actually good at: turning a fragmentary, informal, late-night message into a concrete request — whose shift, which date, is this an offer or an ask, is this an amendment to something already in flight.",
        it: "Lascia al model il lavoro interpretativo in cui è davvero bravo: trasformare un messaggio frammentario, informale e notturno in una richiesta concreta — il turno di chi, quale data, è un'offerta o una richiesta, è la modifica di qualcosa già in corso.",
      },
      {
        en: "Hold the state of each pending swap outside the conversation, as a record with an explicit status. If the only memory of \"I already asked Ana\" is the context window, the system will ask her twice or forget to ever confirm.",
        it: "Tieni lo stato di ogni scambio in sospeso fuori dalla conversazione, come record con uno stato esplicito. Se l'unica memoria di «ho già chiesto ad Ana» è la finestra di contesto, il sistema glielo chiederà due volte o si dimenticherà di confermare.",
      },
      {
        en: "Re-run every check inside the write, against the rota as it is at that instant, and let the write fail loudly rather than overwrite. Validating at proposal time and writing later is the bug, not the implementation of it.",
        it: "Riesegui tutti i controlli dentro la scrittura, contro il piano turni com'è in quell'istante, e fai fallire la scrittura in modo rumoroso invece di sovrascrivere. Validare al momento della proposta e scrivere dopo è il bug, non la sua implementazione.",
      },
      {
        en: "Decide what ambiguity triggers. A request the model cannot resolve should become a question to a human, with the partial understanding shown, not a plausible completion.",
        it: "Decidi cosa fa scattare l'ambiguità. Una richiesta che il model non riesce a risolvere deve diventare una domanda a una persona, mostrando quello che ha capito finora, non un completamento plausibile.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Asking the model to work out whether eleven hours have elapsed between two shifts. It will be right most of the time, which is the worst possible outcome for a rule that has legal force.",
      it: "Chiedere al model di calcolare se fra due turni sono passate undici ore. Ci prenderà quasi sempre, che è l'esito peggiore possibile per una regola che ha valore di legge.",
    },
    {
      en: "Two swaps validated in parallel against the same open slot, both approved, one silently overwriting the other. Nobody finds out until a shift starts with two people or none.",
      it: "Due scambi validati in parallelo sullo stesso posto libero, entrambi approvati, uno che sovrascrive l'altro in silenzio. Nessuno se ne accorge finché un turno non inizia con due persone o con nessuna.",
    },
    {
      en: "A confirmation flow that lives in conversation history. The model re-reads a long thread, loses track of which offer is still open, and confirms a swap with someone who withdrew two hours ago.",
      it: "Un flusso di conferma che vive nella cronologia della conversazione. Il model rilegge un thread lungo, perde il filo di quale offerta è ancora aperta e conferma uno scambio con qualcuno che si è tirato indietro due ore prima.",
    },
    {
      en: "Once it works, Giulia stops reading the notifications — that was the whole point. From then on the only detector of a bad swap is somebody not turning up, and by then it is a shift with no cover.",
      it: "Quando funziona, Giulia smette di leggere le notifiche: era esattamente lo scopo. Da quel momento l'unico rilevatore di uno scambio sbagliato è qualcuno che non si presenta, e a quel punto è un turno scoperto.",
    },
  ],
  starterPrompt: {
    en: "I want to handle shift-swap requests for 60 staff: read an informal message, work out what's being asked, check qualification and legal rest-hour rules, and write the change into a live rota. Start by asking me which of those steps must never be left to a model's judgement, and how I want the system to behave when it half-understands a request — don't design the loop yet.",
    it: "Voglio gestire le richieste di scambio turno per 60 persone: leggere un messaggio informale, capire cosa viene chiesto, verificare abilitazioni e regole di legge sul riposo, e scrivere la modifica in un piano turni vivo. Parti chiedendomi quali di questi passaggi non vanno mai lasciati al giudizio di un model, e come voglio che il sistema si comporti quando capisce una richiesta solo a metà: non progettare ancora il loop.",
  },
};
