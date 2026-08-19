import type { Challenge } from "../types";

export const pdfTableExtract: Challenge = {
  id: "pdf-table-extract",
  mode: "quick",
  level: "intermediate",
  category: "data-research",
  estimatedMinutes: 45,
  title: {
    en: "Sixty Price Lists, Sixty Layouts",
    it: "Sessanta listini, sessanta layout",
  },
  scenario: {
    en: "Every quarter Giacomo receives about sixty supplier price lists as PDFs and has to turn them into one comparison table. No two suppliers use the same layout, three of them send scans of printouts, and one has quietly moved a column since last quarter. He does it by hand over four days and the buying decisions rest on the result.",
    it: "Ogni trimestre Giacomo riceve una sessantina di listini fornitori in PDF e deve trasformarli in un'unica tabella di confronto. Non ci sono due fornitori che usino lo stesso layout, tre mandano scansioni di stampe, e uno ha spostato una colonna dall'ultimo trimestre senza dirlo. Lo fa a mano in quattro giorni e le decisioni di acquisto poggiano su quel risultato.",
  },
  constraints: [
    {
      en: "Layouts differ per supplier and change between quarters without anybody announcing it.",
      it: "I layout cambiano da fornitore a fornitore e cambiano fra un trimestre e l'altro senza che nessuno lo annunci.",
    },
    {
      en: "Some are proper text PDFs, some are photographs of paper, and several have merged cells and headers that span two rows.",
      it: "Alcuni sono veri PDF testuali, altri fotografie di carta, e diversi hanno celle unite e intestazioni che occupano due righe.",
    },
    {
      en: "Prices are quoted in different units — per kilo, per hundred, per pallet — and the unit is sometimes only stated in a footnote.",
      it: "I prezzi sono espressi in unità diverse — al chilo, per cento pezzi, a pallet — e a volte l'unità è indicata solo in una nota a piè di pagina.",
    },
    {
      en: "A wrong price is a wrong purchase, and a wrong price in a table looks exactly like a right one.",
      it: "Un prezzo sbagliato è un acquisto sbagliato, e un prezzo sbagliato in tabella è identico a uno giusto.",
    },
  ],
  nudge: {
    en: "Whatever this produces will be a neat table, including when it is wrong. Ask what you would be able to see, looking only at the finished table, that told you a row had gone astray.",
    it: "Qualunque cosa produca sarà una tabella ordinata, anche quando è sbagliata. Chiediti cosa potresti vedere, guardando solo la tabella finita, che ti dica che una riga è andata storta.",
  },
  approach: {
    summary: {
      en: "Extract into a typed row schema that keeps the unit as data and the source location as provenance, then validate structurally and refuse rather than adapt when a layout shifts.",
      it: "Estrai in uno schema di riga tipizzato che tiene l'unità come dato e la posizione d'origine come provenienza, poi valida strutturalmente e rifiutati di procedere, invece di adattarti, quando un layout cambia.",
    },
    steps: [
      {
        en: "Define one target row schema for all suppliers, with the unit as a required field. Never let a unit conversion happen inside the extraction — extract what it says, convert in code.",
        it: "Definisci un unico schema di riga di destinazione per tutti i fornitori, con l'unità come campo obbligatorio. Non lasciare mai che una conversione di unità avvenga dentro l'estrazione: estrai ciò che c'è scritto, converti nel codice.",
      },
      {
        en: "Carry provenance on every row — which file, which page, roughly where — so any number in the final table can be traced back to a place a human can look at in five seconds.",
        it: "Porta la provenienza su ogni riga — quale file, quale pagina, più o meno dove — così che qualsiasi numero nella tabella finale sia riconducibile a un punto che una persona può guardare in cinque secondi.",
      },
      {
        en: "Assert the expected header shape per supplier before extracting the body. When it does not match, stop the file with a loud error instead of extracting whatever seems closest.",
        it: "Verifica la forma attesa dell'intestazione per ogni fornitore prima di estrarre il corpo. Quando non corrisponde, blocca il file con un errore rumoroso invece di estrarre ciò che sembra più simile.",
      },
      {
        en: "Validate the result against things you already know: how many rows the document appears to have, whether each price is within a plausible factor of last quarter's, whether required columns are ever null.",
        it: "Valida il risultato contro cose che già sai: quante righe sembra avere il documento, se ogni prezzo sta entro un fattore plausibile rispetto al trimestre scorso, se le colonne obbligatorie sono mai vuote.",
      },
      {
        en: "Review a sample by hand and use it to estimate the error rate, rather than reviewing everything. Knowing the rate is what tells you whether the table can be trusted; re-reading all sixty files is just doing the job again.",
        it: "Rivedi un campione a mano e usalo per stimare il tasso di errore, invece di rivedere tutto. Conoscere il tasso è ciò che ti dice se la tabella è affidabile; rileggere tutti e sessanta i file è solo rifare il lavoro.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A merged header cell shifts a column by one and every price in that file is now attached to the neighbouring product. Each row is individually plausible, the totals look sane, and there is nothing on the surface of the output to catch.",
      it: "Una cella di intestazione unita sposta una colonna di uno, e ogni prezzo di quel file finisce attaccato al prodotto vicino. Ogni riga presa da sola è plausibile, i totali sembrano sensati, e in superficie non c'è niente da notare nell'output.",
    },
    {
      en: "Rows that quietly do not come out. Forty rows on the page, thirty-eight in the output, and nothing anywhere is comparing those two numbers.",
      it: "Righe che semplicemente non escono. Quaranta righe sulla pagina, trentotto nell'output, e da nessuna parte c'è qualcosa che confronti quei due numeri.",
    },
    {
      en: "Unit normalisation folded into the extraction. A price per hundred read as a price per unit is off by two orders of magnitude, which is either instantly obvious or, if the products are cheap, not obvious at all.",
      it: "La normalizzazione delle unità infilata dentro l'estrazione. Un prezzo per cento pezzi letto come prezzo unitario è sbagliato di due ordini di grandezza, il che o è immediatamente evidente o, se i prodotti costano poco, non è evidente per niente.",
    },
    {
      en: "A supplier redesigns their template and a tolerant pipeline keeps producing output. Nothing fails, the table fills up, and the failure is discovered by a buyer at a negotiation.",
      it: "Un fornitore ridisegna il proprio modello e una pipeline tollerante continua a produrre output. Niente va in errore, la tabella si riempie, e il guasto lo scopre un buyer durante una trattativa.",
    },
  ],
  starterPrompt: {
    en: "I need to turn ~60 supplier price-list PDFs with inconsistent layouts into one comparison table each quarter. Some are scans, units vary, and layouts change without warning. Before we build the extraction, help me work out what checks could run on the finished table to catch a row that came out wrong — I think that matters more here than the extraction prompt does.",
    it: "Devo trasformare ogni trimestre una sessantina di listini fornitori in PDF con layout incoerenti in un'unica tabella di confronto. Alcuni sono scansioni, le unità variano, e i layout cambiano senza preavviso. Prima di costruire l'estrazione, aiutami a capire quali controlli potrebbero girare sulla tabella finita per intercettare una riga uscita male: credo conti più del prompt di estrazione.",
  },
};
