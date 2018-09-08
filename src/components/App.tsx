import * as React from 'react';
import { Link, Router } from '@reach/router';
import styles from './App.module.css';
import Input from './Input';

// @ts-ignore
import Foo from './Foo';
import SomeSvg from './SomeSvg';
import Invoices, { Invoice } from './Invoices';

interface Props {
  message: string;
}

class App extends React.Component<Props> {
  render() {
    const { message } = this.props;

    return (
      <div className={styles.root}>
        <h4>{message}</h4>
        <Link to="/some-svg">Hello SVG</Link>{' '}
        <Link to="/some-input">Some Input</Link>{' '}
        <Link to="/invoices">Invoices</Link>{' '}
        <Link to="/some-page">JS Component</Link>
        <Router>
          <Foo path="/some-page" />
          <Input path="/some-input" />
          <SomeSvg path="/some-svg" />
          <Invoices path="/invoices" />
          <Invoice path="/invoices/:invoiceId" invoiceId="default-id" />
        </Router>
      </div>
    );
  }
}

export default App;
