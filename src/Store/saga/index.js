
  import { connect } from 'react-redux'
import { call, put, takeEvery } from 'redux-saga/effects'
  import Api from '../../Services/baseApi'
import { GET_LABOURDETAILS, GET_LABOURDETAILS_SUCCESS, GET_LABOURS, GET_LABOURS_SUCCESS, GET_LABOUR_ERROR, SEARCH_LABOUR, SEARCH_LABOUR_SUCCESS } from '../actionTypes'
  
  function* getList(action) {
    try {
      const data = yield call(Api.get,'/labours')
      yield put({ type: GET_LABOURS_SUCCESS, data })
    } catch (e) {
      yield put({ type: GET_LABOUR_ERROR })
    }
  }
  
  function* fetchDetail(action) {
    try {
      const data = yield call(Api.get,'/labour')
      yield put({ type: GET_LABOURDETAILS_SUCCESS, data:data.labour})
    } catch (e) {
      yield put({ type: GET_LABOUR_ERROR })
    }
  }

function* searchLabour(action) {
  try {
    const LabourData = yield call(Api.get,'/labours')
    const data =LabourData.labours.filter(labour=>labour.name===action.payload)
    yield put({ type: SEARCH_LABOUR_SUCCESS, data })
  } catch (e) {
    yield put({ type: GET_LABOUR_ERROR })
  }
}
  
  function* dataSaga() {
    yield takeEvery(GET_LABOURS, getList)
    yield takeEvery(SEARCH_LABOUR, searchLabour)
    yield takeEvery(GET_LABOURDETAILS,fetchDetail)
  }


  export default dataSaga;
  