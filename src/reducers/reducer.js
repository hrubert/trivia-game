export function reducer(state, action) {

    if(state === undefined) {
        console.log("initial state")
        return {
            triviaList: [],
            currentQuestion: 0
        }
    }

    switch (action.type) {
        case 'FETCH_DATA':
            let newList = action.data.results;
            console.log(typeof newList)
            return {
                ...state,
                triviaList: state.triviaList.concat(newList),
                currentQuestion: state.currentQuestion
            }    
        default:
            return state;
    }
}