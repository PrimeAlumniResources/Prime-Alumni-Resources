import { put, takeLatest } from "redux-saga/effects"
import axios from "axios"

function* updateProfile(action) {

    try {
        const results = yield axios.put('/api/profile',action.payload)
        yield put({type:'FETCH_PROFILE'})
    } catch (error) {
        console.log('error in the postProfile saga function-->',error);
    }
}

function* fetchProfile() {
    try {
        const results = yield axios.get('/api/profile')
        console.log('this is the results of the fetchProfile saga-->',results.data);
        yield put ({type:'SET_PROFILE', payload: results.data})
    } catch (error) {
        console.log('error inside fetch profile saga-->',error);
    }
}

export default function* profileSaga () {
    
    yield takeLatest('PUT_PROFILE_INFO',updateProfile )
    yield takeLatest('FETCH_PROFILE',fetchProfile)
}