import { AdicionarItem, AdicionarItemAction, AlternarConclusãoItensAction } from './itensInterfaces';

export const adicionarItem: AdicionarItem = (autor, título): AdicionarItemAction => ({
    autor,
    concluído: true,
    type: 'ADICIONAR_ITEM',
    título,
});

export const alternarConclusãoItem = (índice: number): AlternarConclusãoItensAction => ({
    type: 'ALTERNAR_CONCLUSÃO_ITEM',
    índice,
});
