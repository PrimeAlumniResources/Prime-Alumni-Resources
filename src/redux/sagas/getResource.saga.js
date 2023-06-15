import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getResource() {
  try {

    const resources = yield axios.get('/resourceRoute')

    yield put({
        type: 'SET_RESOURCES',
        payload: resources.data
    })

  } catch (error) {
    console.log('From SAGA, getting resource error', error);
  }
}

function* getResourceSaga() {
  yield takeLatest('SAGA/GET_RESOURCE', getResource);
}

export default getResourceSaga;