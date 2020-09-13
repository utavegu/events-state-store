import React, { useState } from 'react'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'

function Store() {
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const [iconState, iconSetState] = useState({view: "view_list"});

  const onSwitch = (evt) => {
    if (evt.currentTarget.innerText === "view_list") iconSetState({view: "view_module"});
    else iconSetState({view: "view_list"});
  }

  const changeDisplay = () => {
    if (iconState.view === "view_list") {
      return (
      <CardsView 
        cards = {products}
      />
      )
    }
    else {
      return (
      <ListView
        items = {products}
      />
      )
    }
  }
  
  return (
    <>
      <IconSwitch
        icon = {iconState.view}
        onSwitch = {onSwitch}
      />

      {changeDisplay()}
    </>
  )
}

export default Store
