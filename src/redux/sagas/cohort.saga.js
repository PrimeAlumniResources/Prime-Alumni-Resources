
import { put, takeLatest } from "redux-saga/effects"

import axios from "axios"

function* FetchCohort () {
    try {
        
        const results = yield axios.get('/api/cohorts/all')
        console.log('this is the results of the fetch cohorts saga-->',results.data);
        yield put({type:'SET_COHORTS',payload:results.data})
    } catch (error) {
        console.log('error in the fetch cohort sage function-->',error);
    }
}

function* fetchMyCohort () {
    try {
        
        const results = yield axios.get('/api/cohorts/my')
        console.log('this is the results of the fetch cohorts saga-->',results.data);
        yield put({type:'SET_MY_COHORT',payload:results.data})
    } catch (error) {
        console.log('error in the fetch my cohort sage function-->',error);
    }
}

export default function* cohortSaga () {
    yield takeLatest('FETCH_MY_COHORT', fetchMyCohort)
    yield takeLatest('FETCH_COHORTS',FetchCohort)
}