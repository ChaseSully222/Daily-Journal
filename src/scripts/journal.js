/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

//Daily Journal 7

const addRecordAddEventListener = () => {
  const recordButton = document.getElementById("recordBtn");

  recordButton.addEventListener("click", () => {
    const dateInput = document.getElementById("journalDate");
    const conceptInput = document.getElementById("concepts");
    const entryInput = document.getElementById("journalEntry");
    const moodInput = document.getElementById("moodForTheDay");

    console.log("clicked record");

    const newJournalEntry = {
      date: dateInput.value,
      concept: conceptInput.value,
      entry: entryInput.value,
      mood: moodInput.value
    };

    fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJournalEntry)
    });

    API.addNewEntry(newJournalEntry).then(() => {
      API.getAllJournalEntries().then(renderJournalEntries);
    });
  });
};

addRecordAddEventListener();

API.getJournalEntries().then(renderJournalEntries);
