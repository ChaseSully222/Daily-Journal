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

//Daily Journal 8   *REFACTOR THE THREE RADIO BUTTONS INTO ONE FUNCTION*
// Sad radio button

const addSadFilterAddEventListener = () => {
  const sadRadioBtn = document.getElementById("sadRadio");
  const journalContainer = document.querySelector(".entryLog");

  sadRadioBtn.addEventListener("click", () => {
    const mood = event.target.value;
    console.log(mood);

    API.getJournalEntries().then(entries => {
      const sadEntries = entries.filter(entry => entry.mood === "Sad");

      journalContainer.textContent = "";
      renderJournalEntries(sadEntries);
    });
  });
};

// Happy radio button
const addHappyFilterAddEventListener = () => {
  const happyRadioBtn = document.getElementById("happyRadio");
  const journalContainer = document.querySelector(".entryLog");

  happyRadioBtn.addEventListener("click", () => {
    const mood = event.target.value;
    console.log(mood);

    API.getJournalEntries().then(entries => {
      const happyEntries = entries.filter(entry => entry.mood === "Happy");

      journalContainer.textContent = "";
      renderJournalEntries(happyEntries);
    });
  });
};

//Okay radio button
const addOkayFilterAddEventListener = () => {
  const okayRadioBtn = document.getElementById("okayRadio");
  const journalContainer = document.querySelector(".entryLog");

  okayRadioBtn.addEventListener("click", () => {
    const mood = event.target.value;
    console.log(mood);

    API.getJournalEntries().then(entries => {
      const okayEntries = entries.filter(entry => entry.mood === "Okay");

      journalContainer.textContent = "";
      renderJournalEntries(okayEntries);
    });
  });
};

addRecordAddEventListener();
addSadFilterAddEventListener();
addHappyFilterAddEventListener();
addOkayFilterAddEventListener();

API.getJournalEntries().then(renderJournalEntries);
