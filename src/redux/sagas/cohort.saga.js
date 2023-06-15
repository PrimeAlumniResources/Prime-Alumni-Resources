
import { put, takeLatest } from "redux-saga/effects"

import axios from "axios"

function* FetchCohort () {
    try {
        
        const results = yield axios.get('/api/cohorts')
        console.log('this is the results of the fetch cohorts saga-->',results.data);
        yield put({type:'SET_COHORTS',payload:results.data})
    } catch (error) {
        console.log('error in the fetch cohort sage function-->',error);
    }
}

export default function* cohortSaga () {
    yield takeLatest('FETCH_COHORTS',FetchCohort)
}