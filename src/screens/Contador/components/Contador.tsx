import * as React from 'react';
import { Aumentar } from '../../../store/contador/ContadorInterfaces';

interface Props {
    count?: number;
    aumentar?: Aumentar;
}

export class Contador extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    public clicar = (evento: React.SyntheticEvent<HTMLButtonElement>) => {
        const número = Number(evento.currentTarget.dataset.número);
        this.props.aumentar(número);
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
