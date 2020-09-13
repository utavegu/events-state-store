import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch(props) {
  const {icon, onSwitch} = props;

  return (
    <div className = "icon-container">
      <span 
        className="material-icons"
        onClick={onSwitch}
      >
        {icon}
      </span>
    </div>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch
