import React from 'react';
class App extends React.Component {
  state = {
    nome: 'Reynaldo Santos'
  }

  modificarNome = (event) => {
    let txtnome = event.target.value;
    this.setState({ nome: txtnome })
  }
  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h2>Hello {this.state.nome}</h2>
      </React.Fragment>
    )
  }
}

export default App;
