import type { Challenge } from "../types";

export const escalationRouter: Challenge = {
  id: "escalation-router",
  mode: "quick",
  level: "intermediate",
  category: "communication",
  estimatedMinutes: 40,
  title: {
    en: "Twice a Month",
    it: "Due volte al mese",
  },
  scenario: {
    en: "Marisol's ops team of four watches an inbox that takes about two hundred messages a day. Roughly twice a month one of them genuinely cannot wait until morning. She has missed one of those, and she has woken people up for three that could have waited.",
    it: "Il team operativo di Marisol, quattro persone, presidia una casella che riceve circa duecento messaggi al giorno. Sì e no due volte al mese, uno di quelli davvero non può aspettare fino al mattino. Ne ha mancato uno, e ha svegliato persone per tre che potevano aspettare.",
  },
  constraints: [
    {
      en: "Two a month out of six thousand. Whatever this thing is, it spends almost all of its time being right about nothing happening.",
      it: "Due al mese su seimila. Qualunque cosa sia questo sistema, passa quasi tutto il suo tempo ad avere ragione sul fatto che non sta succedendo niente.",
    },
    {
      en: "Urgency is not tone. The angriest messages are almost always routine, and the one that mattered was three flat, polite sentences from an engineer standing on a customer's site.",
      it: "L'urgenza non è il tono. I messaggi più arrabbiati sono quasi sempre ordinari, e quello che contava erano tre frasi piatte ed educate di un tecnico in piedi nel cantiere di un cliente.",
    },
    {
      en: "Waking somebody at three in the morning for something that could have waited has a cost, and the cost gets paid by the next real alert.",
      it: "Svegliare qualcuno alle tre di notte per una cosa che poteva aspettare ha un costo, e quel costo lo paga l'allarme vero successivo.",
    },
  ],
  nudge: {
    en: "The thing you are trying to catch happens twice a month. Ask what you would need to have in place in order to know, six months from now, whether any of this ever worked.",
    it: "La cosa che stai cercando di intercettare capita due volte al mese. Chiediti cosa dovresti avere predisposto per poter sapere, fra sei mesi, se tutto questo abbia mai funzionato.",
  },
  approach: {
    summary: {
      en: "Route on facts about who and what, not on how the message reads, and build the way you will measure it before you build the classifier.",
      it: "Smista sui fatti — chi scrive e cosa tocca — non su come suona il messaggio, e costruisci il modo in cui lo misurerai prima di costruire il classificatore.",
    },
    steps: [
      {
        en: "Separate who this is from and what it touches — account tier, whether production is involved, whether they are already inside an incident — from anything to do with the text. Most of the real signal is metadata that needs no judgement at all.",
        it: "Separa chi scrive e cosa tocca — livello del contratto, se è coinvolta la produzione, se sono già dentro un incidente — da tutto ciò che riguarda il testo. Gran parte del segnale vero è metadato che non richiede nessun giudizio.",
      },
      {
        en: "Write the handful of always-escalate conditions as rules. If a rule can state it, a rule should, because a rule is exact at three in the morning and a model is a probability.",
        it: "Scrivi come regole le poche condizioni che scalano sempre. Se una regola può enunciarla, che la enunci una regola: alle tre di notte una regola è esatta, un model è una probabilità.",
      },
      {
        en: "Use the model only on what the rules left undecided, and ask it for reasons rather than a level: what specifically in this message suggests it cannot wait.",
        it: "Usa il model solo su ciò che le regole non hanno deciso, e chiedigli delle ragioni invece di un livello: cosa in questo messaggio, di preciso, fa pensare che non possa aspettare.",
      },
      {
        en: "Build the labelled history first — a year of messages with what actually happened next to each. Without it you cannot tell a working detector from one that escalates nothing, and both of them look calm.",
        it: "Costruisci prima lo storico etichettato: un anno di messaggi con accanto cosa è successo davvero. Senza, non distingui un rilevatore che funziona da uno che non scala mai niente, e tutti e due sembrano tranquilli.",
      },
      {
        en: "Give a wrong escalation a one-click correction that writes back into that history. It is the only feedback anybody will ever reliably give you.",
        it: "Dai a un'escalation sbagliata una correzione da un clic che rientri in quello storico. È l'unico feedback che qualcuno ti darà mai in modo affidabile.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Three false alarms in a fortnight and people start acknowledging alerts without opening them. The tool then works perfectly on the fourth one and nobody notices.",
      it: "Tre falsi allarmi in due settimane e la gente inizia a chiudere le notifiche senza aprirle. Poi il tool funziona perfettamente sul quarto e non se ne accorge nessuno.",
    },
    {
      en: "Escalating on emotional intensity. Capital letters and exclamation marks track frustration, not severity, and the genuinely urgent message is usually the calmest thing in the inbox.",
      it: "Scalare sull'intensità emotiva. Maiuscole e punti esclamativi seguono la frustrazione, non la gravità, e il messaggio davvero urgente è di solito la cosa più pacata della casella.",
    },
    {
      en: "No labelled history, so nothing distinguishes \"there were no emergencies last month\" from \"it missed them\". Both read as a quiet month.",
      it: "Nessuno storico etichettato, quindi niente distingue «il mese scorso non ci sono state emergenze» da «non le ha viste». Entrambi si leggono come un mese tranquillo.",
    },
    {
      en: "A single urgency score with a threshold. Two events a month means the threshold is set from almost no positive examples, and it drifts without anyone being able to say when it started drifting.",
      it: "Un unico punteggio di urgenza con una soglia. Due eventi al mese significa che la soglia è fissata quasi senza esempi positivi, e va alla deriva senza che nessuno sappia dire quando ha cominciato.",
    },
  ],
  starterPrompt: {
    en: "I need to spot the ~2 messages a month, out of ~6,000, that genuinely can't wait until morning. False alarms are expensive because people stop responding to them. Before we design anything, ask me how I'd know six months from now whether it was actually working — I don't think I currently could.",
    it: "Devo intercettare i ~2 messaggi al mese, su ~6.000, che davvero non possono aspettare il mattino. I falsi allarmi costano cari perché la gente smette di rispondere. Prima di progettare qualsiasi cosa, chiedimi come farei a sapere fra sei mesi se ha funzionato davvero: credo che al momento non potrei.",
  },
};
