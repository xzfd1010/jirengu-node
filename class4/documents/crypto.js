const crypto = require('crypto');
crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString('hex'));  // '3745e48...aa39b34'
});