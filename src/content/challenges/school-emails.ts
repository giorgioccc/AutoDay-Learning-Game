import type { Challenge } from "../types";

export const schoolEmails: Challenge = {
  id: "school-emails",
  mode: "quick",
  level: "beginner",
  category: "personal",
  estimatedMinutes: 30,
  title: {
    en: "Somewhere in the Fourth Paragraph",
    it: "Da qualche parte nel quarto paragrafo",
  },
  scenario: {
    en: "Dmitri has two children at the same school and gets around forty emails a week from it. Perhaps three of those require him to do something by a date. He has missed a non-uniform day, a trip payment and a parents' evening slot, each time because the relevant sentence was in the middle of a newsletter about something else.",
    it: "Dmitri ha due figli nella stessa scuola e ne riceve circa quaranta mail a settimana. Forse tre richiedono che faccia qualcosa entro una data. Si è perso un giorno senza divisa, il pagamento di una gita e la prenotazione di un colloquio, ogni volta perché la frase che contava stava in mezzo a una circolare su altro.",
  },
  constraints: [
    {
      en: "Forty messages a week, of which about three ask him to do anything at all.",
      it: "Quaranta messaggi a settimana, di cui più o meno tre gli chiedono di fare qualcosa.",
    },
    {
      en: "What matters is buried: a date in the fourth paragraph of a newsletter, a deadline inside a PDF the email only refers to.",
      it: "Ciò che conta è sepolto: una data nel quarto paragrafo di una circolare, una scadenza dentro un PDF a cui la mail si limita a rimandare.",
    },
    {
      en: "Which child it concerns is usually only implied, by a year group mentioned once in the subject line.",
      it: "Quale dei due figli riguardi di solito è solo implicito, in una classe nominata una volta nell'oggetto.",
    },
    {
      en: "A missed non-uniform day is a small, specific disaster. An invented one is worse, because he will send a child in dressed wrong.",
      it: "Un giorno senza divisa mancato è un piccolo disastro molto concreto. Uno inventato è peggio, perché manderà un figlio vestito nel modo sbagliato.",
    },
  ],
  nudge: {
    en: "Almost every message here contains nothing for you to do. Work out what the tool should say on those, and whether saying it is as easy as it sounds.",
    it: "Quasi ogni messaggio qui dentro non contiene niente da fare. Capisci cosa dovrebbe dire il tool su quelli, e se dirlo sia facile come sembra.",
  },
  approach: {
    summary: {
      en: "Make \"nothing required\" the ordinary answer, extract only dated actions, and attach the sentence each one came from.",
      it: "Fa' che «niente da fare» sia la risposta ordinaria, estrai solo azioni con una data, e allega la frase da cui ognuna viene.",
    },
    steps: [
      {
        en: "Design so that producing nothing is the common, comfortable outcome. Anything obliged to return an item per email will return forty items a week, and forty is the same as none.",
        it: "Progetta in modo che non produrre niente sia l'esito comune e naturale. Qualsiasi cosa costretta a restituire un elemento per mail ne restituirà quaranta a settimana, e quaranta equivale a zero.",
      },
      {
        en: "Extract only what has a date attached to an action he has to take. Newsletters are mostly announcements, and an announcement is not an obligation.",
        it: "Estrai solo ciò che ha una data attaccata a un'azione che deve compiere lui. Le circolari sono per lo più annunci, e un annuncio non è un obbligo.",
      },
      {
        en: "Resolve relative dates against the message's own send date, and drop anything that cannot be resolved. \"Next Friday\" in something forwarded twice is not a date.",
        it: "Risolvi le date relative rispetto alla data di invio del messaggio, e scarta ciò che non si riesce a risolvere. «Venerdì prossimo» in una mail inoltrata due volte non è una data.",
      },
      {
        en: "Map year group to child once, as a lookup he maintains, rather than having it inferred fresh every week. It costs him two minutes and removes an entire class of mistake.",
        it: "Mappa una volta sola la classe sul figlio, come tabella che mantiene lui, invece di farla dedurre da capo ogni settimana. Gli costa due minuti e toglie di mezzo un'intera categoria di errori.",
      },
      {
        en: "Attach the exact sentence and the message it came from to every item. A wrong one should take five seconds to dismiss, not a search through the inbox.",
        it: "Allega a ogni elemento la frase esatta e il messaggio da cui viene. Scartarne uno sbagliato deve costare cinque secondi, non una ricerca nella casella.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Asked to find deadlines, it finds deadlines. A newsletter containing none produces a plausible one, and plausible ones are indistinguishable from real ones until the morning it matters.",
      it: "Se gli chiedi di trovare scadenze, trova scadenze. Una circolare che non ne contiene nessuna ne produce una plausibile, e quelle plausibili sono indistinguibili da quelle vere fino alla mattina in cui conta.",
    },
    {
      en: "The date is in the attachment. The email says \"details in the letter below\", the extraction reads the email, and the whole thing works confidently on the wrong ninety per cent of the content.",
      it: "La data è nell'allegato. La mail dice «tutti i dettagli nella lettera qui sotto», l'estrazione legge la mail, e il sistema lavora con sicurezza sul novanta per cento sbagliato del contenuto.",
    },
    {
      en: "Everything that mentions a date becomes an item. Term dates, the head teacher's retirement, a June trip for a different year group — the list is complete, long, and he stops opening it.",
      it: "Tutto ciò che nomina una data diventa un elemento. Il calendario scolastico, il pensionamento della preside, una gita di giugno per un'altra classe: la lista è completa, lunga, e lui smette di aprirla.",
    },
    {
      en: "The item goes to the wrong child. Same action, same date, wrong uniform, and it is the kind of mistake a seven-year-old notices in front of everybody.",
      it: "L'elemento finisce sul figlio sbagliato. Stessa azione, stessa data, divisa sbagliata, ed è il tipo di errore che un bambino di sette anni si accorge davanti a tutti.",
    },
  ],
  starterPrompt: {
    en: "I get ~40 emails a week from my kids' school and maybe three need me to do something by a date. The rest are newsletters. I'm worried that a tool asked to find deadlines will find deadlines whether or not they're there. Ask me what it should output for an email containing nothing, and how I'd tell a real deadline from an invented one.",
    it: "Ricevo ~40 mail a settimana dalla scuola dei miei figli e forse tre mi chiedono di fare qualcosa entro una data. Il resto sono circolari. Temo che un tool a cui chiedo di trovare scadenze le troverà che ci siano o no. Chiedimi cosa dovrebbe restituire per una mail che non contiene niente, e come distinguerei una scadenza vera da una inventata.",
  },
};
