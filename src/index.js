import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './app/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

const client = new ApolloClient({ uri: 'http://localhost:4000/' })

ReactDOM.render(
  <React.StrictMode>
    
      <ApolloProvider client={client} >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </Provider>
      </ApolloProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
