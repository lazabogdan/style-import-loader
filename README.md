# less-import-loader [![Build Status](https://travis-ci.org/lazabogdan/style-import-loader.svg?branch=master)](https://travis-ci.org/lazabogdan/style-import-loader)

Webpack loader for importing style dependencies (Less/Sass).

## Installation

```
$ npm install style-import-loader --save-dev
```

## How to use

Add style-import-loader before less-loader or sass-loader

```js
{
    test: /\.less$/,
    loader: "style!css!less!style-import"
}
```

### Loader config

##### webpack.config.js

```js
styleImportLoader: {
    base: process.cwd() + '/src/less/base' // must be absolute path
},
module: {
    loaders: [
        { 
            test: /\.less$/, 
            loader: 'style!css!less!style-import' 
        }
    ]
}
```

### Multiple loader configs

Add multiple loader configs with loader query.

##### webpack.config.js

```js
// default config key
styleImportLoader: {
    base: path.join(process.cwd(), 'less/base')
},
// custom config key
sassImportLoader: {
    base: path.join(process.cwd(), 'sass/base')
},
module: {
    loaders: [
        // using default
        { 
            test: /\.less$/, 
            loader: 'style!css!less!style-import' 
        },
        // using custom config
        { 
            test: /\.scss$/, 
            loader: 'style!css!sass!style-import?config=sassImportLoader' 
        }
    ]
}
```


#### Before:

##### src/test/a.less

```less
a {
    color: white;
}
```

#### After:

```less
@import "../less/base";
a {
    color: white
}
```
