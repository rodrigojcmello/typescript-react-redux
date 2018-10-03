import { Contador, ContadorAction } from './ContadorInterfaces';
import * as store from 'store';

const contadorState: Contador = {
    count: store.get('contador.count') || 0,
};

export const contador = (state = contadorState, action: ContadorAction): Contador => {
    switch (action.type) {
        case 'AUMENTAR':
            const count = action.número + state.count;
            store.set('contador.count', count);
            return {
                ...state,
                count,
            };
        default:
            return state;
    }
};
