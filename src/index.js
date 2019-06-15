import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Father from './Father';

ReactDOM.render(<Father />, document.getElementById('root'));

serviceWorker.unregister();
