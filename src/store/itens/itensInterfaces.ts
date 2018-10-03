export interface Item {
    autor: string;
    título: string;
    concluído: boolean;
}

export interface AdicionarItemAction extends Item {
    type: 'ADICIONAR_ITEM';
}

export type AdicionarItem = (autor: string, título: string) => void | AdicionarItemAction;

export interface AlternarConclusãoItensAction {
    type: 'ALTERNAR_CONCLUSÃO_ITEM';
    índice: number;
}

export type AlternarConclusãoItem = (índice: number) => void;

export type ItensAction = AdicionarItemAction | AlternarConclusãoItensAction;
