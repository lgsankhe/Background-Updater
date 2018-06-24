import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './presentational-only.css';
import './responsive-full-background-image.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
