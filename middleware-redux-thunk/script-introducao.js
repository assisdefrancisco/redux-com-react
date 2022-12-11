const initialState = {
    loading: false,
    data: null,
    error: null,
}

function reducer(state = initialState, action) {    
    switch(action.type) {
        case 'FETCH_STARTED':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { data: action.payload, loading: false, error: null };
        case 'FETCH_ERROR':            
            return { data: null, loading: false, error: action.payload };
        // case 'INCREMENTAR':
        //     return state + 1;
        // case 'REDUZIR':
        //     return state - 1;
        default:
            return state;
        
    }   
}

const {applyMiddleware, compose} = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;
const enhancer = composeEnhancers(applyMiddleware());

const store = Redux.createStore(reducer, enhancer);

// Não é recomendado: https://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
// 1° problema, é passado para função fetchUrl o store.dispatch.
// 2° problema, Mudou como dispara para mudar o estado.
async function fetchUrl(dispatch, url) {
    try {
        dispatch({ type: 'FETCH_STARTED' });
        const data = await fetch(url).then(r => r.json())
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch(error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
    
}

fetchUrl(store.dispatch, 'https://dogsapia.origamid.dev/json/api/photo')