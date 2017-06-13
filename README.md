# webpack-auto-trycatch-loader
gfs-auto-trycatch for webpack

## Options
null

## Usage
```bash
$ npm install auto-trycatch-loader --save-dev
```

```javascript
{
    test: /\.(jsx|es6)$/,
    loaders: ['auto-trycatch-loader', 'babel'],
    exclude: /node_modules/
}
```
`NOTE`: auto-trycatch-loader must before babel loader