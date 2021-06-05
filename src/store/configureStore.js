import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index.js'
import sagas from './sagas'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer, 
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(sagas)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers

    // i dono what should i do -_-
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
