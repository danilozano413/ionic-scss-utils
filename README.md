# Ionic Scss Utils

## Installation

### Install by NPM

``` bash
    npm i ionic-scss-utils --save
```

## Usage

Add precompiled scss to your global style scss file

``` scss
    @import '~ionic-scss-utils';
```  

or

Add compiled css

``` scss
    @import '~ionic-scss-utils/css';
```  

## Use own colors

Create your variables.scss and include before import this package

```  scss
    @import './variables.scss';
    @import '~ionic-scss-utils';
```

## Libraries compatibility

We recommend use other class utils (as tailwind) on large projects. For this, the better solution is use our color generator only

```  scss
    @import "./variables.scss";
    @import '~ionic-scss-utils/utils/colors.scss';
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
