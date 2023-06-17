import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* addResource(action) {
  try {
    yield axios.post('/resourceRoute', action.payload)
    yield put({type: 'SAGA/GET_RESOURCE'})
    yield put({type: 'SAGA/GET_RESOURCE_TAGS'})
  } catch (error) {
    console.log('From SAGA, adding resource error', error);
  }
}

function* addResourceSaga() {
  yield takeLatest('SAGA/ADD_RESOURCE', addResource);
}

export default addResourceSaga;