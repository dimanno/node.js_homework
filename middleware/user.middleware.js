const User = require('../database/User');

module.exports = {
    createUserMiddleware: async (req, res, next) => {
        try {
            const userByEmail = await User.findOne({email: req.body.email});
            console.log(req.body.email);
            if (userByEmail) {
                throw new Error('email already exist');
            }
            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
