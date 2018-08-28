import * as React from 'react';
import styles from './App.module.css';
import Input from './Input';
import logoSrc from '../logo.svg';

// @ts-ignore
import Foo from './Foo';

interface Props {
  message: string;
}

class App extends React.Component<Props> {
  render() {
    const { message } = this.props;

    return (
      <div className={styles.root}>
        <h4>{message}</h4>
        <Input />
        <Foo />
        <h4>Some svg</h4>
        <img src={logoSrc} alt="Hi from SVG" />
      </div>
    );
  }
}

export default App;
