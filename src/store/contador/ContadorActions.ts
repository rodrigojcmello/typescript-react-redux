import { EditarContador, EditarContatadoAction } from './ContadorInterfaces';

export const editarContador: EditarContador = (número): EditarContatadoAction => ({
    type: 'EDITAR_CONTADOR',
    número,
});
