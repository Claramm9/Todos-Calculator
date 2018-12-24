import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './containers/Home/index';

//ReactDOM.render(<App />, document.getElementById('app'));
render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
);
// Provider wraps up React application and makes it aware of the entire Redux'store.
// React must talk to the store for accessing the state and dispatching actions.