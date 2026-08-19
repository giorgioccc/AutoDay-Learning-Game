import type { Challenge } from "../types";

export const subscriptionAudit: Challenge = {
  id: "subscription-audit",
  mode: "quick",
  level: "intermediate",
  category: "personal",
  estimatedMinutes: 45,
  title: {
    en: "SP *NORDCOM 4471 DUBLIN",
    it: "SP *NORDCOM 4471 DUBLIN",
  },
  scenario: {
    en: "Ola has two years of bank statements and a suspicion that she is paying for four or five things she stopped using. Two years is about four thousand transaction lines. She has started scrolling through them twice and given up at around March both times.",
    it: "Ola ha due anni di estratti conto e il sospetto di pagare quattro o cinque cose che ha smesso di usare. Due anni fanno circa quattromila righe di movimenti. Ha iniziato a scorrerle due volte e tutte e due le volte ha mollato verso marzo.",
  },
  constraints: [
    {
      en: "Four thousand lines, of which perhaps thirty are interesting and she does not know which thirty.",
      it: "Quattromila righe, di cui forse trenta interessanti, e non sa quali trenta.",
    },
    {
      en: "The merchant descriptor is the only text there is, and it reads like \"SP *NORDCOM 4471 DUBLIN\".",
      it: "La descrizione dell'esercente è l'unico testo disponibile, e si legge tipo «SP *NORDCOM 4471 DUBLIN».",
    },
    {
      en: "A subscription that rose in price or moved to a different day of the month still has to look like the same subscription.",
      it: "Un abbonamento che è aumentato di prezzo o si è spostato a un altro giorno del mese deve comunque risultare lo stesso abbonamento.",
    },
  ],
  nudge: {
    en: "Most of what you are looking for can be found by looking only at dates and amounts. Work out what is genuinely left over after that, and how big the leftover actually is.",
    it: "Gran parte di ciò che stai cercando si trova guardando solo date e importi. Capisci cosa resta davvero fuori dopo quel passaggio, e quanto sia grande davvero quel resto.",
  },
  approach: {
    summary: {
      en: "Find the recurrence with arithmetic, normalise the descriptor with rules, and spend a model call only on the handful of strings still unreadable afterwards.",
      it: "Trova la ricorrenza con l'aritmetica, normalizza la descrizione con delle regole, e spendi una chiamata al model solo sulla manciata di stringhe ancora illeggibili dopo.",
    },
    steps: [
      {
        en: "Detect recurrence by grouping on amount and on the interval between charges. Something that appears every thirty or thirty-one days at a similar value is a subscription, and seeing that requires no judgement at all.",
        it: "Rileva la ricorrenza raggruppando per importo e per intervallo fra gli addebiti. Qualcosa che compare ogni trenta o trentun giorni con un valore simile è un abbonamento, e per vederlo non serve nessun giudizio.",
      },
      {
        en: "Normalise descriptors with rules first — strip the processor prefix, the store number, the city. Most of the variation is mechanical and it disappears for nothing.",
        it: "Normalizza prima le descrizioni con delle regole: togli il prefisso del circuito, il numero del punto vendita, la città. Gran parte della variazione è meccanica e sparisce a costo zero.",
      },
      {
        en: "Use the model only on the descriptors that survive that, and only to answer one question: what company is this. Thirty calls instead of four thousand is the difference between a script and a project.",
        it: "Usa il model solo sulle descrizioni che sopravvivono, e solo per rispondere a una domanda: di che azienda si tratta. Trenta chiamate invece di quattromila è la differenza fra uno script e un progetto.",
      },
      {
        en: "Allow a tolerance on both amount and date so that a price rise or a weekend shift does not start a new series. That tolerance is a number to tune against her own statements, not a prompt to rewrite.",
        it: "Ammetti una tolleranza sia sull'importo sia sulla data, così che un aumento di prezzo o uno slittamento nel fine settimana non facciano partire una serie nuova. Quella tolleranza è un numero da tarare sui suoi estratti conto, non un prompt da riscrivere.",
      },
      {
        en: "Show each series with every charge in it, dates and amounts. She recognises a subscription instantly from its history and not at all from a name and a number.",
        it: "Mostra ogni serie con tutti i suoi addebiti, date e importi. Un abbonamento lo riconosce all'istante dalla sua storia, e per niente da un nome e una cifra.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Sending four thousand transaction lines to a model to ask which of them are recurring. It costs real money, takes minutes, and answers a question a group-by would have answered exactly and instantly.",
      it: "Mandare quattromila righe di movimenti a un model per chiedere quali siano ricorrenti. Costa soldi veri, ci mette minuti, e risponde a una domanda a cui un raggruppamento avrebbe risposto in modo esatto e istantaneo.",
    },
    {
      en: "Matching on the descriptor string. The same subscription bills as three different strings across two years, and each variant quietly becomes its own series.",
      it: "Confrontare la stringa della descrizione. Lo stesso abbonamento si addebita con tre stringhe diverse in due anni, e ogni variante diventa in silenzio una serie a sé.",
    },
    {
      en: "Requiring an exact amount. Every price increase splits one subscription into two, and the one that has been quietly climbing for eighteen months is the one worth finding.",
      it: "Pretendere un importo identico. Ogni aumento spezza un abbonamento in due, e quello che sale in silenzio da diciotto mesi è proprio quello che varrebbe la pena trovare.",
    },
    {
      en: "Confident guesses about what an opaque descriptor is. \"Probably a music service\" is not something she can act on, and deciding what to cancel was the entire exercise.",
      it: "Ipotesi sicure di sé su cosa sia una descrizione opaca. «Probabilmente un servizio di musica» non è qualcosa su cui possa agire, e decidere cosa disdire era tutto l'esercizio.",
    },
  ],
  starterPrompt: {
    en: "I want to find every recurring charge in two years of bank statements — about 4,000 lines, maybe 30 of them interesting. The merchant descriptors are unreadable strings. Push back on where I'm planning to put a model in this; I suspect most of it isn't a language problem at all.",
    it: "Voglio trovare ogni addebito ricorrente in due anni di estratti conto: circa 4.000 righe, forse 30 interessanti. Le descrizioni degli esercenti sono stringhe illeggibili. Contesta pure dove ho intenzione di mettere un model qui dentro: sospetto che gran parte non sia affatto un problema di linguaggio.",
  },
};
