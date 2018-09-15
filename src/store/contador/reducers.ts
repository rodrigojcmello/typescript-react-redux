import { AnyAction } from 'redux';

const contador = (state = { count: 0, nome: 'rodrigo' }, action: AnyAction) => {
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
