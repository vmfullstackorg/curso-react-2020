import React from 'react';
class App extends React.Component {
  state = {
    nome: 'Reynaldo Santos'
  }

  constructor(){
    super()
    this.modificarNome = this.modificarNome.bind(this)
  }

  criaComboBox = () =>{
    const opcoes = ["Fulano","Cicrano"]
    const comboBoxOpcoes = opcoes.map(opcao=><option>{opcao}</option>)
    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  modificarNome (event) {
    let txtnome = event.target.value;
    this.setState({ nome: txtnome })
  }
  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome}</h1>
        <h2>Outro componente</h2>
        {this.criaComboBox()}
      </React.Fragment>
    )
  }
}

export default App;
