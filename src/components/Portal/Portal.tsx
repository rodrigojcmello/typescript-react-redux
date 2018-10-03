import * as React from 'react';
import * as ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    public el: HTMLElement;

    constructor(props: {}) {
        super(props);
        this.el = document.createElement('div');
    }

    public componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    public componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    public render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default Modal;
