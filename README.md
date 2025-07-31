# React Basics

## **Table of Contents**

## **What is React?**

React is a JavaScript library for building fast, scalable front-end applications. It is known for its component-based structure, single-page applications (SPAs), and virtual DOM, enabling efficient UI updates and a seamless user experience. 

- JSX (JavaScript XML) combines HTML and JavaScript in a single syntax, allowing to create UI components in React. It simplifies rendering dynamic content by embedding JavaScript expressions inside HTML-like tags.
- When React processes the JSX code, it converts it into JavaScript using Babel. This JavaScript code then creates real HTML elements in the browser’s DOM.

### **Advantages of React**


- __Component-Based Architecture:__ React encourages breaking down the UI into reusable components, which can be used throughout the application, saving development time and effort (_Reusability_). Changes in one component generally don't affect other components, making it easier to maintain and update the application (_Maintainability_).
- __Virtual DOM:__ React uses a Virtual DOM (_lightweight representation of the actual DOM_) to improve the performance of web applications. Instead of updating the real DOM directly, React first updates the Virtual DOM and compares it to the previous one, applying only the minimal changes required (_Improved Performance and Optimized Rendering_).
- __One-Way Data Binding:__ React uses one-way data binding, meaning data flows in a single direction from parent components to child components via props. This provides better control over data and helps maintain predictable behavior.
- __State Management and Routing:__ React manages component state efficiently and allows dynamic updates without reloading the page. React Router helps in managing navigation in SPAs without requiring full-page reloads.
- __SEO-Friendly:__ React offers features that help make applications SEO-friendly, including _Server-Side Rendering (SSR)_ and _Static Site Generation (SSG)_. These methods allow React to generate content that search engines can easily crawl and index.
- __Fast Rendering:__ React ensures fast rendering by utilizing the _Virtual DOM and the Reconciliation Algorithm_. These mechanisms minimize unnecessary re-renders, improving the responsiveness of the application. React batches multiple state updates together in one go to reduce the number of re-renders.
- __Cross-Platform Mobile Development with React Native:__ React Native allows developers to use React to build native mobile apps for iOS and Android with a single codebase. This leads to faster development and code reuse across platforms.

### **How does React work?**

React operates by creating a lightweight, in-memory representation of the real DOM called virtual DOM rather than directly manipulating the browser’s DOM. It performs necessary manipulations within this virtual representation before applying changes to the actual browser DOM.

- __Rendering the Virtual DOM:__  React creates a virtual representation of the UI as a tree of JavaScript objects.
- __Updating State:__ It generates a new Virtual DOM tree to reflect the updated state when the application state changes.
- __Diffing Algorithm:__ React compares the new Virtual DOM tree with the previous one using its efficient diffing algorithm to identify the minimal set of changes required.
- __Updating the Real DOM:__ React applies only the necessary changes to the real DOM, optimizing rendering performance.

### **How Babel Works with ReactJS?**

Babel is a JavaScript transpiler that converts modern JavaScript code (like ES6+ and JSX) into a backwards-compatible version that older browsers can understand. Babel transpiles ES6+ code where it converts modern JavaScript (ES6 and newer) into compatible JavaScript that runs on older browsers. It also transpiles JSX into standard JavaScript that browsers can understand. It enable use of experimental features or future versions of JavaScript before they are supported by browsers. This process typically involves three main stages:

- __Parsing:__ Babel parses the JavaScript code into an _Abstract Syntax Tree (AST)_, which is a structured representation of the code.
- __Transformation:__ Babel applies various plugins to the AST to convert the code into a desired format. For example, it converts JSX into `React.createElement()` calls or converts ES6 arrow functions into regular functions.
- __Code Generation:__ Finally, Babel generates JavaScript code from the transformed AST. This is the final JavaScript output that browsers can execute.

### **Reconciliation process in React**

The Reconciliation process is responsible for comparing the previous Virtual DOM with the new one to determine what changed. React uses an optimized diffing algorithm to minimize the number of changes it needs to apply to the real DOM. The reconciliation process involves the following steps:

- React calls the `render()` method of a component to generate a new Virtual DOM representation. This new Virtual DOM is compared with the previous Virtual DOM snapshot.
- React compares the old and new Virtual DOM trees to determine the differences, using the __Diffing Algorithm__. Instead of re-rendering the entire UI, React updates only the changed nodes.
- Once the differences are determined, React applies the updates to the real DOM in the most efficient way. It batches updates and minimizes reflows and repaints for better performance.
- The diffing algorithm identifies the differences between the old and new virtual DOM trees, while reconciliation encompasses the entire process of updating the real DOM based on these differences. 

### **React Fiber**

React Fiber is a complete re-implementation of React's core reconciliation algorithm, introduced in React 16. Its primary purpose is to improve the performance and responsiveness of React applications, especially in scenarios involving complex UIs, animations, and user interactions. 

## **React Compiler**

https://react.dev/learn/react-compiler

