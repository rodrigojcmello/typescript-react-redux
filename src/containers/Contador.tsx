import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { aumentar } from '../store/contador/actions';
import { IAppState } from '../store/store';

interface IPropsContador {
    count: number;
    aumentar: (número: number) => void;
}

class Contador extends React.PureComponent<IPropsContador> {
    constructor(props: IPropsContador) {
        super(props);
    }
    public clicar = (evento: React.SyntheticEvent<HTMLButtonElement>) => {
        const número: number = Number(evento.currentTarget.dataset.número);
        this.props.aumentar(número);
    }
    public render() {
        return (
            <div>
                <button data-número={10} onClick={this.clicar}>
                    contador
                </button>
                <span>{this.props.count}</span>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    count: state.contador.count,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => (
    bindActionCreators({ aumentar }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Contador);
