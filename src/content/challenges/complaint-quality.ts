import type { Challenge } from "../types";

export const complaintQuality: Challenge = {
  id: "complaint-quality",
  mode: "deep",
  level: "advanced",
  category: "communication",
  estimatedMinutes: 300,
  title: {
    en: "Scoring the People Who Answer",
    it: "Dare un voto a chi risponde",
  },
  scenario: {
    en: "Halvard's team answers about four thousand written complaints a month. Two supervisors sample two per cent of the replies and score them against a nine-line rubric. The scores go into quarterly conversations with the agents. He wants to score all four thousand, and he has noticed that when both supervisors happen to score the same reply, they often disagree.",
    it: "Il team di Halvard risponde a circa quattromila reclami scritti al mese. Due supervisori ne campionano il due per cento e li valutano con una griglia di nove voci. I punteggi finiscono nei colloqui trimestrali con gli operatori. Lui vorrebbe valutarli tutti e quattromila, e si è accorto che quando capita che entrambi i supervisori valutino la stessa risposta, spesso non sono d'accordo.",
  },
  constraints: [
    {
      en: "Two experienced supervisors scoring the same reply disagree about a third of the time, and each of them is certain.",
      it: "Due supervisori esperti che valutano la stessa risposta non sono d'accordo circa una volta su tre, e ciascuno dei due è convinto di sé.",
    },
    {
      en: "The scores go into performance conversations. A number attached to a person's name gets treated as a fact about that person.",
      it: "I punteggi finiscono nei colloqui di valutazione. Un numero attaccato al nome di una persona viene trattato come un fatto su quella persona.",
    },
    {
      en: "One rubric line is \"empathy\". Nobody has ever defined it, and everybody scores it.",
      it: "Una voce della griglia è «empatia». Nessuno l'ha mai definita, e tutti la valutano.",
    },
    {
      en: "Going from two per cent to all of it is the entire point, and it is also what makes a wrong score cheap to produce and expensive to receive.",
      it: "Passare dal due per cento alla totalità è tutto il senso dell'operazione, ed è anche ciò che rende un punteggio sbagliato economico da produrre e caro da ricevere.",
    },
  ],
  nudge: {
    en: "Before you can tell whether this works, you need something to compare it against. Look hard at what you already have, and at whether it agrees with itself.",
    it: "Prima di poter dire se funziona, ti serve qualcosa con cui confrontarlo. Guarda bene ciò che hai già, e chiediti se sia d'accordo con sé stesso.",
  },
  approach: {
    summary: {
      en: "Measure the humans first, hold the tool to whatever ceiling that reveals, and keep the output away from anything that touches a person's record.",
      it: "Misura prima gli esseri umani, tieni il tool al soffitto che ne emerge, e tieni l'output lontano da qualsiasi cosa tocchi il fascicolo di una persona.",
    },
    steps: [
      {
        en: "Have several supervisors score the same set independently, and measure how often they agree, line by line. That number is the ceiling — nothing can be more right than the definition of right.",
        it: "Fa' valutare lo stesso insieme a più supervisori in modo indipendente, e misura quanto spesso concordano, voce per voce. Quel numero è il soffitto: niente può essere più giusto della definizione di giusto.",
      },
      {
        en: "Delete or redefine the lines they do not agree on. A criterion two experienced people score differently is not a criterion, and automating it only industrialises the disagreement.",
        it: "Elimina o ridefinisci le voci su cui non concordano. Un criterio che due persone esperte valutano diversamente non è un criterio, e automatizzarlo non fa che industrializzare il disaccordo.",
      },
      {
        en: "Build the evaluation set from cases with a settled answer — appeals that were ruled on, replies several supervisors scored identically — and freeze it, so that a change to the prompt can be compared to something.",
        it: "Costruisci l'insieme di valutazione da casi con una risposta ormai stabilita — ricorsi decisi, risposte valutate allo stesso modo da più supervisori — e congelalo, così che una modifica al prompt possa essere confrontata con qualcosa.",
      },
      {
        en: "Confine the output to what is checkable: whether each point the customer raised was addressed, whether a decision was stated, whether a reason was given. Leave the rest to a person.",
        it: "Limita l'output a ciò che è verificabile: se ogni punto sollevato dal cliente è stato affrontato, se è stata dichiarata una decisione, se è stata data una motivazione. Il resto lascialo a una persona.",
      },
      {
        en: "Use it to choose what a human reviews, not to produce a score. Surfacing the thirty worst-looking replies out of four thousand is enormously valuable and commits nobody to a number.",
        it: "Usalo per scegliere cosa rivede una persona, non per produrre un punteggio. Far emergere le trenta risposte peggiori su quattromila ha un valore enorme e non impegna nessuno su un numero.",
      },
    ],
  },
  pitfalls: [
    {
      en: "No agreement measurement, so there is nothing to validate against, and the tool's output quietly becomes the definition of quality. It is now correct in the only sense anyone can still test.",
      it: "Nessuna misura di concordanza, quindi non c'è niente contro cui validare, e l'output del tool diventa in silenzio la definizione di qualità. Ora è corretto nell'unico senso che qualcuno possa ancora verificare.",
    },
    {
      en: "Scoring \"empathy\" or \"professionalism\". A model will return a stable number for either, the stability gets mistaken for accuracy, and nobody can afterwards say what was measured.",
      it: "Valutare l'«empatia» o la «professionalità». Un model restituirà un numero stabile per entrambe, la stabilità verrà scambiata per accuratezza, e dopo nessuno saprà dire cosa sia stato misurato.",
    },
    {
      en: "Scores that reach a personnel file. Within a month agents are writing for the rubric — replies get longer, warmer and less useful — and the measurement has changed the thing it was measuring.",
      it: "Punteggi che arrivano in un fascicolo personale. Nel giro di un mese gli operatori scrivono per la griglia — le risposte diventano più lunghe, più calorose e meno utili — e la misura ha cambiato la cosa che stava misurando.",
    },
    {
      en: "Length, vocabulary and politeness markers doing most of the work. The judge rewards the reply that reads well over the one that solved the problem, and the two correlate just enough that nobody notices for a year.",
      it: "Lunghezza, lessico e marcatori di cortesia che fanno quasi tutto il lavoro. Il giudice premia la risposta che si legge bene rispetto a quella che ha risolto il problema, e le due cose sono correlate quel tanto che basta perché nessuno se ne accorga per un anno.",
    },
  ],
  starterPrompt: {
    en: "We hand-score 2% of written complaint replies against a rubric and I want to score all of them. Two supervisors scoring the same reply often disagree, and these scores end up in performance conversations. Before we design a judge, help me work out what I'd validate it against — I suspect my ground truth isn't as solid as I've been treating it.",
    it: "Valutiamo a mano il 2% delle risposte scritte ai reclami con una griglia, e vorrei valutarle tutte. Due supervisori che valutano la stessa risposta spesso non concordano, e questi punteggi finiscono nei colloqui di valutazione. Prima di progettare un giudice, aiutami a capire contro cosa lo validerei: sospetto che il mio riferimento non sia così solido come l'ho trattato finora.",
  },
};
