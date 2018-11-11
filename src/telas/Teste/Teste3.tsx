import * as React from 'react';
import { ContextoUsuario } from '../../store/contexto';

interface Props {
    children?: {};
}

class Teste3 extends React.PureComponent<Props> {
    static contextType: React.Context<{}>;

    constructor(props: Props) {
        super(props);
    }

    render() {
        const usuario = this.context;
        return (
            <div>
                {this.props.children}
                <div>Meu nome é {usuario.nome}</div>
            </div>
        );
    }
}

Teste3.contextType = ContextoUsuario;

export default Teste3;