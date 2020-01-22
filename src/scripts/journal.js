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
    entry: "Learned about functions and how they are reusale code",
    mood: "Okay"
  }
];
console.log(journalEntries)

//Daily Journal 3//
const journalEntryComponent = (entry) => {
  return `
  <h1>${taco.date}</h1>
  <section>${taco.concept}</section>
  <aside>${taco.entry}</aside>
  <aside>${taco.mood}</aside>
  `
}

//for loop


//Store a reference to an existing HTML element (Where the journal entries will go)
// const journalContainer = document.querySelector("#entryLog")
// journalContainer.innerHTML = journalEntryComponent()
