const initialState = [
    {
        id: 'table-1',
        title: 'Первая таблица',
    },
    {
        id: 'table-2',
        title: 'Вторая таблица'
    }
]

export function boardReducer(state = initialState, action) {
    switch(action.type) {
        case 'add_column':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}