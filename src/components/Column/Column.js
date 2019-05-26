import React, { useState } from 'react'
import { Card, CardList } from './components'
import { Droppable } from 'react-beautiful-dnd'
import { ColumnForm } from './components'
import './styles.scss'

export const Column = ({ id, title, cards, onSubmit }) => {

    const [ showForm, setShowForm ] = useState(false)
    
    const toggleShowForm = () => setShowForm(!showForm)

    const createColumn = !cards && !id

    const tableFormProps = {
        onClose: toggleShowForm,
        onSubmit: onSubmit,
        buttonText: `Добавить ${createColumn ? 'колонку' : 'карточку'}`,
        inputPlaceholder: `Введите название ${createColumn ? 'колонки': 'карточки' }`
    }

    return (
        <div className='column__wrapper'>
            <div className='column'>
                { title && (
                    <header className='column__header'>
                    { title }
                    </header>
                )}
                
                { !createColumn && 
                    (
                        <Droppable
                            droppableId={ id || 'noop' }
                            isDropDisabled={ !id }
                        >
                            { provided => (
                                <section 
                                    className='column__card-list'
                                    ref={ provided.innerRef }
                                    {...provided.droppableProps}
                                >
                                    
                                    <CardList cardList={ cards } />
                                    { provided.placeholder }
                                </section>
                            )
                                
                            }
                        </Droppable>
                    )
                }
                <footer 
                    className='column__footer'
                    style={{
                        marginTop: cards && cards.length ? 5 : 0
                    }}
                >
                        {
                            showForm ? (
                                <ColumnForm
                                    {...tableFormProps}
                                />
                            ) : (
                                <button
                                    className='column__footer__button'
                                    onClick={ toggleShowForm }
                                >
                                    + { tableFormProps.buttonText }
                                </button>
                            )
                        }
                </footer>
            </div>
        </div>
    )
}
