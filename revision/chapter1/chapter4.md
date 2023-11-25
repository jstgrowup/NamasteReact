## Is JSX mandatory for React?
- no JSX is not mandatory
## Is ES6 mandatory for React?
- no ES6 is not mandatory
## How can I write comments in JSX?
- by using //
## What is Virtual DOM?
- The Real DOM represents the actual structure of the HTML document as a tree of objects. Changes to the DOM trigger a re-rendering of the entire tree, which can be inefficient
- The Virtual DOM is a lightweight copy of the Real DOM kept in memory. React uses this Virtual DOM to perform operations and optimizations before committing changes to the Real DOM.
Reconciliation Process:

When you make changes to your React components (for example, updating the state), React first updates the Virtual DOM.
React then performs a process called "reconciliation" to identify the minimal set of changes needed to update the Real DOM. It compares the updated Virtual DOM with a previous version to determine the differences.

## What is react Fiber?
- React Fiber is an internal reimplementation of the core algorithm in React's reconciliation process. The term "Fiber" refers to the data structure at the core of this new algorithm. React Fiber was introduced to address performance issues in React applications, particularly in handling large and complex component trees.