import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { composedTableWrapper } from '../HoC';
import { Column } from '../../components';
import './styles.scss';


class Board extends React.Component {

    onDragEnd = ({ destination, source, draggableId: cardId }) => {
        const {
            removeCardFromColumn,
            insertCard,
            cards
        } = this.props;
        if (destination) {
            const {
                droppableId: destID,
                index: destIndex
            } = destination;

            const {
                droppableId: srcID,
                index: srcIndex
            } = source;

            const isChangeColumn = destID !== srcID
            const isChangeOrder = destIndex !== srcIndex
            const card = cards[srcID][srcIndex]
            
            if ( isChangeColumn ) {
                insertCard(card, {columnId: destID, index: destIndex})
                removeCardFromColumn(card, srcID)
            }
        }
    }

    createNewCard = (columnId) => (text) => this.props.addCardToColumn(text, columnId)

    render() {
        const {
            columns,
            cards,
        } = this.props;

        return (
            <DragDropContext
                onDragEnd={ this.onDragEnd }
            >
                <div className='board'>
                    {
                        columns.map((column, idx) => (
                            <div 
                                className='board__column'
                                key={ idx }
                            >
                                <Column 
                                    { ...column }
                                    cards={cards[column.id]}
                                    onSubmit={ this.createNewCard(column.id) }
                                />
                            </div>
                        ))
                    }
                    <div 
                        className='board__column'
                    >
                        <Column 
                            // onSubmit={  }
                        />
                    </div>
                </div>
            </DragDropContext>
        )
    }
}

export default composedTableWrapper(Board);



