import type { Challenge } from "../types";

export const seoBriefBuilder: Challenge = {
  id: "seo-brief-builder",
  mode: "quick",
  level: "intermediate",
  category: "marketing-content",
  estimatedMinutes: 45,
  title: {
    en: "The Eleventh Identical Article",
    it: "L'undicesimo articolo identico",
  },
  scenario: {
    en: "For every target search, Ilaria opens the ten pages that already rank, reads all of them, and writes a brief telling a freelancer what the new article has to cover. Ten pages of three thousand words each, four briefs a week. The briefs are thorough and the articles that come back are indistinguishable from the ten she read.",
    it: "Per ogni ricerca da presidiare, Ilaria apre le dieci pagine che già si posizionano, le legge tutte, e scrive un brief che dice a un freelance cosa deve coprire il nuovo articolo. Dieci pagine da tremila parole l'una, quattro brief a settimana. I brief sono accurati e gli articoli che tornano indietro sono indistinguibili dalle dieci pagine che ha letto.",
  },
  constraints: [
    {
      en: "The valuable part of the brief is what none of the ten pages says. By definition it is not in the text she is reading.",
      it: "La parte di valore del brief è ciò che nessuna delle dieci pagine dice. Per definizione non è nel testo che sta leggendo.",
    },
    {
      en: "Thirty thousand words go in per brief, four times a week, and the same pages get re-read for every related search.",
      it: "Entrano trentamila parole per brief, quattro volte a settimana, e le stesse pagine vengono rilette per ogni ricerca correlata.",
    },
    {
      en: "Most of what comes back from a page is navigation, cookie notices, related-post lists and footers. The article is a minority of the text.",
      it: "La maggior parte di ciò che torna da una pagina è navigazione, avvisi sui cookie, liste di articoli correlati e piè di pagina. L'articolo è una minoranza del testo.",
    },
  ],
  nudge: {
    en: "The brief exists so that the article is not the eleventh version of what already ranks. Averaging ten documents gives you the exact centre of the pile — so where does the thing that is in none of them come from?",
    it: "Il brief esiste perché l'articolo non sia l'undicesima versione di ciò che già si posiziona. La media di dieci documenti ti dà esattamente il centro del mucchio: quindi da dove arriva ciò che non c'è in nessuno di essi?",
  },
  approach: {
    summary: {
      en: "Reduce each page once into a small structured record, synthesise over the records rather than the text, and make the differentiator a required input rather than something you hope emerges.",
      it: "Riduci ogni pagina una volta sola in un piccolo record strutturato, sintetizza sui record invece che sul testo, e rendi l'elemento differenziante un input obbligatorio invece di qualcosa che speri emerga.",
    },
    steps: [
      {
        en: "Strip each page to its article body before anything else. Paying a model to read a cookie policy is the single largest avoidable cost in this pipeline.",
        it: "Riduci ogni pagina al solo corpo dell'articolo prima di ogni altra cosa. Pagare un model per leggere un'informativa sui cookie è la più grossa spesa evitabile di tutta la pipeline.",
      },
      {
        en: "Reduce each page independently into a compact record: the questions it answers, the claims it makes, its structure, what it assumes the reader already knows. Store it against the URL so a page read for one search is free for the next.",
        it: "Riduci ogni pagina in modo indipendente a un record compatto: le domande a cui risponde, le affermazioni che fa, la sua struttura, cosa dà per scontato che il lettore già sappia. Salvalo legandolo all'URL, così una pagina letta per una ricerca è gratis per la successiva.",
      },
      {
        en: "Synthesise across the records, not the raw pages. Ten small structured objects fit comfortably in one call, and comparison is the one thing that has to happen with everything visible at once.",
        it: "Sintetizza sui record, non sulle pagine grezze. Dieci piccoli oggetti strutturati stanno comodamente in una sola chiamata, e il confronto è l'unica cosa che deve avvenire con tutto visibile contemporaneamente.",
      },
      {
        en: "Ask for a coverage matrix — which page answered which question — and derive the gaps from it. A gap computed from a table is checkable; a gap the model announces is a guess.",
        it: "Chiedi una matrice di copertura — quale pagina ha risposto a quale domanda — e ricava da lì le lacune. Una lacuna calcolata da una tabella è verificabile; una lacuna che il model annuncia è un'ipotesi.",
      },
      {
        en: "Make the brief require at least one input none of the ten pages could have: the company's own data, a customer interview, a practitioner who will be quoted. If that field is empty, the brief is not finished.",
        it: "Fai in modo che il brief richieda almeno un elemento che nessuna delle dieci pagine potrebbe avere: dati propri dell'azienda, un'intervista a un cliente, un professionista da citare. Se quel campo è vuoto, il brief non è finito.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Feeding ten full pages into one call per brief. The cost is set by how long other people's articles are, which is not something you control, and it recurs in full every time a related search comes up.",
      it: "Dare in pasto dieci pagine intere a una sola chiamata per ogni brief. Il costo lo decide la lunghezza degli articoli altrui, che non è sotto il tuo controllo, e si ripete per intero ogni volta che salta fuori una ricerca correlata.",
    },
    {
      en: "A brief assembled from the consensus of the top ten specifies, precisely and thoroughly, an article that already exists ten times. It will read like a good brief right up until you read the result.",
      it: "Un brief costruito sul consenso dei primi dieci specifica, con precisione e completezza, un articolo che esiste già dieci volte. Sembrerà un ottimo brief fino al momento in cui leggi il risultato.",
    },
    {
      en: "Asked for \"what the competitors are missing\", a model will produce a fluent, sensible-sounding list of gaps whether or not any of them are real, because that request has no wrong answer it can detect.",
      it: "Se gli chiedi «cosa manca ai concorrenti», il model produrrà una lista di lacune scorrevole e dall'aria sensata, che siano vere o no, perché quella richiesta non ha una risposta sbagliata che lui possa rilevare.",
    },
  ],
  starterPrompt: {
    en: "I write content briefs by reading the ten pages that already rank for a search — about 30,000 words per brief, four times a week — and the articles that come back look just like the ten. Help me think about two things before we build: how to stop paying full price for the same pages repeatedly, and where the part of the brief that isn't in any of those pages is supposed to come from.",
    it: "Scrivo brief editoriali leggendo le dieci pagine che già si posizionano per una ricerca — circa 30.000 parole a brief, quattro volte a settimana — e gli articoli che tornano indietro somigliano a quelle dieci. Aiutami a ragionare su due cose prima di costruire: come smettere di pagare a prezzo pieno le stesse pagine ogni volta, e da dove dovrebbe arrivare la parte del brief che non sta in nessuna di quelle pagine.",
  },
};
