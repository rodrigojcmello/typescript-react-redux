import { IItem, ItensAction } from './itensActions';

const itens = (state: IItem[] = [], action: ItensAction): IItem[] => {
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
