import * as React from 'react';

enum Rotação {
    '0 graus' = 0,
    '90 graus' = 1,
    '180 graus' = 2,
    '270 graus' = 3,
}

const Carro = () => {
    return <div>Carro - {Rotação['90 graus']}}</div>;
};

export default Carro;
