import type { Challenge } from "../types";

export const toneCheck: Challenge = {
  id: "tone-check",
  mode: "quick",
  level: "beginner",
  category: "communication",
  estimatedMinutes: 25,
  title: {
    en: "Sent at Eleven at Night",
    it: "Inviato alle undici di sera",
  },
  scenario: {
    en: "Ingrid manages eleven people across three time zones and does most of her managing in a chat window. Twice she has sent something late in the evening that read, to the person receiving it, like a reprimand. She did not mean it as one. Both times she found out about a week later, in a one-to-one, from someone who had been quietly upset the whole time.",
    it: "Ingrid coordina undici persone su tre fusi orari e fa quasi tutto il suo lavoro di coordinamento in una chat. Due volte ha mandato a tarda sera qualcosa che, a chi lo riceveva, è suonato come un rimprovero. Non era quella l'intenzione. Entrambe le volte l'ha scoperto circa una settimana dopo, in un colloquio individuale, da una persona che nel frattempo se l'era tenuta dentro.",
  },
  constraints: [
    {
      en: "She is typing fast, in a chat box, between two other things. Anything that costs more than a moment gets ignored within a week.",
      it: "Scrive di fretta, in una chat, fra una cosa e l'altra. Qualsiasi cosa costi più di un istante viene ignorata nel giro di una settimana.",
    },
    {
      en: "The problem is not rudeness. It is that a short, neutral message from the person who decides your promotion is not read as short and neutral.",
      it: "Il problema non è la maleducazione. È che un messaggio breve e neutro, scritto da chi decide la tua promozione, non viene letto come breve e neutro.",
    },
    {
      en: "How it lands depends on who is receiving it and on what happened to them yesterday. None of that is in the message.",
      it: "Come arriva dipende da chi lo riceve e da cosa gli è successo il giorno prima. Niente di tutto ciò è nel messaggio.",
    },
    {
      en: "If it rewrites her messages, they stop sounding like her, and eleven people who read her every day will notice.",
      it: "Se riscrive i suoi messaggi, quelli smettono di suonare come lei, e undici persone che la leggono ogni giorno se ne accorgono.",
    },
  ],
  nudge: {
    en: "The message is not the thing that decides how it lands. Work out what else is in the room when someone reads it, and then how much of that you could honestly hand to a tool.",
    it: "Non è il messaggio a decidere come arriva. Capisci cos'altro c'è nella stanza quando qualcuno lo legge, e poi quanto di tutto ciò potresti onestamente dare in mano a un tool.",
  },
  approach: {
    summary: {
      en: "Flag and point; never rewrite. And decide in advance what an absence of flags is allowed to mean.",
      it: "Segnala e indica; non riscrivere mai. E decidi in anticipo cosa può significare l'assenza di segnalazioni.",
    },
    steps: [
      {
        en: "Return a flag and the exact phrase that caused it, not a corrected message. She needs to know which four words to look at again, and then to decide for herself.",
        it: "Restituisci una segnalazione e la frase esatta che l'ha causata, non un messaggio corretto. Le serve sapere quali quattro parole rileggere, e poi decidere da sé.",
      },
      {
        en: "Give it the relationship as an explicit input — direct report, peer, someone external. The same sentence is unremarkable sideways and heavy downward, and nothing in the text tells you which it is.",
        it: "Passagli la relazione come input esplicito: chi le riporta, un pari grado, qualcuno di esterno. La stessa frase è insignificante fra pari e pesante verso il basso, e nel testo non c'è niente che te lo dica.",
      },
      {
        en: "Have it say what the phrase might read as, not whether it is bad. \"This could read as a decision you have already taken\" is something she can act on; \"negative tone\" is not.",
        it: "Fa' che dica come potrebbe essere letta la frase, non se sia sbagliata. «Può suonare come una decisione che hai già preso» è qualcosa su cui può agire; «tono negativo» no.",
      },
      {
        en: "Say plainly in the interface what silence means. If nothing appearing quietly reads as approval, she will start trusting it about things it never looked at.",
        it: "Dichiara chiaramente nell'interfaccia cosa significa il silenzio. Se il non veder comparire niente si legge come approvazione, comincerà a fidarsi su cose che il tool non ha mai guardato.",
      },
      {
        en: "Keep it beside the compose box and never in the way of sending. A tool that stands between her and the send button gets turned off on the first busy morning.",
        it: "Tienilo accanto alla casella di scrittura e mai fra lei e l'invio. Un tool che si mette fra lei e il tasto invia viene spento la prima mattina di corsa.",
      },
    ],
  },
  pitfalls: [
    {
      en: "\"No issues found\" gets read as \"safe to send\". The tool has looked at the words on the screen and knows nothing about the person receiving them, but reassurance is what she takes away from it.",
      it: "«Nessun problema rilevato» viene letto come «si può mandare». Il tool ha guardato le parole sullo schermo e non sa niente della persona che le riceve, ma ciò che le resta addosso è la rassicurazione.",
    },
    {
      en: "Rewriting instead of flagging. The message comes out fluent, even, and unmistakably not hers, and a team that reads her every day hears the change in voice as distance.",
      it: "Riscrivere invece di segnalare. Il messaggio esce scorrevole, uniforme e inconfondibilmente non suo, e un team che la legge ogni giorno sente quel cambio di voce come distanza.",
    },
    {
      en: "Tuned to catch curtness, it flags every short message. She writes forty of those a day, and by the end of the week the flag has stopped meaning anything at all.",
      it: "Tarato per intercettare la secchezza, segnala ogni messaggio breve. Ne scrive quaranta al giorno, e per fine settimana la segnalazione ha smesso di voler dire qualsiasi cosa.",
    },
    {
      en: "Feeding it the message and nothing else. The one that did real damage was three neutral sentences sent to somebody who had been passed over for a promotion that morning.",
      it: "Dargli in pasto il messaggio e nient'altro. Quello che ha fatto danni veri erano tre frasi neutre mandate a una persona che quella mattina era stata scavalcata in una promozione.",
    },
  ],
  starterPrompt: {
    en: "I want a quick tone check next to my chat compose box for messages to my team. I don't want it rewriting anything — keeping my own voice matters more than the polish. Ask me what context it would need beyond the message text, and what I should be allowed to conclude when it flags nothing.",
    it: "Voglio un controllo rapido del tono accanto alla casella di scrittura della chat, per i messaggi al mio team. Non voglio che riscriva niente: mantenere la mia voce conta più della levigatura. Chiedimi quale contesto gli servirebbe oltre al testo del messaggio, e cosa mi è lecito concludere quando non segnala niente.",
  },
};
