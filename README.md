# markdown-to-slides-server [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Build Status][travis-image]][travis-url]

Parses a markdown file into HTML slides and starts a server with [browser sync](http://www.browsersync.io/). Uses [markdown-to-slides](https://github.com/partageit/markdown-to-slides) to parse your markdown into HTML. Every change to your markdown file will cause the slides in the browser to reload.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Install](#install)
- [Usage](#usage)
- [Methods](#methods)
- [Events](#events)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -g markdown-to-slides-server
```


## Usage

```sh
slides -f my-markdown.md
# see all the options
slides --help
```

Or, programmatic usage:
```js
import markdownToSlidesServer from 'markdown-to-slides-server'

const quit = markdownToSlidesServer({port, markdown, open, title})

// later, when you want to kill the server
quit()
```

## Methods
### `({[<Number> port,] <String> markdown[, <Boolean> open,] [<String> title]})`
Starts the server. Returns a function that can be called to quit the server.

## Tests
Tests are in [tape](https://github.com/substack/tape).

* `npm test` will run the tests
* `npm run tdd` will run the tests on every file change.

## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Joey Baker](https://byjoeybaker.com) and contributors. A copy of the license can be found in the file `LICENSE`.


[npm-url]: https://npmjs.org/package/markdown-to-slides-server
[npm-image]: https://badge.fury.io/js/markdown-to-slides-server.svg
[travis-url]: https://travis-ci.org/joeybaker/markdown-to-slides-server
[travis-image]: https://travis-ci.org/joeybaker/markdown-to-slides-server.svg?branch=master
[daviddm-url]: https://david-dm.org/joeybaker/markdown-to-slides-server.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/joeybaker/markdown-to-slides-server
