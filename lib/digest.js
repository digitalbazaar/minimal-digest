/*!
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
import jsonld from 'jsonld';
import {encode as base58Encode} from '@digitalcredentials/base58-universal';
import {sha256digest} from './sha256digest.js';

const URDCA_2015_ALG = 'urdca2015';
// Multicodec table entry code 0xb403, converted to varint
const URDCA2015_HEADER = new Uint8Array([131, 232, 2]);

/**
 * Performs a combined canonicalize + multihash operation.
 *
 * @param {object} options - Options hashmap.
 * @param {object} options.input - JSON-LD object.
 * @param {string} [options.canonAlgorithm] - Canonicalization algorithm.
 * @param {Function} options.documentLoader - JSON-LD document loader.
 *
 * @returns {Promise<string>} Returns the canonhash digest, base58-encoded.
 */
export async function multibaseDigest({
  input, canonizeAlgorithm = URDCA_2015_ALG, documentLoader
} = {}) {
  let normalized;

  switch(canonAlgorithm) {
    case URDCA_2015_ALG:
      normalized = await jsonld.canonize(input, {documentLoader});
      break;
    default:
      throw new TypeError(
        `Canonicalization algorithm "${canonAlgorithm}" not supported.`);
      break;
  }
  const multihashBytes = await _multihash({input: normalized});

  const canonDigestBytes = new Uint8Array(37);
  canonDigestBytes.set(URDCA2015_HEADER, 0);
  canonDigestBytes.set(multihashBytes, 3);

  return `z${base58Encode(canonDigestBytes)}`;
}

/**
 * Returns a multihash formatted sha256 digest.
 *
 * @param {object} options - Options hashmap.
 * @param {string} options.input - Input to hash.
 *
 * @returns {Promise<Uint8Array>} Digest bytes.
 */
export async function _multihash({input} = {}) {
  const digestBytes = await sha256digest({string: input});
  // format as multihash digest
  // sha2-256: 0x12, length: 32 (0x20), digest value
  const mh = new Uint8Array(34);
  mh[0] = 0x12;
  mh[1] = 0x20;
  mh.set(digestBytes, 2);
  return mh;
}
