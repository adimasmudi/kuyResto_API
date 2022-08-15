const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    const { fullname, email, password, address, phone } = req.body;

    const customer = await Customer.findOne({ email: email });
    if (customer) {
      return res.json({ message: "email already exist" });
    }

    bcrypt
      .hash(password, 10)
      .then(async (hashedPassword) => {
        await Customer.create({
          fullname: fullname,
          email: email,
          password: hashedPassword,
          address: address,
          phone: phone,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Can't hash password",
          error,
        });
      });

    res.status(200).json({
      message: "success",
      fullname: fullname,
      email: email,
      password: password,
      phone: phone,
      address: address,
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const customer = await Customer.findOne({ email: email })
      .then(async (cust) => {
        await bcrypt
          .compare(password, cust.password)
          .then((truePassword) => {
            if (!truePassword) {
              return res.status(500).json({ message: "Invalid Password" });
            }

            // create a JWT Token
            const token = jwt.sign(
              {
                customerId: cust._id,
                customerEmail: cust.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h" }
            );

            res.status(200).json({
              message: "Login successfull",
              email: cust.email,
              token,
            });
          })
          .catch((error) => {
            return res.status(500).json({ message: "Invalid Password" });
          });
      })
      .catch((error) => {
        return res.json({
          message: `User with email ${email} doesn't exis `,
        });
      });
  },
};
