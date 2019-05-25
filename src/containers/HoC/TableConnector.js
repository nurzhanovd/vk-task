import React from 'react';
import { insertCard, removeCardFromColumn, addCardToColumn } from '../../store/actions'
import { compose } from 'redux';
import { connect } from 'react-redux';

const TableWrapper = Component => (props) => {
    
    return <Component {...props} />
}

export const composedTableWrapper = compose(
    connect((state) => ({
        columns: state.columns,
        cards: state.cards
    }), 
    (dispatch) => ({
        insertCard: (card, where) => dispatch(insertCard(card, where)),
        removeCardFromColumn: (targetCard, columnId) => dispatch(removeCardFromColumn(targetCard, columnId)),
        addCardToColumn: (title, columndId) => dispatch(addCardToColumn(title, columndId))
    })),
    TableWrapper
)
