import type { Challenge } from "../types";

export const newsletterCuration: Challenge = {
  id: "newsletter-curation",
  mode: "quick",
  level: "beginner",
  category: "marketing-content",
  estimatedMinutes: 40,
  title: {
    en: "Five Links on a Friday",
    it: "Cinque link il venerdì",
  },
  scenario: {
    en: "Mirela sends a curated links newsletter to four thousand people every Friday. During the week he saves about sixty things, most of which he never opened past the headline. On Friday afternoon he has to pick five, write a line under each explaining why it is worth the click, and hit send.",
    it: "Mirela manda ogni venerdì una newsletter di link selezionati a quattromila persone. Durante la settimana si salva una sessantina di cose, la maggior parte delle quali non ha mai aperto oltre il titolo. Il venerdì pomeriggio deve sceglierne cinque, scrivere sotto ognuna una riga sul perché vale il clic, e premere invio.",
  },
  constraints: [
    {
      en: "The newsletter goes out on Friday whether or not the week produced five things worth reading.",
      it: "La newsletter parte il venerdì, che la settimana abbia prodotto o no cinque cose che meritano.",
    },
    {
      en: "The subscribers have already seen the week's obvious big stories somewhere else. The whole value is in the ones they would have missed.",
      it: "Gli iscritti hanno già visto altrove le notizie grosse e ovvie della settimana. Tutto il valore sta in quelle che si sarebbero perse.",
    },
    {
      en: "Each line has to say something that is not the article's own subtitle, which means somebody has to have read past it.",
      it: "Ogni riga deve dire qualcosa che non sia il sottotitolo dell'articolo stesso, il che vuol dire che qualcuno deve averlo letto oltre.",
    },
  ],
  nudge: {
    en: "Ranking sixty things and taking the top five assumes the top five are worth sending. Some weeks they are not — and notice that a ranking cannot tell you which weeks those are.",
    it: "Mettere in classifica sessanta cose e prendere le prime cinque presuppone che le prime cinque valgano la pena. Certe settimane non è così — e nota che una classifica non può dirti quali settimane siano.",
  },
  approach: {
    summary: {
      en: "Score each link against named criteria on an absolute scale, include what clears the bar rather than what ranks highest, and let the slate be shorter than five.",
      it: "Valuta ogni link contro criteri espliciti su una scala assoluta, includi ciò che supera l'asticella invece di ciò che si classifica più in alto, e lascia che la selezione possa essere più corta di cinque.",
    },
    steps: [
      {
        en: "Fetch and read the actual page, not the headline. A headline is written to be clicked, so anything scored on headlines is a machine for ranking clickbait.",
        it: "Scarica e leggi la pagina vera, non il titolo. Un titolo è scritto per essere cliccato, quindi qualsiasi cosa valutata sui titoli è una macchina per classificare esche da clic.",
      },
      {
        en: "Score named criteria separately — how surprising, how durable, how relevant to this audience — rather than asking for overall quality. \"Good\" collapses into \"well written\", which is not what the newsletter is for.",
        it: "Valuta criteri espliciti separatamente — quanto sorprende, quanto durerà, quanto interessa a questo pubblico — invece di chiedere una qualità complessiva. «Buono» collassa in «scritto bene», che non è lo scopo della newsletter.",
      },
      {
        en: "Use an absolute threshold rather than a rank cut. A link is included because it cleared a bar, so a thin week sends three links and a rich week sends seven, and both are correct.",
        it: "Usa una soglia assoluta invece di un taglio in classifica. Un link entra perché ha superato un'asticella, così una settimana povera ne manda tre e una ricca ne manda sette, e sono entrambe risposte giuste.",
      },
      {
        en: "Require the one-line reason to reference something specific from the body of the piece. That requirement doubles as the evidence that the thing was actually read.",
        it: "Imponi che la riga di motivazione faccia riferimento a qualcosa di specifico preso dal corpo del pezzo. Quel requisito serve anche come prova che il pezzo è stato davvero letto.",
      },
      {
        en: "Keep the links Mirela overruled in both directions. His disagreements with the scores are the only evaluation data this problem will ever generate.",
        it: "Conserva i link su cui Mirela ha ribaltato la decisione, in entrambe le direzioni. I suoi disaccordi con i punteggi sono gli unici dati di valutazione che questo problema produrrà mai.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A fixed slate of five forces the fifth item into existence. In a quiet week the tool confidently promotes something mediocre, and the quiet weeks are exactly when a curated newsletter earns or loses its credibility.",
      it: "Una selezione fissa di cinque costringe il quinto elemento a esistere. In una settimana povera il tool promuove con sicurezza qualcosa di mediocre, e le settimane povere sono esattamente quelle in cui una newsletter selezionata si guadagna o si brucia la credibilità.",
    },
    {
      en: "Scoring from the title and the domain alone. It is cheap, it looks like it works, and it systematically rewards the well-known publications whose articles the audience has already read.",
      it: "Valutare solo dal titolo e dal dominio. È economico, sembra funzionare, e premia sistematicamente le testate note i cui articoli il pubblico ha già letto.",
    },
    {
      en: "Reason lines that paraphrase the headline. They pass a casual read and add nothing, and after a few weeks subscribers stop reading them, which removes the only reason the newsletter beats a feed.",
      it: "Righe di motivazione che parafrasano il titolo. Superano una lettura distratta e non aggiungono niente, e dopo qualche settimana gli iscritti smettono di leggerle, il che elimina l'unico motivo per cui la newsletter batte un feed.",
    },
  ],
  starterPrompt: {
    en: "I curate a weekly links newsletter: ~60 saved links down to about five, each with a line saying why it's worth reading. The audience has already seen the obvious stories, and some weeks genuinely don't have five good links. Ask me how I'd define \"clears the bar\" as an absolute judgement rather than a ranking, and what I want a thin week to look like.",
    it: "Curo una newsletter settimanale di link: da ~60 link salvati a circa cinque, ognuno con una riga sul perché vale la lettura. Il pubblico ha già visto le notizie ovvie, e certe settimane davvero non ci sono cinque link buoni. Chiedimi come definirei «supera l'asticella» come giudizio assoluto invece che come classifica, e come voglio che appaia una settimana povera.",
  },
};
