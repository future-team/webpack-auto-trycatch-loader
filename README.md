# webpack-auto-trycatch-loader
gfs-auto-trycatch for webpack

## Options
`errorHandleFuncName`: how to deal error, the default value is `GFS_TRY_CATCH_ERROR_HANDLE`,
you can use it like this:
```javascript
window.GFS_TRY_CATCH_ERROR_HANDLE = function(ERROR_VARIABLE_NAME, FILENAME, FUNCTION_NAME, LINE, COLUMN){
    // do your staff
    console.error('get log msg', ERROR_VARIABLE_NAME, FILENAME, FUNCTION_NAME, LINE, COLUMN)
}
```
if you want to use defined it, you need to config in webpack loaders:
```javascript
{
    test: /\.(jsx|es6)$/,
    loaders: ['auto-trycatch-loader?errorHandleFuncName=defined_error_handle_name', 'babel'],
    exclude: /node_modules/
},
```
then defined a global function `window.defined_error_handle_name = function(ERROR_VARIABLE_NAME, FILENAME, FUNCTION_NAME, LINE, COLUMN){/**do your staff**/}`

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