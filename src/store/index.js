// the Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
// the state of the application lives as a single, immutable object within the store
// as soon as the store receives an action it triggers a reducer
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from "../models";

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// export default store(initialState) {
//     return createStore(
//         rootReducer,
//         initialState
//     );
// }