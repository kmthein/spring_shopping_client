import React from 'react'

const Button = (props) => {
    const customStyle = {
        buttonStyle: {
            backgroundColor: "#068179", color: "white", border: 0, padding: "15px 35px", fontSize: "18px", cursor: "pointer"
        }
    }
  return (
    <button {...props} style={customStyle.buttonStyle} >
        {props.text}
    </button>
  )
}

export default Button