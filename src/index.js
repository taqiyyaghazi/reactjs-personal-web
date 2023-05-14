import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import registerServiceWorker from './sw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

registerServiceWorker();
