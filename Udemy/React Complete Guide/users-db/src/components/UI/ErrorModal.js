import React from 'react'
import Button from './Button'

import Card from './Card'
import classes from './ErrorModal.module.css'
import  ReactDOM  from 'react-dom'

//backdrop here bc ur only using it here
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={classes.content}>
            <p>
                {props.message}
            </p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}

//use react-dom to make the portals
//react-dom brings all the logic from react whether its state or something else
//react doesnt care where u put the logic, react-dom helps u put it online

//first is the component
//second is where were going
//moving html content about to be rendered to a diff place
const ErrorModal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(
        <ModalOverlay 
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}/>, 
        document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default ErrorModal