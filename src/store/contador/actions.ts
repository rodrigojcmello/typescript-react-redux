import { Action } from 'redux';

interface IAumentarAction extends Action {
    type: 'AUMENTAR';
    número: number;
}
export const aumentar = (número: number): IAumentarAction => ({
    número,
    type: 'AUMENTAR',
});

export type ContadorAction = IAumentarAction;
