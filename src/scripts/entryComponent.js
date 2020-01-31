const makeJournalEntryComponent = journalEntry => {
  return `
    <h1>${journalEntry.concept}</h1>
    <section>${journalEntry.date}</section>
    <article>${journalEntry.entry}</article>
    <article>${journalEntry.mood}</article>
    `;
};

export default makeJournalEntryComponent;
