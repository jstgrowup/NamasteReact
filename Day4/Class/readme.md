## BABEL

- if the browser is very old than it will not understand ES6 or anything than Babel actually converts the code , it is a node package , it is an another piece of JS code and it will convert it to another form that is older version of JS so that the older versions of browsers can also suppport
- Parcel doesnot remove consoles
- How does the createElement works? it is an object having id , keys , props

```
$$typeof:Symbol(react.element)
key:"h2"
props:{children: 'heading 2 from sadfsf'}
ref:null
type:"h2"
_owner:null_store:
{validated: false}
```

- To reduce the pain of createelement we use JSX it is Javascript XML (though it was not mentioned anywhere) when FB cretaed react that we want to create
- Is JSX html inside JS? NO --> why ? it is html like syntax but its not html it is HTML like syntax or a syntactical sugar for createElement
- Babel creates Abstract syntax tree
- JSX uses createElement and than that createElement will be converted to DOM
- Babel will convert JSX to createElement
- Advantages of JSX Readibility ,
- the JSX code is for humans every code is for humans your team members and humans
- babel comes with parcel
- we have two package-lock.json in nodemodules and one is outside in the global
- all the transitive dependencies are inside package-lock.json that is inside the nodemodules

# Components

- Everything is a component in React
- functional component and class based component
- functional component is the new way of writing code
- class component is a older way of writing code
- functional component is nothing but a JS function that returns some piece of react element or JSX
- name of a Component starts with a capital letter its not mendatory but good practice
- when we render a component we wrap it like </> otherwise we will face a error like

```
Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
```
- XSS in JSX , JSX actually sanitization when we get a data from the API 
- Component() and <Component are same/> 
- Component composition (it is just a component inside another component thats it normally we can say the composition of a component)
- 
