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

        case 'ALTERNAR_CONCLUSÃO_ITEM':
            return state.map((item: IItem, índice): IItem => (
                (índice === action.índice)
                    ? { ...item, concluído: !item.concluído }
                    : item
            ));

        default:
            return state;

    }
};

export default itens;
