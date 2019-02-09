import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { store, persistor} from './redux/store';
import App from './components/App';

//import { appendFileSync } from 'fs';
//import './components/index.css';

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  document.getElementById('root'),
);


