## Jsx workarounds
- instead of wrapping an element in a div, wrap it in an array, but then you rlly need a key.
- (just use the div wrapper)

## creating wrapper components
-use a Wrapper component instead of a div and return the props.children
- also React.Fragment or Fragment and u have to import fragment from react