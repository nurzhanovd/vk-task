import React from 'react'
import './styles.scss'
import { Draggable } from 'react-beautiful-dnd'


export const Card = ({card: {title, id}, index}) => (
    <Draggable
        draggableId={ id }
        index={ index }
        >
        {
            (provided, { isDragging }) => (
                <div
                    className='card'
                    { ...provided.draggableProps }
                    { ...provided.dragHandleProps }
                    ref={ provided.innerRef }
                >
                    <p
                        className='card__text'
                    >
                        { title }
                    </p>
                </div>
            )
        }
    </Draggable>
)

