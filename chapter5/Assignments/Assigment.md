## What is difference between Named Export , Default export and * as export ?
- Named export 
```
export <function>
```
and imported as 
```
import {<function>} from "../"
```
- Default export
```
export default <function>
```
imported as
```
import <function> from "../../"
```
- * as export : It is used to import the whole module as a component anc access the components inside the module
ABC.js
```
export const Comp1=()=>{...}
export const Comp2=()=>{...}
export const Comp3=()=>{...}
```
CBA.js
```
import * as Huru from "./ABC.js"
<Huru.Comp1/>
<Huru.Comp2/>
<Huru.Comp3/>
```
## What are React Hooks?
- Hooks are just built in functions that allow us to use state and lifecycle methods inside functional components 
- Rules 
- Hooks should not be called inside loops,conditions or nested functions
- Hooks should be inside React functional components 
## Why do we use usestate?
- useState hook is used to maintain the state in our React application.
- It keeps track of the state changes.
- When a component is re-rendered it changes the state of our component.