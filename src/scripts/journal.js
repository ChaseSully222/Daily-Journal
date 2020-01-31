/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
import renderJournalEntries from "./entriesDOM";

API.getJournalEntries().then(renderJournalEntries);
