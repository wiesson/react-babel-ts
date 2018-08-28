import * as React from 'react';
import Input from './Input';

// @ts-ignore
import Foo from './Foo';

interface Props {
  message: string;
}

class App extends React.Component<Props> {
  render() {
    const { message } = this.props;

    return (
      <>
        <p>{message}</p>
        <Input />
        <Foo />
      </>
    );
  }
}

export default App;
