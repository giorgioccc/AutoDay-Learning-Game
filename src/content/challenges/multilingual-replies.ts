import type { Challenge } from "../types";

export const multilingualReplies: Challenge = {
  id: "multilingual-replies",
  mode: "deep",
  level: "advanced",
  category: "communication",
  estimatedMinutes: 240,
  title: {
    en: "Eleven Languages, Two Readers",
    it: "Undici lingue, due lettori",
  },
  scenario: {
    en: "Anneke's company answers customers in eleven languages. The support team of five reads Dutch and English. The other nine go out through a mixture of an agency, a translation tool and optimism, and nobody in the building can say whether what leaves in Polish or in Turkish is any good.",
    it: "L'azienda di Anneke risponde ai clienti in undici lingue. Il team di assistenza, cinque persone, legge olandese e inglese. Le altre nove escono attraverso un misto di agenzia, tool di traduzione e ottimismo, e nessuno in azienda sa dire se ciò che parte in polacco o in turco sia fatto bene.",
  },
  constraints: [
    {
      en: "Nobody with the authority to approve a reply can read most of the languages it goes out in.",
      it: "Nessuno che abbia l'autorità di approvare una risposta sa leggere la maggior parte delle lingue in cui quella risposta esce.",
    },
    {
      en: "Back-translating into English produces something readable, which is not the same as evidence. A fluent round trip can hide a reversed instruction.",
      it: "Ritradurre in inglese produce qualcosa di leggibile, che non è la stessa cosa di una prova. Un viaggio di andata e ritorno scorrevole può nascondere un'istruzione ribaltata.",
    },
    {
      en: "Some of the content is not really language: a legal notice, a refund term, a safety instruction. Getting one of those slightly wrong is a different category of problem from being clumsy.",
      it: "Una parte del contenuto non è davvero lingua: un'informativa legale, una condizione di rimborso, un'istruzione di sicurezza. Sbagliarne una di poco è una categoria di problema diversa dall'essere goffi.",
    },
    {
      en: "Volume in the smaller languages is low, so the languages with the least oversight are also the ones with the fewest examples of anything.",
      it: "Il volume nelle lingue minori è basso, quindi le lingue con meno controllo sono anche quelle con meno esempi di qualsiasi cosa.",
    },
  ],
  nudge: {
    en: "You are about to design a review step that cannot review anything. Ask what evidence a person who does not speak the language could actually act on.",
    it: "Stai per progettare un passaggio di revisione che non può rivedere niente. Chiediti su quale evidenza potrebbe davvero agire una persona che quella lingua non la parla.",
  },
  approach: {
    summary: {
      en: "Build reviewability first: decide what may go out unreviewed and in which languages, and pay for real review of the rest.",
      it: "Costruisci prima la revisionabilità: decidi cosa può uscire senza revisione e in quali lingue, e paga per una revisione vera di tutto il resto.",
    },
    steps: [
      {
        en: "Split a reply by risk rather than by language. Anything carrying a legal, financial or safety statement uses pre-approved translated text; the conversational part around it is where a model earns its place.",
        it: "Dividi una risposta per rischio invece che per lingua. Tutto ciò che contiene una dichiarazione legale, economica o di sicurezza usa testo tradotto e pre-approvato; la parte discorsiva attorno è dove un model si guadagna il posto.",
      },
      {
        en: "Hold those fixed statements as human-translated, versioned assets and have the system assemble them rather than generate them. That is where the cost of being wrong is concentrated, and it is also the part that repeats.",
        it: "Tieni quelle dichiarazioni fisse come risorse tradotte da persone e versionate, e fa' che il sistema le assembli invece di generarle. È lì che si concentra il costo di sbagliare, ed è anche la parte che si ripete.",
      },
      {
        en: "Buy sampled native review, per language, on a schedule, and treat it as the only real signal about quality. It is a line in a budget, and there is no engineering substitute for it.",
        it: "Compra una revisione madrelingua a campione, per lingua, con una cadenza fissa, e trattala come l'unico segnale vero sulla qualità. È una voce di bilancio, e non esiste un sostituto ingegneristico.",
      },
      {
        en: "Track what you can measure without reading anything: reopen rate, escalation rate and number of follow-up questions, broken down by language. A language where customers ask twice as many follow-ups is telling you something long before a reviewer does.",
        it: "Traccia ciò che puoi misurare senza leggere niente: tasso di riaperture, tasso di escalation e numero di domande di chiarimento, divisi per lingua. Una lingua in cui i clienti fanno il doppio delle domande ti sta dicendo qualcosa molto prima di un revisore.",
      },
      {
        en: "Make \"this language is not covered\" a supported state that routes to a person, instead of a quiet degradation into whatever the model produces.",
        it: "Rendi «questa lingua non è coperta» uno stato previsto che manda la cosa a una persona, invece di un degrado silenzioso verso qualunque cosa produca il model.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Back-translation used as quality control. It reads fine in English, everybody relaxes, and the Turkish sentence in the middle told the customer to do the opposite of what was meant.",
      it: "La ritraduzione usata come controllo qualità. In inglese si legge bene, tutti si tranquillizzano, e la frase turca in mezzo diceva al cliente di fare l'opposto di quanto si intendeva.",
    },
    {
      en: "A refund term paraphrased into a language nobody in the company reads. It is a commitment, it has been sent, and the first sign of trouble is a complaint about a promise nobody remembers making.",
      it: "Una condizione di rimborso parafrasata in una lingua che in azienda non legge nessuno. È un impegno, è stato inviato, e il primo segnale di guai è un reclamo su una promessa che nessuno ricorda di aver fatto.",
    },
    {
      en: "Register drifting language by language. The Japanese comes out stiffly formal and the Polish comes out casual, nobody notices, and the customer's read on the company shifts by language for no reason anybody chose.",
      it: "Il registro che scivola da lingua a lingua. Il giapponese esce rigidamente formale e il polacco esce colloquiale, non se ne accorge nessuno, e l'idea che il cliente si fa dell'azienda cambia a seconda della lingua per nessuna ragione decisa da qualcuno.",
    },
    {
      en: "Assuming quality is uniform because the pipeline is. Output varies enormously by language and by how much domain vocabulary is involved, and the thinnest languages get the least scrutiny.",
      it: "Dare per scontato che la qualità sia uniforme perché lo è la pipeline. L'output varia enormemente per lingua e per quanto lessico specialistico è coinvolto, e le lingue più sottili ricevono il minimo controllo.",
    },
  ],
  starterPrompt: {
    en: "We reply to customers in 11 languages and my team reads 2. I know back-translation isn't real verification, but it's what we do. Help me work out which parts of a reply should never be generated at all, and what evidence about quality I could actually gather in a language nobody here reads.",
    it: "Rispondiamo ai clienti in 11 lingue e il mio team ne legge 2. So che la ritraduzione non è una verifica vera, ma è ciò che facciamo. Aiutami a capire quali parti di una risposta non dovrebbero proprio essere generate, e quale evidenza sulla qualità potrei davvero raccogliere in una lingua che qui non legge nessuno.",
  },
};
