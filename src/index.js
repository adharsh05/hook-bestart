import React from 'react';
import ReactDOM  from 'react-dom';

//import App from './useState-example';
//  import App from './useEffect-example';
// import App from './customHook-example';
// import App from './useDataApiHook-example';
import App from './useState';

//import App from './useDataApiHook-external-example';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();