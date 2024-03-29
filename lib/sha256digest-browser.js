/*
 * Copyright (c) 2022 Digital Bazaar, Inc. All rights reserved.
 */
/* eslint-env browser */
const crypto = globalThis.crypto;

/**
 * Hashes a string of data using SHA-256.
 *
 * @param {string} string - Input string to hash.
 *
 * @returns {Uint8Array} Hash digest bytes.
 */
export async function sha256digest({string}) {
  const bytes = new TextEncoder().encode(string);
  return new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
}
