import type { Challenge } from "../types";

export const priceWatch: Challenge = {
  id: "price-watch",
  mode: "deep",
  level: "advanced",
  category: "data-research",
  estimatedMinutes: 360,
  title: {
    en: "The Price Watch",
    it: "Il monitoraggio prezzi",
  },
  scenario: {
    en: "Elena sells kitchen equipment online and keeps a spreadsheet of sixty competitor products across nine retailer sites. Twice a week she opens all sixty pages, notes any price that moved, and adjusts her own. The sites get redesigned without warning, and last month she copied a bundle price into the column for a single unit.",
    it: "Elena vende attrezzature da cucina online e tiene un foglio di calcolo con sessanta prodotti della concorrenza su nove siti di rivenditori. Due volte a settimana apre tutte e sessanta le pagine, annota i prezzi che si sono mossi e aggiusta i suoi. I siti vengono ridisegnati senza preavviso, e il mese scorso ha copiato il prezzo di un bundle nella colonna di un pezzo singolo.",
  },
  constraints: [
    {
      en: "Nine sites, nine layouts, no API on any of them. Two of the nine only render the price after the page has run its scripts.",
      it: "Nove siti, nove layout, nessuna API su nessuno. Due dei nove mostrano il prezzo solo dopo che la pagina ha eseguito i suoi script.",
    },
    {
      en: "A page can show four numbers — list, discounted, per-unit, bundle — and only one of them is the comparable one.",
      it: "Una pagina può mostrare quattro numeri (listino, scontato, al pezzo, bundle) e solo uno è quello confrontabile.",
    },
    {
      en: "A wrong price gets acted on: Elena reprices against it. Silence is recoverable, a confident wrong number is not.",
      it: "Un prezzo sbagliato produce un'azione: Elena ci riallinea i suoi. Il silenzio è recuperabile, un numero sbagliato e sicuro di sé no.",
    },
    {
      en: "It has to run twice a week for months without Elena maintaining it, on a budget that stays sane at 120 page loads a week.",
      it: "Deve girare due volte a settimana per mesi senza che Elena lo mantenga, con un budget che resti sensato su 120 caricamenti di pagina a settimana.",
    },
  ],
  nudge: {
    en: "Reading a price off a page you have seen before and reading one off a page that was redesigned last night are two different problems. Are you paying the cost of the second one on every single run?",
    it: "Leggere un prezzo da una pagina che hai già visto e leggerlo da una pagina ridisegnata stanotte sono due problemi diversi. Stai pagando il costo del secondo a ogni singola esecuzione?",
  },
  approach: {
    summary: {
      en: "Cheap deterministic extraction that a model repairs only when it breaks, with plausibility checks standing between any number and the spreadsheet.",
      it: "Estrazione deterministica economica che un model ripara solo quando si rompe, con controlli di plausibilità piazzati fra qualunque numero e il foglio di calcolo.",
    },
    steps: [
      {
        en: "Store a per-product extraction rule: a selector, and which of the four numbers on the page is the comparable one. Run it first — it is free, and it is right most weeks.",
        it: "Salva per ogni prodotto una regola di estrazione: un selettore, e quale dei quattro numeri sulla pagina è quello confrontabile. Eseguila per prima: è gratis, ed è giusta quasi tutte le settimane.",
      },
      {
        en: "A model call happens only when the rule returns nothing or something implausible. Its job is to look at the page and propose a new rule, which you then store — you are repairing the extractor, not doing the extraction.",
        it: "Una chiamata al model avviene solo quando la regola non restituisce niente o restituisce qualcosa di implausibile. Il suo compito è guardare la pagina e proporre una regola nuova, che poi salvi: stai riparando l'estrattore, non facendo l'estrazione.",
      },
      {
        en: "Between extraction and the spreadsheet, put a check that has nothing to do with AI: is this within a sane band of the last known price, is the currency right, is it a number at all. A forty percent move is a question, not a fact.",
        it: "Fra l'estrazione e il foglio di calcolo metti un controllo che non c'entra niente con l'AI: rientra in una banda sensata rispetto all'ultimo prezzo noto, la valuta è giusta, è davvero un numero. Uno scostamento del quaranta percento è una domanda, non un fatto.",
      },
      {
        en: "Give every stored value a timestamp and a provenance — rule or repair, and which run produced it. When Elena distrusts a number she has to be able to see where it came from.",
        it: "Dai a ogni valore salvato un timestamp e una provenienza: regola o riparazione, e quale esecuzione l'ha prodotto. Quando Elena non si fida di un numero deve poter vedere da dove viene.",
      },
      {
        en: "Model the outcomes as three rather than two: got it, definitely could not get it, got something suspicious. Only the middle one is safe to stay quiet about.",
        it: "Modella gli esiti come tre e non due: ottenuto, sicuramente non ottenuto, ottenuto qualcosa di sospetto. Solo quello di mezzo è sicuro da lasciare in silenzio.",
      },
      {
        en: "Report the health of the run itself: how many rules held, how many were repaired, how many products have been stale for two runs. A monitor that has quietly stopped monitoring is the failure you are really guarding against.",
        it: "Riporta lo stato di salute dell'esecuzione stessa: quante regole hanno tenuto, quante sono state riparate, quanti prodotti sono fermi da due esecuzioni. Un monitor che ha smesso di monitorare in silenzio è il fallimento da cui ti stai davvero difendendo.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Sending every page to a model on every run is the obvious build and the one that quietly costs the most, for a job a stored selector does correctly nine times out of ten.",
      it: "Mandare ogni pagina a un model a ogni esecuzione è la soluzione ovvia e quella che in silenzio costa di più, per un lavoro che un selettore salvato fa bene nove volte su dieci.",
    },
    {
      en: "Asked for the price, a model returns a price. Shown a page with a bundle offer and no unit price, it will still return one — the failure is confident and looks exactly like a success.",
      it: "Se gli chiedi il prezzo, un model restituisce un prezzo. Davanti a una pagina con un'offerta bundle e nessun prezzo unitario ne restituirà comunque uno: il fallimento è sicuro di sé e assomiglia in tutto a un successo.",
    },
    {
      en: "Blocked requests and bot-check pages return a perfectly valid response full of text. Without a check that this is still the product page, the model will happily read a price off a captcha screen.",
      it: "Richieste bloccate e pagine anti-bot restituiscono una risposta perfettamente valida e piena di testo. Senza un controllo che quella sia ancora la pagina del prodotto, il model leggerà volentieri un prezzo da una schermata di captcha.",
    },
    {
      en: "The whole thing decays silently. Three sites change layout over two months, those products stop updating, and the spreadsheet still looks completely full.",
      it: "Il tutto si degrada in silenzio. Tre siti cambiano layout nel giro di due mesi, quei prodotti smettono di aggiornarsi, e il foglio di calcolo continua a sembrare pieno.",
    },
  ],
  starterPrompt: {
    en: "Help me design a twice-weekly competitor price monitor covering sixty products across nine sites. Core idea: stored per-product extraction rules run first, a model call only repairs a rule when it breaks, and a non-AI plausibility check sits between any number and the spreadsheet. Challenge the design before building — especially how I detect that a page is no longer the product page.",
    it: "Aiutami a progettare un monitor bisettimanale dei prezzi della concorrenza per sessanta prodotti su nove siti. Idea di fondo: le regole di estrazione salvate per prodotto girano per prime, una chiamata al model ripara la regola solo quando si rompe, e un controllo di plausibilità non-AI sta fra qualunque numero e il foglio di calcolo. Metti in discussione il design prima di costruire, soprattutto su come rilevo che una pagina non è più quella del prodotto.",
  },
};
