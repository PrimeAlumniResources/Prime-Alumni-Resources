import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import profileSaga from './profile.saga';
import addResourceSaga from './addResources.saga';
import getResourceSaga from './getResource.saga';
import getResourceTagsSaga from './getResourceTags.saga';
import techSaga from './tech.saga';
import cohortSaga from './cohort.saga';
import jobsSaga from './job.saga';
import campusSaga from './campus.saga';



// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    profileSaga(),
    addResourceSaga(),
    getResourceSaga(),
    getResourceTagsSaga(),
    techSaga(),
    cohortSaga(),
    jobsSaga(),
    campusSaga()


  ]);
}
// GO TO SERVER TO ADD ROUTER
