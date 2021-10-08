const User = require('../database/User');

module.exports = {
    createUserMiddleware: async (req, res, next) => {
        try {
            const {email} = req.body;
            console.log(email);
            const userByEmail = await User.findOne({email});

            if (userByEmail) {
                throw new Error('email already exist');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },
};

