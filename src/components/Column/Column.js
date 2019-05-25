import React, { useState } from 'react';
import { Card } from './components/Card';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnForm } from './components';
import './styles.scss';

export const Column = ({ id, title, cards, onSubmit }) => {

    const [ showForm, setShowForm ] = useState(false)
    const [ formText, setFormText ] = useState('')
    
    const toggleShowForm = () => setShowForm(!showForm)

    const createColumn = !cards;

    const tableFormProps = {
        onClose: toggleShowForm,
        onSubmit: onSubmit,
        buttonText: `Добавить ${createColumn ? 'колонку' : 'карточку'}`,
        inputPlaceholder: `Введите название ${createColumn ? 'колонки': 'карточки' }`
    }

    return (
        <div className='column__wrapper'>
            <div className='column'>
                { !createColumn && (
                    <header className='column__header'>
                    { title }
                    </header>
                )}
                {
                    !createColumn ? (
                        <Droppable
                            droppableId={ id }
                        >
                            { provided => (
                                <section 
                                    className='column__card-list'
                                    ref={ provided.innerRef }
                                    {...provided.droppableProps}
                                >
                                    {   
                                        cards.map((card, ind) => (
                                            <Card
                                                cardTitle={ card.title }
                                                index={ ind }
                                                id={ card.id }
                                            /> 
                                    ))}
                                    { provided.placeholder }
                                </section>
                            )
                                
                            }
                        </Droppable>
                    ) : (
                        <section className='column__card-list'/>
                    )
                }
                <footer className='column__footer'>
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
