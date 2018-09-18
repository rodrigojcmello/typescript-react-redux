import { ContadorAction, IContador } from './ContadorActions';

const contador = (state: IContador = { count: 0 }, action: ContadorAction): IContador => {
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
