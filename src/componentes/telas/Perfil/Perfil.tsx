import * as React from 'react';

import * as s from './Perfil.scss';

class Perfil extends React.PureComponent<{}> {
    constructor(props: {}) {
        super(props);
    }
    public render() {
        return (
            <>
                <div className={s.perfil}>
                    PERFIL 123
                </div>
            </>
        );
    }
}

export { Perfil };
