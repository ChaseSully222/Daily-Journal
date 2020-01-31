const renderJournalEntries = entries => {
    const journalContainer = document.querySelector(".entryLog");
    entries.forEach(journalEntry => {
      const journalEntryHTML = makeJournalEntryComponent(journalEntry);
      journalContainer.innerHTML += journalEntryHTML;
    });
  };