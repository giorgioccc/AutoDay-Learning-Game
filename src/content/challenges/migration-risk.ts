import type { Challenge } from "../types";

export const migrationRisk: Challenge = {
  id: "migration-risk",
  mode: "deep",
  level: "advanced",
  category: "software-dev",
  estimatedMinutes: 300,
  title: {
    en: "It Was Fine on My Laptop",
    it: "Sul mio portatile andava",
  },
  scenario: {
    en: "Every schema migration in Vera's company goes past her before it ships. She reads the file, thinks about it, and approves it. She has been wrong twice: once a column addition that locked a table for four minutes at lunchtime, and once an index build that quietly saturated the replica everything reads from.",
    it: "Ogni migrazione di schema in azienda passa da Vera prima di andare in produzione. Legge il file, ci ragiona, e approva. Ha sbagliato due volte: una volta con l'aggiunta di una colonna che ha bloccato una tabella per quattro minuti all'ora di pranzo, e una volta con la costruzione di un indice che ha saturato in silenzio la replica da cui legge tutto.",
  },
  constraints: [
    {
      en: "The migration file states what it does. It says nothing whatsoever about the table it does it to.",
      it: "Il file di migrazione dichiara cosa fa. Non dice assolutamente nulla sulla tabella su cui lo fa.",
    },
    {
      en: "The same statement is harmless on ten thousand rows and an outage on fifty million.",
      it: "La stessa istruzione è innocua su diecimila righe ed è un disservizio su cinquanta milioni.",
    },
    {
      en: "Whether it hurts depends on what else is happening: what holds locks, how replication is configured, whether a long transaction is open on another connection.",
      it: "Che faccia danni o no dipende da cos'altro sta succedendo: cosa tiene i lock, com'è configurata la replica, se c'è una transazione lunga aperta su un'altra connessione.",
    },
    {
      en: "The check has to run before merge, on a machine that must not be able to touch production.",
      it: "Il controllo deve girare prima del merge, su una macchina che non deve poter toccare la produzione.",
    },
  ],
  nudge: {
    en: "The file in front of you does not contain the thing that decides whether it is safe. Find out where that information lives, and then work out whether you are allowed to go and get it.",
    it: "Il file che hai davanti non contiene ciò che decide se è sicuro. Scopri dove vive quell'informazione, e poi capisci se ti è permesso andarla a prendere.",
  },
  approach: {
    summary: {
      en: "Join the statement with the shape of its target and the way migrations are applied here, and keep the hazard knowledge in a maintained table rather than in the model.",
      it: "Unisci l'istruzione alla forma del suo bersaglio e al modo in cui qui vengono applicate le migrazioni, e tieni la conoscenza dei rischi in una tabella mantenuta invece che nel model.",
    },
    steps: [
      {
        en: "Use the model to classify the statement into operation kinds — adding a nullable column, adding a constraint, building an index, rewriting a table — and stop there. What each kind costs is a fact about your database and version, not something to ask a model.",
        it: "Usa il model per classificare l'istruzione in tipi di operazione — aggiunta di una colonna nullable, aggiunta di un vincolo, costruzione di un indice, riscrittura di una tabella — e fermati lì. Cosa costa ogni tipo è un fatto sul tuo database e sulla sua versione, non qualcosa da chiedere a un model.",
      },
      {
        en: "Keep the hazard consequences in a table you maintain, versioned against the database version you actually run. This is the part that has to be right, and it is the part a model is most confidently wrong about.",
        it: "Tieni le conseguenze di ogni rischio in una tabella che mantieni tu, versionata rispetto alla versione di database che fai girare davvero. È la parte che dev'essere giusta, ed è la parte su cui un model sbaglia con più sicurezza.",
      },
      {
        en: "Get the target's shape from a nightly snapshot of production statistics — row counts, index sizes, write rates — so the check has the decisive input without the reviewing machine being able to reach production.",
        it: "Prendi la forma del bersaglio da uno snapshot notturno delle statistiche di produzione — conteggi di righe, dimensioni degli indici, tassi di scrittura — così che il controllo abbia l'input decisivo senza che la macchina che revisiona possa raggiungere la produzione.",
      },
      {
        en: "Include how migrations are applied as a third input: whether there is a lock timeout, whether it runs inside one transaction, what happens on failure. The same statement is safe with a timeout and dangerous without one.",
        it: "Includi come vengono applicate le migrazioni come terzo input: se c'è un timeout sui lock, se gira dentro un'unica transazione, cosa succede in caso di errore. La stessa istruzione è sicura con un timeout e pericolosa senza.",
      },
      {
        en: "Output the specific hazard, the number that makes it a hazard on this table, and the change that would make it safe. Never a score.",
        it: "Restituisci il rischio specifico, il numero che lo rende un rischio su quella tabella, e la modifica che lo renderebbe sicuro. Mai un punteggio.",
      },
      {
        en: "Validate the whole thing against the migrations that caused real incidents. A risk checker that has never been tested against a real outage is a style guide with opinions.",
        it: "Valida il tutto contro le migrazioni che hanno causato incidenti veri. Un controllore di rischio mai messo alla prova contro un disservizio reale è una guida di stile con delle opinioni.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The statement that is instant on a developer's laptop and takes an exclusive lock on fifty million rows. Everything about the file looks fine, every test passes, and the failure only exists at a scale nothing in the pipeline has ever seen.",
      it: "L'istruzione istantanea sul portatile di uno sviluppatore che prende un lock esclusivo su cinquanta milioni di righe. Nel file sembra tutto a posto, ogni test passa, e il guasto esiste solo a una scala che nella pipeline non è mai stata vista.",
    },
    {
      en: "Hazard knowledge taken from the model's priors. Locking behaviour depends on the exact engine and version, it changes between releases, and a model will describe the behaviour of three versions ago in perfectly confident prose.",
      it: "Conoscenza dei rischi presa dalle nozioni pregresse del model. Il comportamento dei lock dipende dal motore e dalla versione esatti, cambia fra un rilascio e l'altro, e un model descriverà il comportamento di tre versioni fa in una prosa perfettamente sicura di sé.",
    },
    {
      en: "Collapsing everything into a risk score. \"Medium\" gets approved every time, because everything that is not obviously catastrophic is medium, and the label ends up carrying no decision at all.",
      it: "Ridurre tutto a un punteggio di rischio. Il «medio» viene approvato ogni volta, perché tutto ciò che non è palesemente catastrofico è medio, e l'etichetta finisce per non portare nessuna decisione.",
    },
    {
      en: "Judging the migration in isolation from how it is applied. The review passes something that is only safe under a lock timeout that this deployment path does not set.",
      it: "Giudicare la migrazione a prescindere da come viene applicata. La revisione fa passare qualcosa che è sicuro solo con un timeout sui lock che questo percorso di rilascio non imposta.",
    },
  ],
  starterPrompt: {
    en: "I want to assess schema migrations for production risk before merge, on a CI machine that must not be able to reach production. The migration file alone can't tell you if it's safe — that depends on table size and what else is running. Help me work out what inputs this needs besides the SQL, and where they could safely come from.",
    it: "Voglio valutare il rischio in produzione delle migrazioni di schema prima del merge, su una macchina di CI che non deve poter raggiungere la produzione. Il file di migrazione da solo non può dire se è sicuro: dipende dalla dimensione della tabella e da cos'altro sta girando. Aiutami a capire quali input servono oltre all'SQL, e da dove potrebbero arrivare in sicurezza.",
  },
};
