import type { Challenge } from "../types";

export const metricCommentary: Challenge = {
  id: "metric-commentary",
  mode: "quick",
  level: "beginner",
  category: "data-research",
  estimatedMinutes: 40,
  title: {
    en: "The Dashboard Nobody Opens",
    it: "La dashboard che nessuno apre",
  },
  scenario: {
    en: "Pietro built the operations dashboard everybody asked for. It has nine metrics on it, it is accurate, and the analytics show it gets opened about twice a week. He wants to push a short note into the team channel each morning instead, so that people find out something changed without having to go looking.",
    it: "Pietro ha costruito la dashboard operativa che tutti avevano chiesto. Ha nove metriche, è accurata, e le statistiche dicono che viene aperta circa due volte a settimana. Vorrebbe invece mandare ogni mattina una nota breve nel canale del team, così che le persone scoprano che qualcosa è cambiato senza doverlo andare a cercare.",
  },
  constraints: [
    {
      en: "On most days nothing meaningful has happened. A message every morning that says so is muted within a fortnight, and a muted channel does not come back.",
      it: "Nella maggior parte dei giorni non è successo niente di significativo. Un messaggio ogni mattina che lo comunica viene silenziato in due settimane, e un canale silenziato non torna indietro.",
    },
    {
      en: "Normal is not one number. Mondays do not look like Saturdays and December does not look like October.",
      it: "Il normale non è un numero solo. I lunedì non assomigliano ai sabati e dicembre non assomiglia a ottobre.",
    },
    {
      en: "The team can already see the numbers. What they cannot see is whether today's number is surprising.",
      it: "Il team i numeri li vede già. Quello che non vede è se il numero di oggi sia sorprendente.",
    },
  ],
  nudge: {
    en: "Writing the sentence is the easy part. Deciding whether today has earned a sentence is the whole problem — and notice that \"the number moved\" and \"something happened\" are not the same claim.",
    it: "Scrivere la frase è la parte facile. Decidere se oggi si è guadagnato una frase è tutto il problema — e nota che «il numero si è mosso» e «è successo qualcosa» non sono la stessa affermazione.",
  },
  approach: {
    summary: {
      en: "A deterministic layer decides whether anything is notable, and the model is only invoked on the days it says yes.",
      it: "Un livello deterministico decide se c'è qualcosa di notevole, e il model viene invocato solo nei giorni in cui la risposta è sì.",
    },
    steps: [
      {
        en: "Compute what normal looks like from history, split by weekday and season. Whether a number is surprising is a statistical question and it should be answered before any language is involved.",
        it: "Calcola dallo storico com'è fatto il normale, distinto per giorno della settimana e per stagione. Se un numero sia sorprendente è una domanda statistica, e va risolta prima che entri in gioco il linguaggio.",
      },
      {
        en: "Gate the model call behind that decision. On a quiet day nothing runs at all, which is simultaneously the right product behaviour and the answer to what this costs.",
        it: "Metti la chiamata al model dietro quella decisione. In un giorno tranquillo non gira niente, il che è insieme il comportamento giusto del prodotto e la risposta a quanto costa.",
      },
      {
        en: "When it does run, pass the anomaly with its context — the baseline, the recent trend, what the related metrics did — and ask for what a person should go and check, not for a description of the number.",
        it: "Quando gira, passa l'anomalia con il suo contesto — la baseline, l'andamento recente, cosa hanno fatto le metriche collegate — e chiedi cosa una persona dovrebbe andare a controllare, non una descrizione del numero.",
      },
      {
        en: "Group correlated anomalies into one message. One incident moves five metrics, and five separate posts about one incident is the fastest way to teach a channel to ignore you.",
        it: "Raggruppa le anomalie correlate in un unico messaggio. Un solo incidente muove cinque metriche, e cinque post separati su un solo incidente sono il modo più rapido per insegnare a un canale a ignorarti.",
      },
      {
        en: "Make the silence legible: a short weekly note confirming the quiet days were genuinely quiet, so nobody has to wonder whether the thing is still running.",
        it: "Rendi leggibile il silenzio: una nota settimanale breve che conferma che i giorni tranquilli erano davvero tranquilli, così nessuno deve chiedersi se la cosa stia ancora girando.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The baseline is computed once at build time and never again. Six months later \"normal\" means last spring, and the tool spends its days either crying wolf or saying nothing while the business changes shape underneath it.",
      it: "La baseline viene calcolata una volta in fase di realizzazione e mai più. Sei mesi dopo «normale» significa la primavera scorsa, e il tool passa le giornate o a gridare al lupo o a tacere mentre l'azienda cambia forma sotto di lui.",
    },
    {
      en: "Posting daily regardless of content. The cost is not the model call, it is the attention, and it is spent permanently — once the channel is muted no improvement to the message will bring anyone back.",
      it: "Pubblicare ogni giorno a prescindere dal contenuto. Il costo non è la chiamata al model, è l'attenzione, e la spendi in modo definitivo: una volta silenziato il canale, nessun miglioramento del messaggio riporterà indietro qualcuno.",
    },
    {
      en: "Commentary that restates the metric. \"Orders were down 12% yesterday\" tells the team what a number already told them and consumes the one message a day they were willing to read.",
      it: "Un commento che ripete la metrica. «Ieri gli ordini sono calati del 12%» dice al team ciò che un numero gli aveva già detto e consuma l'unico messaggio al giorno che era disposto a leggere.",
    },
  ],
  starterPrompt: {
    en: "I want a short daily note in a team channel about our ops metrics, instead of a dashboard nobody opens. Most days nothing has actually happened, and normal varies by weekday and season. Start by asking me how I'd decide whether a given day deserves a message at all — I think that's a different question from writing the message.",
    it: "Voglio una breve nota quotidiana in un canale di team sulle nostre metriche operative, al posto di una dashboard che nessuno apre. Nella maggior parte dei giorni non è successo davvero niente, e il normale varia per giorno della settimana e per stagione. Parti chiedendomi come deciderei se un dato giorno meriti un messaggio: credo sia una domanda diversa dallo scrivere il messaggio.",
  },
};
