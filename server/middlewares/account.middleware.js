const User = require("../models/User");
const jwt = require("jsonwebtoken");

class AccountMiddleware {
  async update(req, res, next) {
    try {
      const { username } = req.body
      const existUserWithUsername = await User.findOne({ username });

      if (
        existUserWithUsername &&
        existUserWithUsername._id.toString() !== decodedUser.user._id
      ) {
        return res.json({
          status: "bad",
          msg: "Nama pengguna ini telah digunakan, silakan pilih yang lain!",
        });
      }

      if (username === process.env.ADMIN_LOGIN) {
        return res.json({
          status: "bad",
          msg: "Nama pengguna ini tidak dapat digunakan!",
        });
      }

      next()
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = AccountMiddleware;
