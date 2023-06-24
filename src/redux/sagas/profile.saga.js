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


// function* fetchSpecific(action) {
//     console.log('this is action.payload in saga-->',action.payload);
//     const username = action.payload.username
//     try {
//         const results = yield axios.get('/api/profile/specific' ,  {
//             params: { username }, });
//         console.log('this is the results of the fetchSpecific saga --->', results.data)
//         yield put({type:'SET_SPECIFIC_PROFILES', payload: results.data});
//     } catch (error) {
//         console.log('error inside fetch specific profiles saga-->', error);
//     }
// }

export default function* profileSaga () {
    // yield takeLatest('POST_PROFILE', postProfile) <----- MOST LIKELY DELETING
    // yield takeLatest('FETCH_SPECIFIC_PROFILE',fetchSpecific)
    yield takeLatest('FETCH_PROFILE', fetchProfile)
    yield takeLatest('FETCH_ALL_PROFILES', fetchAllProfiles)
    yield takeLatest('PUT_PROFILE_INFO', updateProfile )
}