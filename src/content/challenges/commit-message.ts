import type { Challenge } from "../types";

export const commitMessage: Challenge = {
  id: "commit-message",
  mode: "quick",
  level: "beginner",
  category: "software-dev",
  estimatedMinutes: 25,
  title: {
    en: "fix, wip, final fix",
    it: "fix, wip, fix definitivo",
  },
  scenario: {
    en: "Wojtek's team writes commit messages at the end of the day when they want to go home. The log reads \"fix\", \"wip\", \"actually fix\", \"final fix\". Six months later, standing in front of a production incident trying to work out why a line was written the way it was, the log tells him nothing at all.",
    it: "Il team di Wojtek scrive i messaggi di commit a fine giornata, quando vuole andare a casa. Il log recita «fix», «wip», «fix vero», «fix definitivo». Sei mesi dopo, davanti a un incidente in produzione, mentre cerca di capire perché una riga sia stata scritta in quel modo, il log non gli dice assolutamente niente.",
  },
  constraints: [
    {
      en: "It runs at the moment of committing, from the terminal. Anything that takes more than a second or two will be bypassed inside a week.",
      it: "Gira nel momento del commit, dal terminale. Qualsiasi cosa che richieda più di un secondo o due verrà aggirata nel giro di una settimana.",
    },
    {
      en: "The diff says exactly what changed. It never says why, and why is the only reason anyone opens a commit message six months later.",
      it: "Il diff dice esattamente cosa è cambiato. Non dice mai perché, e il perché è l'unico motivo per cui qualcuno apre un messaggio di commit sei mesi dopo.",
    },
    {
      en: "A wrong message is worse than \"fix\", because \"fix\" is honestly useless and a wrong message is believed.",
      it: "Un messaggio sbagliato è peggio di «fix», perché «fix» è onestamente inutile mentre a un messaggio sbagliato si crede.",
    },
  ],
  nudge: {
    en: "The one thing the reader will want in six months is the one thing that is provably not in the diff. Work out what this tool can honestly produce on its own, and what it has no choice but to ask for.",
    it: "L'unica cosa che il lettore vorrà fra sei mesi è l'unica che dimostrabilmente non è nel diff. Capisci cosa questo tool può produrre onestamente da solo, e cosa non può fare altro che chiedere.",
  },
  approach: {
    summary: {
      en: "Generate the factual half from the diff, take the intent from sources that actually contain it, and make an empty intent a valid outcome rather than something to fill.",
      it: "Genera la metà fattuale dal diff, prendi l'intenzione da fonti che la contengono davvero, e fa' che un'intenzione vuota sia un esito valido invece che qualcosa da riempire.",
    },
    steps: [
      {
        en: "Split the message into a part that is derivable and a part that is not. The subject line describing what changed comes from the diff and can be produced reliably; everything about motivation cannot.",
        it: "Dividi il messaggio in una parte ricavabile e una che non lo è. La riga di oggetto che descrive cosa è cambiato viene dal diff e si può produrre in modo affidabile; tutto ciò che riguarda la motivazione no.",
      },
      {
        en: "Feed in the places where intent actually lives — the branch name, the linked issue, the ticket title — as explicit inputs. Never let the model infer a motive from the shape of the code.",
        it: "Dai in pasto i posti in cui l'intenzione vive davvero — il nome del branch, la issue collegata, il titolo del ticket — come input espliciti. Non lasciare mai che il model deduca un movente dalla forma del codice.",
      },
      {
        en: "Make \"no stated reason\" a supported outcome that produces a plain factual message. A speculative why is the failure this whole design exists to avoid.",
        it: "Rendi «nessuna ragione dichiarata» un esito supportato che produce un messaggio semplicemente fattuale. Un perché speculativo è il guasto che tutto questo design esiste per evitare.",
      },
      {
        en: "Run against the staged changes only, and hold the whole thing to a latency budget you would actually tolerate before committing. A correct tool that is slow is a tool nobody uses.",
        it: "Lavora solo sulle modifiche in stage, e tieni il tutto entro un budget di latenza che accetteresti davvero prima di un commit. Un tool corretto ma lento è un tool che nessuno usa.",
      },
      {
        en: "Put the generated message in the editor for the human to accept or edit, never straight into the commit. The point is to lower the cost of writing one, not to remove the person.",
        it: "Metti il messaggio generato nell'editor perché una persona lo accetti o lo modifichi, mai direttamente nel commit. Lo scopo è abbassare il costo di scriverne uno, non togliere di mezzo la persona.",
      },
    ],
  },
  pitfalls: [
    {
      en: "After a fortnight nobody reads the suggestion before accepting it — that is what a tool succeeding looks like. The log fills with fluent, confident statements of intent, and the first person to discover one is wrong is somebody debugging at two in the morning.",
      it: "Dopo due settimane nessuno legge più il suggerimento prima di accettarlo: è così che appare un tool che ha successo. Il log si riempie di dichiarazioni di intento scorrevoli e sicure, e la prima persona a scoprire che una è sbagliata è qualcuno che sta debuggando alle due di notte.",
    },
    {
      en: "Invented motivation. \"Refactor to improve performance\" written from a diff that does nothing of the kind, because the shape of the change resembles changes that usually have that reason.",
      it: "Motivazione inventata. «Refactor per migliorare le prestazioni» scritto a partire da un diff che non fa nulla del genere, perché la forma della modifica somiglia a modifiche che di solito hanno quella ragione.",
    },
    {
      en: "A message that narrates the diff file by file. It is longer than \"fix\", contains the same amount of information, and costs a model call to produce.",
      it: "Un messaggio che racconta il diff file per file. È più lungo di «fix», contiene la stessa quantità di informazione, e costa una chiamata al model per essere prodotto.",
    },
  ],
  starterPrompt: {
    en: "I want a commit-message helper that runs from the terminal on staged changes and is fast enough that people don't bypass it. The diff tells you what changed but never why, and I don't want it inventing a why. Ask me where the intent actually lives in my workflow and what I want the message to look like when there isn't one available.",
    it: "Voglio un assistente per i messaggi di commit che giri dal terminale sulle modifiche in stage e sia abbastanza veloce da non essere aggirato. Il diff dice cosa è cambiato ma mai perché, e non voglio che si inventi un perché. Chiedimi dove vive davvero l'intenzione nel mio flusso di lavoro e come voglio che sia il messaggio quando non ce n'è una disponibile.",
  },
};
