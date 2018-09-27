// list of actions to map redux actions

export const fetchData = data => ({
    type: 'FETCH_DATA',
    data: data
})

export const answer = (num, correct) => ({
    type: 'ANSWER',
    num: num,
    correct: correct
})

export const wrong = num => ({
    type: 'WRONG',
    num: num
})

