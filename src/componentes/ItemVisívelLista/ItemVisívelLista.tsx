import * as React from 'react';
import { AlternarConclusãoItem, Item } from '../../store/itens/itensTypes';
import * as s from './ItemVisívelLista.scss';

interface Props {
    itens: Item[];
    alternarConclusãoItem: AlternarConclusãoItem;
}

class ItensVisíveisLista extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        console.log('ItensVisíveisLista this.props', this.props);
    }

    public alternarConclusãoItem = (evento: React.SyntheticEvent<HTMLLIElement>) => {
        const índice = Number(evento.currentTarget.dataset.índice);
        this.props.alternarConclusãoItem(índice);
    };

    public render() {
        return (
            <ul>
                {this.props.itens.map((item: Item, índice) => (
                    <li
                        key={índice}
                        data-índice={índice}
                        onClick={this.alternarConclusãoItem}
                        className={item.concluído ? s.concluido : ''}
                    >
                        {item.título}
                    </li>
                ))}
            </ul>
        );
    }
}

export default ItensVisíveisLista;
