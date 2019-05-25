import uid from 'uniqid'

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
            title: "Купить дом"
        },
        {
            id: uid(),
            title: "Посадить дерево"
        }
        
    ],
    'table-2': [
        {
            id: uid(),
            title: "Почитать про FP"
        },
    ],
}

const removeCardById = ({id: targetId}) => ({id}) => id !== targetId

export function cardReducer(state = initialState, action) {
    switch(action.type) {
        case 'add_card_to_column':
            const {
                title,
                targetColumnId
            } = action.payload;

            return {
                ...state,
                [targetColumnId]: [
                    ...state[targetColumnId],
                    {
                        title,
                        id: uid()
                    }
                ]
            }


        case 'remove_card_from_column':
            const {
                targetCard,
                columnId
            } = action.payload;
            const filtetedCards = state[columnId].filter(removeCardById(targetCard))

            return {
                ...state,
                [columnId]: filtetedCards
            }
        case 'insert_card_to_column':
            const {
                card,
                where
            } = action.payload;

            const newCards = [
                ...state[where.columnId].slice(0, where.index),
                card,
                ...state[where.columnId].slice(where.index)
            ]

            return {
                ...state,
                [where.columnId]: newCards
            }

        default:
            return state;
    }
}