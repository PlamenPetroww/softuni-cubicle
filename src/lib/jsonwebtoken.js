const util = require('util');
const jwtCallback = require('jsonwebtoken');


// jwtCallback.sign(payload, secret, options, (err, token) => {
//     if(err) {
//         return reject(err);
//     }

//     resolve(token);
// });

const jwt = {
    sign: util.promisify(jwtCallback.sign),
    verify: util.promisify(jwtCallback.verify)
};

module.exports = jwt;