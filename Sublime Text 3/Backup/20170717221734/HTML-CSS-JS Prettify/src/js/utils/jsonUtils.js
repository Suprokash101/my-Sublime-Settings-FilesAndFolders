/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import fs from 'fs-extra';
import JSON5 from 'json5';

import * as stdio from './stdioUtils';

// Parses some json text if it's well formed, otherwise silently fails and
// returns undefined.
export const parseJSON5 = (string) => {
  try {
    return JSON5.parse(string);
  } catch (e) {
    stdio.info('Failed to parse:', string);
    return undefined;
  }
};

// Parses a json file at a given path and returns an object if it exists
// and isn't malformed, otherwise silently fails and returns undefined.
export const parseJSON5File = async filePath =>
  parseJSON5(await fs.readFile(filePath, { encoding: 'utf8' }));
