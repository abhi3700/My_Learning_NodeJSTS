# React

Learn everything about React here.

## About

- Default library/framework for building web applications.

> Best use case: React FE + NextJS BE

- React components are JavaScript functions that return markup.
- **JSX** is stricter than **HTML**. You have to close tags like `<br />`. Your component also can’t return multiple **JSX** tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper.
- If you add a **classname** to a component, you have to use add the style for the same in the CSS file (with same name like for `App.js`, `App.css`).

```jsx
// App.js
function MyButton() {
  return <button className="my-button">My Button</button>;
}

function App() {
  return (
    <div>
      <h1>Hello World to `my-app`</h1>
      <MyButton />
    </div>
  );
}
```

```css
/* App.css */
.my-button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
```

## Installation

- `nvm`, `npm`, `node`, `yarn`.
- Add a React project using `$ npx create-react-app my-app` (where `my-app` is the name of your project).
  > Don't install `create-react-app` globally.
- Add prettier to your project using `$ npm install --save-dev prettier`.
  - single-quote: `true`
  - semi: `true` (depends on project to project)

## Getting Started

- Run `$ npm start` to start the development server.
- Run `$ npm run build` to create a production build.
- Deploy the build folder to a static hosting service like **Netlify** or **Vercel**.

## References

### Education

- [React](https://facebook.github.io/react/)
- [Learn React](https://beta.reactjs.org/learn)
- [React + TS](https://youtube.com/playlist?list=PLNqp92_EXZBJ4CBroxVBJEpAXoz1g-naZ)

### Libraries

- [Awesome React Components](https://github.com/brillout/awesome-react-components)
- [CogoToast](https://cogoport.github.io/cogo-toast/)
