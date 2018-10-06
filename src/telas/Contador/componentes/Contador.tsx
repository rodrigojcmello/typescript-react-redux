import * as React from 'react';
import { EditarContador } from '../../../store/contador/ContadorInterfaces';

interface Props {
    count?: number;
    editar_contador?: EditarContador;
}

export class Contador extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    public clicar = (evento: React.SyntheticEvent<HTMLButtonElement>) => {
        const número = Number(evento.currentTarget.dataset.número);
        this.props.editar_contador(número);
    };

    public render() {
        return (
            <div>
                <button data-número={10} onClick={this.clicar}>
                    aumentar
                </button>
                <button data-número={-10} onClick={this.clicar}>
                    diminuir
                </button>
                <span>{this.props.count}</span>
            </div>
        );
    }
}
