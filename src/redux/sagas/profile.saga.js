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

function* fetchAllProfiles() {
    try {
        const results = yield axios.get('/api/profile/all');
        console.log('this is the results of the fetchSearchProfiles saga --->', results.data)
        yield put({type:'SET_ALL_PROFILES', payload: results.data});
    } catch (error) {
        console.log('error inside fetch all profiles saga-->', error);
    }
}

function* updatePic(action) {

    try {
        const results = yield axios.put(`https://fcrourrx6l.execute-api.eu-north-1.amazonaws.com/dev/profilepic3/${action.payload.username}`,action.payload.image)
        yield put({type:'FETCH_PROFILE'})
    } catch (error) {
        console.log('error in the postProfile saga function-->',error);
    }
}

export default function* profileSaga () {
    // yield takeLatest('POST_PROFILE', postProfile) <----- MOST LIKELY DELETING
    yield takeLatest('FETCH_PROFILE', fetchProfile)
    yield takeLatest('FETCH_ALL_PROFILES', fetchAllProfiles)
    yield takeLatest('PUT_PROFILE_INFO', updateProfile )
    yield takeLatest('PUT_PROFILE_PIC',updatePic)
}