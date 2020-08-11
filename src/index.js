import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './i18n';
//import DiagramWidget from './components/myroadmap/myroadmap';
import i18n from 'i18next';

library.add(fab);

i18n.init({
    fallbackLng: 'cimode',
    debug: false,
    saveMissing: false,
    
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    
    // react i18next special options (optional)
    // fix not rendering nodes and node opening popup modal and Jqerys
    react: {
        wait: true,
        useSuspense: false, // set it to fallback to let passed namespaces to translated hoc act as fallbacks
    },
});

ReactDOM.render(
    <Suspense fallback={<div>Loading translations...</div>}>
    <App />

  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
