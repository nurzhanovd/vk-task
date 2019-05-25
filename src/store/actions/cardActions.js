export const insertCard = (card, where) => ({
    type: 'insert_card_to_column',
    payload: {
        card,
        where
    }
})

export const removeCardFromColumn = (targetCard, columnId) => ({
    type: 'remove_card_from_column',
    payload: {
        targetCard,
        columnId
    }
})

export const addCardToColumn = (title, targetColumnId) => ({
    type: 'add_card_to_column',
    payload: {
        targetColumnId,
        title
    }
})