export function reducer(state, action) {

    if(state === undefined) {
        return {
            triviaList: [],
            currentQuestion: 0,
            updateTrivia: false
        }
    }

    switch (action.type) {
        case 'FETCH_DATA':
            let newList = action.data.results;
            return {
                ...state,
                triviaList: state.triviaList.concat(newList),
                updateTrivia: false
            }
        case 'CORRECT':
            return {
                ...state,
                currentQuestion: state.currentQuestion +1
            }
            // notification of correct
            // money increases
        case 'WRONG':
            return {
                ...state,
                currentQuestion: 0,
                triviaList: [],
                updateTrivia: true
            }
            
            // should say the correct ans
            // money resets. Questions reset
            // question number resets
        default:
            return state;
    }
}