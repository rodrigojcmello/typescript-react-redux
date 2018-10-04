import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ItemVisívelLista from '../components/ItemVisívelLista/ItemVisívelLista';
import { alternarConclusãoItem } from '../store/itens/itensActions';
import { AppState } from '../store/store';

const mapStateToProps = (state: AppState) => ({
    itens: state.itens,
});

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({ alternarConclusãoItem }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ItemVisívelLista);
