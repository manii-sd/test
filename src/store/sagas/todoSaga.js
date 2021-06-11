import { call, put, takeEvery, select, take } from 'redux-saga/effects';
import * as ActionTypes  from  '../../constants/ActionTypes'

function* actionASaga(payload) {
  try {
    console.log('miad too saga')
    // todo : define another action theat runes when  CLICK_BUTTON_WITH_CHECKBOX happesn via yiled put(esme_function())
    const myTodoData = yield select(state => state.todos)
    console.log(myTodoData)

    // yield put(fetchMoviews())
    // yield take(ActionTypes.FETCH_MOVIE_SUCCESS)
    // const movieList = yield select(state => state.movies.list)
    // todo: reade state via select

  } catch (e) {
    console.log(e);
  }
}
 
export function* watchATCIONA() {
  yield takeEvery(ActionTypes.CLICK_BUTTON_WITH_CHECKBOX, actionASaga);
}

export default [watchATCIONA]
