import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(<App message="Hello from App.tsx" />, document.getElementById(
  'root'
) as HTMLElement);
