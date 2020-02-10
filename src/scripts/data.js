const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries").then(response =>
      response.json()
    );
  },
  addNewEntry(newJournalEntry) {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    });
  },
  updateEntry(entry) {
    return fetch(`http://localhost:8088/entries/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  deleteEntry(entryId) {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
      method: "DELETE"
    });
  }
};

export default API;
