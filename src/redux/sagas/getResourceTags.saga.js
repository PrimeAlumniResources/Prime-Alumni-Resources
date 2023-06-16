import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* getResourceTags() {
  try {

    const resourceTags = yield axios.get('/resourceRoute/resourceTags')
    let newId = 1
    const allTags = resourceTags.data.map(tag => ({ ...tag, id: newId++ }))
    yield put({
        type: 'SET_RESOURCE_TAGS',
        payload: allTags
    })

  } catch (error) {
    console.log('From SAGA, getting resource tags error', error);
  }
}

function* getResourceTagsSaga() {
  yield takeLatest('SAGA/GET_RESOURCE_TAGS', getResourceTags);
}

export default getResourceTagsSaga;