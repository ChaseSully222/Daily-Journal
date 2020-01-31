import makeJournalEntryComponent from "./entryComponent.js";

const renderJournalEntries = entries => {
  const journalContainer = document.querySelector(".entryLog");
  entries.forEach(journalEntry => {
    const journalEntryHTML = makeJournalEntryComponent(journalEntry);
    journalContainer.innerHTML += journalEntryHTML;
  });
};

export default renderJournalEntries;
