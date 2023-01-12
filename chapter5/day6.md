## react uses one way data binding 
- 
## Hooks
  # useState
  - hooks are just like a normal function 
  - we get the use state from react
  - it is used to create variables
  - this function returns an array the first element is a local variable `const [text]=useState("KFC")`
  - we give the default variable 
  - we cannot directly modify the variable in react 
  - i can modify the variable only with the function that is provided by the React 
  - why do we need these state variables? because whenevr there is a normal variable and lets say if someone is updating this variable than react wont know that it has to update the DOM so to let the react know that some thing is changing we have to use Hooks 
  - if you want your variables to be in sync with the UI than you need to use state variables
  - when you create a state variable react is watching this variable now on rerender the comonent will rerender and the value will be change the UI
  - so now react will only update the updated part in the real DOM 
  - it is using reconsiliation and dif algorithm
  - VDOM is a concept 
  - 