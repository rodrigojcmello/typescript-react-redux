import * as React from 'react';
import {ContextoUsuario} from '../../store/contexto';
import Teste2 from './Teste2';

interface State {
    contador: number;
}

class Teste extends React.Component<{}, State> {
    state = {
        contador: 0,
    };

    aumentar = () => {
        this.setState({contador: this.state.contador + 1});
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <ContextoUsuario.Provider value={{nome: 'José'}}>
                Teste 123
                <button onClick={this.aumentar}>aumentar</button>
                <div>{this.state.contador}</div>
                <Teste2>Qual o seu nome?</Teste2>
            </ContextoUsuario.Provider>
        );
    }
}

export default Teste;
