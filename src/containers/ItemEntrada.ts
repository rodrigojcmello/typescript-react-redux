import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ItemEntrada from '../components/ItemEntrada/ItemEntrada';
import { adicionarItem } from '../store/itens/itensActions';

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({ adicionarItem }, dispatch)
);

export default connect(null, mapDispatchToProps)(ItemEntrada);
