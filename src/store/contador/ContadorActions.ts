export interface IContador {
    count: number;
}
interface IAumentarAction {
    número: number;
    type: 'AUMENTAR';
}
export type Aumentar = (número: number) => void | IAumentarAction;
export const aumentar: Aumentar = (número): IAumentarAction => ({
    número,
    type: 'AUMENTAR',
});
export type ContadorAction = IAumentarAction;
