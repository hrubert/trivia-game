export function reducer(state, action) {

    if(state === undefined) {
        console.log("initial state")
        return {
            triviaList: []
        }
    }

    switch (action.type) {
        case 'ACTION':
            return {
                ...state,
                triviaList: state.triviaList.concat("meow")
            }    
        default:
            return state;
    }
}