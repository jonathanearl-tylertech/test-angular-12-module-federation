// import('./bootstrap')
// 	.catch(err => console.error(err));

import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
   loadRemoteEntry('http://localhost:5001/remoteEntry.js', 'config'),
   loadRemoteEntry('http://localhost:5000/remoteEntry.js', 'banner'),
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));
