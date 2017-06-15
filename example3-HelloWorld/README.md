# Hand on React - HelloWorld

## Requirements
Understand the concept of virtual (why and how). Example 2 done.

## Expected results
All the translation of  `Hello` from `helloWorlds` list in `<p></p>`.

HTML expected:
```html
<div>
    <p>こんにちは</p>
    <p>你好</p>
    <p>여보세요</p>
    <p>chào bạn</p>
    <p>Bonjour</p>
    <p>Hallo</p>
    <p>Ciao</p>
    <p>CréVindiou</p>
    <p>Hello</p>
    <p>Hola</p>
</div>
```

## Documentation
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [The Virtual DOM concept in a nutshell](https://blog.risingstack.com/the-react-way-getting-started-tutorial/)

## Instructions

1. Install `babel-preset-react` and `eslint-plugin-react` as dev dependencies.
2. Install `react` and `react-dom` as dependencies.
3. In `.eslintrc.json` configure the linter to use jsx, to use the `eslint-plugin-react` and to extends the recommended configuration of `eslint-react-plugin`.
4. In `production` mode resolve the `react` and `react-dom` with theirs minimised version.
5. Map helloWorlds list into a list of react element paragraph using `React.createElement()` method, in the props, add a key with the value of `hello`.
6. Create a root element that has the previously create list of react elements as child using `React.createElement()`.
7. Create in `index.html` a `div` with the id `app` where our list will be render.
8. Render the root element in the `div` using `ReactDom.render();`. Hint, `document.getElementById()`.
