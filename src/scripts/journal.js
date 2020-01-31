/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
import API from "./data.js";
import renderJournalEntries from './entriesDOM.js';

API.getJournalEntries().then(renderJournalEntries);
