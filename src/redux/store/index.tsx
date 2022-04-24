import { createStore, combineReducers } from 'redux';
import dataReducer from './dataProject/reducer';
import { Provider as ReduxProvider, useSelector, useDispatch } from "react-redux";

const store = createStore(
  combineReducers({
    dataReducer
  }),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store

const Provider = ({ children }) => <ReduxProvider store={store}>{children}</ReduxProvider>

export {
    Provider,
    useSelector,
    useDispatch
};