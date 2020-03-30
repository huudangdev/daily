import SweetAlert from 'sweetalert2-react'
import React from 'react'

const Alert = (props) => {
  return (
    <SweetAlert
      show={props.show}
      title={props.title}
      text={props.text}
      onConfirm={() => props.handleClick()}
    />
  )
}

export default Alert
