import 'core-js/fn/object/assign';
import React from 'react';
import {
    render
} from 'react-dom';
import store from './reducers'
import { Provider } from 'react-redux'
import App from './views/App';

// Render the main component into the dom

render(<Provider store={store}><App></App></Provider>, document.getElementById('app'));
