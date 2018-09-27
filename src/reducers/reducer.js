export function reducer(state, action) {

    if(state === undefined) {
        console.log("initial state")
        return {
            triviaList: []
        }
    }

    switch (action.type) {
        case 'FETCH_DATA':
            let newList = action.data.results;
            console.log(typeof newList)
            return {
                ...state,
                triviaList: state.triviaList.concat(newList)
            }    
        default:
            return state;
    }
}