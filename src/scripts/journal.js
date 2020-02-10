/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

//Daily Journal 7
/*
    Function that adds an event listener to the 'Record Journal Entry' button
    This will add a new Journal Entry to the end of our entries list, but only
    if the user has a date, concept, entry, and mood. 
*/
const addRecordAddEventListener = () => {
  const recordButton = document.getElementById("recordBtn");

  recordButton.addEventListener("click", () => {
    const dateInput = document.getElementById("journalDate");
    const conceptInput = document.getElementById("concepts");
    const entryInput = document.getElementById("journalEntry");
    const moodInput = document.getElementById("moodForTheDay");
    const entryDom = document.getElementById("entryLog");

    //if else conditional goes here
    if (dateInput.value === "") {
      alert("Please add a date");
    } else if (conceptInput.value === "") {
      alert("Please add a Concept");
    } else if (entryInput.value === "") {
      alert("Please add a Journal Entry");
    } else if (moodInput.value === "") {
      alert("How does this make you feel?");
    } else {
      const newJournalEntry = {
        date: dateInput.value,
        concept: conceptInput.value,
        entry: entryInput.value,
        mood: moodInput.value
      };

      //clears entries list before updating DOM
      entryDom.textContent="";

      // refactor the lines below to a condensed version, syntax post.then(get).then(render)
      API.addNewEntry(newJournalEntry).then(() => {
        API.getJournalEntries().then(renderJournalEntries);

        // clears input values
        dateInput.value = "";
        conceptInput.value = "";
        entryInput.value = "";
        moodInput.value = "";
      });
    }
  });
};

//Daily Journal 8
/*
    function that adds an event listener to each of our radio mood buttons. 
    When clicked, they will each filter the journal entries by whichever mood was selected
*/
const addMoodFilterAddEventListener = () => {
  const radioMoodBtns = document.getElementsByName("moodbtn");
  const journalContainer = document.querySelector("#entryLog");

  radioMoodBtns.forEach(mood => {
    mood.addEventListener("click", () => {
      const mood = event.target.value;

      API.getJournalEntries().then(entries => {
        const allEntries = entries.filter(entry => entry.mood === mood);

        journalContainer.textContent = "";
        renderJournalEntries(allEntries);
      });
    });
  });
};

//Calls our functions
addRecordAddEventListener();
addMoodFilterAddEventListener();

API.getJournalEntries().then(renderJournalEntries);
