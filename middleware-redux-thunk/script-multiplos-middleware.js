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

const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('ACTION', action)
    console.log('PREV_STATE', store.getState())
    const result = next(action);
    console.log('NEW_STATE', store.getState())
    console.log('logger: ', action)
    console.groupEnd();    
    return result;
}

const reduzirMiddleware = (store) => (next) => (action) => {

    if(action.type === 'REDUZIR') window.alert('REDUZIR');

    return next(action);
}

const {applyMiddleware, compose} = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;

const enhancer = composeEnhancers(applyMiddleware(logger, reduzirMiddleware));

const store = Redux.createStore(reducer, enhancer);

// console.log(store.getState())

store.dispatch({type: 'INCREMENTAR' })
store.dispatch({type: 'INCREMENTAR' })
// const teste = store.dispatch({type: 'REDUZIR' })

console.log(teste);
