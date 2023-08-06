// const { sayWish, wishes } = require('./wishes');

// wishes.forEach((wish) => sayWish(wish));

// this will work
const { characters, hasRing } = require('./characters.js');

hasRing(characters, 'Bilbo');

console.log(characters);

// This will fail because each export from common modules behave as a const
// characters = hasRing(characters, 'Bilbo');

console.log(characters);

// another example of exports
const log = require('./log.js');

log('Some test word');
