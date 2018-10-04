export interface Contador {
    count: number;
}

export interface AumentarAction {
    número: number;
    type: 'AUMENTAR';
}

export type Aumentar = (número: number) => void | AumentarAction;

export interface DiminuirAction {
    número: number;
    type: 'DIMINUIR';
}

export type Diminuir = (número: number) => void | DiminuirAction;

export type ContadorAction =
    | AumentarAction
    | DiminuirAction;
