export interface IItem {
    autor: string;
    título: string;
    concluído: boolean;
}

export interface IAdicionarItemAction extends IItem {
    type: 'ADICIONAR_ITEM';
}

export const adicionarItem = (autor: string, título: string): IAdicionarItemAction => ({
    autor,
    concluído: true,
    type: 'ADICIONAR_ITEM',
    título,
});

export type ItensAction = IAdicionarItemAction;
