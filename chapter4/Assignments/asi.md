## Is JSX mendatory for React?

- No its not mendatory,
- Each JSX is just a syntactic sugar for calling React.createElement(component,props,...children)
- Anything that is possible in JSX is also possible with just vanilla JS

## Is ES6 mendatory for React?

- React is written in vanilla JS so it in not at all mendatory for React

## How to write comments in JSX?

{/\*

\*/}

## What is <React.Fragment></React.Fragment>?

- React.Fragment is a functional component that is provided by react it is an empty tag that doest not create any extra div tag
- <></> is the shorthand note for React.Fragment

## What is VDOM

- [Link](https://github.com/jstgrowup/Youtube_Javscript_For_Interviews_-/blob/main/Interview/React/react.md)

## What is Reconciliation in React?

- Reconciliation algorithm is an implementation detail. React could rerender the whole app on every action; the end result would be the same. Just to be clear, rerender in this context means calling render for all components, it doesn’t mean React will unmount and remount them. It will only apply the differences following the rules

## What is React Fiber?

- [Link](https://github.com/jstgrowup/Youtube_Javscript_For_Interviews_-/blob/main/Interview/React/react.md#react-fiber)

## Why do we need Keys in react?

- It helps react to identify which items have changed/added/removed
- Keys gives the elements a stable unique identity
- Keys are required when a parent tag has two or more similer tags in it, so that react can update the component which is needed to be updated without destroying the whole parent component. It improves the efficiency of the application.

## Can we use Indexes as keys?

- we should not use indexes as keys if the order of items changes than it will effect the performance and could lead some unstable

## What are Props in React?

- Props is a special keyword in React which stands for Properties and being used for passing data from one component to another
- Props can also be callback functions which can be executed in the child component to initiate an update
- Props are immutable inside the component
- Props are inputs to components
- Props are objects containing a set of values that are passes to components on creation

## What are config driven UI?
- Config driven UIs are based on the configuarions of the data application receives.
- It is rather a good practice to use config driven UIs to make application for dynamic.
