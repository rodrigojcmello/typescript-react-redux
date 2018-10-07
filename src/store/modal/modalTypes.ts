type ModalAtivo = boolean;

export interface Modal {
    ativo: ModalAtivo;
}

export interface EditarModalAction extends Modal {
    type: 'EDITAR_MODAL';
}

export type EditarModal = (ativo: ModalAtivo) => EditarModalAction;

type ModalAction = EditarModalAction;

export type ModalReducer = (state: Modal, action: ModalAction) => Modal;