import firebase from '../components/firebase';

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

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
            askTheAud: true,
            name: 'Anonymous'
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
                db.collection("scores").add({
                    name: state.name,
                    score: moneyArr[state.currentQuestion]
                })
                return {
                    ...state,
                    triviaList: [],
                    updateTrivia: true,
                    highScores: state.highScores.concat({name: state.name, score: moneyArr[state.currentQuestion]}),
                    currentQuestion: 0,
                    fiftyFifty: true,
                    phoneAFriend: true,
                    askTheAud: true
                }
            }
            
        case 'ENTER_NAME':
            return {
                ...state,
                name: action.name
            }
            
        default:
            return state;
    }
}