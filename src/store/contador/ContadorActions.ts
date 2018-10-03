import { Aumentar, AumentarAction } from './ContadorInterfaces';

export const aumentar: Aumentar = (número): AumentarAction => ({
    type: 'AUMENTAR',
    número,
});
