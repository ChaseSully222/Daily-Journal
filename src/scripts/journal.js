//Daily Journal 2//
const journalEntries = [
  {
    date: "1/16/2020",
    concept: "Manipulating DOM",
    entry: "Learned how to manipulate the DOM with querySelector",
    mood: "Okay"
  },
  {
    date: "1/17/2020",
    concept: "JavaScript Objects",
    entry: "Learned what an object is and Object Oriented Programming",
    mood: "Okay"
  },
  {
    date: "1/17/2020",
    concept: "Functions & Logic",
    entry: "Learned about functions and how they are reusable code",
    mood: "Okay"
  }
];
console.log(journalEntries)

const makeJournalEntryComponent = (journalEntry) => {
  return `
  <h1>${journalEntry.date}</h1>
  <p>${journalEntry.concept}</p>
  <p>${journalEntry.entry}</p>
  <p>${journalEntry.mood}</p>
  `
}

//for each


//Store a reference to an existing HTML element (Where the journal entries will go)
// const journalContainer = document.querySelector("#entryLog")
// journalContainer.innerHTML = journalEntryComponent()
