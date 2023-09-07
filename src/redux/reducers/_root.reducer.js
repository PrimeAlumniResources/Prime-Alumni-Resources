import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import profile from './profile.reducer';
import currentStacks from './currentStack.reducer';
import resources from './resource.reducer';
import cohort from './cohort.reducer';
import campus from './campus.reducer';
import KnownStack from './knownStack.reducer';
import resourceTags from './resourceTags.reducer';
import allProfiles from './allProfiles.reducer';
import allCampuses from './allCampuses.reducer';
import jobs from './jobs.reducer';
import allCohorts from './allCohorts.reducer';
import specificProfile from './specificProfile.reducer';
import specificCurrentTech from './specificCurrentTech.reducer';
import specificKnownTech from './specificKnownTech.reducer';
// import allPics from './allPics.reducer';



// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  profile,
  specificProfile, 
  resources,
  resourceTags,
  currentStacks,
  cohort,
  campus,
  KnownStack,
  allProfiles,
  allCampuses,
  allCohorts,
  jobs,
  specificCurrentTech,
  specificKnownTech
  // allPics
});

export default rootReducer;
