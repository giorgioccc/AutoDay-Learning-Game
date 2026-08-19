import type { Challenge } from "../types";

export const recipesToList: Challenge = {
  id: "recipes-to-list",
  mode: "quick",
  level: "beginner",
  category: "personal",
  estimatedMinutes: 25,
  title: {
    en: "Two Recipes Both Want Onions",
    it: "Due ricette vogliono entrambe le cipolle",
  },
  scenario: {
    en: "Soraya plans five dinners on a Sunday from recipes scattered across bookmarks, a photo of a cookbook page and a note in her phone. Then she writes one shopping list by hand, going back and forth between the five, and every week she buys a second jar of something she already has.",
    it: "La domenica Soraya pianifica cinque cene partendo da ricette sparse fra segnalibri, la foto di una pagina di un libro di cucina e un appunto sul telefono. Poi scrive a mano un'unica lista della spesa, saltando avanti e indietro fra le cinque, e ogni settimana compra un secondo barattolo di qualcosa che ha già.",
  },
  constraints: [
    {
      en: "The recipes come from six different places and no two of them write a quantity the same way.",
      it: "Le ricette vengono da sei posti diversi e non ce ne sono due che scrivano una quantità allo stesso modo.",
    },
    {
      en: "Adding quantities together means converting between counts, weights and volumes, and half those conversions depend on which ingredient it is.",
      it: "Sommare le quantità significa convertire fra pezzi, pesi e volumi, e metà di quelle conversioni dipendono da quale ingrediente sia.",
    },
    {
      en: "She already owns olive oil. A list that sends her to buy things sitting in her cupboard gets abandoned by the third week.",
      it: "L'olio d'oliva ce l'ha già. Una lista che la manda a comprare cose che stanno nel suo mobiletto viene abbandonata entro la terza settimana.",
    },
  ],
  nudge: {
    en: "Pulling the ingredients out of one recipe is the part that looks like the problem. Try writing down by hand what has to happen when two of them both want onions.",
    it: "Tirare fuori gli ingredienti da una singola ricetta è la parte che sembra il problema. Prova a scriverti a mano cosa deve succedere quando due ricette vogliono entrambe le cipolle.",
  },
  approach: {
    summary: {
      en: "Extract per recipe, then merge with arithmetic and a unit table, and print what cannot be combined side by side rather than inventing a number.",
      it: "Estrai ricetta per ricetta, poi unisci con l'aritmetica e una tabella di unità, e stampa affiancato ciò che non si può combinare invece di inventare un numero.",
    },
    steps: [
      {
        en: "Extract each recipe into quantity, unit, ingredient and preparation, keeping the original line of text beside it. Whatever the merge gets wrong later, she can see what it started from.",
        it: "Estrai ogni ricetta in quantità, unità, ingrediente e preparazione, tenendo accanto la riga di testo originale. Qualunque cosa l'unione sbagli dopo, lei può vedere da cosa era partita.",
      },
      {
        en: "Do the merging with rules and a unit table, not with a model. Adding things up is arithmetic, and arithmetic wants to be exact and the same every time.",
        it: "Fa' l'unione con delle regole e una tabella di unità, non con un model. Sommare è aritmetica, e l'aritmetica vuole essere esatta e uguale ogni volta.",
      },
      {
        en: "When two quantities cannot be combined, print both. \"2 onions plus 1 cup chopped\" is a useful line in a shop; a single invented figure is not.",
        it: "Quando due quantità non si possono combinare, stampale entrambe. «2 cipolle più 1 tazza tritata» è una riga utile al supermercato; una cifra unica inventata no.",
      },
      {
        en: "Give staples a standing list she maintains, and subtract it from the result. That subtraction is the difference between a list she uses and a list she rewrites.",
        it: "Dai alle scorte fisse una lista permanente che mantiene lei, e sottraila dal risultato. Quella sottrazione è la differenza fra una lista che usa e una lista che riscrive.",
      },
      {
        en: "Group the output by where things sit in the shop. The list is used walking around a supermarket, not sitting at a table, and recipe order is useless there.",
        it: "Raggruppa l'output per dove stanno le cose nel negozio. La lista si usa girando per un supermercato, non seduti a un tavolo, e lì l'ordine delle ricette non serve a niente.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Density conversions performed silently. A cup of flour becomes a gram figure that is confidently wrong by a third, and nothing on the list indicates that a conversion happened at all.",
      it: "Conversioni di densità fatte in silenzio. Una tazza di farina diventa un numero in grammi sbagliato di un terzo con grande sicurezza, e sulla lista non c'è niente che segnali che una conversione sia mai avvenuta.",
    },
    {
      en: "\"Salt to taste\", \"a handful of parsley\", \"1 large onion or 2 small\". Real recipes are full of quantities that are not numbers, and a schema with a required numeric field turns every one of them into one.",
      it: "«Sale q.b.», «una manciata di prezzemolo», «1 cipolla grande o 2 piccole». Le ricette vere sono piene di quantità che non sono numeri, e uno schema con un campo numerico obbligatorio le trasforma tutte in numeri.",
    },
    {
      en: "Merging on the ingredient name. Spring onions merge into onions, plain flour merges into self-raising, and the merge that matters is the one that ruins the cake.",
      it: "Unire in base al nome dell'ingrediente. I cipollotti si fondono con le cipolle, la farina normale con quella lievitata, e l'unione che conta è quella che rovina il dolce.",
    },
    {
      en: "A list that is technically complete and useless in the shop: recipe by recipe, with the same ingredient appearing four times in four places.",
      it: "Una lista tecnicamente completa e inutile al negozio: ricetta per ricetta, con lo stesso ingrediente che compare quattro volte in quattro punti.",
    },
  ],
  starterPrompt: {
    en: "I plan a week of meals from recipes scattered across bookmarks and screenshots, then write one shopping list. Pulling ingredients out of a single recipe looks easy; combining them across five seems to be where it actually breaks. Ask me what should happen when two recipes want the same ingredient in units that don't add up.",
    it: "Pianifico una settimana di cene con ricette sparse fra segnalibri e screenshot, poi scrivo un'unica lista della spesa. Tirare fuori gli ingredienti da una ricetta sembra facile; combinarli fra cinque sembra il punto in cui si rompe davvero. Chiedimi cosa deve succedere quando due ricette vogliono lo stesso ingrediente in unità che non si sommano.",
  },
};
