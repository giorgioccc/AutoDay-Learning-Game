import type { Challenge } from "../types";

export const approvalGate: Challenge = {
  id: "approval-gate",
  mode: "deep",
  level: "advanced",
  category: "work-admin",
  estimatedMinutes: 300,
  title: {
    en: "The Approval Gate",
    it: "Il cancello delle approvazioni",
  },
  scenario: {
    en: "Around forty purchase orders a day pass through Nadia in operations before anyone can spend anything. For each one she checks it against the spending policy: is the amount inside the requester's authority, does the category trigger a procurement review, is this supplier one the company has bought from before. Most are fine. She still has to look at all forty, because the ones that are not fine look exactly like the ones that are.",
    it: "Ogni giorno passano da Nadia, in operations, una quarantina di ordini di acquisto prima che qualcuno possa spendere qualcosa. Per ognuno verifica la conformità alla policy di spesa: se l'importo rientra nell'autonomia di chi ha ordinato, se la categoria fa scattare una revisione dell'ufficio acquisti, se il fornitore è già stato usato in passato. Quasi tutti sono a posto. Deve comunque guardarli tutti e quaranta, perché quelli non a posto sono identici a quelli a posto.",
  },
  constraints: [
    {
      en: "Getting the route wrong is an audit finding, not an inconvenience. Someone will ask, eighteen months later, why this order went where it went.",
      it: "Sbagliare il percorso è un rilievo di audit, non una scocciatura. Fra diciotto mesi qualcuno chiederà perché quell'ordine è finito dove è finito.",
    },
    {
      en: "The thresholds are exact numbers that finance changes without warning, and an order for €9,980 is treated very differently from one for €10,020.",
      it: "Le soglie sono numeri esatti che l'amministrazione cambia senza preavviso, e un ordine da 9.980 € viene trattato in modo molto diverso da uno da 10.020 €.",
    },
    {
      en: "One purchase sometimes arrives as three orders that each sit below a limit. Nothing in any single order says that.",
      it: "A volte un unico acquisto arriva sotto forma di tre ordini che stanno ciascuno sotto la soglia. Nessuno dei tre ordini, preso da solo, lo dice.",
    },
    {
      en: "A €200 stationery order and a €200,000 contract should not get the same amount of autonomy from the system, even though the routing logic is identical.",
      it: "Un ordine di cancelleria da 200 € e un contratto da 200.000 € non devono ricevere dal sistema lo stesso grado di autonomia, anche se la logica di instradamento è identica.",
    },
  ],
  nudge: {
    en: "Separate what the system is allowed to decide from what it is only allowed to propose. That line is not fixed for the whole system — and where it sits should depend on what it costs to be wrong about this particular order.",
    it: "Separa ciò che il sistema può decidere da ciò che può soltanto proporre. Quella linea non è la stessa per tutto il sistema, e dove cade dovrebbe dipendere da quanto costa sbagliarsi proprio su quell'ordine.",
  },
  approach: {
    summary: {
      en: "A deterministic rules engine wrapped around a narrow model call, with autonomy banded by exposure and an immutable record of every decision.",
      it: "Un motore di regole deterministico costruito attorno a una chiamata al model volutamente stretta, con l'autonomia graduata in base all'esposizione e un registro immutabile di ogni decisione.",
    },
    steps: [
      {
        en: "Draw the boundary first. Amounts, thresholds and owner tables are data and code — they need version history and tests. The model's job is only the part that is genuinely interpretation: reading an unstructured order description and saying what kind of purchase it is.",
        it: "Traccia il confine per prima cosa. Importi, soglie e tabelle degli owner sono dati e codice: hanno bisogno di versionamento e di test. Il compito del model è solo la parte che è davvero interpretazione: leggere una descrizione d'ordine non strutturata e dire di che tipo di acquisto si tratta.",
      },
      {
        en: "Make the model's output the input to the rules engine, never a route. It returns a category, a supplier identity judgement and a confidence; the engine turns that into a destination.",
        it: "Fai in modo che l'output del model sia l'input del motore di regole, mai un percorso. Restituisce una categoria, un giudizio sull'identità del fornitore e una confidenza; è il motore a trasformarlo in una destinazione.",
      },
      {
        en: "Band the autonomy. Below a small amount and above a confidence floor, the route is applied. In the middle it is proposed for one-click confirmation. Above an exposure ceiling, or on any new supplier, the system is not allowed to propose at all — it only assembles the file for a person.",
        it: "Gradua l'autonomia. Sotto un importo basso e sopra una soglia minima di confidenza, il percorso viene applicato. In mezzo viene proposto, con conferma in un clic. Sopra un tetto di esposizione, o su qualsiasi fornitore nuovo, il sistema non può nemmeno proporre: si limita a preparare il fascicolo per una persona.",
      },
      {
        en: "Treat splitting as a different question from routing. It is a property of a set of orders over a window of days, not of one order, and it needs its own pass over recent history.",
        it: "Tratta il frazionamento come una domanda diversa dall'instradamento. È una proprietà di un insieme di ordini in una finestra di giorni, non di un singolo ordine, e richiede un passaggio a parte sulla storia recente.",
      },
      {
        en: "Write an append-only decision record: the order as received, the model output, the version of the rules that ran, the resulting route, and who confirmed it. Anything less is not an audit trail, however complete the log looks.",
        it: "Scrivi un registro decisionale in sola aggiunta: l'ordine così com'è arrivato, l'output del model, la versione delle regole che ha girato, il percorso risultante e chi ha confermato. Qualcosa di meno non è una pista di audit, per quanto completo sembri il log.",
      },
      {
        en: "Define the refusal path explicitly. When the model is unsure and the amount is high, the correct behaviour is a queue with a named owner and a deadline, not a best guess.",
        it: "Definisci esplicitamente il percorso di rifiuto. Quando il model è incerto e l'importo è alto, il comportamento corretto è una coda con un responsabile e una scadenza, non un tentativo plausibile.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Putting the thresholds in the prompt. They change, they need a change history someone can point at, and a model that reads \"€10,000\" and reasons about \"roughly ten thousand\" has just produced the audit finding.",
      it: "Mettere le soglie nel prompt. Cambiano, hanno bisogno di uno storico delle modifiche che si possa mostrare, e un model che legge «10.000 €» e ragiona su «circa diecimila» ha appena prodotto il rilievo di audit.",
    },
    {
      en: "Split orders are invisible to any system that looks at one order at a time, and they are the specific abuse the thresholds exist to catch. Per-item accuracy can be excellent while the control it implements does nothing.",
      it: "Gli ordini frazionati sono invisibili a qualsiasi sistema che guardi un ordine alla volta, e sono proprio l'abuso per cui esistono le soglie. L'accuratezza per singolo ordine può essere eccellente mentre il controllo che dovrebbe implementare non fa nulla.",
    },
    {
      en: "A log that records the decision but not the inputs and the rule version. Eighteen months later you can see that the system routed this order to procurement, and you cannot reconstruct why, which is the only question anyone will ask.",
      it: "Un log che registra la decisione ma non gli input e la versione delle regole. Diciotto mesi dopo vedi che il sistema ha mandato quell'ordine all'ufficio acquisti, e non puoi ricostruire perché, che è l'unica domanda che qualcuno ti farà.",
    },
    {
      en: "The output carries the authority of finance policy even when it came from a model guess. Once approvers learn to trust the route, nobody re-derives it — so a systematic misclassification propagates silently until an auditor finds it.",
      it: "L'output porta con sé l'autorevolezza della policy amministrativa anche quando nasce da un'ipotesi del model. Una volta che chi approva impara a fidarsi del percorso, nessuno lo ricalcola: così una classificazione sistematicamente sbagliata si propaga in silenzio finché non la trova un revisore.",
    },
  ],
  starterPrompt: {
    en: "I want to route ~40 purchase orders a day to the right approver, following finance policy with hard amount thresholds. Auditors need to reconstruct any decision months later. Before any code, help me draw the line between what has to be deterministic and what genuinely needs a model — and ask me what should happen at the two ends of the amount range, because I don't think it's the same behaviour.",
    it: "Voglio instradare una quarantina di ordini di acquisto al giorno verso il giusto approvatore, seguendo la policy amministrativa con soglie di importo rigide. I revisori devono poter ricostruire qualsiasi decisione mesi dopo. Prima di scrivere codice, aiutami a tracciare il confine fra ciò che deve essere deterministico e ciò che ha davvero bisogno di un model, e chiedimi cosa dovrebbe succedere ai due estremi della scala di importi, perché non credo sia lo stesso comportamento.",
  },
};
