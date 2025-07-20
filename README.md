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

React operates by creating an in-memory virtual DOM rather than directly manipulating the browser’s DOM. It performs necessary manipulations within this virtual representation before applying changes to the actual browser DOM.

### **How Babel Works with ReactJS?**

Babel is a JavaScript transpiler that converts modern JavaScript code (like ES6+ and JSX) into a backwards-compatible version that older browsers can understand. Babel transpiles ES6+ code where it converts modern JavaScript (ES6 and newer) into compatible JavaScript that runs on older browsers. It also transpiles JSX into standard JavaScript that browsers can understand. It enable use of experimental features or future versions of JavaScript before they are supported by browsers. [Steps to create a React project w/o using CRA](https://www.geeksforgeeks.org/reactjs/reactjs-babel-introduction/). This process typically involves three main stages:

- __Parsing:__ Babel parses the JavaScript code into an _Abstract Syntax Tree (AST)_, which is a structured representation of the code.
- __Transformation:__ Babel applies various plugins to the AST to convert the code into a desired format. For example, it converts JSX into `React.createElement()` calls or converts ES6 arrow functions into regular functions.
- __Code Generation:__ Finally, Babel generates JavaScript code from the transformed AST. This is the final JavaScript output that browsers can execute.

### **Reconciliation Algorithm**

The Reconciliation Algorithm is responsible for comparing the previous Virtual DOM with the new one to determine what changed. React uses an optimized diffing algorithm to minimize the number of changes it needs to apply to the real DOM.

### **React Fiber**
React Fiber is the reimplementation of the React core algorithm that improves the rendering performance, especially in complex applications.

React.memo() for Functional Components: React provides a higher-order component called React.memo() that can be used to optimize the rendering of functional components.


