
/* IMPORT */

import {describe} from 'fava';
import findUp from 'find-up-json';
import getCurrentVersion from '../dist/index.js';

/* MAIN */

describe ( 'Get Current Version', it => {

  it ( 'works', t => {

    const pkg = findUp ( 'package.json' );

    t.is ( getCurrentVersion (), pkg.content.version );

  });

});
