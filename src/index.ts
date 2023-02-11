
/* IMPORT */

import getCurrentPackage from 'get-current-package';

/* MAIN */

const getCurrentVersion = (): string | undefined => {

  return getCurrentPackage ()?.['version'];

};

/* EXPORT */

export default getCurrentVersion;
