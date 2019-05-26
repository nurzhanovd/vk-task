import React from 'react'
import { Card } from '../Card'

export const CardList = React.memo(({cardList}) => (
    cardList && cardList.length ? (cardList.map((card, ind) => (
        <Card
            key={ ind }
            index={ ind }
            card={ card }
        /> 
    ))) : null
))
