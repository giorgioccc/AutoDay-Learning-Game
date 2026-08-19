import type { Challenge } from "../types";

export const csvCleaning: Challenge = {
  id: "csv-cleaning",
  mode: "quick",
  level: "beginner",
  category: "data-research",
  estimatedMinutes: 45,
  title: {
    en: "The Monday File",
    it: "Il file del lunedì",
  },
  scenario: {
    en: "Every Monday a partner emails Luca an export of about four thousand rows. Dates come in three formats, amounts sometimes use a comma and sometimes a full stop, and the status column contains nine different spellings of three actual states. He fixes it by hand, uploads it, and the downstream system rejects the entire file if a single row is wrong.",
    it: "Ogni lunedì un partner manda a Luca via email un export di circa quattromila righe. Le date arrivano in tre formati, gli importi a volte usano la virgola e a volte il punto, e la colonna stato contiene nove grafie diverse di tre stati reali. Lui sistema tutto a mano, carica il file, e il sistema a valle rifiuta l'intero file se una sola riga è sbagliata.",
  },
  constraints: [
    {
      en: "It is the same file every week until one week it is not, and nobody tells him when that week has arrived.",
      it: "È lo stesso file ogni settimana finché una settimana non lo è più, e nessuno gli dice quando è arrivata quella settimana.",
    },
    {
      en: "One bad row rejects the whole upload, so a fix that handles 98% of rows has fixed nothing.",
      it: "Una riga sbagliata fa rifiutare tutto il caricamento, quindi una correzione che gestisce il 98% delle righe non ha corretto niente.",
    },
    {
      en: "Some rows are genuinely ambiguous. 03/04/2026 is two different dates and the row itself does not say which.",
      it: "Alcune righe sono davvero ambigue. 03/04/2026 sono due date diverse e la riga in sé non dice quale.",
    },
    {
      en: "Luca cannot get the partner to change their export. He has asked.",
      it: "Luca non può convincere il partner a cambiare il proprio export. Ci ha già provato.",
    },
  ],
  nudge: {
    en: "There are two different things in this file: rows that are messy in a way you have seen before, and rows that are messy in a new way. Only one of those needs a model, and it is not the one making up almost all of the volume.",
    it: "In questo file ci sono due cose diverse: righe sporche in un modo che hai già visto, e righe sporche in un modo nuovo. Solo una delle due ha bisogno di un model, e non è quella che costituisce quasi tutto il volume.",
  },
  approach: {
    summary: {
      en: "Deterministic rules do the known work, a model only sees the residue it could not parse, and every confirmed resolution becomes a new rule.",
      it: "Le regole deterministiche fanno il lavoro noto, il model vede solo il residuo che non è riuscito a interpretare, e ogni risoluzione confermata diventa una nuova regola.",
    },
    steps: [
      {
        en: "Write parsers for the messes you already know about. They are free, they are testable, and they do not change their mind between Mondays.",
        it: "Scrivi dei parser per le sporcizie che già conosci. Sono gratis, sono testabili, e non cambiano idea da un lunedì all'altro.",
      },
      {
        en: "Send only the rows those parsers rejected to a model, and have it return a proposed interpretation with the reason, not a cleaned value dropped silently into the output.",
        it: "Manda al model solo le righe che quei parser hanno rifiutato, e fagli restituire un'interpretazione proposta con la motivazione, non un valore ripulito infilato in silenzio nell'output.",
      },
      {
        en: "Resolve ambiguity from the file rather than from the row. If some dates in the same column are unambiguous, they settle the format for all of them; if nothing in the file settles it, the row is escalated, never guessed.",
        it: "Risolvi l'ambiguità a partire dal file, non dalla riga. Se alcune date nella stessa colonna sono non ambigue, decidono il formato per tutte; se niente nel file lo decide, la riga viene escalata, mai indovinata.",
      },
      {
        en: "Check the header shape before touching any rows, and stop the run on a new, renamed or reordered column rather than coercing it into the closest match.",
        it: "Verifica la forma dell'intestazione prima di toccare qualsiasi riga, e blocca l'esecuzione davanti a una colonna nuova, rinominata o spostata, invece di forzarla nella corrispondenza più vicina.",
      },
      {
        en: "Turn every model resolution Luca confirms into a deterministic rule. If that loop does not exist the residue is the same size in a year, and you are paying a model weekly to re-solve the same problem.",
        it: "Trasforma ogni risoluzione del model che Luca conferma in una regola deterministica. Se quel ciclo non esiste, fra un anno il residuo è grande uguale, e stai pagando un model ogni settimana per risolvere di nuovo lo stesso problema.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The partner changes their export and a tolerant pipeline absorbs it. Nothing errors, the numbers stay plausible, and the meaning of a column has quietly changed — which is far worse than the upload failing.",
      it: "Il partner cambia il proprio export e una pipeline tollerante lo assorbe. Niente va in errore, i numeri restano plausibili, e il significato di una colonna è cambiato in silenzio — che è molto peggio di un caricamento fallito.",
    },
    {
      en: "Day-and-month ambiguity resolved confidently and consistently in the wrong direction. Every row validates, every date is a real date, and the whole file is shifted by months.",
      it: "L'ambiguità fra giorno e mese risolta con sicurezza e coerenza nella direzione sbagliata. Ogni riga passa la validazione, ogni data è una data vera, e tutto il file è spostato di mesi.",
    },
    {
      en: "Running the model over all four thousand rows to solve a problem that exists in forty of them, weekly, forever.",
      it: "Far girare il model su tutte e quattromila le righe per risolvere un problema che riguarda quaranta righe, ogni settimana, per sempre.",
    },
  ],
  starterPrompt: {
    en: "I clean the same ~4,000-row partner CSV every Monday: three date formats, mixed decimal separators, nine spellings of three statuses. One bad row rejects the whole upload. Ask me which of these messes I already know how to handle deterministically, and what I want to happen when a column I've never seen shows up — then help me design where the boundary sits.",
    it: "Ogni lunedì ripulisco lo stesso CSV di un partner da ~4.000 righe: tre formati di data, separatori decimali misti, nove grafie di tre stati. Una riga sbagliata fa rifiutare tutto il caricamento. Chiedimi quali di queste sporcizie so già gestire in modo deterministico, e cosa voglio che succeda quando compare una colonna che non ho mai visto: poi aiutami a progettare dove sta il confine.",
  },
};
