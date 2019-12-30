import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

ReactModal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
