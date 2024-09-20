import React, {useState} from "react";

const ChildComponent = ({ message, sendMessageToParent }) => {
    return (
      <div>
        <p>Message from Parent: {message}</p>
        <button onClick={() => sendMessageToParent('Hello from Child!')}>
          Send Message to Parent
        </button>
      </div>
    );
  };

const ParentChild = () => {
    //Demonstrate how to pass data between a parent and child component using props and callbacks.

    //set state for the child component
    const [childmessage, setChildMessage] = useState('')

    //create function for sending the message to the parent
    const sendMessageToParent = (message) => {
        setChildMessage(message)
    }

    //return the child component right here
    return (
        <div>
            <ChildComponent 
                message="hello from parent"
                sendMessageToParent={sendMessageToParent}
            />
            {childmessage && <p>{childmessage}</p>}
        </div>
    )

}

export default ParentChild