# My React Library

This is a React component library built with TypeScript, Rollup, and Storybook.

## Step-by-Step Guide

### Step 1: Initialize Your Project

Create a new project directory and initialize it with NPM:

```bash
mkdir my-react-library
cd my-react-library
npm init -y
```

### Step 2: Install Dependencies

Install the necessary development dependencies:

```bash
npm install -D typescript react react-dom
npm install -D rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts rollup-plugin-postcss
npm install -D tslib postcss
npm install -D @storybook/react-webpack5 @storybook/addon-essentials
npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
npm install -D @types/react
```

### Step 3: Set Up TypeScript

Initialize TypeScript configuration:

```bash
npx tsc --init
```

Edit the tsconfig.json file to match the following configuration:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowJs": false,
    "maxNodeModuleJsDepth": 1,
    "declaration": true,
    "emitDeclarationOnly": true,
    "sourceMap": true,
    "outDir": "dist",
    "declarationDir": "types",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "allowUnreachableCode": false,
    "skipLibCheck": true
  }
}
```

### Step 4: Create Your Components

Create the following directory structure and files:

```css
src
└── components
    ├── Button
    │   ├── Button.tsx
    │   └── index.ts
    └── Input
        ├── Input.tsx
        └── index.ts
└── index.ts
```

Example Button Component (src/components/Button/Button.tsx):

```tsx
import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;
```

Button Component Index (src/components/Button/index.ts):

```tsx
import Button from "./Button";
export default Button;
```

Example Input Component (src/components/Input/Input.tsx):

```tsx
import React from "react";

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <input placeholder={placeholder} />;
};

export default Input;
```

Input Component Index (src/components/Input/index.ts):

```tsx
import Input from "./Input";
export default Input;
```

Main Index File (src/index.ts):

```tsx
export { default as Button } from "./components/Button";
export { default as Input } from "./components/Input";
```

### Step 5: Set Up Rollup

Create a Rollup configuration file rollup.config.mjs:

```javascript
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    preserveModules: true,
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
```

### Step 6: Set Up Storybook

Initialize Storybook:

```bash
npx sb init
```

Create a .storybook directory and add main.ts:

```javascript
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};

export default config;
```

### Step 7: Configure package.json

Update package.json with the necessary fields:

```json
{
  "name": "my-react-library",
  "version": "0.0.1",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "dev": "rollup -c --watch",
    "build": "rollup -c",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "babel": {
    "sourceType": "unambiguous",
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": 100,
            "safari": 15,
            "firefox": 91
          }
        }
      ],
      [
        "@babel/preset-react",
        {
          "runtime": "automatic"
        }
      ],
      "@babel/preset-typescript"
    ]
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@babel/core": "^7.24.6",
    "@babel/preset-env": "^7.24.6",
    "@babel/preset-react": "^7.24.6",
    "@babel/preset-typescript": "^7.24.6",
    "@rollup/plugin-commonjs": "^25.0.8",
    "@rollup/plugin-node-resolve": "^15.2.3",
    "@rollup/plugin-typescript": "^11.1.6",
    "@storybook/addon-essentials": "^8.1.5",
    "@storybook/addon-links": "^8.1.5",
    "@storybook/react": "^8.1.5",
    "@storybook/react-webpack5": "^8.1.5",
    "@types/react": "^18.3.3",
    "postcss": "^8.4.38",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "rollup": "^4.18.0",
    "rollup-plugin-dts": "^6.1.1",
    "rollup-plugin-postcss": "^4.0.2",
    "storybook": "^8.1.5",
    "tslib": "^2.6.2",
    "typescript": "^5.4.5"
  },
  "peerDependencies": {
    "react": "^18.2.0"
  }
}
```

### Step 8: Build Your Package

To build your package, run:

```bash
npm run build
```

### Step 9: Run Storybook

To start Storybook, run:

```bash
npm run storybook
```

### Step 10: Publish to NPM

First, log in to your NPM account:

```bash
npm login
```

Publish your package:

```bash
npm publish
```

If your package is scoped and you want to make it public, use:

```bash
npm publish --access public
```

Congratulations!🎉 You've successfully created and published a React component library with TypeScript, Rollup, and Storybook.
