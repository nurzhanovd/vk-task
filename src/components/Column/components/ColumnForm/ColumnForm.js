import React, { useState } from 'react';
import './styles.scss';

export const ColumnForm = ({ buttonText, inputPlaceholder, onClose, onSubmit }) => {

    const [text, setText] = useState('')

    return (
        <div className='column-form'>
            <div className='column-form__row'>
                <label
                    className='column-form__label'
                >
                    <textarea
                        className='column-form__input'
                        type='text'
                        value={ text }
                        onChange={ e => setText(e.target.value) }
                        placeholder={ inputPlaceholder }
                    />
                </label>
            </div>
            <div className='column-form__row'>
                <button 
                    className='column-form__button'
                    onClick={ () => {
                        onSubmit(text)
                        onClose()
                    } }
                >
                    { buttonText }
                </button>

                <div 
                    className='close-icon'
                    onClick={ onClose }
                />
            </div>
        </div>
    )
}
