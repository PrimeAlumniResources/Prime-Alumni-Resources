import { put, take, takeLatest } from "redux-saga/effects"
import axios from "axios"

//-----------------------------POST CURRENT STACK SAGA--------------------------------------

function* postCurrent ( action ) {
    console.log('this is action.payload in currentKnown',action.payload);
   try {
        const response = yield axios.post('/api/tech/current',action.payload)
        yield put({type:'FETCH_CURRENT_TECH'})
    } catch (error) {
        console.log('error in the updateCurrent Tech saga function',error);
    }
}

//-----------------------------POST KNOWN STACK SAGA--------------------------------------

function* postKnown (action ) {
    console.log('this is action.payload in updateKnown',action.payload);
    try {
         const response = yield axios.post('/api/tech/known',action.payload)
         yield put({type:'FETCH_KNOWN_TECH'})
     } catch (error) {
         console.log('error in the updateCurrent Tech saga function',error);
     }
     
 }

//-----------------------------DELETE CURRENT STACK SAGA--------------------------------------

 function* deleteCurrent (action ) {
    console.log('this is action.payload in deleteCurrent',action.payload.name);
    try {
          yield axios.delete(`/api/tech/deletecurrent/${action.payload.name}`,)
         yield put({type:'FETCH_CURRENT_TECH'})
     } catch (error) {
         console.log('error in the delete Tech saga function',error);
     }
     
 }

//-----------------------------DELETE KNOWN STACK SAGA--------------------------------------

 function* deleteKnown (action ) {
    console.log('this is action.payload in deleteKnown',action.payload.name);
    try {
          yield axios.delete(`/api/tech/deleteknown/${action.payload.name}`,)
         yield put({type:'FETCH_CURRENT_TECH'})
     } catch (error) {
         console.log('error in the delete Tech saga function',error);
     }
     
 }

 //-----------------------------FETCH CURRENT STACK SAGA--------------------------------------

 function* fetchCurrent() {
    try {
        const results = yield axios.get('/api/tech/current')
        console.log('this is the results of the fetch current saga-->',results.data);
        yield put ({type:'SET_CURRENT_TECHS', payload: results.data})
    } catch (error) {
        console.log('error inside fetch current saga-->',error);
    }
}

 //-----------------------------FETCH KNOWN STACK SAGA--------------------------------------

function* fetchKnown() {
    try {
        const results = yield axios.get('/api/tech/known')
        console.log('this is the results of the fetch known saga-->',results.data);
        yield put ({type:'SET_KNOWN_TECHS', payload: results.data})
    } catch (error) {
        console.log('error inside fetch tech saga-->',error);
    }
}

function* fetchSpecificKnown(action) {
    try {
        const results = yield axios.get(`/api/tech/known/${action.payload}`)
        console.log('this is the results of the specific fetch known saga-->',results.data);
        yield put ({type:'SET_SPECIFIC_KNOWN_TECH', payload: results.data})
    } catch (error) {
        console.log('error inside fetch tech saga-->',error);
    }
}

function* fetchSpecificCurrent(action) {
    try {
        const results = yield axios.get(`/api/tech/current/${action.payload}`)
        console.log('this is the results of the specific current known saga-->',results.data);
        yield put ({type:'SET_SPECIFIC_CURRENT_TECH', payload: results.data})
    } catch (error) {
        console.log('error inside fetch tech saga-->',error);
    }
}

export default function* techSaga () {
    yield takeLatest('DELETE_CURRENT_TECH',deleteCurrent)
    yield takeLatest('DELETE_KNOWN_TECH',deleteKnown)
    yield takeLatest('UPDATE_CURRENT_TECH',postCurrent)
    yield takeLatest('UPDATE_KNOWN_TECH',postKnown)
    yield takeLatest('FETCH_CURRENT_TECH',fetchCurrent)
    yield takeLatest('FETCH_KNOWN_TECH',fetchKnown)
    yield takeLatest('FETCH_SPECIFIC_KNOWN_TECH', fetchSpecificKnown);
    yield takeLatest('FETCH_SPECIFIC_CURRENT_TECH', fetchSpecificCurrent);
}