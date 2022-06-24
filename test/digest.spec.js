/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
import chai from 'chai';
chai.should();
const {expect} = chai;

import {digestMultibase} from '../lib/index.js';
import {documentLoader} from './loader.js';

const data = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/age/v1',
    'https://w3id.org/security/suites/ed25519-2020/v1'
  ],
  id: 'urn:uuid:188e8450-269e-11eb-b545-d3692cf35398',
  type: [
    'VerifiableCredential',
    'OverAgeTokenCredential'
  ],
  issuer: 'did:key:z6MkkUbCFazdoducKf8SUye7cAxuicMdDBhXKWuTEuGA3jQF',
  issuanceDate: '2021-03-24T20:03:03Z',
  expirationDate: '2021-06-24T20:03:03Z',
  credentialSubject: {
    overAge: 21,
    concealedIdToken: 'zo58FV8vqzY2ZqLT4fSaVhe7CsdBKsUikBMbKridqSyc7L' +
      'ceLmgWcNTeHm2gfvgjuNjrVif1G2A5EKx2eyNkSu5ZBc6gNnjF8ZkV3P8dPrX8o46SF'
  }
};

describe('digestMultibase', () => {
  it('should create a multibase digest', async () => {
    const digest = await digestMultibase({data, documentLoader});
    expect(digest).to
      .equal('zLWjbYZEtyJXoTJeB6SHSYkLTeek84hVtZZZUYSHHAQXuqiDWr8sJ');
  });
});
