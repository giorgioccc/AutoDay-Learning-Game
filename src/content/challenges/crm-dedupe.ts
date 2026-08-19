import type { Challenge } from "../types";

export const crmDedupe: Challenge = {
  id: "crm-dedupe",
  mode: "deep",
  level: "intermediate",
  category: "data-research",
  estimatedMinutes: 240,
  title: {
    en: "Twelve Thousand Contacts, Some of Them Twice",
    it: "Dodicimila contatti, alcuni due volte",
  },
  scenario: {
    en: "Ten years of imports, trade-show scans and hand-typed entries have left Stefano with a CRM of twelve thousand contacts in which nobody trusts a count of anything. Maria Rossi is in there four times with three email addresses and two spellings of her employer, and the sales team has started keeping their own spreadsheet.",
    it: "Dieci anni di importazioni, scansioni di biglietti da visita in fiera e inserimenti a mano hanno lasciato a Stefano un CRM di dodicimila contatti in cui nessuno si fida di nessun conteggio. Maria Rossi c'è quattro volte con tre indirizzi email e due grafie dell'azienda, e il commerciale ha iniziato a tenersi un foglio di calcolo suo.",
  },
  constraints: [
    {
      en: "Twelve thousand records is seventy-two million pairs. Asking a model about each pair is not an expensive plan, it is not a plan.",
      it: "Dodicimila record fanno settantadue milioni di coppie. Chiedere a un model di ogni coppia non è un piano costoso: non è un piano.",
    },
    {
      en: "Merging two people who are not the same person destroys history that cannot be reconstructed afterwards.",
      it: "Fondere due persone che non sono la stessa persona distrugge uno storico che poi non si può ricostruire.",
    },
    {
      en: "Some people are legitimately in there twice — the same person at two companies, or in two roles — and collapsing those is also wrong.",
      it: "Alcune persone ci sono legittimamente due volte — la stessa persona in due aziende, o con due ruoli — e accorparle è altrettanto sbagliato.",
    },
    {
      en: "The hardest duplicates share almost no text: a changed surname and a new email address at a new employer.",
      it: "I duplicati più difficili non condividono quasi nessun testo: un cognome cambiato e una nuova email presso un nuovo datore di lavoro.",
    },
  ],
  nudge: {
    en: "\"Are these two the same person\" is an expensive question and \"could these two conceivably be the same person\" is nearly free. You can afford to ask the expensive one a few thousand times, so everything depends on what asks it.",
    it: "«Queste due sono la stessa persona?» è una domanda costosa e «queste due potrebbero anche solo lontanamente essere la stessa persona?» è quasi gratis. Puoi permetterti di fare quella costosa qualche migliaio di volte, quindi tutto dipende da cosa la fa scattare.",
  },
  approach: {
    summary: {
      en: "Cheap deterministic candidate generation first, a model only as the adjudicator of the genuinely ambiguous pairs, and merges represented as reversible links rather than destruction.",
      it: "Prima una generazione di candidati deterministica ed economica, il model solo come arbitro delle coppie davvero ambigue, e le fusioni rappresentate come collegamenti reversibili invece che come distruzione.",
    },
    steps: [
      {
        en: "Partition the records with cheap keys computed in the database — shared email domain and surname, normalised phone number, the same company. The model must never see a pair that has nothing whatsoever in common.",
        it: "Partiziona i record con chiavi economiche calcolate nel database: dominio email e cognome condivisi, numero di telefono normalizzato, stessa azienda. Il model non deve mai vedere una coppia che non ha assolutamente nulla in comune.",
      },
      {
        en: "Resolve the easy cases without a model at all. Identical normalised email is a duplicate, and paying for a judgement on it is waste.",
        it: "Risolvi i casi facili senza alcun model. Email identica una volta normalizzata significa duplicato, e pagare per un giudizio su quello è spreco.",
      },
      {
        en: "Send only the surviving ambiguous pairs for adjudication, with a three-way verdict — same, different, cannot tell — and a written reason. The third value is the one that keeps the system safe.",
        it: "Manda in giudizio solo le coppie ambigue sopravvissute, con un verdetto a tre valori — stessa persona, persone diverse, non determinabile — e una motivazione scritta. È il terzo valore a tenere il sistema al sicuro.",
      },
      {
        en: "Never merge destructively. Represent the decision as a link between records that can be cut, so a wrong call is a five-minute correction rather than an unrecoverable loss.",
        it: "Non fondere mai in modo distruttivo. Rappresenta la decisione come un collegamento fra record che si può tagliare, così una decisione sbagliata è una correzione di cinque minuti invece di una perdita irrecuperabile.",
      },
      {
        en: "Build the evaluation set out of hard cases on purpose: father and son at the same company, two people with the same common name, one person who changed jobs. Random pairs are almost all trivially different and will flatter any system.",
        it: "Costruisci l'insieme di valutazione apposta con i casi difficili: padre e figlio nella stessa azienda, due persone con lo stesso nome comune, una persona che ha cambiato lavoro. Le coppie casuali sono quasi tutte banalmente diverse e faranno bella figura a qualsiasi sistema.",
      },
      {
        en: "Sample what the candidate generation excluded and check it by hand. Everything the blocking step throws away is invisible to every downstream measurement you will take.",
        it: "Campiona ciò che la generazione dei candidati ha escluso e controllalo a mano. Tutto ciò che il passo di partizionamento butta via è invisibile a ogni misurazione che farai a valle.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Any design that compares each record against every other one grows with the square of the table. It works beautifully on the two hundred rows you tested with and is unaffordable at twelve thousand, and the cost is not in the model, it is in how many times you call it.",
      it: "Qualsiasi design che confronti ogni record con tutti gli altri cresce col quadrato della tabella. Funziona benissimo sulle duecento righe con cui hai fatto le prove ed è insostenibile a dodicimila, e il costo non è nel model: è in quante volte lo chiami.",
    },
    {
      en: "A destructive merge of two real people. The activity history of both is now one history belonging to neither, and there is no version of the data that can undo it.",
      it: "Una fusione distruttiva di due persone reali. Lo storico di attività di entrambe è adesso un unico storico che non appartiene a nessuna delle due, e non esiste una versione dei dati che possa annullarlo.",
    },
    {
      en: "Measuring accuracy on randomly sampled pairs. Since almost every random pair is obviously two different people, a system that answers \"different\" to everything scores above 99.9% and finds nothing.",
      it: "Misurare l'accuratezza su coppie campionate a caso. Siccome quasi ogni coppia casuale è ovviamente composta da due persone diverse, un sistema che risponde sempre «diverse» supera il 99,9% e non trova niente.",
    },
    {
      en: "Blocking keys that quietly exclude the duplicates you most want. Group by employer and you have guaranteed you will never find the person who changed jobs, which is the case that made the sales team stop trusting the CRM.",
      it: "Chiavi di partizionamento che escludono in silenzio proprio i duplicati che ti interessano di più. Se raggruppi per azienda hai la garanzia di non trovare mai la persona che ha cambiato lavoro, che è il caso per cui il commerciale ha smesso di fidarsi del CRM.",
    },
  ],
  starterPrompt: {
    en: "I need to find duplicate people in a 12,000-contact CRM. Comparing every pair is 72 million comparisons, merges are destructive, and the hardest duplicates share hardly any text. Before we design anything, help me think about what cheap test could decide which pairs are even worth asking about — and what I'd need to check about that cheap test to trust it.",
    it: "Devo trovare i duplicati fra le persone in un CRM da 12.000 contatti. Confrontare tutte le coppie sono 72 milioni di confronti, le fusioni sono distruttive, e i duplicati più difficili non condividono quasi nessun testo. Prima di progettare qualsiasi cosa, aiutami a ragionare su quale test economico possa decidere quali coppie valga anche solo la pena di esaminare, e cosa dovrei verificare di quel test economico per fidarmene.",
  },
};
