/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
import ageContext from '@digitalbazaar/age-verification-context';
import cred from 'credentials-context';
import ed25519 from 'ed25519-signature-2020-context';
import {JsonLdDocumentLoader} from 'jsonld-document-loader';

const {contexts: credentialsContext, constants: {CREDENTIALS_CONTEXT_V1_URL}} =
  cred;

const staticLoader = new JsonLdDocumentLoader();

staticLoader.addStatic(ed25519.constants.CONTEXT_URL,
  ed25519.contexts.get(ed25519.constants.CONTEXT_URL));

staticLoader.addStatic(ageContext.CONTEXT_URL_V1, ageContext.CONTEXT_V1);

staticLoader.addStatic(CREDENTIALS_CONTEXT_V1_URL,
  credentialsContext.get(CREDENTIALS_CONTEXT_V1_URL));

export const documentLoader = staticLoader.documentLoader.bind(staticLoader);
