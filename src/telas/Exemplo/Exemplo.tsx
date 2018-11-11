import * as React from 'react';
// import update from 'immutability-helper';

interface Todo {
    title: string;
    done: boolean;
    notes: string[];
}

interface State {
    todos: Todo[];
}

class Exemplo extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [
                { title: 'Take out the trash', done: false, notes: ['boring'] },
                { title: 'walk dog', done: true, notes: ['exercise'] },
                { title: 'read about React', done: false, notes: ['fun!'] },
            ],
        };
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState((oldState) => {
    //             const todos = Object.assign({}, oldState);
    //             return { todos: [...todos.todos] };
    //             // return { todos: [...oldState.todos] };
    //         });
    //     }, 1000);
    // }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState((oldState) => {
    //             oldState.todos[0].done = !oldState.todos[0].done; // new line
    //             return { todos: [...oldState.todos] };
    //         });
    //     }, 1000);
    // }

    componentDidMount() {
        setInterval(() => {
            this.setState((oldState) => {
                let state: Todo[];
                // state = Object.assign([], oldState.todos);
                state = [...oldState.todos];
                // state = [].concat(oldState.todos);
                // state[0].notes = [...state[0].notes, 'Batata frita!'];
                // state[0].notes.push('Batata frita!');


                // const state = update(oldState.todos, {
                //     [0]: {
                //         notes: {
                //             $push: ['smelly'],
                //         },
                //     },
                // });


                // // oldState.todos[0].notes.push('smelly'); // new line
                return { todos: state };
            });
        }, 1000);
    }

    // // @ts-ignore
    // componentDidUpdate(prevProps, prevState) {
    //     // console.log(prevProps);
    //     // console.log(prevState);
    //     this.state;
    //     this.props;
    // }

    render() {
        console.log('Todos render called');
        return (
            <>
                {this.state.todos.map((todo, i) => {
                    return (
                        <TodoItem
                            key={i}
                            title={todo.title}
                            done={todo.done}
                            notes={todo.notes}
                        />
                    );
                })}
            </>
        );
    }
}

// class TodoItem2 extends React.PureComponent<Todo> {
//     render() {
//         console.log('TodoItem render called');
//         return (
//             <div>
//                 {this.props.done ? '✓' : '▢'} {this.props.title} ({this.props.notes.join(', ')})
//             </div>
//         );
//     }
// }

interface PropsTítulo {
    title: string;
}

const Título = React.memo((props: PropsTítulo) => {
    console.log('###Entrou no título');
    return (
        <b>{props.title}</b>
    );
});

const TodoItem = React.memo((props: Todo) => {
    console.log('--- TodoItem render called');
    return (
        <div>
            {props.done ? '✓' : '▢'} <Título title={props.title}/> ({props.notes.join(', ')})
        </div>
    );
});

// const TodoItem = (props: Todo) => {
//     console.log('--- TodoItem render called');
//     return (
//         <div>
//             {props.done ? '✓' : '▢'} <Título title={props.title}/> ({props.notes.join(', ')})
//         </div>
//     );
// };

export default Exemplo;