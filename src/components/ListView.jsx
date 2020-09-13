import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'
import style from './ListView.module.css'

function ListView(props) {
  const {items} = props;

  return (
    <div className = {style.products}>
      {items.map(currentCard =>
        <ShopItem
        items = {currentCard}
        key = {Math.random(1000)}
        />
      )}
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.object.isRequired,
}

export default ListView
