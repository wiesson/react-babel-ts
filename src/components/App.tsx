import * as React from 'react';
import Input from './Input';

// @ts-ignore
import Foo from './Foo';

interface Props {
  message: string;
}

class App extends React.Component<Props> {
  render() {
    return (
      <>
        <p>Hello from App.tsx</p>
        <Input />
        <Foo />
      </>
    );
  }
}

export default App;
