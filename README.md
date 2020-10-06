
# Styling Boilerplate

## Requirements
[NodeJS](https://nodejs.org)  
[Node Package Manager (NPM)](https://www.npmjs.com/)

## Getting started

```
cd path/to/folder
npm i 
npm run start
```

## NPM Scripts
Run NPM scripts from the command line with the following command: `npm run <script name>`

1. **start** : This script creates a local development server which reload on every change and compile your all sass file when there is change in sass code

2. **watch:sass** : Same as the `start` command but without an local webserver. Compiles sass to with every change.

3. **compile:sass** : This script simply compile sass code to css only once , this script is useful if you closed your server and have to compile some sass only for once. compiles src/sass/main.scss into public/css/style.comp.css.

4. **prefix:css** : This script simply create Dev Server which reload on every change and compile your all sass file when there is change in sass code. Prefixes public/css/style.comp.css into public/css/style.prefix.css.

5. **compress:css** : This script simply take your chosen css file and minify it. Minifies public/css/style.prefix.css into public/css/style.min.css.

6. **build:css** : This script do all the task mention above in script section. It compiles sass to css, adds vendor prefixes and then minifies it all.

7. **watch:pug** : Same as `build:html`. Compiles new HTML which every change

8. **build:html** : Builds the HTML pages (using Pug HTML preprocessor) from src/pug. Outputs to the public/ folder

## Documentation

The styleguide documentation is rendered using [Stylemark](https://github.com/mpetrovich/stylemark)
Stylemark uses [Markdown](https://github.com/mpetrovich/stylemark/blob/main/README-SPEC.md) to generate documentation from SASS-files.

Generate a new styleguide by running `npm run generate:docs` from the command line.

The generated documation can be found in the **docs/** folder in the root of this project