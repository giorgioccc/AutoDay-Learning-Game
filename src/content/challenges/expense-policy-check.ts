import type { Challenge } from "../types";

export const expensePolicyCheck: Challenge = {
  id: "expense-policy-check",
  mode: "quick",
  level: "intermediate",
  category: "work-admin",
  estimatedMinutes: 40,
  title: {
    en: "Against the Policy",
    it: "Contro la policy",
  },
  scenario: {
    en: "Twenty-five expense claims land on Davide's desk every week, each a short description, an amount and a photographed receipt. The travel policy is four pages of prose with thresholds, exceptions and one clause that only applies to client-facing roles. Davide knows most of it, re-reads the rest, and still approves things he later has to unpick.",
    it: "Ogni settimana arrivano sulla scrivania di Davide venticinque note spese: una descrizione breve, un importo e la foto di uno scontrino. La policy trasferte è di quattro pagine di testo, con soglie, eccezioni e una clausola che vale solo per i ruoli a contatto con il cliente. Davide ne conosce la maggior parte, il resto se lo rilegge, e approva comunque cose che poi deve disfare.",
  },
  constraints: [
    {
      en: "The policy is short enough to hand over whole. The hard part is not finding the rule, it is proving which rule was applied.",
      it: "La policy è abbastanza corta da poterla passare per intero. La parte difficile non è trovare la regola, è dimostrare quale regola è stata applicata.",
    },
    {
      en: "Davide approves or rejects, not the tool. What he needs is the clause and what it implies, in a form he can forward to the person who submitted the claim.",
      it: "È Davide ad approvare o rifiutare, non il tool. Quello che gli serve è la clausola e cosa comporta, in una forma che può inoltrare a chi ha presentato la nota spese.",
    },
    {
      en: "Rejecting a legitimate claim costs more than waving through a marginal one. It is a colleague's own money and they will remember it.",
      it: "Rifiutare una nota spese legittima costa più che lasciar passare una borderline. Sono soldi di un collega, e se lo ricorderà.",
    },
    {
      en: "Half the claims are missing something — no date, an unreadable photo, a description that says \"client dinner\" and nothing else.",
      it: "A metà delle note spese manca qualcosa: la data, una foto illeggibile, una descrizione che dice «cena con cliente» e basta.",
    },
  ],
  nudge: {
    en: "Davide will have to defend every one of these decisions to the person who spent the money. Ask what a defensible answer contains, and you will find you have specified the output.",
    it: "Davide dovrà difendere ognuna di queste decisioni davanti a chi ha speso i soldi. Chiediti cosa contiene una risposta difendibile, e scoprirai di aver già specificato l'output.",
  },
  approach: {
    summary: {
      en: "A grounded adjudication call whose output is a quoted clause plus a three-way verdict, where one of the three outcomes is that the claim does not contain enough to decide.",
      it: "Una chiamata di giudizio ancorata al testo, il cui output è una clausola citata più un verdetto a tre valori, dove uno dei tre esiti è che la nota spese non contiene abbastanza per decidere.",
    },
    steps: [
      {
        en: "Pass the policy in full as the grounding text rather than searching it. At this size, the design problem is the shape of the answer, not how you find the passage.",
        it: "Passa la policy per intero come testo di riferimento invece di cercarci dentro. A queste dimensioni il problema di design è la forma della risposta, non come trovi il passaggio.",
      },
      {
        en: "Make the verdict three-valued: clearly within policy, clearly outside, or undecidable from what was submitted. The third is the most common real outcome and it must not be able to collapse into either of the others.",
        it: "Rendi il verdetto a tre valori: chiaramente dentro la policy, chiaramente fuori, oppure non decidibile con quello che è stato presentato. Il terzo è l'esito reale più frequente e non deve poter collassare negli altri due.",
      },
      {
        en: "Require the exact clause text as a field in the output, not a paraphrase and not a section number. A number lets the model be confidently wrong about which rule it read; a quotation does not.",
        it: "Richiedi il testo esatto della clausola come campo dell'output: non una parafrasi e non un numero di paragrafo. Un numero permette al model di sbagliarsi con sicurezza su quale regola ha letto; una citazione no.",
      },
      {
        en: "Keep numeric comparisons out of the prose. Have the model extract the amount and the threshold as values, and compare them outside the call.",
        it: "Tieni i confronti numerici fuori dal testo. Fai estrarre al model l'importo e la soglia come valori, e confrontali fuori dalla chiamata.",
      },
      {
        en: "Track which clauses are ever cited. A clause that never fires in three months is either dead policy or a rule the system is quietly failing to apply.",
        it: "Tieni traccia di quali clausole vengono effettivamente citate. Una clausola che non scatta mai in tre mesi o è policy morta, o è una regola che il sistema sta silenziosamente mancando.",
      },
    ],
  },
  pitfalls: [
    {
      en: "A paraphrased rule reads perfectly and cannot be forwarded. The moment someone disputes a rejection, Davide is back in the PDF and the tool has bought him nothing.",
      it: "Una regola parafrasata si legge benissimo e non è inoltrabile. Nel momento in cui qualcuno contesta un rifiuto, Davide è di nuovo dentro il PDF e il tool non gli ha fatto guadagnare niente.",
    },
    {
      en: "Thresholds are where a fluent model quietly fails: \"under €50\" applied to a claim of exactly €50, or an amount in a currency the policy never mentions.",
      it: "Le soglie sono il punto in cui un model fluente sbaglia in silenzio: «sotto i 50 €» applicato a una nota spese di esattamente 50 €, o un importo in una valuta che la policy non nomina.",
    },
    {
      en: "Because the output is addressed to the claimant, its confidence transfers. A wrong rejection written in policy language is far harder for a colleague to argue with than Davide saying \"I think that's not covered\".",
      it: "Siccome l'output è indirizzato a chi ha presentato la nota, la sua sicurezza si trasferisce. Un rifiuto sbagliato scritto in linguaggio da policy è molto più difficile da contestare per un collega di un Davide che dice «mi sa che non è coperto».",
    },
  ],
  starterPrompt: {
    en: "I want to check weekly expense claims against a four-page written policy. For each claim the output should say whether it's inside, outside, or impossible to judge from what was submitted, and quote the exact clause. Start by asking me what a decision has to contain for it to be forwarded to the person who filed the claim — then we'll design the output around that.",
    it: "Voglio verificare le note spese settimanali contro una policy scritta di quattro pagine. Per ogni nota l'output deve dire se è dentro, fuori, o impossibile da giudicare con quello che è stato presentato, e citare la clausola esatta. Parti chiedendomi cosa deve contenere una decisione per poter essere inoltrata a chi ha presentato la nota: poi progettiamo l'output attorno a quello.",
  },
};
