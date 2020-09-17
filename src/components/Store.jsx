import React, { useState } from 'react'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'
import mock from './mock'

function Store() {
  const products = mock;

  const [viewState, viewSetState] = useState({view: "view_list"});

  const onSwitch = () => {
    (viewState.view === "view_list") ? viewSetState({view: "view_module"}) : viewSetState({view: "view_list"});
  }

  const changeDisplay = () => {
    switch (viewState.view) {
      case "view_list":
        return (<CardsView cards = {products} />);
      case "view_module":
        return (<ListView items = {products} />);
      default:
        console.log("Ошибка входных данных!");
    }
  }
  
  return (
    <>
      <IconSwitch
        icon = {viewState.view}
        onSwitch = {onSwitch}
      />

      {changeDisplay()}
    </>
  )
}

export default Store
