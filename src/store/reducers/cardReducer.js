import uid from 'uniqid'
import { CardTypes } from '../types'

const initialState = {
    'table-1': [
        {
            id: uid(),
            title: "Купить дом"
        },
        {
            id: uid(),
            title: "Посадить дерево"
        },
        {
            id: uid(),
            title: "Посадить дерево"
        },
        {
            id: uid(),
            title: "Посадить дерево Посадить деревоПосадить деревоПосадить деревоПосадить деревоПосадить дерево"
        },
        
    ],
    'table-2': [
        {
            id: uid(),
            title: "Почитать про FP"
        },
    ],
    'table-3': [
        {
            id: uid(),
            title: "Почитать про ООП"
        },
    ],
}

const removeCardById = ({id: targetId}) => ({id}) => id !== targetId

const insertCard = (card, index, cards) => [
    ...cards.slice(0, index),
    card,
    ...cards.slice(index)
]

export function cardReducer(state = initialState, action) {
    switch(action.type) {
        case CardTypes.ADD_CARD_TO_COLUMN:
            const {
                title,
                targetColumnId
            } = action.payload
            
            const cards = state[targetColumnId] || []

            return {
                ...state,
                [targetColumnId]: [
                    ...cards,
                    {
                        title,
                        id: uid()
                    }
                ]
            }    
        case CardTypes.REMOVE_CARD_FROM_COLUMN:
            const {
                targetCard,
                columnId
            } = action.payload
            const filtetedCards = state[columnId].filter(removeCardById(targetCard))

            return {
                ...state,
                [columnId]: filtetedCards
            }
        case CardTypes.INSERT_CARD_TO_COLUMN:
            const {
                card,
                where
            } = action.payload


            const newCards = insertCard(card, where.index, state[where.columnId])
            return {
                ...state,
                [where.columnId]: newCards
            }

        default:
            return state
    }
}