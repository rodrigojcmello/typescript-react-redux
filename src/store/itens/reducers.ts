import { AnyAction } from 'redux';
// import { IItem, IItens, ItensAction } from './actions';

// const stateInicial: IItens = {
//     itens: [],
// };

const itens = (state: any = [], action: AnyAction) => {
    console.log('TCL: itens -> state', state);
    switch (action.type) {
        case 'ADICIONAR_ITEM':
            return [
                ...state,
                {
                    autor: action.autor,
                    concluído: false,
                    título: action.título,
                },
            ];
        default:
            return state;
    }
};

export default itens;
