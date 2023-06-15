import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchAllCampuses() {
    try {
        const results = yield axios.get('/api/campus')
        yield put({type:'SET_ALL_CAMPUS', payload: results.data})
    } catch (error) {
        console.log('error in the fetchCampuses saga function-->', error);
    }
}

export default function* campusSaga() {
    yield takeLatest('FETCH_ALL_CAMPUSES', fetchAllCampuses);
}