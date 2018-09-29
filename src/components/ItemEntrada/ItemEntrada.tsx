import * as React from 'react';
import { AdicionarItem } from '../../store/itens/itensActions';

interface IStateItemEntrada {
    entrada: string;
}

interface IPropsItemEntrada {
    // adicionarItem: (autor: string, título: string) => void;
    adicionarItem?: AdicionarItem;
}

class ItemEntrada extends React.PureComponent<IPropsItemEntrada, IStateItemEntrada> {
    constructor(props: IPropsItemEntrada) {
        super(props);
        this.state = {
            entrada: '',
        };
    }

    public definirEntrada = (evento: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({ entrada: evento.currentTarget.value });
    };
    public adicionarItem = (evento: React.SyntheticEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (this.state.entrada.trim()) {
            this.props.adicionarItem('rodrigo', this.state.entrada);
            this.setState({ entrada: '' });
        }
    };

    public render() {
        return (
            <>
                <form onSubmit={this.adicionarItem}>
                    <input value={this.state.entrada} onChange={this.definirEntrada}/>
                    <button type='submit'>
                        Adicionar
                    </button>
                </form>
            </>
        );
    }
}

export default ItemEntrada;
