## introducing side effects
- so usestate is used to render ui and react to user input
- side effects are for anything that is not related to putting things on the screen

## useeffect hook
- first is a function that should be executed after every component evaluation IF the specified dependencies changed
- second is the dependencies of the effect - the function only runs if the depens are changed