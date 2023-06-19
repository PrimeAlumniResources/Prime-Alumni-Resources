import { put, takeLatest } from "redux-saga/effects"
import axios from "axios"


 //----------------------UPDATE USER INFO SAGA-----------------------------

function* updateProfile(action) {

    try {
        const results = yield axios.put('/api/profile',action.payload)
        yield put({type:'FETCH_PROFILE'})
    } catch (error) {
        console.log('error in the postProfile saga function-->',error);
    }
}

 //----------------------FETCH USER INFO SAGA-----------------------------

function* fetchProfile() {
    try {
        const results = yield axios.get('/api/profile')
        console.log('this is the results of the fetchProfile saga-->',results.data);
        yield put ({type:'SET_PROFILE', payload: results.data})
    } catch (error) {
        console.log('error inside fetch profile saga-->',error);
    }
}


    
    yield takeLatest('PUT_PROFILE_INFO',updateProfile )
function* fetchAllProfiles() {
    try {
        const results = yield axios.get('/api/profile/all');
        console.log('this is the results of the fetchSearchProfiles saga --->', results.data)
        yield put({type:'SET_ALL_PROFILES', payload: results.data});
    } catch (error) {
        console.log('error inside fetch all profiles saga-->', error);
    }
}

export default function* profileSaga () {
    yield takeLatest('POST_PROFILE',postProfile )
    yield takeLatest('FETCH_PROFILE',fetchProfile)
    yield takeLatest('FETCH_ALL_PROFILES', fetchAllProfiles)
}