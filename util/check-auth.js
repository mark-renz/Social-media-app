const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
// use this for local server
//const { SECRET_KEY } = require('../config');

module.exports = (context) => {

    const SECRET = process.env.SECRET_KEY || SECRET_KEY;
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split('Bearer ')[1];
        if(token){
            try{
                const user = jwt.verify(token, SECRET);
                return user;
            }catch(err){
                throw new AuthenticationError('Invalid/Expired token');
            }
        }
        throw new Error('Authentication token must be \' Bearer [token]');
    }
    throw new Error('Authorization token must be provided');
}