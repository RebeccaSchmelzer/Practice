import React, {useState} from "react";

const ToggleVisibility = () => {
    //Create a component that toggles the visibility of a child component when a button is clicked.
    const [visible, setVisible] = useState(false);

    const handleVisibilty = (event) => {
        setVisible(!visible)
    }

    return (
        <div>
             <button onClick={handleVisibilty}>
                {visible ? "hide" : "show"} component
            </button>
            {visible && <p>component</p>}
        </div>
    )
}

export default ToggleVisibility