import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as s from './PostModal.scss';

const modalRoot = document.getElementById('modal');

interface Props {
    título: string;
    conteúdo: any;
}

class PostModal extends React.PureComponent<Props> {
    public el: HTMLElement;

    constructor(props: Props) {
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
            <div className={s.fundo}>
                <div className={s.modal}>
                    <div className={s.cabeçalho}>
                        <h2 className={s.título}>
                            {this.props.título}
                            <button onClick={() => {}}>fechar</button>
                        </h2>
                    </div>
                    {this.props.conteúdo}
                </div>
            </div>,
            this.el,
        );
    }
}

export default PostModal;
