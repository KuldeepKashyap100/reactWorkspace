import * as serviceWorker from './serviceWorker';
//other imports
import React from 'react';
import ReactDOM from 'react-dom';
import AppRedux from './AppContainer';
import { Provider } from 'react-redux';
import { bankStore } from './redux';
ReactDOM.render(<Provider store={bankStore}>
                    <AppRedux/>
                </Provider>,
                document.getElementById('root'));
serviceWorker.unregister();
