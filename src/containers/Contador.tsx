import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { aumentar } from '../store/contador/actions';
import { IAppState } from '../store/store';

const Contador = (props: any) => {
    console.log('TCL: Contador -> props', props);
    return (
        <div>
            <button onClick={() => props.aumentar(5)}>
                contador
            </button>
            <span>{props.count}</span>
        </div>
    );
};

const mapStateToProps = (state: IAppState) => ({
    count: state.contador.count,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>) => (
    bindActionCreators({ aumentar }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Contador);
