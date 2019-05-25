import React from 'react';
import './styles.scss';
import { Draggable } from 'react-beautiful-dnd';


export const Card = ({cardTitle, index, id}) => (
    <Draggable
        draggableId={ id }
        index={ index }
    >
        {
            provided => (
                <div
                    className='card'
                    { ...provided.draggableProps }
                    { ...provided.dragHandleProps }
                    ref={ provided.innerRef }
                >
                    { cardTitle }
                </div>
            )
        }
    </Draggable>
)

