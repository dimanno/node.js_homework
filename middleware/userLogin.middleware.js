const User = require('../database/User');

module.exports = {
    loginUserMiddleware: async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const loginData = await User.findOne({email, password});

            if (!loginData) {
                throw new Error("wrong login or password");
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};

