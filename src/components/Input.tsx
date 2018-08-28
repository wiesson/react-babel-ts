import * as React from 'react';

type State = {
  title: string;
  description: string;
};

class Input extends React.Component<{}, State> {
  state = {
    title: '',
    description: '',
  };

  handleInputChange = (name: keyof State) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => this.setState({ [name]: e.target.value } as any); // don't know how to handle that =(

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    const { title, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={title}
          placeholder="Title"
          onChange={this.handleInputChange('title')}
        />

        <input
          value={description}
          placeholder="Description"
          onChange={this.handleInputChange('description')}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Input;
