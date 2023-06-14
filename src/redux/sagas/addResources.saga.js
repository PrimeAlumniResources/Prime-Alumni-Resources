import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* addResource(action) {
  try {
    console.log(action.payload);
    // yield axios.post('/dbRoute', action.payload)
  } catch (error) {
    console.log('From SAGA, adding resource error', error);
  }
}

function* addResourceSaga() {
  yield takeLatest('SAGA/ADD_RESOURCE', addResource);
}

export default addResourceSaga;