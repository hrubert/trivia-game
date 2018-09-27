export function reducer(state, action) {

    const moneyArr = [100, 200, 300, 500, 1000,
                    2000, 4000, 8000, 16000, 32000,
                    64000, 125000, 250000, 500000, 1000000]

    if(state === undefined) {
        return {
            triviaList: [],
            currentQuestion: 0,
            updateTrivia: true
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
        case 'ANSWER':
            if (action.correct) {
                return {
                    ...state,
                    currentQuestion: state.currentQuestion +1
                }
            } else {
                return {
                    ...state,
                    currentQuestion: 0,
                    triviaList: [],
                    updateTrivia: true
                }
            }
            
            // notification of correct
            // money increases
        // case 'WRONG':
        //     return {
        //         ...state,
        //         currentQuestion: 0,
        //         triviaList: [],
        //         updateTrivia: true
        //     }
            
            // should say the correct ans
            // money resets. Questions reset
            // question number resets
        default:
            return state;
    }
}