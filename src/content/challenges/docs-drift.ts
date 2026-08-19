import type { Challenge } from "../types";

export const docsDrift: Challenge = {
  id: "docs-drift",
  mode: "deep",
  level: "intermediate",
  category: "software-dev",
  estimatedMinutes: 240,
  title: {
    en: "Documentation That Still Compiles",
    it: "Documentazione che compila ancora",
  },
  scenario: {
    en: "Ravi maintains an SDK with about ninety pages of documentation. Every release, some of those pages quietly stop being true. Nobody finds out until a user opens an issue, and by then a few hundred people have followed an example that works but is no longer how anyone should be doing it.",
    it: "Ravi mantiene un SDK con circa novanta pagine di documentazione. A ogni rilascio, alcune di quelle pagine smettono in silenzio di essere vere. Nessuno se ne accorge finché un utente non apre una issue, e a quel punto qualche centinaio di persone ha seguito un esempio che funziona ma non è più il modo in cui andrebbe fatto.",
  },
  constraints: [
    {
      en: "Most pages are unaffected by most releases. Re-reading all ninety every time costs more than the problem does.",
      it: "La maggior parte delle pagine non è toccata dalla maggior parte dei rilasci. Rileggerle tutte e novanta ogni volta costa più del problema stesso.",
    },
    {
      en: "The expensive kind of wrong is not a page that mentions a deleted function. It is an example that still runs and teaches an approach the library moved away from two releases ago.",
      it: "Il tipo di errore costoso non è una pagina che cita una funzione eliminata. È un esempio che gira ancora e insegna un approccio che la libreria ha abbandonato due rilasci fa.",
    },
    {
      en: "For an SDK the documentation is the product. A wrong example is a support ticket and, more often, a user who quietly gives up.",
      it: "Per un SDK la documentazione è il prodotto. Un esempio sbagliato è un ticket di assistenza e, più spesso, un utente che molla in silenzio.",
    },
    {
      en: "Nothing anywhere records which page documents which part of the code, and building that mapping by hand is a week of somebody's life.",
      it: "Da nessuna parte è registrato quale pagina documenti quale parte del codice, e costruire quella mappa a mano è una settimana della vita di qualcuno.",
    },
  ],
  nudge: {
    en: "Not everything that changed matters, and not everything that matters changed. Work out what relationship between the code and the prose would have to exist for this question to become cheap to ask.",
    it: "Non tutto ciò che è cambiato conta, e non tutto ciò che conta è cambiato. Capisci quale relazione fra il codice e il testo dovrebbe esistere perché questa domanda diventi economica da porre.",
  },
  approach: {
    summary: {
      en: "Build the code-to-documentation mapping once as durable, checkable data, then let each release's change set select the handful of pages worth examining.",
      it: "Costruisci una volta sola la mappa fra codice e documentazione come dato durevole e verificabile, poi lascia che l'insieme delle modifiche di ogni rilascio selezioni la manciata di pagine che vale la pena esaminare.",
    },
    steps: [
      {
        en: "Treat the mapping as the asset, not the checker. Once it exists the per-release check is nearly free; without it every release is a full re-read no matter how clever the prompt is.",
        it: "Considera la mappa come l'asset, non il verificatore. Una volta che esiste, il controllo per rilascio è quasi gratuito; senza, ogni rilascio è una rilettura completa per quanto furbo sia il prompt.",
      },
      {
        en: "Derive the links from what the documentation demonstrably references — symbols named in code blocks, imports, endpoint paths — so that each link is a fact somebody can verify, not a similarity score.",
        it: "Ricava i collegamenti da ciò che la documentazione dimostrabilmente cita — simboli nominati nei blocchi di codice, import, percorsi di endpoint — così che ogni collegamento sia un fatto verificabile da una persona, non un punteggio di somiglianza.",
      },
      {
        en: "Let the release's change set select the candidate pages. This is the step that turns an unaffordable check into one that can run on every release.",
        it: "Lascia che sia l'insieme delle modifiche del rilascio a selezionare le pagine candidate. È il passaggio che trasforma un controllo insostenibile in uno che può girare a ogni rilascio.",
      },
      {
        en: "For each candidate, give the model the page and the specific change to what it references, and ask for one of three verdicts: still correct, factually broken, or correct but no longer the way this should be done.",
        it: "Per ogni candidata, passa al model la pagina e la modifica specifica a ciò che essa cita, e chiedi uno di tre verdetti: ancora corretta, fattualmente rotta, oppure corretta ma non più il modo in cui andrebbe fatto.",
      },
      {
        en: "Design around the third verdict, since it is the whole reason a model is here. The first two are largely findable by running the examples.",
        it: "Progetta attorno al terzo verdetto, visto che è tutto il motivo per cui un model è qui. I primi due si trovano in gran parte eseguendo gli esempi.",
      },
      {
        en: "Maintain the mapping as part of the release process. It is a piece of data that goes stale exactly like the documentation it is supposed to protect.",
        it: "Mantieni la mappa come parte del processo di rilascio. È un dato che invecchia esattamente come la documentazione che dovrebbe proteggere.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The example still imports, still compiles, still returns the right value, and describes a pattern the library abandoned. No test catches it, no type checker catches it, and every new user learns the old way from it.",
      it: "L'esempio si importa ancora, compila ancora, restituisce ancora il valore giusto, e descrive uno schema che la libreria ha abbandonato. Nessun test lo intercetta, nessun type checker lo intercetta, e ogni nuovo utente impara da lì il modo vecchio.",
    },
    {
      en: "Checking every page on every release. The cost grows with the size of the documentation, so the check gets switched off in precisely the quarter the docs became large enough to need it.",
      it: "Controllare ogni pagina a ogni rilascio. Il costo cresce con la dimensione della documentazione, quindi il controllo viene spento esattamente nel trimestre in cui la documentazione è diventata abbastanza grande da averne bisogno.",
    },
    {
      en: "A mapping inferred by semantic similarity. It is about seventy per cent right, nobody can tell which seventy, and the pages it silently omits are invisible to every check you build on top of it.",
      it: "Una mappa dedotta per somiglianza semantica. È corretta al settanta per cento circa, nessuno sa quale settanta, e le pagine che omette in silenzio sono invisibili a ogni controllo che ci costruisci sopra.",
    },
    {
      en: "A checker that only finds removed symbols solves the easy tenth of the problem and generates confidence that the other nine tenths are fine.",
      it: "Un verificatore che trova solo i simboli rimossi risolve il decimo facile del problema e genera la convinzione che gli altri nove decimi siano a posto.",
    },
  ],
  starterPrompt: {
    en: "Every SDK release quietly makes some of our 90 doc pages wrong — usually examples that still run but teach an outdated approach. Checking everything each release is too expensive. Before we design the checker, help me think about what mapping between code and docs would have to exist, and how I'd build it from something verifiable rather than guessed.",
    it: "Ogni rilascio dell'SDK rende in silenzio sbagliate alcune delle nostre 90 pagine di documentazione, di solito esempi che girano ancora ma insegnano un approccio superato. Controllare tutto a ogni rilascio costa troppo. Prima di progettare il verificatore, aiutami a ragionare su quale mappa fra codice e documentazione dovrebbe esistere, e come la costruirei a partire da qualcosa di verificabile invece che indovinato.",
  },
};
