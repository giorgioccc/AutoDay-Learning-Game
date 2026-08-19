import type { Challenge } from "../types";

export const prFirstPass: Challenge = {
  id: "pr-first-pass",
  mode: "deep",
  level: "intermediate",
  category: "software-dev",
  estimatedMinutes: 240,
  title: {
    en: "The First Pass on Thirty Pull Requests",
    it: "Il primo giro su trenta pull request",
  },
  scenario: {
    en: "Tobias's team of six opens about thirty pull requests a week and each one waits a day and a half for a first look. When the review finally arrives it is usually the same six comments: a missing test, an unhandled error path, a name that does not match the rest of the file. Nobody enjoys writing those comments and nobody enjoys waiting for them.",
    it: "Il team di sei persone di Tobias apre circa trenta pull request a settimana e ognuna aspetta un giorno e mezzo prima di un primo sguardo. Quando la revisione finalmente arriva, sono quasi sempre gli stessi sei commenti: un test che manca, un percorso d'errore non gestito, un nome che non è coerente col resto del file. A nessuno piace scrivere quei commenti e a nessuno piace aspettarli.",
  },
  constraints: [
    {
      en: "A wrong review comment costs more than a missing one. The author has to disprove it, in writing, where the whole team can see.",
      it: "Un commento di revisione sbagliato costa più di uno mancante. Chi ha scritto il codice deve smentirlo, per iscritto, davanti a tutto il team.",
    },
    {
      en: "A diff shows what changed, not what it changed. Half of what makes a review comment right is in the code around the hunk.",
      it: "Un diff mostra cosa è cambiato, non cosa ha cambiato. Metà di ciò che rende giusto un commento di revisione sta nel codice attorno alla porzione modificata.",
    },
    {
      en: "Comment on everything and people stop reading. Fifteen nitpicks with one real problem among them is the same as no real problem.",
      it: "Se commenta tutto, le persone smettono di leggere. Quindici pignolerie con dentro un problema vero equivalgono a nessun problema vero.",
    },
    {
      en: "Several of the six recurring comments are things a linter could state as a rule, exactly and for free.",
      it: "Diversi dei sei commenti ricorrenti sono cose che un linter potrebbe enunciare come regola, in modo esatto e gratuito.",
    },
  ],
  nudge: {
    en: "Every comment this posts is public and costs a colleague time to answer. Put a price on that, and you have derived how certain it needs to be before it is allowed to say anything at all.",
    it: "Ogni commento che pubblica è pubblico e costa a un collega il tempo di rispondere. Metti un prezzo su questo, e avrai ricavato quanto dev'essere certo prima di poter dire qualcosa.",
  },
  approach: {
    summary: {
      en: "Move the deterministic comments to a linter, give the model a narrow remit with real context, and band what it is allowed to say publicly by confidence.",
      it: "Sposta i commenti deterministici in un linter, dai al model un mandato stretto con contesto vero, e gradua per confidenza ciò che gli è permesso dire in pubblico.",
    },
    steps: [
      {
        en: "Categorise a month of real review comments before writing anything. The ones a rule could state belong in a linter, where they are exact, instant and never wrong.",
        it: "Classifica un mese di commenti di revisione reali prima di scrivere qualsiasi cosa. Quelli che una regola può enunciare vanno in un linter, dove sono esatti, istantanei e mai sbagliati.",
      },
      {
        en: "Send the diff together with the definitions it touches and the file it sits in. A model reviewing a hunk in isolation will flag things that are handled four lines above it, and that is the largest source of wrong comments.",
        it: "Manda il diff insieme alle definizioni che tocca e al file in cui si trova. Un model che rivede una porzione isolata segnalerà cose che sono già gestite quattro righe sopra, ed è quella la principale fonte di commenti sbagliati.",
      },
      {
        en: "Restrict the remit to a small number of things it can genuinely do well — a new code path with no error handling, a test that does not exercise the change, an inconsistency with a pattern used elsewhere in the same file — and have it say nothing about anything else.",
        it: "Restringi il mandato a poche cose che sa fare davvero bene — un nuovo percorso di codice senza gestione degli errori, un test che non esercita la modifica, un'incoerenza con uno schema usato altrove nello stesso file — e fa' in modo che su tutto il resto taccia.",
      },
      {
        en: "Band the output by confidence: post the top band as review comments, put the middle band in a private note to the human reviewer, and drop the rest. The default for an uncertain observation is silence.",
        it: "Gradua l'output per confidenza: pubblica la fascia alta come commenti di revisione, metti quella intermedia in una nota privata al revisore umano, e scarta il resto. Il comportamento predefinito per un'osservazione incerta è il silenzio.",
      },
      {
        en: "Track what happens to each comment. Dismissal rate per category is the measurement that matters, and it tells you which categories to switch off rather than which prompt to rewrite.",
        it: "Traccia cosa succede a ogni commento. Il tasso di commenti respinti per categoria è la misura che conta, e ti dice quali categorie spegnere invece di quale prompt riscrivere.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A well-written wrong comment carries the authority of a review. The author spends twenty minutes disproving it and does so publicly, and after that happens three times the team turns the tool off regardless of how good the other comments were.",
      it: "Un commento sbagliato ma ben scritto porta con sé l'autorevolezza di una revisione. Chi ha scritto il codice ci mette venti minuti a smentirlo, e lo fa in pubblico; dopo la terza volta il team spegne il tool a prescindere da quanto fossero buoni gli altri commenti.",
    },
    {
      en: "Volume as a proxy for thoroughness. A review that leaves fifteen comments has buried the one that mattered, and it has done it in a way that looks like diligence.",
      it: "Il volume come sostituto della meticolosità. Una revisione che lascia quindici commenti ha sepolto quello che contava, e l'ha fatto in un modo che sembra scrupolosità.",
    },
    {
      en: "Automating the six recurring comments with a model when they were deterministic rules all along. You have bought variance, latency and cost in exchange for a check that a linter performs exactly.",
      it: "Automatizzare i sei commenti ricorrenti con un model quando erano regole deterministiche fin dall'inizio. Hai comprato variabilità, latenza e costo in cambio di un controllo che un linter esegue in modo esatto.",
    },
    {
      en: "Comments on code that the diff does not contain. The change looks unsafe because the guard is thirty lines up and outside the hunk, and no amount of prompt work fixes an input that is missing the answer.",
      it: "Commenti su codice che il diff non contiene. La modifica sembra insicura perché il controllo sta trenta righe più su, fuori dalla porzione mostrata, e nessuna quantità di lavoro sul prompt sistema un input a cui manca la risposta.",
    },
  ],
  starterPrompt: {
    en: "I want an automated first-pass review on ~30 PRs a week. A wrong public comment costs the author real time and credibility, so I care much more about precision than coverage. Start by asking me how I'd sort my team's existing review comments into ones a linter should make and ones that genuinely need judgement — I suspect that split decides the whole design.",
    it: "Voglio una revisione automatica di primo giro su ~30 PR a settimana. Un commento pubblico sbagliato costa all'autore tempo e credibilità veri, quindi mi interessa molto più la precisione della copertura. Parti chiedendomi come suddividerei i commenti di revisione esistenti del mio team fra quelli che dovrebbe fare un linter e quelli che richiedono davvero un giudizio: sospetto che sia quella divisione a decidere tutto il design.",
  },
};
