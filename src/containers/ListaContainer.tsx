import * as React from 'react';
import Contador from './Contador';
import ItemEntrada from './ItemEntrada';
import ItemLista from './ItemLista';

class ListaContainer extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
    }
    public render() {
        return (
            <>
                <Contador />
                <ItemEntrada />
                <ItemLista />
            </>
        );
    }
}

export default ListaContainer;
