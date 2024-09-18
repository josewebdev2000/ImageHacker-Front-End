import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import BrowserRouter for the Whole App
import { BrowserRouter } from 'react-router-dom';

// Import Contexts Here
import { SmallScreenDetectorContextProvider } from './contexts/SmallScreenDetectorContext/SmallScreenDetectorContext.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SmallScreenDetectorContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SmallScreenDetectorContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
