export interface IContador {
    count: number;
}
interface IAumentarAction {
    número: number;
    type: 'AUMENTAR';
}
export const aumentar = (número: number): IAumentarAction => ({
    número,
    type: 'AUMENTAR',
});
export type ContadorAction = IAumentarAction;
