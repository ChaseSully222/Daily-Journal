const makeJournalEntryComponent = journalEntry => {
  return `
    <h1>${journalEntry.concept}</h1>
    <section>${journalEntry.date}</section>
    <article>${journalEntry.entry}</article>
    <article>${journalEntry.mood}</article>
    <button id="deleteJournalEntry--${journalEntry.id}" class="deleteBtn">Delete</button>
    `;
};

export default makeJournalEntryComponent;
