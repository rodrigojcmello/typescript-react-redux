import { IAppState } from '../store';
import { ContadorAction } from './actions';

const contador = (state: IAppState = { count: 0 }, action: ContadorAction): IAppState => {
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
