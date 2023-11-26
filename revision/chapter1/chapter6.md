- render with the initial data ==> useeffect ==> again render with the new data from api
- inside the return statement you can only write JS expression not statement
## What is Microservice?
- It is a software architecture pattern in which a large and complex application is divided into smaller independent and loosely coupled services 
- Each of these services is designed to perform a specific business functionality and can communicate with other services through well defined APIs
- this architechture aims to break down monolithic applications into smaller , more managable parts promoting flexibility , scalability and ease of maintenance
## What is monolith architecture?
- A monolith architecture is a traditional software design whereall components and modules of an application are tightly integrated and  interconnected.
- In a monolithic application the entire system is typically deployed as a single unit and all functionally developed and maintained within a single codebase
## Why do we need useEffect Hook?
- The `useEffect` hook in react serves several important , particular in functional components 
- It enables you to manage side effects in your components handle asynchronous operations and interact with the lifecycle of a component
# Side Effects:

In React, side effects are operations that affect something outside of the component, such as data fetching, subscriptions, or manually changing the DOM.
useEffect allows you to perform side effects in your functional components without introducing them directly into the rendering logic.
# Asynchronous Operations:

Many side effects involve asynchronous operations, such as fetching data from an API. useEffect helps manage these asynchronous operations in a clean and concise way.
Without useEffect, you might perform asynchronous operations directly in the component body, which can lead to race conditions or other issues.
# Lifecycle Management:

useEffect allows you to manage component lifecycle events, such as mounting, updating, and unmounting.
You can use useEffect to execute code after the component has rendered (componentDidMount), after a state or prop change (componentDidUpdate), or before the component is removed from the UI (componentWillUnmount in class components).
# Avoiding Infinite Loops:

useEffect helps prevent infinite loops caused by re-renders. By specifying dependencies in the dependency array, you can control when the effect should run.
For example, if you want the effect to run only once when the component mounts, you pass an empty dependency array ([]). If you want it to run whenever a specific prop or state changes, you include that prop or state in the dependency array.