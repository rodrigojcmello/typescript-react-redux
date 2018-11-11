import * as React from 'react';
import { EditarContador } from '../../../store/contador/ContadorTypes';

interface Props {
    count?: number;
    editar_contador?: EditarContador;
}

export class Contador extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    public clicar = (evento: React.SyntheticEvent<HTMLButtonElement>) => {
        const numero = Number(evento.currentTarget.dataset.numero);
        this.props.editar_contador(numero);
    };

    public render() {
        return (
            <div>
                <button data-numero={10} onClick={this.clicar}>
                    aumentar
                </button>
                <button data-numero={-10} onClick={this.clicar}>
                    diminuir
                </button>
                <span>{this.props.count}</span>
            </div>
        );
    }
}