### **Memoization in React** (to be done later)

React.memo() for Functional Components: React provides a higher-order component called React.memo() that can be used to optimize the rendering of functional components. 
https://www.geeksforgeeks.org/reactjs/what-is-memoization-in-react/

## **ReactDOM**

ReactDOM is a core react package that provides methods to interact with the DOM and is responsible for rendering the elements or Components in the actual DOM of the web page. It can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. `render()` - used to render a single React Component or several Components wrapped together in a Component or a div element. `hydrate()` - equivalent to the render() method but is implemented for server-side rendering. `createPortal()` - allows to render a component into a DOM node that resides outside the current DOM hierarchy of the parent component.

## **React Components**

React components are independent, reusable building blocks in a React application that define what gets displayed on the UI. They accept inputs called `props` and return React elements describing the UI.

### __Pure Components in React:__ 

Pure Components are similar to regular class components but with a key optimization. They skip re-renders when the props and state remain the same. _Usage: Skipping unnecessary re-renders for class components._ 

- React normally re-renders a component whenever its parent re-renders.
- As an optimization, we can create a component that React will not re-render when its parent re-renders so long as its new props and state are the same as the old props and state.
- A React component should always have pure rendering logic. This means that it must return the same output if its props, state, and context haven’t changed.
- By using PureComponent, we are telling React that the component complies with this requirement, so React doesn’t need to re-render as long as its props and state haven’t changed. However, the component will still re-render if a context that it’s using changes.

### **Migrating from a PureComponent class component to a function**

It is recommended to use function components instead of class components in new code. To convert a component from a class to a function, wrap it in `memo`. Unlike `PureComponent`, `memo` does not compare the new and the old state. In function components, _calling the set function with the same state already prevents re-renders by default, even without `memo`_.


The Module Dependency Tree 
Another relationship in a React app that can be modeled with a tree are an app’s module dependencies. As we break up our components and logic into separate files, we create JS modules where we may export components, functions, or constants. More details - https://react.dev/learn/understanding-your-ui-as-a-tree

Each node in a module dependency tree is a module and each branch represents an import statement in that module.

If we take the previous Inspirations app, we can build a module dependency tree, or dependency tree for short.

<img src="https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fmodule_dependency_tree.png&w=1920&q=75" width=500 />

### **ReactJS Fragments**

ReactJS Fragments are a way to group multiple elements without adding an extra node to the DOM. It allows you to return multiple child elements from a component without wrapping them in a parent container like a <div>. We can `<React.Fragment>...</React.Fragment>` or the short hand syntax `<>...</>` to wrap multiple elements.
 
### **How useState() works internally**

<https://react.dev/learn/state-a-components-memory#how-does-react-know-which-state-to-return>

### **Immer for complex state object mutations**

<https://react.dev/learn/updating-objects-in-state#how-does-immer-work/>

## **Creating a React App**

- [__Sunsetting Create React App__](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)
- React is a JavaScript library, not a full framework, but it's often used with frameworks to build web applications. React frameworks like Next.js, Gatsby, and Remix build upon React to provide additional features such as server-side rendering, routing, and data fetching.
- For existing apps built using CRA - [How to Migrate to a Build Tool using Vite](https://www.robinwieruch.de/vite-create-react-app/), [Using Parcel](https://parceljs.org/migration/cra/)
- [Create new React apps with a framework e.g. Next.js](https://nextjs.org/docs/app/guides/migrating/from-create-react-app), [Next.js](https://nextjs.org/), [Expo framework](https://expo.dev/)
- [Steps to create a React project w/o using CRA](https://react.dev/learn/build-a-react-app-from-scratch), <https://www.geeksforgeeks.org/reactjs/reactjs-babel-introduction/>
- [Server-side rendering in React](https://react.dev/blog/2025/02/14/sunsetting-create-react-app#server-rendering-is-optional)
- [Which features make up the React team’s full-stack architecture vision?](https://react.dev/learn/creating-a-react-app#which-features-make-up-the-react-teams-full-stack-architecture-vision)
- [Add React to an Existing Project](https://react.dev/learn/add-react-to-an-existing-project)

Full-stack frameworks: These recommended frameworks support all the features needed to deploy and scale your app in production. They have integrated the latest React features and take advantage of React’s architecture. <https://react.dev/learn/creating-a-react-app>

- __Next.js (App Router):__ Next.js’s App Router is a React framework that takes full advantage of React’s architecture to enable full-stack React apps. <https://nextjs.org/docs>
- __React Router (v7):__ React Router is the most popular routing library for React and can be paired with Vite to create a full-stack React framework. It emphasizes standard Web APIs and has several ready to deploy templates for various JavaScript runtimes and platforms. <https://reactrouter.com/start/framework/installation>
- __Expo (for native apps):__ Expo is a React framework that lets you create universal Android, iOS, and web apps with truly native UIs. It provides an SDK for React Native that makes the native parts easier to use.
