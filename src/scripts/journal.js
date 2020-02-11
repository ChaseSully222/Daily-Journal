/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
import API from "./data.js";
import renderJournalEntries from "./entriesDOM.js";

const clearForm = () => {
  const dateInput = document.getElementById("journalDate");
  const conceptInput = document.getElementById("concepts");
  const entryInput = document.getElementById("journalEntry");
  const moodInput = document.getElementById("moodForTheDay");

  (dateInput.value = ""),
    (conceptInput.value = ""),
    (entryInput.value = ""),
    (moodInput.value = "");
};

//Added to the edit feature, When edit button is 'clicked' page will scroll to the top
const topFunction = () => {
  document.documentElement.scrollTop = 0;
};

// Updates our form fields with the input values of whatever 'edit' button was selected
const updateFormFields = entryId => {
  const hiddenEntryId = document.getElementById("entryId");

  const dateInput = document.getElementById("journalDate");
  const conceptInput = document.getElementById("concepts");
  const entryInput = document.getElementById("journalEntry");
  const moodInput = document.getElementById("moodForTheDay");

  API.editEntry(entryId).then(entry => {
    hiddenEntryId.value = entry.id;
    dateInput.value = entry.date;
    conceptInput.value = entry.concept;
    entryInput.value = entry.entry;
    moodInput.value = entry.mood;
  });
};

/*  Daily Journal 7
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
      entryDom.textContent = "";

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

/*
  Daily Journal 9 & 10
  Added a delete and edit feature
*/

const entryEditDeleteEventListener = () => {
  const entryList = document.querySelector("#entryLog");

  entryList.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteJournalEntry--")) {
      const deleteBtnId = event.target.id;
      const deleteBtnArray = deleteBtnId.split("--");
      const entryIdToDelete = deleteBtnArray[1];

      const entryId = event.target.id.split("--")[1];

      API.deleteEntry(entryIdToDelete)
        .then(API.getJournalEntries)
        .then(renderJournalEntries);
    } else if (event.target.id.startsWith("editJournalEntry--")) {
      const entryIdToEdit = event.target.id.split("--")[1];
      topFunction();
      updateFormFields(entryIdToEdit);
    }
  });
};

//Daily Journal 10 cont... Added Save button and event listener

const addEntrySaveEventListener = () => {
  const saveButton = document.getElementById("saveEntry");

  saveButton.addEventListener("click", () => {
    const entryIdInput = document.getElementById("entryId");
    const dateInput = document.getElementById("journalDate");
    const conceptInput = document.getElementById("concepts");
    const entryInput = document.getElementById("journalEntry");
    const moodInput = document.getElementById("moodForTheDay");

    const entry = {
      date: dateInput.value,
      concept: conceptInput.value,
      entry: entryInput.value,
      mood: moodInput.value
    };

    if (entryIdInput.value !== "") {
      entry.id = parseInt(entryIdInput.value);
      API.updateEntry(entry).then(() => {
        API.getJournalEntries()
          .then(renderJournalEntries)
          .then(clearForm);
      });
    } else {
      API.addNewEntry(entry).then(() => {
        API.getJournalEntries()
          .then(renderJournalEntries)
          .then(clearForm);
      });
    }
  });
};

//Calls our functions

addRecordAddEventListener();
addMoodFilterAddEventListener();
entryEditDeleteEventListener();
addEntrySaveEventListener();

API.getJournalEntries().then(renderJournalEntries);
