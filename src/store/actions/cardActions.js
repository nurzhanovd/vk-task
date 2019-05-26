import { CardTypes } from '../types'

export const insertCard = (card, where) => ({
    type: CardTypes.INSERT_CARD_TO_COLUMN,
    payload: {
        card,
        where
    }
})

export const removeCardFromColumn = (targetCard, columnId) => ({
    type: CardTypes.REMOVE_CARD_FROM_COLUMN,
    payload: {
        targetCard,
        columnId
    }
})

export const addCardToColumn = (title, targetColumnId) => ({
    type: CardTypes.ADD_CARD_TO_COLUMN,
    payload: {
        targetColumnId,
        title
    }
})
