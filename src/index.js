import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

reportWebVitals();

let rerenderDomTree=()=>{
  root.render(
    <BrowserRouter>
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
    </BrowserRouter>
  );
}
rerenderDomTree(store.getState());
store.rerender(rerenderDomTree);
