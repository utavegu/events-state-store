import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import styles from './CardsView.module.css'

function CardsView(props) {
  const {cards} = props;

  return (
    <div className = {styles.products}>
      {cards.map(currentCard =>
        <ShopCard
        cards = {currentCard}
        key = {Math.random(1000)}
        />
      )}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default CardsView
