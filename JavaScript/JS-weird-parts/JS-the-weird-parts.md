# Execution Contexts and Lexical Environments

==Syntax Parser== : A program that reads your code and determines what it does and if its grammar is valid.

==Lexical Environment== : Where something sits physically in the code you write. (e.g. a varible inside a function)

==Execution Context== : A wrapper to help manage the code that is running. 

- Objects are really just a collection of name to value pairs 

 #### Global Environment and The Global Object

The (Global) Execution context creates two things:

1. Global Object
2. 'this'

Global Object (window object [in browsers]) = 'this'



#### The Execution Context - Creation and Hoisting

==Hoisting== : Other coding languages usually execute line by line down...however JS you can call a function before it is written in the code 

 - (while varibles will say undefined).
 - this is called Hoisting



#### Conceptual Aside: JavaScript and 'undefined'

undefined !== not defined



#### Conceptual Aside: Single Threaded, Synchronous Execution

==Single Threaded== : one command at a time

==Synchronous== : one line at a time

JavaScript is single threaded synchronous execution in its behavior



#### Function Invocation and the Execution Stack

==Invocation== : calling a function (In JS by using parentheses() )







