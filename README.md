# Minimal Digest _(@digitalbazaar/minimal-digest)_

> A minimal hash/digest JS library for Node.js and the browser.

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

TBD

## Security

TBD

## Install

This software requires and supports maintained recent versions of Node.js and
browsers. Updates may remove support for older unmaintained platform versions.
Please use dependency version lock files and testing to ensure compatibility
with this software.

### NPM

To install via NPM:

- https://www.npmjs.com/package/@digitalbazaar/minimal-digest

```sh
npm install @digitalbazaar/minimal-digest
```

### Development

To install locally (for development):

```sh
git clone https://github.com/digitalbazaar/minimal-digest.git
cd minimal-digest
npm install
```

## Usage

```js
import {digestMultibase} from '@digitalbazaar/minimal-digest';

const data = {key: 'value'};
// defaults to sha-256 hash, 'urdca2015' canonicalization for objects,
// base58btc encoding
const result = await digestMultibase({data, documentLoader});
```

## Contribute

See [the contribute file](https://github.com/digitalbazaar/bedrock/blob/master/CONTRIBUTING.md)!

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[New BSD License (3-clause)](LICENSE) © Digital Bazaar
