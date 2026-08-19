import type { Challenge } from "../types";

export const litReviewAgent: Challenge = {
  id: "lit-review-agent",
  mode: "deep",
  level: "advanced",
  category: "data-research",
  estimatedMinutes: 360,
  title: {
    en: "The Search That Writes Its Own Plan",
    it: "La ricerca che scrive il proprio piano",
  },
  scenario: {
    en: "When a new topic lands on Rebecca's desk she spends three days on it. She searches, reads four things, discovers that the field calls the thing she is looking for something else entirely, searches again with the real vocabulary, follows citations backwards, and eventually writes a page with fifteen sources under it. The three days are mostly the middle part.",
    it: "Quando le arriva un nuovo tema, Rebecca ci passa tre giorni. Cerca, legge quattro cose, scopre che nel settore la cosa che sta cercando si chiama in tutt'altro modo, cerca di nuovo col vocabolario giusto, risale le citazioni all'indietro, e alla fine scrive una pagina con quindici fonti sotto. I tre giorni sono quasi tutti nella parte centrale.",
  },
  constraints: [
    {
      en: "The search terms that work can only be learned from the first few papers. There is no way to specify the search before starting it.",
      it: "I termini di ricerca che funzionano si possono imparare solo dai primi paper. Non c'è modo di specificare la ricerca prima di averla iniziata.",
    },
    {
      en: "It has to stop. Following every citation of every source never terminates, and \"enough\" is not a number of steps.",
      it: "Deve fermarsi. Seguire ogni citazione di ogni fonte non termina mai, e «basta così» non è un numero di passi.",
    },
    {
      en: "Every claim on the final page needs a source Rebecca can open and read the relevant sentence in.",
      it: "Ogni affermazione della pagina finale ha bisogno di una fonte che Rebecca possa aprire e in cui possa leggere la frase pertinente.",
    },
    {
      en: "The same search run on two different days returns different results, so nothing about this is reproducible unless you make it so deliberately.",
      it: "La stessa ricerca eseguita in due giorni diversi restituisce risultati diversi, quindi niente di tutto questo è riproducibile se non lo rendi tale di proposito.",
    },
  ],
  nudge: {
    en: "The plan for this search cannot be written before the search begins, because producing the plan is most of what the search is doing. So something other than the plan has to decide when it is finished — what?",
    it: "Il piano di questa ricerca non si può scrivere prima che la ricerca inizi, perché produrre il piano è gran parte di ciò che la ricerca fa. Quindi a decidere quando è finita dev'essere qualcos'altro: cosa?",
  },
  approach: {
    summary: {
      en: "An agent loop whose working state lives outside the conversation as an explicit list of findings and open questions, with termination designed rather than hoped for.",
      it: "Un agent loop il cui stato di lavoro vive fuori dalla conversazione come lista esplicita di risultati e domande aperte, con la terminazione progettata invece che sperata.",
    },
    steps: [
      {
        en: "Hold the working state as data, not as conversation history: sources retained, claims extracted, searches already tried, and the questions still open. Everything the loop decides is a change to that object.",
        it: "Tieni lo stato di lavoro come dato, non come cronologia di conversazione: fonti trattenute, affermazioni estratte, ricerche già provate, e le domande ancora aperte. Ogni decisione del loop è una modifica a quell'oggetto.",
      },
      {
        en: "Let the open-questions list drive the next iteration. That list is the control signal — it is what makes this a loop rather than a long single call, and it is what makes progress inspectable.",
        it: "Lascia che sia la lista delle domande aperte a guidare l'iterazione successiva. Quella lista è il segnale di controllo: è ciò che rende questo un loop e non una lunga chiamata singola, ed è ciò che rende ispezionabile l'avanzamento.",
      },
      {
        en: "Design the stopping condition as two things at once: a hard ceiling on steps and cost, and a substantive test — new searches stop returning sources you have not already seen.",
        it: "Progetta la condizione di arresto come due cose insieme: un tetto rigido su passi e costo, e un test sostanziale — le nuove ricerche smettono di restituire fonti che non hai già visto.",
      },
      {
        en: "Store each retained finding as a record with its source, its date and the sentence it rests on. Assemble the page from those records at the end rather than letting the loop narrate as it goes.",
        it: "Salva ogni risultato trattenuto come record con la sua fonte, la sua data e la frase su cui poggia. Assembla la pagina da quei record alla fine, invece di lasciare che il loop racconti man mano.",
      },
      {
        en: "Verify at the end that each claim's cited sentence actually supports it. That check is a separate pass and it catches a specific failure the loop cannot see in itself.",
        it: "Verifica alla fine che la frase citata da ogni affermazione la sostenga davvero. È un passaggio a parte e intercetta un guasto specifico che il loop non può vedere in sé stesso.",
      },
      {
        en: "Save the full trace of searches and decisions. Since the results are not reproducible, the trace is the only thing that lets Rebecca judge whether the review looked in the right places.",
        it: "Salva la traccia completa di ricerche e decisioni. Siccome i risultati non sono riproducibili, la traccia è l'unica cosa che permette a Rebecca di giudicare se la rassegna ha guardato nei posti giusti.",
      },
    ],
  },
  pitfalls: [
    {
      en: "There is no correct answer to compare a literature review against, so \"was this any good\" gets decided by whether the output reads authoritatively. Reading authoritatively is the one property you can be certain of in advance.",
      it: "Non esiste una risposta corretta con cui confrontare una rassegna della letteratura, quindi «era buona?» si decide in base a quanto l'output suona autorevole. Suonare autorevole è l'unica proprietà di cui puoi essere certo in partenza.",
    },
    {
      en: "The loop wanders. Three iterations spent refining a sub-question nobody asked, the budget gone, and the question Rebecca actually had never reached — and the transcript reads like diligent work throughout.",
      it: "Il loop divaga. Tre iterazioni spese ad affinare una sotto-domanda che nessuno aveva posto, budget esaurito, e la domanda che aveva davvero Rebecca mai raggiunta — e la trascrizione, per tutto il tempo, sembra lavoro diligente.",
    },
    {
      en: "Citations that are real, resolvable, and do not say what the summary says they say. This is much harder to catch than an invented citation, because every automatic check you would think to write passes it.",
      it: "Citazioni che sono reali, verificabili, e non dicono ciò che il riassunto sostiene che dicano. È molto più difficile da intercettare di una citazione inventata, perché ogni controllo automatico che ti verrebbe in mente di scrivere la fa passare.",
    },
    {
      en: "State kept only in the context window. By the eighth iteration the loop has forgotten what it ruled out in the second, re-runs searches it already did, and confidently rediscovers a source it had rejected for good reason.",
      it: "Stato tenuto solo nella finestra di contesto. All'ottava iterazione il loop ha dimenticato cosa aveva escluso alla seconda, rifà ricerche già fatte, e riscopre con sicurezza una fonte che aveva scartato per un buon motivo.",
    },
  ],
  starterPrompt: {
    en: "I want to automate the middle of a literature review: search, read, learn the field's actual vocabulary, search again, follow citations, and stop. Every claim in the output needs an openable source. Before designing the loop, help me work out what would make it stop, and where the working state should live so that iteration eight still knows what iteration two decided.",
    it: "Voglio automatizzare la parte centrale di una rassegna della letteratura: cercare, leggere, imparare il vocabolario reale del settore, ricercare, seguire le citazioni, e fermarsi. Ogni affermazione dell'output ha bisogno di una fonte apribile. Prima di progettare il loop, aiutami a capire cosa lo farebbe fermare, e dove dovrebbe vivere lo stato di lavoro perché all'ottava iterazione si sappia ancora cosa è stato deciso alla seconda.",
  },
};
