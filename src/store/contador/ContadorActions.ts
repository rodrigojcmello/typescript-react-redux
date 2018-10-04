import { Aumentar, AumentarAction, Diminuir, DiminuirAction } from './ContadorInterfaces';

export const aumentar: Aumentar = (número): AumentarAction => ({
    type: 'AUMENTAR',
    número,
});

export const diminuir: Diminuir = (número): DiminuirAction => ({
    type: 'DIMINUIR',
    número,
});
