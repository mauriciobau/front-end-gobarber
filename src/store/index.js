import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './moduls/rootReducer';
import rootSaga from './moduls/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const moddlewares = [sagaMiddleware];

const store = createStore(rootReducer, moddlewares);

sagaMiddleware.run(rootSaga);

export default store;
