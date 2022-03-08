/*
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
import crypto from 'crypto';

/**
 * Hashes a string of data using SHA-256.
 *
 * @param {string} string - Input string to hash.
 *
 * @returns {Uint8Array} Hash digest bytes.
 */
export async function sha256digest({string}) {
  return new Uint8Array(
    crypto.createHash('sha256').update(string).digest()
  );
}
