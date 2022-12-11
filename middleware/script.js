function reducer(state = 0, action) {
    console.log('reducer');
    switch(action.type) {
        case 'INCREMENTAR':
            return state + 1;
        case 'REDUZIR':
            return state - 1;
        default:
            return state;
    }
}

// Estrutura básica de middleware
// Middleware é uma ação que ocorre toda vez que executa o dispatch, antes do reducer ser executado, 
// o reducer é ativado depois é executado o middleware e após executado o reducer.
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('ACTION', action)
    console.log('PREV_STATE', store.getState()) // estado anterior antes de passar o reducer
    const result = next(action); // passa para o reducer após executar o next
    console.log('NEW_STATE', store.getState())
    console.log('logger: ', action)
    console.groupEnd();
    return result;
}

const middleware = Redux.applyMiddleware(logger);

const store = Redux.createStore(reducer, middleware);

// console.log(store.getState());

store.dispatch({ type: 'INCREMENTAR' });
// store.dispatch({ type: 'INCREMENTAR' });
// store.dispatch({ type: 'INCREMENTAR' });
// store.dispatch({ type: 'INCREMENTAR' });