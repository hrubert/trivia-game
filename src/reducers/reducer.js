export function reducer(state, action) {

    const moneyArr = [0, 100, 200, 300, 500, 1000,
                    2000, 4000, 8000, 16000, 32000,
                    64000, 125000, 250000, 500000, 1000000]

    if(state === undefined) {
        return {
            triviaList: [],
            currentQuestion: 0,
            updateTrivia: true,
            highScores: [],
            phoneAFriend: true,
            fiftyFifty: true,
            askTheAud: true
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
                    currentQuestion: state.currentQuestion +1,
                    fiftyFifty: action.fiftyFifty,
                    phoneAFriend: action.phoneAFriend,
                    askTheAud: action.askTheAud
                }
            } else {
                return {
                    ...state,
                    triviaList: [],
                    updateTrivia: true,
                    highScores: state.highScores.concat({name: 'Tracy', score: moneyArr[state.currentQuestion]}),
                    currentQuestion: 0,
                    fiftyFifty: true,
                    phoneAFriend: true,
                    askTheAud: true
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