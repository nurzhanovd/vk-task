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
            title: "Изучить концепцию ФП"
        },
        {
            id: uid(),
            title: "Восполнить мат. базу"
        },
    ],
    'table-2': [
        {
            id: uid(),
            title: "Использовать point-free style"
        },
        {
            id: uid(),
            title: "Досконально изучить графы и деревья"
        },
        {
            id: uid(),
            title: "Начать изучать Elixir"
        },
        {
            id: uid(),
            title: "Востановить занятие по боксу"
        },
        {
            id: uid(),
            title: "Преисполниться в познании и прожить сто триллионов миллиардов на таких же триллионах триллиардах планет"
        }
    ],
    'table-3': [
        {
            id: uid(),
            title: "Изучить ООП"
        },
        {
            id: uid(),
            title: "Почитать про иммутабельность"
        },
        {
            id: uid(),
            title: "Сделать клон Trello"
        },
    ],
}

const removeCardById = ({id: targetId}) => ({id}) => id !== targetId

const insertCard = (card, index, cards = []) => [
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