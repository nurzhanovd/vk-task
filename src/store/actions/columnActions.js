import { ColumnTypes } from '../types'

export const addColumn = (title) => ({
    type: ColumnTypes.ADD_COLUMN,
    payload: title
})
