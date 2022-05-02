import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers(
  {
    // formVisibleOnPage: formVisibleReducer,
    // mainTicketList: ticketListReducer,
    firestore: firestoreReducer
  }
);

export default rootReducer;