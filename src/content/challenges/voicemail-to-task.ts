import type { Challenge } from "../types";

export const voicemailToTask: Challenge = {
  id: "voicemail-to-task",
  mode: "quick",
  level: "beginner",
  category: "communication",
  estimatedMinutes: 30,
  title: {
    en: "One Digit Wrong",
    it: "Una cifra sbagliata",
  },
  scenario: {
    en: "Nuno runs a two-van plumbing business and gets fifteen to twenty voicemails a day. In the evening he plays them back and writes each one into a job: name, address, phone number, what is broken. It takes about forty minutes and it is the last thing he does before dinner.",
    it: "Nuno ha un'impresa idraulica con due furgoni e riceve dai quindici ai venti messaggi in segreteria al giorno. La sera li riascolta e trasforma ognuno in un lavoro: nome, indirizzo, numero di telefono, cosa si è rotto. Ci mette una quarantina di minuti ed è l'ultima cosa che fa prima di cena.",
  },
  constraints: [
    {
      en: "The parts that matter most — the callback number, the street name, the house number — are exactly the parts a transcript gets wrong.",
      it: "Le parti che contano di più — il numero da richiamare, il nome della via, il numero civico — sono esattamente quelle che una trascrizione sbaglia.",
    },
    {
      en: "People leave these from a van, from a corridor, from outside in the wind. Half the recordings are poor and the other half are worse.",
      it: "La gente li lascia da un furgone, da un corridoio, da fuori col vento. Metà delle registrazioni è scadente e l'altra metà è peggio.",
    },
    {
      en: "A wrong digit in a phone number costs a customer, and there is no way to find out it happened.",
      it: "Una cifra sbagliata in un numero di telefono costa un cliente, e non c'è modo di scoprire che è successo.",
    },
  ],
  nudge: {
    en: "The words this gets wrong are not spread evenly through the message. Work out which ones cost you a customer, then decide what should happen when it is unsure about exactly those.",
    it: "Le parole che sbaglia non sono distribuite in modo uniforme nel messaggio. Capisci quali ti costano un cliente, poi decidi cosa deve succedere quando è proprio su quelle che non è sicuro.",
  },
  approach: {
    summary: {
      en: "Treat the identifying details as a different problem from the message, and make low confidence on them cheap to resolve rather than invisible.",
      it: "Tratta i dati identificativi come un problema diverso dal messaggio, e fa' che una bassa confidenza su di essi sia facile da risolvere invece che invisibile.",
    },
    steps: [
      {
        en: "Keep the audio alongside the transcript and let him replay the four seconds around any number. Confirming a digit should cost one tap, not a phone call.",
        it: "Tieni l'audio accanto alla trascrizione e permettigli di riascoltare i quattro secondi attorno a qualsiasi numero. Confermare una cifra deve costare un tocco, non una telefonata.",
      },
      {
        en: "Carry the transcription's own per-word confidence through instead of discarding it. It is a signal you already have, and it is at its most useful precisely on the words that matter.",
        it: "Porta avanti la confidenza per parola che la trascrizione già produce, invece di buttarla via. È un segnale che hai già, ed è utile proprio sulle parole che contano.",
      },
      {
        en: "Match the number and the name against the existing customer list before treating either as new. A returning customer's details are already correct on file, and that beats any transcription.",
        it: "Confronta numero e nome con la lista clienti esistente prima di trattarli come nuovi. I dati di un cliente che torna sono già corretti in archivio, e questo batte qualsiasi trascrizione.",
      },
      {
        en: "Make \"no address given\" a valid outcome that produces a question. Callers often assume he already has it, and the gap must not be filled with a plausible street.",
        it: "Rendi «indirizzo non fornito» un esito valido che genera una domanda. Chi chiama spesso dà per scontato che lui ce l'abbia già, e quel buco non dev'essere riempito con una via plausibile.",
      },
      {
        en: "Never create a job from an unconfirmed number. The confirmation step is not friction around the product — it is the product.",
        it: "Non creare mai un lavoro da un numero non confermato. Il passaggio di conferma non è un attrito attorno al prodotto: è il prodotto.",
      },
    ],
  },
  pitfalls: [
    {
      en: "The transcript reads perfectly and has one digit wrong in the callback number. Nothing about the output looks broken, the job gets created, and the first anyone hears of it is a customer telling somebody else that nobody ever rang back.",
      it: "La trascrizione si legge perfettamente e ha una cifra sbagliata nel numero da richiamare. Niente nell'output sembra rotto, il lavoro viene creato, e la prima notizia che se ne ha è un cliente che racconta a qualcun altro che non l'ha mai richiamato nessuno.",
    },
    {
      en: "Street names and surnames are the exact vocabulary general transcription is worst at. It substitutes a common word that sounds close, and the result reads entirely naturally.",
      it: "Nomi di vie e cognomi sono esattamente il vocabolario in cui la trascrizione generica va peggio. Sostituisce una parola comune che suona simile, e il risultato si legge in modo del tutto naturale.",
    },
    {
      en: "Throwing the audio away once the transcript exists. The moment somebody needs to settle whether it was a five or a nine, the only thing that could have answered is gone.",
      it: "Buttare via l'audio una volta ottenuta la trascrizione. Nel momento in cui serve stabilire se era un cinque o un nove, l'unica cosa che avrebbe potuto rispondere non c'è più.",
    },
    {
      en: "Building against the clear voicemails. Those were never the problem — the ones recorded on a hard shoulder with a lorry going past are.",
      it: "Progettare sui messaggi ben registrati. Non sono mai stati loro il problema: lo sono quelli registrati in una piazzola con un camion che passa.",
    },
  ],
  starterPrompt: {
    en: "I get 15-20 voicemails a day and turn them into jobs by hand — name, address, phone, what's broken. Transcribing them is the easy part; what scares me is a wrong digit in a callback number that nobody ever notices. Ask me what I'd want to happen when the transcript isn't confident about exactly those details.",
    it: "Ricevo 15-20 messaggi in segreteria al giorno e li trasformo a mano in lavori: nome, indirizzo, telefono, cosa si è rotto. Trascriverli è la parte facile; quello che mi spaventa è una cifra sbagliata nel numero da richiamare che nessuno noterà mai. Chiedimi cosa vorrei che succedesse quando la trascrizione non è sicura proprio su quei dati.",
  },
};
