# outline
- react syntax
- working with components and data

## components?
- what rct is all about
- all UIs are made of components
- reusable building blocks in the UIs
    - (doesnt need to be reused lol)
- bc of the reusability aspects and allow for separation of concerns
- keep codebase small and manageble.

## how is a component built?
- combine html, css and js
- all these defined in a component
- css is least important
- uses a declaritive approach
    - do not tell rct that a certain html element should be created and placed somewhere specifically like vanilla js
    - instead define the end state, and make react figure out which components need to be found or updated. just define the end states and the conditions in which the states are used.

## react starter components
- index transforms the app.js to whatever u made app to be. firsrt file to execute
    - createRoot is a react method, tells react which UI should be placed in the web page
- index.html file loaded by browser, the only html file and only used to load the beginning page, when you started developing the app, it is injected into the root id on the html and then the root is created when index.js is run.
- root is stored in var, and then render tells react what should be put on the page. 
    - so the content of the root is replaced by Appjs
- app.js file: works using jsx combining html and js

## jsx intro
- jsx: js xml file as html is basically an xml file. (xtensible markup lang, uses tags like html)
- in dev tools, complex code shows whole rct source code, and react dom lib as well.
- so not just my written code, but also entire rct package code.
- so normally, the way react components are written are not supported in the browser bc of the combo of js and html, when run, rct transforms the code into usable browser code.



