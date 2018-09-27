// list of actions to map redux actions

export const fetchData = data => ({
    type: 'FETCH_DATA',
    data: data
})

export const correct = num => ({
    type: 'CORRECT',
    num: num
})

export const wrong = num => ({
    type: 'WRONG',
    num: num
})