# Mural Eslint Config

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) featuring Airbnb and some other goodies.

Using this config you won't need to install any other dependencies/plugins, and you will profit from eslint, react, imports, etc...

## Usage

```bash
npm install --save-dev eslint eslint-config-mural
```

For a basic javascript linting, add the file `.eslintrc` with:
```JSON
{
  "extends": ["mural"]
}
```

If you want to include Node.js rules:

```JSON
{
  "extends": ["mural", "mural/node"]
}
```

For React projects:

```JSON
{
  "extends": ["mural", "mural/react"]
}
```

And for React Native ones:

```JSON
{
  "extends": ["mural", "mural/react-native"]
}
```

## Atom Usage

Just install:

* [linter](https://atom.io/packages/linter)
* [linter-eslint](https://atom.io/packages/linter-eslint)

## Sublime Text 3

1. Make sure to have the [Package Control](https://packagecontrol.io/) installed.
2. Install [SublimeLinter](http://www.sublimelinter.com/en/latest/).
    * On OSX, make sure to have [SublimeFixMacPath](https://github.com/int3h/SublimeFixMacPath).
3. Install and configure [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint).
