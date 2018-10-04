import * as React from 'react';
// import Contador from './Contador';
import ItemEntrada from './ItemEntrada';
import ItemLista from './ItemLista';
import ContadorContainer from '../screens/Contador/containers/ContadorContainer';

class ListaContainer extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <>
                <ContadorContainer/>
                <ItemEntrada/>
                <ItemLista/>
            </>
        );
    }
}

export default ListaContainer;
