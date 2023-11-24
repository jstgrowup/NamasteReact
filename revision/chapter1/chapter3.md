- if the browser is really old than this polyfill will converet the new form of code to an older form of code
- polyfill is converting one form of code to an other form of code 
- babel does this work
- createElement is pain so we will use JSX
- JSX is known as javascript XML
- the react want to write the html in our JS file
- is JSX html inside JS --> this is not right html inside JS this is HTML like syntax (syntactic sugar) it is not at all HTML inside JS
- How does jsx is doing this ? this is done by the babel so here babel is doing this means the conversion of the Html like syntax to the HTML DOM
- JSX ==>(babel) React.createElement ==> Object ==>(reactDOM) HTML(DOM)
- Readibility, usability
- everything is a component 
- react component 
- functional components => it is just a function that return a react element (JSX)
- functional component starts with capital letters
- if its an element do </> if its a function 
- inside { } you ca write any piece of JS code
### Laying the foundation

## What is JSX?

- JSX stands for javascript XML it just a syntactic sugar for React.createelement or you can say its a syntax extension to JS. JSX actually produces react elements.JSX allows you to write JS as well by just applying {} you can put any JS expression or login inside it , after the compilation JSX expression becomes regular JS with React.createelement(). JSX can have children as well its called child elements. JSX also prevents injection attacks it is safe so no one can render anything they want to React DOM escapes any values embedded in JSX before rendering thus it ensures that you can never inject anything that not explicitly written in your application , so everything that is not JSX is actually gets converted into strings before being rendered

## Super Powers of JSX?

- Easy to maintain
- Secure
- Easy to debug

## Role of `type` attribute in script tag? What options can I use there?
- The type attribute in the script tag defines the type of script that we want to run inside our app 
- text/javascript: It is the basic satndard of writing javascript code inside the `<script>`
- text/ecmascript : this value indicates that the script is following all the ES Standards
- module : This tells the browser that the script is a module that can import or export other files or modules inside it.
- text/babel : This value indicates that the script is a babel type and it requires babel for transpilation.
- text/typescript : As the name suggests the script is written in Typescript

## `{TitleComponent}` Vs `{<TitleComponent>}` Vs `{<TitleComponent></TitleComponent>}` in JSX?
- the first one is a JS expression written inside the JSX , {} is used to embed a JS or values inside it.
- the second one actually represents a Component that is returning a JSX value its a pure function or a module that returns a JSX value 
- Third one is almost teh same as the second one whereas the 2nd one wont be having any childrens but the third on you can include childrens between `<TitleComponent>` and `</TitleComponent>`


