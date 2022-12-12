import { /*createAction,*/ createSlice } from '@reduxjs/toolkit';

// export const incrementar = createAction('INCREMENTAR');
// export const reduzir = createAction('REDUZIR');

// function contador(state = 0, action) {
//     switch (action.type) {
//         case incrementar.type:
//             return state + 1;
//         case reduzir.type:
//             return state - 1;
//         default:
//             return state;
//     }
// }

// const slice = createSlice({
//     name: 'contador',
//     initialState: {
//         total: 0
//     },
//     reducers: {
//         incrementar(state) {
//             state.total++
//         },
//         reduzir(state) {
//             state.total--
//         }
//     }
// })

const slice = createSlice({
    name: 'contador',
    initialState: 0,
    reducers: {
        incrementar: (state) => state + 1,
        reduzir: (state) => state - 1
    }
})

export const { incrementar, reduzir } = slice.actions;

export default slice.reducer;