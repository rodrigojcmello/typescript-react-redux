import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../../store/store';
import { editarContador } from '../../../store/contador/ContadorActions';
import { Contador } from '../components/Contador';

const mapStateToProps = (state: AppState) => ({
    count: state.contador.count,
});

const mapDispatchToProps = (dispatch: Dispatch<AppState>) => (
    bindActionCreators({ editar_contador: editarContador }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Contador);
