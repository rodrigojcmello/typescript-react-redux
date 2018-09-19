export interface IItem {
    autor: string;
    título: string;
    concluído: boolean;
}
interface IAdicionarItemAction extends IItem {
    type: 'ADICIONAR_ITEM';
}
export type AdicionarItem = (autor: string, título: string) => void | IAdicionarItemAction;
export const adicionarItem: AdicionarItem = (autor, título): IAdicionarItemAction => ({
    autor,
    concluído: true,
    type: 'ADICIONAR_ITEM',
    título,
});
export type ItensAction = IAdicionarItemAction;
