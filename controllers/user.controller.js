var db = require('../config/db.config');

const login = (async (req, res) => {
    console.log("Login Body: ", req.body);
    let response = {};
    const params = req.body;

    let user = await db.user.findOne({ where: { email: params.email, password: params.password } });
    if(user) {
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
})

module.exports = {login};