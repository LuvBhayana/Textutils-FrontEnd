import React from 'react'

function Alert(props) {
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
        <strong>{props.alert.msg}</strong>: {props.alert.type}

  {/* <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="false">&times;</span>
  </button> */}
</div>
  )
}

export default Alert