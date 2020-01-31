// const getJournalEntries = () => {
//     const getMovies = "http://localhost:3000/entries";
//     fetch(getMovies)
//       .then(resp => resp.json())
//       .then(entriesFromAPI => {
//         renderJournalEntries(entriesFromAPI);
//       });
//   };
const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/entries").then(response =>
      response.json()
    );
  }
};

export default API; 
