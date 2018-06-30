import { createStore, applyMiddleware, combineReducers } from 'redux';
import { pendingTasksReducer } from 'react-redux-spinner';
import thunk from 'redux-thunk';
import phonesReducer from './reducers/phones.reducer';

const reducer = combineReducers({
    pendingTasks: pendingTasksReducer,
    phonesReducer,
});

const logger = store => next => action => {
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    return result;
};



export default createStore(reducer, applyMiddleware(logger, thunk));