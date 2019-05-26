import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { composedTableWrapper } from '../HoC'
import { Column } from '../../components'
import './styles.scss'


class Board extends React.Component {

    onDragEnd = ({ destination, source, draggableId }) => {
        const {
            removeCardFromColumn,
            insertCard,
            cards
        } = this.props
        if (destination) {
            const {
                droppableId: destID,
                index: destIndex
            } = destination

            const {
                droppableId: srcID,
                index: srcIndex
            } = source

            const card = cards[srcID][srcIndex]
            
            removeCardFromColumn(card, srcID)
            insertCard(card, {columnId: destID, index: destIndex})
        }
    }

    createNewCard = (columnId) => (text) => this.props.addCardToColumn(text, columnId)


    render() {
        const {
            columns,
            cards,
            addColumn
        } = this.props

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
                            onSubmit={ addColumn }
                        />
                    </div>
                </div>
            </DragDropContext>
        )
    }
}

export default composedTableWrapper(Board)



