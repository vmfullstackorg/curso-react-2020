import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidCatch() {
        //Executa quando o componente gera um erro (try/catch)
    }

    componentDidUpdate() {
        //Executa quando o componente é atualizado
    }

    componentDidMount() {
        //Executa quando o componente acabou de ser montado
    }
    
    shouldComponentUpdate() {
        //Executa quando o componente deve ser renderizado nomamente
    }

    componentWillUnmount() {
        //Executa quando o componente é desmontado
    }

    render() {
        return (
            <div>
                <h1>Hello Clock</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;