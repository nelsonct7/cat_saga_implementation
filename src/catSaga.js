import { call,put,takeEvery } from 'redux-saga/effects'
import { getCatSuccess } from './catState';

function* workGetFetch(){
    const cats=yield call(()=>fetch('https://api.thecatapi.com/v1/breeds'))
    const formatedCats = yield cats.json();
    const formattedCatsShortened=formatedCats.slice(0,10)
    yield put(getCatSuccess(formattedCatsShortened))
}

function* catSaga(){
    yield takeEvery('cats/getCatsFetch',workGetFetch)
}

export default catSaga