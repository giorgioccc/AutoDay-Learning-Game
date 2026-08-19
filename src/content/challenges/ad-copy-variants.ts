import type { Challenge } from "../types";

export const adCopyVariants: Challenge = {
  id: "ad-copy-variants",
  mode: "quick",
  level: "beginner",
  category: "marketing-content",
  estimatedMinutes: 30,
  title: {
    en: "Twelve Ads, One Idea",
    it: "Dodici annunci, una sola idea",
  },
  scenario: {
    en: "Lucia buys paid social for a furniture shop. Every campaign is supposed to launch with a dozen headline-and-body variants so the platform has something to test between. She writes four good ones, runs dry, pads it out with rewordings of the first four, and then cannot tell from the results what actually worked.",
    it: "Lucia gestisce la pubblicità social per un negozio di arredamento. Ogni campagna dovrebbe partire con una dozzina di varianti di titolo e testo, così che la piattaforma abbia qualcosa da testare. Lei ne scrive quattro buone, si prosciuga, riempie il resto con riformulazioni delle prime quattro, e poi dai risultati non riesce a capire cosa abbia funzionato davvero.",
  },
  constraints: [
    {
      en: "Twelve rewordings of one claim is one advert with twelve names. The test spends real money and learns nothing.",
      it: "Dodici riformulazioni della stessa promessa sono un solo annuncio con dodici nomi. Il test spende soldi veri e non impara niente.",
    },
    {
      en: "Each placement has a hard character limit, and copy that overruns is silently truncated mid-sentence rather than rejected.",
      it: "Ogni posizionamento ha un limite di caratteri rigido, e il testo che sfora viene troncato in silenzio a metà frase invece che rifiutato.",
    },
    {
      en: "The copy may not invent a discount, a delivery time or a superlative. Somebody in the shop has to be able to honour whatever it says.",
      it: "Il testo non può inventarsi uno sconto, un tempo di consegna o un superlativo. Qualcuno in negozio deve poter mantenere qualunque cosa ci sia scritto.",
    },
  ],
  nudge: {
    en: "A test only teaches you something if you decided in advance what it was testing. Before you generate anything, ask what you want to vary — and notice that \"the wording\" is not an answer.",
    it: "Un test ti insegna qualcosa solo se hai deciso prima cosa stava testando. Prima di generare qualsiasi cosa, chiediti cosa vuoi far variare — e nota che «la formulazione» non è una risposta.",
  },
  approach: {
    summary: {
      en: "Name the axes of variation as a design decision, generate one variant per cell in a structured call, and enforce the hard limits outside the model.",
      it: "Definisci gli assi di variazione come decisione di design, genera una variante per cella con una chiamata strutturata, e fai rispettare i limiti rigidi fuori dal model.",
    },
    steps: [
      {
        en: "Decide the axes first: which benefit is being promised, which objection is being answered, which audience is being addressed. Twelve variants is three benefits crossed with four objections, not a number you ask for.",
        it: "Decidi prima gli assi: quale beneficio viene promesso, quale obiezione viene affrontata, a quale pubblico ci si rivolge. Dodici varianti sono tre benefici incrociati con quattro obiezioni, non un numero che si chiede.",
      },
      {
        en: "Generate one cell at a time rather than asking for twelve at once. A single call asked for a dozen produces its best idea and eleven paraphrases of it — that is what the model is for.",
        it: "Genera una cella alla volta invece di chiedere dodici varianti in un colpo solo. Una singola chiamata a cui chiedi una dozzina produce la sua idea migliore e undici parafrasi di quella: è proprio ciò che il model fa.",
      },
      {
        en: "Carry the axis labels on every variant in the structured output, so that when one wins you know which decision won and not just which sentence.",
        it: "Porta le etichette degli assi su ogni variante nell'output strutturato, così che quando una vince tu sappia quale decisione ha vinto, non solo quale frase.",
      },
      {
        en: "Supply the true offer facts as input and check length, banned words and claims in code afterwards. Character counting is the classic thing a model is confidently bad at.",
        it: "Fornisci i dati veri dell'offerta come input e verifica lunghezza, parole vietate e affermazioni nel codice, dopo. Contare i caratteri è il classico compito in cui un model sbaglia con grande sicurezza.",
      },
      {
        en: "Feed the platform's own results back as labelled examples of what worked for this shop. That number already exists and nobody ever wires it back into the generation.",
        it: "Riporta i risultati della piattaforma stessa nel prompt come esempi etichettati di ciò che ha funzionato per questo negozio. Quel dato esiste già e non lo si ricollega mai alla generazione.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The whole question — does this prompt write better ads — is answerable, and it is answerable with numbers Lucia already has. Almost nobody connects click-through back to the variant that produced it, so the tool gets judged on whether the copy reads nicely.",
      it: "L'unica domanda che conta — questo prompt scrive annunci migliori? — è una domanda a cui si può rispondere, e con numeri che Lucia ha già. Quasi nessuno ricollega i click alla variante che li ha generati, così il tool finisce giudicato su quanto il testo si legge bene.",
    },
    {
      en: "Twelve near-identical variants split the campaign budget twelve ways, so none of them reaches enough impressions to produce a result you could act on.",
      it: "Dodici varianti quasi identiche dividono il budget della campagna in dodici, così nessuna raggiunge abbastanza impressioni da produrre un risultato su cui agire.",
    },
    {
      en: "Generated urgency. A model writing furniture ads will reach for \"limited stock\" and \"ends Sunday\" because that is what furniture ads say, and now the shop has advertised a deadline that does not exist.",
      it: "L'urgenza inventata. Un model che scrive annunci di arredamento tirerà fuori «scorte limitate» e «solo fino a domenica» perché è ciò che dicono gli annunci di arredamento, e adesso il negozio ha pubblicizzato una scadenza che non esiste.",
    },
  ],
  starterPrompt: {
    en: "I need a dozen genuinely different ad variants per campaign, not twelve rewordings of the same claim, and each has to fit a hard character limit and only make claims the shop can honour. Start by asking me what I actually want to vary between variants and how I'd know afterwards which variant won — don't write any copy yet.",
    it: "Mi servono una dozzina di varianti di annuncio davvero diverse per campagna, non dodici riformulazioni della stessa promessa, e ognuna deve stare in un limite di caratteri rigido e promettere solo cose che il negozio può mantenere. Parti chiedendomi cosa voglio davvero far variare fra le varianti e come farò a sapere dopo quale ha vinto: non scrivere ancora nessun testo.",
  },
};
