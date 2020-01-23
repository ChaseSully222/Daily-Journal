const journalEntries = [
  {
    date: "1/16/2020",
    concept: "Manipulating DOM",
    entry: "Learned how to manipulate the DOM with querySelector",
    mood: "Okay"
  },
  {
    date: "1/17/2020",
    concept: "JavaScript Objects",
    entry: "Learned what an object is and Object Oriented Programming",
    mood: "Okay"
  },
  {
    date: "1/17/2020",
    concept: "Functions & Logic",
    entry: "Learned about functions and how they are reusable code",
    mood: "Okay"
  }
];

const makeJournalEntryComponent = journalEntry => {
  return `
  <h1>${journalEntry.concept}</h1>
  <section>${journalEntry.date}</section>
  <article>${journalEntry.entry}</article>
  <article>${journalEntry.mood}</article>
  `;
};

//Daily Journal 3

const renderJournalEntries = entries => {
  const journalContainer = document.querySelector(".entryLog");
  entries.forEach(journalEntry => {
    const journalEntryHTML = makeJournalEntryComponent(journalEntry);
    journalContainer.innerHTML += journalEntryHTML;
  });
};
renderJournalEntries(journalEntries);
