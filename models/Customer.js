const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const customerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// customerSchema.pre("save",async function(next){
//   const customer = this;
//   if(customer.isModified("password")){
//     customer.password = await bcrypt.hash(user.password, 10)
//   }
// })

module.exports = mongoose.model("Customer", customerSchema);
