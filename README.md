# React Basics

## **Table of Contents**

## **What is React?**

React is a JavaScript library for building fast, scalable front-end applications. It is known for its component-based structure, single-page applications (SPAs), and virtual DOM, enabling efficient UI updates and a seamless user experience. 

- JSX (JavaScript XML) combines HTML and JavaScript in a single syntax, allowing to create UI components in React. It simplifies rendering dynamic content by embedding JavaScript expressions inside HTML-like tags.
- When React processes the JSX code, it converts it into JavaScript using Babel. This JavaScript code then creates real HTML elements in the browser’s DOM.
- __[Sunsetting Create React App]__(https://react.dev/blog/2025/02/14/sunsetting-create-react-app)
- React is a JavaScript library, not a full framework, but it's often used with frameworks to build web applications. React frameworks like Next.js, Gatsby, and Remix build upon React to provide additional features such as server-side rendering, routing, and data fetching.
- For existing apps built using CRA - [How to Migrate to a Build Tool using Vite](https://www.robinwieruch.de/vite-create-react-app/), [Using Parcel](https://parceljs.org/migration/cra/)
- [Create new React apps with a framework e.g. Next.js](https://nextjs.org/docs/app/guides/migrating/from-create-react-app), [Next.js](https://nextjs.org/), [Expo framework](https://expo.dev/)
- [Steps to create a React project w/o using CRA](https://react.dev/learn/build-a-react-app-from-scratch), <https://www.geeksforgeeks.org/reactjs/reactjs-babel-introduction/>
- [Server rendering in React](https://react.dev/blog/2025/02/14/sunsetting-create-react-app#server-rendering-is-optional)

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

### **Memoization in React** (to be done later)

React.memo() for Functional Components: React provides a higher-order component called React.memo() that can be used to optimize the rendering of functional components.




