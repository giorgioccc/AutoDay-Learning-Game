import type { Challenge } from "../types";

export const errorGrouping: Challenge = {
  id: "error-grouping",
  mode: "quick",
  level: "intermediate",
  category: "software-dev",
  estimatedMinutes: 45,
  title: {
    en: "Three Hundred Issues, Nobody Triaging",
    it: "Trecento issue, nessuno che le smista",
  },
  scenario: {
    en: "Nils's service produces about four thousand error events a day. The monitoring tool has already grouped them into three hundred issues, which nobody triages, because three hundred is exactly as unusable as four thousand. One real bug appears in the list six times under six different fingerprints, and one fingerprint quietly contains three unrelated bugs.",
    it: "Il servizio di Nils produce circa quattromila eventi di errore al giorno. Il tool di monitoraggio li ha già raggruppati in trecento issue, che nessuno smista, perché trecento è esattamente inutilizzabile quanto quattromila. Un bug reale compare nella lista sei volte sotto sei impronte diverse, e un'impronta contiene in silenzio tre bug che non c'entrano nulla fra loro.",
  },
  constraints: [
    {
      en: "Four thousand events a day, and around ninety-five per cent of them are repetitions of something already known about.",
      it: "Quattromila eventi al giorno, e circa il novantacinque per cento sono ripetizioni di qualcosa di già noto.",
    },
    {
      en: "Error volume spikes during an incident. That is when the tool is most needed and when anything priced per event becomes most expensive.",
      it: "Il volume di errori esplode durante un incidente. È il momento in cui il tool serve di più ed è il momento in cui qualsiasi cosa tariffata a evento diventa più costosa.",
    },
    {
      en: "A new error that has happened twice matters more than a known one that has happened three thousand times, and sorting by volume hides exactly that.",
      it: "Un errore nuovo capitato due volte conta più di uno noto capitato tremila volte, e ordinare per volume nasconde esattamente quello.",
    },
  ],
  nudge: {
    en: "You are not grouping events, you are trying to name problems. Ask what evidence would tell you that two errors are the same problem — then check whether any of that evidence is in a stack trace.",
    it: "Non stai raggruppando eventi, stai cercando di dare un nome a dei problemi. Chiediti quale evidenza ti direbbe che due errori sono lo stesso problema, e poi verifica se quella evidenza si trova in uno stack trace.",
  },
  approach: {
    summary: {
      en: "Collapse deterministically and reason only over representatives, with a stable problem identity that tomorrow's events can attach to.",
      it: "Collassa in modo deterministico e ragiona solo sui rappresentanti, con un'identità di problema stabile a cui gli eventi di domani si possano agganciare.",
    },
    steps: [
      {
        en: "Reduce events to representatives before any model is involved. The cost of the system has to be a function of how many distinct problems exist, not of how much traffic the service is taking.",
        it: "Riduci gli eventi a rappresentanti prima che entri in gioco qualsiasi model. Il costo del sistema dev'essere funzione di quanti problemi distinti esistono, non di quanto traffico sta prendendo il servizio.",
      },
      {
        en: "Give the model the representative plus the code around the failing frame and what the request was doing. \"Same problem\" is a claim about cause, and a stack trace only carries the symptom.",
        it: "Passa al model il rappresentante più il codice attorno al frame che ha fallito e cosa stava facendo la richiesta. «Stesso problema» è un'affermazione sulla causa, e uno stack trace porta solo il sintomo.",
      },
      {
        en: "Produce a stable identity for each problem so that tomorrow's events attach to it instead of forming a new group. Designing something that survives a redeploy is the hard part of this whole exercise.",
        it: "Produci un'identità stabile per ogni problema, così che gli eventi di domani vi si aggancino invece di formare un gruppo nuovo. Progettare qualcosa che sopravviva a un rilascio è la parte difficile di tutto l'esercizio.",
      },
      {
        en: "Answer \"is this new\" deterministically and separately from \"does this matter\". Novelty is cheap and exact; importance needs judgement, and mixing them makes both unreliable.",
        it: "Rispondi a «è nuovo?» in modo deterministico e separato da «conta qualcosa?». La novità è economica ed esatta; l'importanza richiede giudizio, e mescolarle rende entrambe inaffidabili.",
      },
      {
        en: "Put a ceiling on what the system may spend per window, and decide in advance what it drops when it hits the ceiling. That decision gets made during an incident either way — better to make it now.",
        it: "Metti un tetto a quanto il sistema può spendere per finestra temporale, e decidi in anticipo cosa scarta quando lo raggiunge. Quella decisione verrà presa comunque durante un incidente: meglio prenderla adesso.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Cost proportional to event volume means the bill peaks during the incident. The system becomes most expensive at the moment it becomes most useful, and somebody will rate-limit it at exactly the wrong time.",
      it: "Un costo proporzionale al volume di eventi significa che la spesa esplode durante l'incidente. Il sistema diventa più costoso proprio quando diventa più utile, e qualcuno lo limiterà esattamente nel momento sbagliato.",
    },
    {
      en: "Group identity that is not stable across deploys. Line numbers shift, every problem looks new on release day, and the triage queue resets itself every time anyone ships.",
      it: "Un'identità di gruppo non stabile fra un rilascio e l'altro. I numeri di riga si spostano, il giorno del rilascio ogni problema sembra nuovo, e la coda di smistamento si azzera ogni volta che qualcuno pubblica.",
    },
    {
      en: "Two unrelated bugs merged because they share a generic exception type. Somebody fixes one, closes the group, and the other one stops being visible entirely.",
      it: "Due bug scollegati fusi insieme perché condividono un tipo di eccezione generico. Qualcuno ne sistema uno, chiude il gruppo, e l'altro smette completamente di essere visibile.",
    },
  ],
  starterPrompt: {
    en: "I have ~4,000 error events a day already grouped into 300 useless issues — one bug split six ways, one group hiding three bugs. I need the cost not to scale with traffic, because traffic spikes during incidents. Ask me what evidence I think actually determines that two errors are the same problem, and where that evidence would have to come from.",
    it: "Ho ~4.000 eventi di errore al giorno già raggruppati in 300 issue inutili: un bug spezzato in sei, un gruppo che ne nasconde tre. Ho bisogno che il costo non scali col traffico, perché il traffico esplode durante gli incidenti. Chiedimi quale evidenza secondo me determina davvero che due errori sono lo stesso problema, e da dove dovrebbe arrivare quella evidenza.",
  },
};
