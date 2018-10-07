import * as React from 'react';
import Modal from '../componentes/Modal/Modal';

const ModalContainer = (props: {}) => {
    return (
        <>
            {
                this.props.ativo
                    ? (
                        <Modal
                            título={'Teste de título'}
                            conteúdo={'body'}
                        />
                    )
                    : null
            }
        </>
    );

};

export default ModalContainer;