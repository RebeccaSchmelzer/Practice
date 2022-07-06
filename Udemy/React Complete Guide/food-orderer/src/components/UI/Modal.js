import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

/*141
    get backdrop to close onclick when the modal is up, bring in an onclick in the backdrop component then bring it into the modal itself by bringing down onclose again
*/

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    )

}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal