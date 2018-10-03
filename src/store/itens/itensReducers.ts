import { Item, ItensAction } from './itensInterfaces';

const itens = (state: Item[] = [], action: ItensAction): Item[] => {
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
            return state.map((item: Item, índice): Item => (
                (índice === action.índice)
                    ? { ...item, concluído: !item.concluído }
                    : item
            ));

        default:
            return state;

    }
};

export default itens;
