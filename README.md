# Minimal Digest _(@digitalbazaar/minimal-digest)_

[![Build status](https://img.shields.io/github/workflow/status/digitalbazaar/minimal-digest/Node.js%20CI)](https://github.com/digitalbazaar/minimal-digest/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/minimal-digest.svg)](https://npm.im/@digitalbazaar/minimal-digest)

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

- Browsers and Node.js 14+ are supported.

### NPM

To install via NPM:

```
npm install @digitalbazaar/minimal-digest
```

### Development

To install locally (for development):

```
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
