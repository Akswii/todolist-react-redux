import { /*applyMiddleware,*/ createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import monitorReducersEnhancer from './redux/enhancers/monitorReducer'
// import loggerMiddleware from './redux/middleware/logger'
import rootReducer from './redux/reducers'

export default function configureStore() {
    // const middlewares = [loggerMiddleware, thunkMiddleware]
    // const middlewareEnhancer = applyMiddleware(...middlewares)

    // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    // const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer/*, preloadedState, composedEnhancers*/, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    return store
}
