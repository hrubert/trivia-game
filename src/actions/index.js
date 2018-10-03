// list of actions to map redux actions

export const fetchData = data => ({
    type: 'FETCH_DATA',
    data: data
})

export const answer = (num, correct, fiftyFifty, phoneAFriend, askTheAud) => ({
    type: 'ANSWER',
    num: num,
    correct: correct,
    fiftyFifty: fiftyFifty,
    phoneAFriend: phoneAFriend,
    askTheAud: askTheAud
})

export const nameEnter = name => ({
    type: 'ENTER_NAME',
    name: name
})

