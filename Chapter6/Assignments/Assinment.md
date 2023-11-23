## What is a Microservice?
-  Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
## What are Monolith architecture?
- Its an architecture where the application is self contained and independent of the other applications
- It is also called Single Tier (One tier) architecture where a single application acts as both client and server. A small change in a single function requires compiling and testing the entire application, which is against todays agile approach
## What is the difference between Microservice and Monolith architecture
- With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

- With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.
## Why do we need a useEffect Hook?
- We know that react doesnt deal with the real DOM directly instead it deals with the VDOM
- So lets say we want some sideeffects after the real DOM has been updated that that thing we can so with the help of useeffect
- Network requests, manual DOM mutations, fetching data, directly updating the DOM, timers and logging are common examples of effects. useEffect accepts two arguments. The second argument is optional.
## What is an optional chaining?
- optional chaining operator acceses an object property or calls a function
- if the object property is null or undefined than it will return undefined rather than throwing an error
## Shimmer UI?
- Its a loading layout where the user will see a loading indicator if there is no content 
## What is conditional operator explain with a code example
- Sometimes we want some UI or component to be rendered depending upon some situation
- So we basically return JSX expression using an if condition
```
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```
## CORS
- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request 
