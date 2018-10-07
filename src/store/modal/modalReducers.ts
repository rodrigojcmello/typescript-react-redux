import { Modal, ModalReducer } from './modalTypes';

const stateModal: Modal = {
    ativo: false,
};

export const modal: ModalReducer = (state = stateModal, action) => {
    switch (action.type) {
        case 'EDITAR_MODAL':
            return {
                state,
                ...{ ativo: action.ativo },
            };
        default:
            return state;
    }
};