import * as React from 'react';

interface IStateItemEntrada {
    entrada: string;
}

interface IPropsItemEntrada {
    adicionarItem: (autor: string, título: string) => void;
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
    }
    public adicionarItem = (evento: React.SyntheticEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (this.state.entrada.trim()) {
            // TODO: testar parametros
            this.props.adicionarItem('rodrigo', this.state.entrada);
            this.setState({ entrada: '' });
        }
        // this.props.dispatch(addTodo('Rodrigo', this.state.entrada));
    }
    public componentDidMount() {
        console.log('### this.props', this.props);
    }
    public render() {
        return (
            <div>
                <form onSubmit={this.adicionarItem}>
                    <input value={this.state.entrada} onChange={this.definirEntrada} />
                    <button type='submit'>
                        Adicionar
                    </button>
                </form>
            </div>
        );
    }
}

export default ItemEntrada;
