## Jsx workarounds
- instead of wrapping an element in a div, wrap it in an array, but then you rlly need a key.
- (just use the div wrapper)

## creating wrapper components
- use a Wrapper component instead of a div and return the props.children
- also React.Fragment or Fragment and u have to import fragment from react

## react portals
- making sure overlays are on top of all logic
- use a portal to write components however u want but rendered diff in the dom
- so to use:
    - place to port to 
    - let the component know where the portal is to

## refs
- get access to other dom elements and work with them
- accessing values with refs is called uncontrolled components
    - bc they are internal state, not controlled by react!
    - alot for input components bc they natively have state from the browser but we are manipulating the dom to uncontrol it