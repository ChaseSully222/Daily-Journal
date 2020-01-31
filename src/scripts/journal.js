/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import API from "./data"

API.getJournalEntries().then(renderJournalEntries);
