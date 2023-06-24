import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root=ReactDOM.createRoot(document.getElementById('root'));//This line indicates that all the content of
// this file should be rendred in the root id of the html file
root.render(

<React.StrictMode>
<App/>
</React.StrictMode>
)