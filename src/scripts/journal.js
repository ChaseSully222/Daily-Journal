const getJournalEntries = () => {
  const getMovies = "http://localhost:3000/entries";
  fetch(getMovies)
    .then(resp => resp.json())
    .then(entriesFromAPI => {
      renderJournalEntries(entriesFromAPI);
    });
};

const makeJournalEntryComponent = journalEntry => {
  return `
  <h1>${journalEntry.concept}</h1>
  <section>${journalEntry.date}</section>
  <article>${journalEntry.entry}</article>
  <article>${journalEntry.mood}</article>
  `;
};

const renderJournalEntries = entries => {
  const journalContainer = document.querySelector(".entryLog");
  entries.forEach(journalEntry => {
    const journalEntryHTML = makeJournalEntryComponent(journalEntry);
    journalContainer.innerHTML += journalEntryHTML;
  });
};

getJournalEntries()