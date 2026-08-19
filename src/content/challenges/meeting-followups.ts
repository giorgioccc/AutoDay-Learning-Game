import type { Challenge } from "../types";

export const meetingFollowups: Challenge = {
  id: "meeting-followups",
  mode: "quick",
  level: "intermediate",
  category: "communication",
  estimatedMinutes: 40,
  title: {
    en: "Who Owes What",
    it: "Chi deve cosa",
  },
  scenario: {
    en: "Priya facilitates four client calls a week and types rough notes into one scratch file as she goes — fragments, arrows, half-sentences. On Friday she reads back through all four blocks to work out who committed to what, and mails each client their list. By Friday evening she has usually attributed at least one action to the wrong side of the table.",
    it: "Priya conduce quattro call con clienti a settimana e butta gli appunti in un unico file di lavoro mentre parla: frammenti, frecce, mezze frasi. Il venerdì rilegge tutti e quattro i blocchi per capire chi si è impegnato a fare cosa, e manda a ogni cliente la sua lista. Entro sera ha di solito attribuito almeno un'azione al lato sbagliato del tavolo.",
  },
  constraints: [
    {
      en: "The notes never name the speaker. Ownership is implied by phrasing — \"they'll send the file\", \"I'll chase legal\" — and sometimes implied by nothing at all.",
      it: "Gli appunti non nominano mai chi parla. La titolarità è implicita nel modo in cui è scritta la frase — «mandano loro il file», «sento io il legale» — e a volte non è implicita in niente.",
    },
    {
      en: "A line that sounds like a commitment is often just a discussion of one. \"We should probably migrate in Q3\" is not an action item.",
      it: "Una riga che suona come un impegno spesso è solo la discussione di un impegno. «Forse dovremmo migrare nel Q3» non è un action item.",
    },
    {
      en: "The output goes straight to a client, so a confidently invented deadline is worse than a missing one.",
      it: "L'output va dritto a un cliente, quindi una scadenza inventata con sicurezza è peggio di una mancante.",
    },
  ],
  nudge: {
    en: "You are asking for certainty about something the notes are genuinely ambiguous about. What would change if the output had somewhere to put \"I can't tell\"?",
    it: "Stai chiedendo certezza su qualcosa su cui gli appunti sono davvero ambigui. Cosa cambierebbe se l'output avesse un posto dove mettere «non riesco a dirlo»?",
  },
  approach: {
    summary: {
      en: "One structured-output call per meeting, in which uncertainty is a field the model can fill rather than something it has to hide.",
      it: "Una chiamata con structured output per riunione, in cui l'incertezza è un campo che il model può riempire invece di qualcosa che deve nascondere.",
    },
    steps: [
      {
        en: "Split the scratch file by meeting before the call. Four meetings sharing one context is four chances to hand an action to the wrong client.",
        it: "Dividi il file per riunione prima della chiamata. Quattro riunioni che condividono un unico contesto sono quattro occasioni per consegnare un'azione al cliente sbagliato.",
      },
      {
        en: "Give each meeting its two sides by name up front — Priya's side and the client's — so that \"we\" and \"they\" have something concrete to resolve against.",
        it: "Dai a ogni riunione i suoi due lati per nome fin dall'inizio, il lato di Priya e quello del cliente, così che «noi» e «loro» abbiano qualcosa di concreto a cui agganciarsi.",
      },
      {
        en: "Type each action item with an owner, a due date, and an explicit confidence or \"unclear\" marker on both of them. That marker is the whole point of the design, not a nicety.",
        it: "Tipizza ogni action item con owner, scadenza e un marcatore esplicito di confidenza o «non chiaro» su entrambi. Quel marcatore è il senso stesso del design, non un abbellimento.",
      },
      {
        en: "Render anything marked unclear in a separate block Priya resolves before the mail goes out. Two minutes of her attention on four ambiguous lines beats twenty on forty clear ones.",
        it: "Mostra tutto ciò che è marcato non chiaro in un blocco separato che Priya risolve prima che parta la mail. Due minuti della sua attenzione su quattro righe ambigue valgono più di venti su quaranta righe chiare.",
      },
      {
        en: "Return the source fragment alongside each item, so Priya can see which of her own arrows produced it.",
        it: "Restituisci il frammento di origine accanto a ogni elemento, così Priya vede quale delle sue frecce l'ha prodotto.",
      },
    ],
  },
  pitfalls: [
    {
      en: "Give a model an owner field and no way to abstain and it will always fill it in. Required fields manufacture confidence that was never in the notes.",
      it: "Dai a un model un campo owner e nessun modo di astenersi, e lo riempirà sempre. I campi obbligatori fabbricano una sicurezza che negli appunti non c'era.",
    },
    {
      en: "Relative dates are a quiet disaster. \"By next Thursday\" is meaningless without the meeting date in context, and the model will pick a plausible one on its own.",
      it: "Le date relative sono un disastro silenzioso. «Entro giovedì prossimo» non significa niente senza la data della riunione nel contesto, e il model ne sceglierà una plausibile per conto suo.",
    },
    {
      en: "Discussion gets promoted to commitment. Without a stated bar for what counts as an action item, the list doubles in length and halves in usefulness.",
      it: "La discussione viene promossa a impegno. Senza un criterio dichiarato su cosa conta come action item, la lista raddoppia di lunghezza e dimezza di utilità.",
    },
  ],
  starterPrompt: {
    en: "Help me design an action-item extractor for messy, unattributed meeting notes. Key requirement: owner and due date each carry a confidence marker, and anything unclear surfaces separately for a human to resolve rather than being guessed. Start by pushing back on my schema — ask what should happen when a line is ambiguous about who owns it.",
    it: "Aiutami a progettare un estrattore di action item da appunti di riunione disordinati e senza attribuzione. Requisito chiave: owner e scadenza portano ciascuno un marcatore di confidenza, e tutto ciò che non è chiaro emerge a parte perché lo risolva una persona, invece di essere indovinato. Parti mettendo in discussione il mio schema: chiedimi cosa deve succedere quando una riga è ambigua su chi sia l'owner.",
  },
};
