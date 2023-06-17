import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import profile from './profile.reducer';

import jobs from './jobs.reducer';

import allProfiles from './allProfiles.reducer';
import campus from './campus.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  profile, // will have an id and username if someone is logged in
  jobs,
  profile,
  allProfiles,
  campus 
});

export default rootReducer;
