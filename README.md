# scss-utils

## Installation

### Install by NPM

``` bash
    npm i ionic-scss-utils --save
```

## Usage

Add scss or css to your styles files

``` scss
    @import '~ionic-scss-utils/utils.scss';
```  

or

``` scss
    @import '~ionic-scss-utils/css/utils.css';
```  

## Use own colors

Create your variables.scss and include before import this package

```  scss
    ./variables.scss
    @import '~ionic-scss-utils/utils.scss';
```

### Borders

### Margins & Paddings  

    Default value are implemented on percentage values, use px or rem to change it  

For media queries you can use:

```scss  
    .m-xs-1
    .m-sm-1
    .m-md-1
    .m-lg-1
    .m-xl-1
```
