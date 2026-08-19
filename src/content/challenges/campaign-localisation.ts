import type { Challenge } from "../types";

export const campaignLocalisation: Challenge = {
  id: "campaign-localisation",
  mode: "deep",
  level: "advanced",
  category: "marketing-content",
  estimatedMinutes: 300,
  title: {
    en: "Four Markets, One Campaign",
    it: "Quattro mercati, una campagna",
  },
  scenario: {
    en: "Nora signs off an English campaign and then waits three weeks while an agency turns it into German, French, Spanish and Polish. When it comes back, the local teams rewrite about half of it — not because the translation is wrong, but because the line the whole campaign rests on does not mean anything in Madrid.",
    it: "Nora approva una campagna in inglese e poi aspetta tre settimane mentre un'agenzia la trasforma in tedesco, francese, spagnolo e polacco. Quando torna indietro, i team locali ne riscrivono circa la metà: non perché la traduzione sia sbagliata, ma perché la frase su cui poggia tutta la campagna a Madrid non vuol dire niente.",
  },
  constraints: [
    {
      en: "What the local teams fix and what the agency was paid to fix are two different problems, and only one of them is translation.",
      it: "Ciò che sistemano i team locali e ciò per cui è stata pagata l'agenzia sono due problemi diversi, e solo uno dei due è la traduzione.",
    },
    {
      en: "Claims are regulated differently per market. A guarantee that is fine in one country is not permitted in another, and translating it accurately is exactly the wrong outcome.",
      it: "Le promesse commerciali sono regolate diversamente in ogni mercato. Una garanzia che va bene in un paese non è ammessa in un altro, e tradurla fedelmente è esattamente l'esito sbagliato.",
    },
    {
      en: "Some copy sits inside images with fixed layouts. German runs about a third longer than English and the box does not grow.",
      it: "Parte dei testi sta dentro immagini con layout fissi. Il tedesco è circa un terzo più lungo dell'inglese e la casella non si allarga.",
    },
    {
      en: "Nobody at head office reads Polish. Whatever comes out in Polish will be judged on how confident it looks.",
      it: "In sede nessuno legge il polacco. Qualunque cosa esca in polacco verrà giudicata da quanto sembra sicura di sé.",
    },
  ],
  nudge: {
    en: "You are not moving a message between languages. You are rebuilding an argument for people who do not share the assumption it was resting on. Decide which parts of the campaign are the argument and which are only its wrapping — they cannot be handled the same way.",
    it: "Non stai spostando un messaggio da una lingua all'altra. Stai ricostruendo un'argomentazione per persone che non condividono il presupposto su cui poggiava. Decidi quali parti della campagna sono l'argomentazione e quali solo il suo involucro: non si possono trattare allo stesso modo.",
  },
  approach: {
    summary: {
      en: "Classify every string by how much freedom it is allowed, band the automation accordingly, and treat the local reviewer's edits as the output the system is optimising against.",
      it: "Classifica ogni stringa in base a quanta libertà le è concessa, gradua l'automazione di conseguenza, e considera le correzioni del revisore locale come l'output rispetto a cui il sistema si ottimizza.",
    },
    steps: [
      {
        en: "Split the campaign into three kinds of string: things that must be carried across literally, things that may be re-argued for the market, and things that must be written locally from scratch. This classification is the whole design and it is a human decision.",
        it: "Dividi la campagna in tre tipi di stringa: cose che vanno riportate alla lettera, cose che si possono riargomentare per il mercato, e cose che vanno scritte da zero in loco. Questa classificazione è tutto il design, ed è una decisione umana.",
      },
      {
        en: "Hold a constraint pack per market as configuration: forbidden claims, mandatory disclaimers, the register to address the reader in, and the length ceiling for each fixed layout.",
        it: "Tieni per ogni mercato un pacchetto di vincoli come configurazione: promesse vietate, avvertenze obbligatorie, il registro con cui rivolgersi al lettore, e il tetto di lunghezza per ogni layout fisso.",
      },
      {
        en: "Let the model propose and the local reviewer dispose. The system's job is to reduce how much local rework is needed, which means rework is the number to measure, not translation quality.",
        it: "Il model propone, il revisore locale dispone. Il compito del sistema è ridurre quanto rilavoro serve in loco, il che significa che il numero da misurare è il rilavoro, non la qualità della traduzione.",
      },
      {
        en: "Check length against the real layout, in code, before anything reaches a reviewer. Copy that is perfect and does not fit is copy that will be rewritten by whoever is closest to the deadline.",
        it: "Verifica la lunghezza contro il layout reale, nel codice, prima che qualcosa arrivi a un revisore. Un testo perfetto che non ci sta è un testo che verrà riscritto da chiunque sia più vicino alla scadenza.",
      },
      {
        en: "For the languages head office cannot read, add an independent check that goes back the other way and compare meaning against the source. Treat it as a smoke alarm that catches gross errors, never as evidence the copy is good.",
        it: "Per le lingue che in sede nessuno legge, aggiungi un controllo indipendente che rifaccia il percorso all'indietro e confronta il significato con l'originale. Trattalo come un rilevatore di fumo che intercetta gli errori grossolani, mai come prova che il testo sia buono.",
      },
      {
        en: "Capture what each reviewer changed and why. Those edits are the only description of the local voice that will ever exist in writing, and they are worth more than the brief.",
        it: "Registra cosa ha cambiato ogni revisore e perché. Quelle correzioni sono l'unica descrizione della voce locale che esisterà mai per iscritto, e valgono più del brief.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Nobody at head office can evaluate the Polish, so it ships on fluency alone. Fluency is the one property a model always has, which makes it useless as a signal precisely where you have no other one.",
      it: "In sede nessuno sa valutare il polacco, quindi va in produzione solo perché scorre bene. La scorrevolezza è l'unica proprietà che un model ha sempre, il che la rende inutile come segnale proprio dove non ne hai altri.",
    },
    {
      en: "A regulated claim translated faithfully into a market where making it is not allowed. The translation is correct, the campaign is not legal, and every quality check you would naturally write passes it.",
      it: "Una promessa regolamentata tradotta fedelmente in un mercato in cui non è consentito farla. La traduzione è corretta, la campagna non è a norma, e ogni controllo di qualità che ti verrebbe naturale scrivere la fa passare.",
    },
    {
      en: "Formality drifts inside one campaign. The headline addresses the reader informally, the small print does not, and in German or French that inconsistency reads as carelessness far louder than a clumsy sentence would.",
      it: "Il registro cambia dentro la stessa campagna. Il titolo dà del tu al lettore, le note in fondo danno del lei, e in tedesco o in francese quell'incoerenza suona come sciatteria molto più di una frase goffa.",
    },
    {
      en: "Measuring the system on translation accuracy. It will score well while the local teams keep rewriting exactly as much as before, because accuracy was never the thing they were fixing.",
      it: "Misurare il sistema sull'accuratezza della traduzione. Otterrà buoni punteggi mentre i team locali continuano a riscrivere esattamente quanto prima, perché l'accuratezza non è mai stata la cosa che stavano sistemando.",
    },
  ],
  starterPrompt: {
    en: "I need to take an English campaign into German, French, Spanish and Polish. Local teams currently rewrite half of it, claims are regulated differently per market, some copy sits in fixed-width image layouts, and nobody here reads Polish. Before designing anything, help me work out how I'd classify each string by how much freedom it should be given — and what I'd measure to know if this is working at all.",
    it: "Devo portare una campagna inglese in tedesco, francese, spagnolo e polacco. Oggi i team locali ne riscrivono metà, le promesse commerciali sono regolate diversamente in ogni mercato, parte dei testi sta in layout a larghezza fissa, e qui nessuno legge il polacco. Prima di progettare qualsiasi cosa, aiutami a capire come classificherei ogni stringa in base a quanta libertà va concessa, e cosa misurerei per sapere se funziona.",
  },
};
