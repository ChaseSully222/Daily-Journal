const getJournalEntries = () => {
    const getMovies = "http://localhost:3000/entries";
    fetch(getMovies)
      .then(resp => resp.json())
      .then(entriesFromAPI => {
        renderJournalEntries(entriesFromAPI);
      });
  };