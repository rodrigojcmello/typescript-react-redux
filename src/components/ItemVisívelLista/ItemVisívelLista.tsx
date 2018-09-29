import * as React from 'react';
import { AlternarConclusãoItem, IItem } from '../../store/itens/itensActions';
import * as s from './ItemVisívelLista.scss';

interface IPropsItensVisíveis {
    itens: IItem[];
    alternarConclusãoItem: AlternarConclusãoItem;
}

class ItensVisíveisLista extends React.PureComponent<IPropsItensVisíveis, {}> {
    constructor(props: IPropsItensVisíveis) {
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
                {this.props.itens.map((item: IItem, índice) => (
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
