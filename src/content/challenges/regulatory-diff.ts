import type { Challenge } from "../types";

export const regulatoryDiff: Challenge = {
  id: "regulatory-diff",
  mode: "deep",
  level: "intermediate",
  category: "data-research",
  estimatedMinutes: 240,
  title: {
    en: "A Hundred and Eighty Pages, Reissued",
    it: "Centottanta pagine, riemesse",
  },
  scenario: {
    en: "The regulation Sanne's company operates under has been reissued. A hundred and eighty pages, most of it identical to last year, and somewhere inside it a handful of changes that alter what the company is obliged to do. Outside counsel will have read it in six weeks. The product team ships on Thursday.",
    it: "La normativa a cui è soggetta l'azienda di Sanne è stata riemessa. Centottanta pagine, quasi tutte identiche all'anno scorso, e da qualche parte lì dentro una manciata di modifiche che cambiano ciò che l'azienda è obbligata a fare. I legali esterni l'avranno letta fra sei settimane. Il team di prodotto rilascia giovedì.",
  },
  constraints: [
    {
      en: "Almost every difference between the two versions is renumbering, reformatting or a moved paragraph. The changes that matter are a handful, and they look the same in a diff.",
      it: "Quasi ogni differenza fra le due versioni è una rinumerazione, una riformattazione o un paragrafo spostato. Le modifiche che contano sono una manciata, e in un confronto testuale hanno lo stesso aspetto.",
    },
    {
      en: "What changed in the text is not the question. The question is whether it changes anything about what this company already does.",
      it: "Cosa è cambiato nel testo non è la domanda. La domanda è se cambia qualcosa in ciò che questa azienda già fa.",
    },
    {
      en: "A removed obligation matters as much as a new one, and there is nothing on the page to draw your eye to text that is no longer there.",
      it: "Un obbligo rimosso conta quanto uno nuovo, e sulla pagina non c'è nulla che attiri l'occhio su un testo che non c'è più.",
    },
    {
      en: "Engineers will read the output. If it reads like a legal opinion it will be treated as one, and nobody at the company is qualified to give it.",
      it: "L'output lo leggeranno degli ingegneri. Se si legge come un parere legale verrà trattato come tale, e in azienda nessuno è qualificato per darne uno.",
    },
  ],
  nudge: {
    en: "Comparing the two documents answers a question nobody asked. The question is what a change means for a specific set of things this company already does — which means half the necessary input is not the regulation at all.",
    it: "Confrontare i due documenti risponde a una domanda che nessuno ha posto. La domanda è cosa comporta una modifica per un insieme preciso di cose che questa azienda già fa — il che significa che metà dell'input necessario non è affatto la normativa.",
  },
  approach: {
    summary: {
      en: "Find the differences structurally, use the model only to judge significance and impact, and require an inventory of current obligations as the second input.",
      it: "Trova le differenze in modo strutturale, usa il model solo per giudicarne la rilevanza e l'impatto, e richiedi come secondo input un inventario degli obblighi attuali.",
    },
    steps: [
      {
        en: "Align the two versions and locate the textual differences outside the model. Asking a model to find changes in a hundred and eighty pages is asking it to do the one part that is already solved reliably.",
        it: "Allinea le due versioni e individua le differenze testuali fuori dal model. Chiedere a un model di trovare le modifiche in centottanta pagine significa chiedergli l'unica parte che è già risolta in modo affidabile.",
      },
      {
        en: "Classify each difference as editorial, clarifying or substantive, with the before and after text quoted. Only the third kind goes any further, and this triage is where most of the value is.",
        it: "Classifica ogni differenza come redazionale, chiarificatrice o sostanziale, citando il testo prima e dopo. Solo il terzo tipo prosegue, ed è in questa selezione che sta gran parte del valore.",
      },
      {
        en: "Build the second input: a written inventory of what the company currently does about this regulation — the controls, the processes, who owns them. Without it there is no question to ask, only a summary to produce.",
        it: "Costruisci il secondo input: un inventario scritto di ciò che l'azienda fa oggi rispetto a questa normativa — i controlli, i processi, chi ne è responsabile. Senza, non c'è una domanda da porre: c'è solo un riassunto da produrre.",
      },
      {
        en: "Pair each substantive change against the controls it touches. The changes that pair with nothing are the most interesting output of the whole exercise and must be surfaced, not dropped as unmatched.",
        it: "Abbina ogni modifica sostanziale ai controlli che tocca. Le modifiche che non si abbinano a niente sono l'output più interessante di tutto l'esercizio e vanno messe in evidenza, non scartate come non corrisposte.",
      },
      {
        en: "Diff in both directions explicitly, so that deleted requirements are found by the same mechanism as added ones rather than by someone noticing an absence.",
        it: "Confronta esplicitamente nelle due direzioni, così che i requisiti eliminati vengano trovati dallo stesso meccanismo di quelli aggiunti, e non perché qualcuno nota un'assenza.",
      },
      {
        en: "Shape the output as questions for counsel with the quoted text attached, never as conclusions. The format is what stops an internal document from silently becoming the company's compliance position.",
        it: "Dai all'output la forma di domande per i legali con il testo citato allegato, mai di conclusioni. È il formato a impedire che un documento interno diventi in silenzio la posizione di conformità dell'azienda.",
      },
    ],
  },
  pitfalls: [
    {
      en: "\"Shall\" becoming \"should\", or an exemption widening by one word, summarised as a minor wording change. That distinction is the entire subject matter, and it is exactly the kind of thing a fluent summary smooths over.",
      it: "Un «deve» che diventa «dovrebbe», o un'esenzione che si allarga di una parola, riassunti come una modifica marginale di formulazione. Quella distinzione è tutta la materia, ed è esattamente il tipo di cosa che un riassunto scorrevole appiattisce.",
    },
    {
      en: "Reporting the raw differences. Four hundred renumbering changes and six real ones, presented as one list, is a document nobody reads to the end — and the six are not at the top.",
      it: "Riportare le differenze grezze. Quattrocento modifiche di rinumerazione e sei reali, presentate in un'unica lista, sono un documento che nessuno legge fino in fondo, e le sei non stanno in cima.",
    },
    {
      en: "Deleted obligations going unnoticed. Every instinct in a summarising system is to describe what is present, and a requirement that has been removed leaves no text to describe.",
      it: "Gli obblighi eliminati che passano inosservati. Ogni istinto di un sistema che riassume è descrivere ciò che c'è, e un requisito rimosso non lascia testo da descrivere.",
    },
    {
      en: "An output phrased as a verdict becomes the company's position by default, because the alternative is that somebody re-reads a hundred and eighty pages and nobody is going to.",
      it: "Un output formulato come verdetto diventa la posizione dell'azienda per default, perché l'alternativa è che qualcuno si rilegga centottanta pagine, e nessuno lo farà.",
    },
  ],
  starterPrompt: {
    en: "A 180-page regulation we're subject to has been reissued and I need to know what it changes for us before legal gets to it. Most differences are renumbering. Before we start, help me think about what second input this needs besides the two documents — I don't think \"what changed\" is answerable in a useful way without it.",
    it: "Una normativa di 180 pagine a cui siamo soggetti è stata riemessa e devo sapere cosa cambia per noi prima che ci arrivino i legali. Quasi tutte le differenze sono rinumerazioni. Prima di iniziare, aiutami a ragionare su quale secondo input serve oltre ai due documenti: non credo che «cosa è cambiato» sia una domanda a cui si possa rispondere in modo utile senza.",
  },
};
