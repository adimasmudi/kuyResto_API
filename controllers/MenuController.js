const Menu = require("../models/Menu");

module.exports = {
  displayMenu: async (req, res) => {
    res.status(200).json({ message: "halo, ini respon dari menu" });
  },
};
