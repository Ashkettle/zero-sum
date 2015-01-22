Zero Sum
=

Zero Sum is a puzzle game (more to come...)






## Building ##
Clone the repository into the directory of your choice.

`npm install` to set up gulp and all the build/testing tools.


`gulp`

 Creates a clean, full build with testing, linting, reporting and minification then copies the results to the ./dist folder.



`gulp dev`

 Incrementally builds files as they're modified and then
 executes testing and linting tasks. Also starts a server on port 3000
 which serves both the example and build directories. Connected browsers will automatically refresh when files are updated.

`gulp test`

Runs unit tests and generates coverage reports to ./report

`gulp reports`

Runs gulp test along with generating code complexity reports ./report

`gulp fix-style`

Rewrite JavaScript source files by passing them through JS Beautifier

