import * as React from 'react';

import * as s from './Acesso.scss';
import { Link } from 'react-router-dom';

class Acesso extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className={s.acesso}>
                acesso
                <div>
                    <Link to='/acesso/carro'>Carro</Link>
                </div>
            </div>
        );
    }
}

export { Acesso };
