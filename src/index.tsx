import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(<App message="Welcome to React" />, document.getElementById(
  'root'
) as HTMLElement);
