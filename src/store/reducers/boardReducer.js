import uid from 'uniqid'
import { ColumnTypes } from '../types'

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
        case ColumnTypes.ADD_COLUMN:
            return [
                ...state,
                {
                    id: uid(),
                    title: action.payload
                }
            ]
        default:
            return state
    }
}