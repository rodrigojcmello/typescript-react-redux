import * as React from 'react';
import { IItem } from '../../store/itens/actions';

interface IPropsItensVisíveis {
    itens: IItem[];
}

class ItensVisíveisLista extends React.PureComponent<IPropsItensVisíveis, {}> {
    constructor(props: IPropsItensVisíveis) {
        super(props);
    }
    public componentDidMount() {
        console.log('ItensVisíveisLista this.props', this.props);
    }
    public render() {
        return (
            <ul>
                {this.props.itens.map((item: IItem, índice) => (
                    <li key={índice}>
                        {item.título}
                    </li>
                ))}
            </ul>
        );
    }
}

export default ItensVisíveisLista;
