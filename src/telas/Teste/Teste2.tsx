import * as React from 'react';
import Teste3 from './Teste3';

const Teste2 = (props: JSX.ElementChildrenAttribute) => {
    return (
        <div>
            <Teste3>{props.children}</Teste3>
        </div>
    );
};

export default Teste2;