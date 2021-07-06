import React from 'react';
class App extends React.Component {
  state = {
    nome: 'Reynaldo Santos'
  }
  render() {
    return (
      <h2>Hello {this.state.nome}</h2>
    )
  }
}

export default App;
