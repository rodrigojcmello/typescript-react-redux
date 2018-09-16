// import { IAppState } from '../store';
import { ContadorAction, IContador } from './actions';

const stateInicial: IContador = {
    count: 0,
};

const contador = (state: IContador = stateInicial, action: ContadorAction): IContador => {
    console.log('TCL: state', state);
    console.log('TCL: action', action);
    switch (action.type) {
        case 'AUMENTAR':
            return {
                ...state,
                count: action.número + state.count,
            };
        default:
            return state;
    }
};

export default contador;
