import type { Challenge } from "../types";

export const reproFromBug: Challenge = {
  id: "repro-from-bug",
  mode: "quick",
  level: "beginner",
  category: "software-dev",
  estimatedMinutes: 40,
  title: {
    en: "It Doesn't Work",
    it: "Non funziona",
  },
  scenario: {
    en: "Bug reports reach Petra through support, as a paragraph of narrative and a screenshot of half a screen. \"The customer tried to update their billing address and it didn't work, they say it worked last month.\" Before she can fix anything she has to turn that into something she can make happen on purpose, and that is where the afternoon goes.",
    it: "Le segnalazioni di bug arrivano a Petra attraverso l'assistenza, come un paragrafo di racconto e lo screenshot di mezzo schermo. «Il cliente ha provato ad aggiornare l'indirizzo di fatturazione e non funzionava, dice che il mese scorso funzionava.» Prima di poter sistemare qualcosa deve trasformarlo in qualcosa che sappia far succedere apposta, ed è lì che se ne va il pomeriggio.",
  },
  constraints: [
    {
      en: "The report describes what the person believed was happening, not the sequence of things they did.",
      it: "La segnalazione descrive cosa la persona credeva stesse succedendo, non la sequenza di cose che ha fatto.",
    },
    {
      en: "The decisive details are almost always the missing ones: which account, in what state, on what device, after doing what first.",
      it: "I dettagli decisivi sono quasi sempre quelli che mancano: quale account, in che stato, su quale dispositivo, dopo aver fatto cos'altro prima.",
    },
    {
      en: "A reproduction that does not reproduce is worse than none at all, because Petra will spend an hour trusting it before she starts doubting it.",
      it: "Una riproduzione che non riproduce è peggio di nessuna riproduzione, perché Petra ci passerà un'ora fidandosene prima di iniziare a dubitarne.",
    },
  ],
  nudge: {
    en: "A bug report is a story somebody told about their own confusion. What separates it from a reproduction is a specific list of facts nobody wrote down — so ask what this tool should actually be producing.",
    it: "Una segnalazione di bug è un racconto che qualcuno ha fatto della propria confusione. Ciò che la separa da una riproduzione è un elenco preciso di fatti che nessuno ha scritto — quindi chiediti cosa dovrebbe davvero produrre questo tool.",
  },
  approach: {
    summary: {
      en: "The primary output is the list of what is missing, not a test. The test only becomes possible once that list is empty.",
      it: "L'output principale è l'elenco di ciò che manca, non un test. Il test diventa possibile solo quando quell'elenco è vuoto.",
    },
    steps: [
      {
        en: "Extract what the report actually states into a structured record — actions taken, result observed, result expected, environment — and mark every field the report does not contain as explicitly absent rather than leaving it blank.",
        it: "Estrai ciò che la segnalazione afferma davvero in un record strutturato — azioni compiute, risultato osservato, risultato atteso, ambiente — e marca ogni campo che la segnalazione non contiene come esplicitamente assente, invece di lasciarlo vuoto.",
      },
      {
        en: "Turn the absent fields into questions to send back to the reporter, ordered by how much each answer would narrow the space of possible causes.",
        it: "Trasforma i campi assenti in domande da rimandare a chi ha segnalato, ordinate in base a quanto ogni risposta restringerebbe lo spazio delle cause possibili.",
      },
      {
        en: "Read the screenshot as an input, not as decoration. It usually contains the account state, the exact error text and the version, none of which are in the prose.",
        it: "Leggi lo screenshot come input, non come decorazione. Di solito contiene lo stato dell'account, il testo esatto dell'errore e la versione, nessuno dei quali è nel testo scritto.",
      },
      {
        en: "Only once the record is complete enough, propose candidate reproduction paths as competing hypotheses, each stating what it predicts you would see. A hypothesis that predicts something is testable; a reproduction that just asserts itself is not.",
        it: "Solo quando il record è abbastanza completo, proponi percorsi di riproduzione candidati come ipotesi in competizione, ognuna con ciò che prevede di far vedere. Un'ipotesi che prevede qualcosa è verificabile; una riproduzione che si limita ad affermarsi no.",
      },
      {
        en: "Keep past reports next to the reproduction that eventually worked. It is the only way to tell whether the questions the tool asks are getting better.",
        it: "Conserva le segnalazioni passate accanto alla riproduzione che alla fine ha funzionato. È l'unico modo per capire se le domande che il tool pone stanno migliorando.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The missing steps get filled in with the most likely ones. The result is a fluent, specific, entirely plausible reproduction that does not reproduce, and nothing about it looks like a guess.",
      it: "I passaggi mancanti vengono riempiti con quelli più probabili. Il risultato è una riproduzione scorrevole, precisa e del tutto plausibile che non riproduce niente, e niente in essa ha l'aspetto di un'ipotesi.",
    },
    {
      en: "Treating \"expected versus actual\" as something the report contains. Reporters state their interpretation of both, and the gap between the interpretation and the event is usually where the bug is hiding.",
      it: "Trattare «atteso contro effettivo» come qualcosa che la segnalazione contiene. Chi segnala esprime la propria interpretazione di entrambi, e lo scarto fra l'interpretazione e l'evento è di solito il punto in cui si nasconde il bug.",
    },
    {
      en: "Producing a test that reproduces exactly what the report says. The customer already knows that path does not work — the useful reproduction is the narrower one that says under which conditions.",
      it: "Produrre un test che riproduce esattamente ciò che dice la segnalazione. Il cliente sa già che quel percorso non funziona: la riproduzione utile è quella più stretta, che dice a quali condizioni.",
    },
  ],
  starterPrompt: {
    en: "I get bug reports as a paragraph of support narrative plus a screenshot, and turning them into an actual reproduction is where my time goes. I'd rather it never guessed a missing step. Start by asking me what a report has to contain before a reproduction is even possible — I think the tool's real output might be the list of what's missing.",
    it: "Ricevo segnalazioni di bug come un paragrafo di racconto dell'assistenza più uno screenshot, e trasformarle in una riproduzione vera è dove se ne va il mio tempo. Preferirei che non indovinasse mai un passaggio mancante. Parti chiedendomi cosa deve contenere una segnalazione perché una riproduzione sia anche solo possibile: credo che il vero output del tool possa essere l'elenco di ciò che manca.",
  },
};
