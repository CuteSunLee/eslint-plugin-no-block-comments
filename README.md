# eslint-plugin-no-block-comments

no block comments in javascript

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-block-comments`:

```
$ npm install eslint-plugin-no-block-comments --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-block-comments` globally.

## Usage

Add `no-block-comments` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-block-comments"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-block-comments/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





