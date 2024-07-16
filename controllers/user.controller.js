var db = require('../config/db.config');
const jwt = require('jsonwebtoken');

const login = (async (req, res) => {
    console.log("Login Body: ", req.body);
    let response = {};
    const params = req.body;

    let user = await db.user.findOne({ where: { email: params.email, password: params.password }, raw : true });
    if(user) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: Date(),
            user_id: user.id
        }

        const token = jwt.sign(data, jwtSecretKey);
        console.log("token: ", user);
        user.token = token;

        response.status = true;
        response.code = 200;
        response.message = "Login success";
        response.data = user;
    } else {
        response.status = false;
        response.code = 400;
        response.message = "Login fail";
        response.data = {};
    }

    res.status(response.code).json(response);
});

const userProfile = (async (req, res) => {
    let response = {};
    try {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        const verified = jwt.verify(req.headers.token, jwtSecretKey);

        console.log("verified: ", verified);

        let user = await db.user.findOne({ where: { id: verified.user_id }, raw : true });

        if(user) {
            response.status = true;
            response.code = 200;
            response.message = "User Profile";
            response.data = user;
        } else {
            response.status = false;
            response.code = 400;
            response.message = "Login fail";
            response.data = {};
        }

        res.status(response.code).json(response);
    } catch (error) {
        response.status = false;
        response.code = 401;
        response.message = "Authentication failed";
        response.data = {};
        res.status(response.code).json(response);
    }
})

module.exports = {login, userProfile};