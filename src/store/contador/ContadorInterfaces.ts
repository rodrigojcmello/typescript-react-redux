export interface Contador {
    count: number;
}

export interface AumentarAction {
    número: number;
    type: 'AUMENTAR';
}

export type Aumentar = (número: number) => void | AumentarAction;

export type ContadorAction = | AumentarAction;
