import React from '../../../../.cache/typescript/2.9/node_modules/@types/react';
import ReactDOM from '../../../../.cache/typescript/2.9/node_modules/@types/react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
