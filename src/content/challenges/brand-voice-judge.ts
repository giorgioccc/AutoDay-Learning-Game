import type { Challenge } from "../types";

export const brandVoiceJudge: Challenge = {
  id: "brand-voice-judge",
  mode: "deep",
  level: "advanced",
  category: "marketing-content",
  estimatedMinutes: 240,
  title: {
    en: "Is This On Brand",
    it: "Questo è in linea col brand",
  },
  scenario: {
    en: "Eight writers produce about forty pieces a week for one client, and Federico reads every one of them before it ships because he is the only person who reliably knows when something is off. The brand guide is twenty pages and describes the voice as \"warm but never chummy, expert but never lecturing\". Federico is now the bottleneck and he is starting to skim.",
    it: "Otto copywriter producono circa quaranta pezzi a settimana per un cliente, e Federico li legge tutti prima della pubblicazione perché è l'unico che capisce con affidabilità quando qualcosa stona. Le linee guida del brand sono venti pagine e descrivono il tono come «caldo ma mai confidenziale, competente ma mai cattedratico». Federico ormai è il collo di bottiglia, e ha iniziato a leggere in diagonale.",
  },
  constraints: [
    {
      en: "Two senior people given the same piece do not give it the same verdict. Nobody has ever measured how often they disagree.",
      it: "Due persone senior a cui viene dato lo stesso pezzo non danno lo stesso giudizio. Nessuno ha mai misurato quanto spesso siano in disaccordo.",
    },
    {
      en: "A score without a reason is worse than no score. A writer told \"6/10 on brand\" cannot do anything except resent it.",
      it: "Un punteggio senza una motivazione è peggio di nessun punteggio. A un copywriter che si sente dire «6/10 come tono di voce» non resta che prendersela.",
    },
    {
      en: "The guide describes the voice in adjectives. None of them are things you can check a sentence against.",
      it: "Le linee guida descrivono il tono con degli aggettivi. Nessuno di essi è qualcosa contro cui si possa verificare una frase.",
    },
    {
      en: "Blocking good work costs a writer's willingness to use the tool at all; passing off-brand work costs the client relationship.",
      it: "Bloccare del buon lavoro costa la disponibilità di un copywriter a usare il tool; lasciar passare un pezzo fuori tono costa il rapporto col cliente.",
    },
  ],
  nudge: {
    en: "You cannot build a judge until you can say what it would mean for the judge to be wrong. Work out where that answer comes from, and who is entitled to produce it, before you write a single instruction.",
    it: "Non puoi costruire un giudice finché non sai dire cosa significherebbe che il giudice ha sbagliato. Capisci da dove viene quella risposta, e chi ha il diritto di produrla, prima di scrivere una sola istruzione.",
  },
  approach: {
    summary: {
      en: "Measure human agreement first to find the ceiling, convert the guide's adjectives into contrastive examples, and score per dimension with the offending span cited.",
      it: "Misura prima l'accordo fra le persone per trovare il tetto massimo, trasforma gli aggettivi delle linee guida in esempi contrastivi, e assegna punteggi per dimensione citando il passaggio incriminato.",
    },
    steps: [
      {
        en: "Before any model work, have Federico and one other senior person independently score forty past pieces. Their level of agreement is the ceiling on anything you build, and it is often lower than anyone expects.",
        it: "Prima di qualsiasi lavoro sul model, fai valutare in modo indipendente a Federico e a un'altra persona senior quaranta pezzi passati. Il loro livello di accordo è il tetto massimo di qualunque cosa costruirai, e spesso è più basso di quanto tutti si aspettino.",
      },
      {
        en: "Turn each adjective into pairs of near-identical real sentences where one is on brand and the other is not, with the reason written out. \"Warm but never chummy\" only becomes checkable when you can show the boundary.",
        it: "Trasforma ogni aggettivo in coppie di frasi reali quasi identiche, in cui una è in linea col brand e l'altra no, con la motivazione scritta. «Caldo ma mai confidenziale» diventa verificabile solo quando puoi mostrare dov'è il confine.",
      },
      {
        en: "Score named dimensions separately rather than producing one number. A composite tells a writer nothing and hides which dimension is actually driving the verdict.",
        it: "Assegna punteggi separati a dimensioni con un nome, invece di produrre un unico numero. Un punteggio complessivo non dice niente a chi scrive e nasconde quale dimensione stia davvero determinando il giudizio.",
      },
      {
        en: "Require the judge to quote the specific span that triggered each deduction and point at the guide passage it violates. If it cannot locate the problem, it does not have one.",
        it: "Imponi al giudice di citare il passaggio esatto che ha causato ogni penalizzazione e di indicare il punto delle linee guida che viola. Se non riesce a localizzare il problema, non ha un problema.",
      },
      {
        en: "Calibrate against the human-scored set and re-run that check whenever the guide, the instructions or the model changes. A judge is a measuring instrument and measuring instruments drift.",
        it: "Calibra contro l'insieme valutato dalle persone e rifai quel controllo ogni volta che cambiano le linee guida, le istruzioni o il model. Un giudice è uno strumento di misura, e gli strumenti di misura si tarano male nel tempo.",
      },
      {
        en: "Ship it as advice to the writer before publication, not as a gate. The gate is a decision you make later, once you know the agreement number.",
        it: "Rilascialo come suggerimento a chi scrive prima della pubblicazione, non come blocco. Il blocco è una decisione che prendi dopo, quando conosci il numero dell'accordo.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Building the judge with no human-scored set behind it. Every prompt change produces different scores, all of them plausible, and there is no fact of the matter to compare against — so the tuning converges on whatever the model already preferred.",
      it: "Costruire il giudice senza dietro un insieme valutato da persone. Ogni modifica al prompt produce punteggi diversi, tutti plausibili, e non c'è nessun dato di fatto con cui confrontarli: così la messa a punto converge su ciò che il model già preferiva.",
    },
    {
      en: "Judges reward length, polish and vocabulary. A flat, plain, perfectly on-brand paragraph scores below an ornate off-brand one, and this bias is invisible until you look at the score distribution by word count.",
      it: "I giudici premiano lunghezza, levigatezza e ricchezza lessicale. Un paragrafo piano, semplice e perfettamente in linea col brand prende meno di uno ornato e fuori tono, e questo bias resta invisibile finché non guardi la distribuzione dei punteggi per numero di parole.",
    },
    {
      en: "The same piece scored twice on different days gets different numbers. Writers spot this within a week and the tool loses all authority — which matters more here than the average accuracy does.",
      it: "Lo stesso pezzo valutato due volte in giorni diversi prende punteggi diversi. I copywriter se ne accorgono nel giro di una settimana e il tool perde ogni autorevolezza, il che qui conta più dell'accuratezza media.",
    },
    {
      en: "Federico's own verdicts are not neutral ground truth — he is one taste, and the client is another. Calibrating perfectly to him builds a machine that reproduces his blind spots at forty pieces a week.",
      it: "I giudizi di Federico non sono un dato di fatto neutrale: è un gusto, e il cliente ne è un altro. Calibrare perfettamente su di lui costruisce una macchina che riproduce i suoi punti ciechi al ritmo di quaranta pezzi a settimana.",
    },
  ],
  starterPrompt: {
    en: "I want to check ~40 pieces a week against a brand guide before a human reviewer sees them, giving writers a per-dimension score with the exact phrase that caused it. Before we design the judge, help me plan how I'd measure whether two human reviewers even agree with each other — I suspect that number determines what's worth building.",
    it: "Voglio verificare ~40 pezzi a settimana contro le linee guida del brand prima che li veda un revisore umano, dando ai copywriter un punteggio per dimensione con la frase esatta che l'ha causato. Prima di progettare il giudice, aiutami a pianificare come misurerei se due revisori umani sono anche solo d'accordo fra loro: sospetto che sia quel numero a determinare cosa valga la pena costruire.",
  },
};
