import uid from 'uniqid'
import { ColumnTypes } from '../types'

const initialState = [
    {
        id: 'table-1',
        title: 'TO DO',
    },
    {
        id: 'table-2',
        title: 'In Progress'
    },
    {
        id: 'table-3',
        title: 'Done'
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