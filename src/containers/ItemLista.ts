import { connect } from 'react-redux';
import ItemVisívelLista from '../components/ItemVisívelLista/ItemVisívelLista';
import { IAppState } from '../store/store';

const mapStateToProps = (state: IAppState) => ({
    itens: state.itens,
});

export default connect(mapStateToProps)(ItemVisívelLista);
