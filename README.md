# react-math-keyboard

[![npm](https://badgen.net/npm/v/react-math-keyboard)](https://www.npmjs.com/package/react-math-keyboard)

This library provides :

- a [MathQuill](http://www.mathquill.com) input in which you can write both mathematical expressions (in LaTeX) and raw text
- a customizable, pretty, mobile-friendly keyboard for this input.

You can try it live here : [Live Demo](https://krirkrirk.github.io/react-math-keyboard/),
or you can test it in CodeSandbox : [js version](https://codesandbox.io/s/epic-wildflower-v1jlww) or [ts version](https://codesandbox.io/s/react-mat-keyboard-ts-playground-w01638).

:warning: This is using a fork of MathQuill in order to use the comma as a decimal separator and the symbol "\\times" instead of "\\cdot" for multiplication. This is not customizable so far, but could be in the future if there are requests for it.

This library is used by [Mathlive.fr](https://www.mathlive.fr).

## Basic usage

Install the package : 

```nodejs
npm i react-math-keyboard
```
Then import the MathInput :

```js
import MathInput from "react-math-keyboard";
```

You can then use it with no configuration :

```js
<MathInput />
```

Getting the value of the input as a LaTeX string :

```js
const [latex, setLatex] = useState("")
//...later
<MathInput setValue={setLatex} />
```

If you need to do more specific stuff with the input, you should retrieve the ref to the MathField, and then the whole [MathQuill API](http://docs.mathquill.com/en/latest/Api_Methods/) is available to use.

```js
const mf = useRef<MathField>();
const onClick=()=> mf.current.latex("click!");

//...later
<MathInput setMathfieldRef={(mathfield)=>mf.current=mathfield} />
<button onClick={onClick}>Click me</button>
```

## Customizing the keyboard

You can hide the toolbar if you don't need additional keys :

```js
<MathInput numericToolbarKeys={[]} />
```

Or you can provide an array of KeyIds or KeyProps to only use the keys needed for your use case :

```js
<MathInput numericToolbarKeys={[
    "cos", "sin", "tan",
    {
        id:"custom",
        label:"custom",
        labelType: "raw" // or "tex" or "svg"
        mathfieldInstructions:{ //use onClick instead if you want logic non linked with the input
            method:"write", //or "cmd", "typedText", "keyStroke"
            content: "custom content"
        }
    }
]} />
```

## Contributing

Don't hesitate to give feedback, and any contribution is welcomed !
