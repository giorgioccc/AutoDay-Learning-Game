import type { Challenge } from "../types";

export const podcastRepurpose: Challenge = {
  id: "podcast-repurpose",
  mode: "quick",
  level: "beginner",
  category: "marketing-content",
  estimatedMinutes: 35,
  title: {
    en: "Nine Posts From One Recording",
    it: "Nove post da una registrazione",
  },
  scenario: {
    en: "Dario runs a two-person agency and records a fifty-minute client podcast every fortnight. Afterwards he scrubs the transcript for the four or five moments that would work as standalone posts, then rewrites each one by hand for LinkedIn. The rewriting takes him longer than the recording did.",
    it: "Dario ha un'agenzia di due persone e ogni due settimane registra un podcast con un cliente, cinquanta minuti. Dopo si rilegge la trascrizione a caccia dei quattro o cinque momenti che funzionerebbero come post a sé stanti, poi riscrive ognuno a mano per LinkedIn. La riscrittura gli porta via più tempo della registrazione.",
  },
  constraints: [
    {
      en: "The transcript is 8,000 words of unedited speech: filler, crosstalk, and a speaker label that is wrong about a third of the time.",
      it: "La trascrizione è 8.000 parole di parlato non editato: intercalari, sovrapposizioni, e un'etichetta di speaker sbagliata circa un terzo delle volte.",
    },
    {
      en: "A good moment is a claim someone actually defends, not a topic that gets mentioned. Most episodes contain three or four; some contain one.",
      it: "Un buon momento è un'affermazione che qualcuno difende davvero, non un tema che viene solo nominato. Quasi tutte le puntate ne contengono tre o quattro, alcune una sola.",
    },
    {
      en: "Dario publishes under his own name, so anything the guest did not actually say is a problem he has to catch before it goes out.",
      it: "Dario pubblica a suo nome, quindi qualunque cosa l'ospite non abbia davvero detto è un problema che deve intercettare prima di pubblicare.",
    },
  ],
  nudge: {
    en: "Finding the moments and writing the posts are two different jobs that fail in two different ways. What happens to your ability to check the output if a single call does both at once?",
    it: "Trovare i momenti e scrivere i post sono due lavori diversi che falliscono in modi diversi. Cosa succede alla tua capacità di verificare l'output se una sola chiamata fa entrambe le cose insieme?",
  },
  approach: {
    summary: {
      en: "Two chained calls — extraction first, drafting second — with the verbatim quote carried between them as the link back to the tape.",
      it: "Due chiamate in catena, prima l'estrazione e poi la scrittura, con la citazione letterale che passa dall'una all'altra come aggancio alla registrazione.",
    },
    steps: [
      {
        en: "First call, over the whole transcript: return candidate moments as structured items — the exact quoted span, who said it, and the claim in one line. No writing yet.",
        it: "Prima chiamata, sull'intera trascrizione: restituisci i momenti candidati come elementi strutturati, ovvero il passaggio citato esatto, chi l'ha detto e l'affermazione in una riga. Ancora niente scrittura.",
      },
      {
        en: "Let Dario keep or drop candidates before anything is drafted. This is the point in the flow where human judgement is cheapest to apply.",
        it: "Lascia che Dario tenga o scarti i candidati prima che venga scritto qualcosa. È il punto del flusso in cui il giudizio umano costa meno.",
      },
      {
        en: "Second call, once per kept moment: draft the post from that quote alone, not from the full transcript. A narrow input is the cheapest guard against the model importing something from elsewhere in the episode.",
        it: "Seconda chiamata, una per ogni momento tenuto: scrivi il post partendo solo da quella citazione, non dalla trascrizione intera. Un input stretto è la difesa più economica contro il model che si porta dentro qualcosa da un altro punto della puntata.",
      },
      {
        en: "Show every draft next to its source quote. Verification has to cost Dario a glance, or he will quietly stop doing it by episode four.",
        it: "Mostra ogni bozza accanto alla citazione da cui nasce. La verifica deve costare a Dario un'occhiata, altrimenti alla quarta puntata smette di farla senza dirlo a nessuno.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Ask for a fixed number of posts and you will get exactly that, padded out with the weakest material in the episode. Let the count follow the tape instead.",
      it: "Chiedi un numero fisso di post e otterrai esattamente quello, riempito con il materiale più debole della puntata. Lascia piuttosto che il numero segua la registrazione.",
    },
    {
      en: "Quotes drift. The model tidies up the grammar of spoken speech and you end up publishing words the guest never said — so match returned quotes against the transcript rather than trusting them.",
      it: "Le citazioni derivano: il model sistema la grammatica del parlato e finisci per pubblicare parole che l'ospite non ha mai detto. Verifica le citazioni restituite contro la trascrizione invece di fidarti.",
    },
    {
      en: "Feeding all 8,000 words into every drafting call multiplies your cost by the number of posts and buys you nothing in quality.",
      it: "Passare tutte le 8.000 parole a ogni chiamata di scrittura moltiplica il costo per il numero di post e non ti compra niente in qualità.",
    },
  ],
  starterPrompt: {
    en: "I want a two-stage tool that turns a podcast transcript into LinkedIn drafts. Stage one extracts defensible claims with exact quotes, I approve them, stage two drafts one post per approved quote using only that quote. Ask me first how the approval step should work and how you would verify that a returned quote really appears in the transcript.",
    it: "Voglio un tool in due fasi che trasformi la trascrizione di un podcast in bozze per LinkedIn. Fase uno: estrae affermazioni difendibili con citazioni esatte; io le approvo; fase due: scrive un post per ogni citazione approvata usando solo quella citazione. Chiedimi prima come deve funzionare il passaggio di approvazione e come verificheresti che una citazione restituita compaia davvero nella trascrizione.",
  },
};
